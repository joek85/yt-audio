const axios = require('axios');
const querystring = require('querystring');
const miniget = require('miniget');
const PLAYER_URL = 'https://www.youtube.com/youtubei/v1/player?key=AIzaSyAO_FJ2SlqU8Q4STEHLGCilw_Y9_11qcW8';
const RELATED_URL = 'https://www.youtube.com/youtubei/v1/next?key=AIzaSyAO_FJ2SlqU8Q4STEHLGCilw_Y9_11qcW8';
const BASE_URL = 'https://www.youtube.com/watch?v=';
const EMBED_URL = 'https://www.youtube.com/embed/';

const DEFAULT_CONTEXT = {
    client: {
        clientName: 'WEB',
        clientVersion: '2.20201021.03.00',
    },
};


const context = JSON.parse(JSON.stringify(DEFAULT_CONTEXT));
const ytaudio = () => {

};
const exposedMiniget = (url, options = {}, requestOptionsOverwrite) => {
    const req = miniget(url, requestOptionsOverwrite || options.requestOptions);
    if (typeof options.requestCallback === 'function') options.requestCallback(req);
    return req;
};
const getPlayerdata = async (videoId) => {
    let data = {context: context, videoId: videoId};
    try {
        const response = await axios.post(PLAYER_URL, data);
        // console.log(decipherFormats(response.data.streamingData.adaptiveFormats))
        // decipherFormats(response.data.streamingData.adaptiveFormats)
        console.log(response.data.cards.cardCollectionRenderer.cards[0].cardRenderer)
        return getVideoDetails(response.data)
    } catch (err) {
        console.log(err)
        return err
    }
};
const getVideoDetails = (data) => {
    let videoDetails = {};
    // console.log(data.videoDetails)
    videoDetails.videoId = data.videoDetails.videoId;
    videoDetails.thumbnails = data.videoDetails.thumbnail.thumbnails;
    videoDetails.title = data.videoDetails.title;
    videoDetails.isLive = data.videoDetails.isLive;
    videoDetails.channelId = data.videoDetails.channelId;
    videoDetails.author = data.videoDetails.author;
    videoDetails.authorThumbnail = data.annotations[0].playerAnnotationsExpandedRenderer.featuredChannel.watermark.thumbnails[0].url;
    videoDetails.tags = data.videoDetails.keywords;
    videoDetails.viewCount = data.videoDetails.viewCount;
    videoDetails.publishDate = data.microformat.playerMicroformatRenderer.publishDate;
    videoDetails.description = data.videoDetails.shortDescription;

    videoDetails.lengthSeconds = data.videoDetails.lengthSeconds;
    // videoDetails.audioFormats = data.streamingData.adaptiveFormats.find((formats) => {
    //     return formats.itag === 140
    // }).url;
    // decipherFormats(data.streamingData.adaptiveFormats, videoDetails.videoId);
    videoDetails.audioFormats = [];
    // console.log(videoDetails.authorThumbnail)
    return videoDetails;
};

const getRelatedVideos = async (videoId, continuation, tracking) => {
  try {
      const response = await axios({
          method: 'post',
          url: RELATED_URL,
          headers: {'content-type': 'application/json'},
          data: {
              context: context,
              videoId: videoId,
              continuation: continuation,
              clickTracking: {clickTrackingParams: tracking}
          }
      });
      // console.log(response.data.contents.twoColumnWatchNextResults.secondaryResults.secondaryResults.results[2].compactPlaylistRenderer.sidebarThumbnails[0])
      return parseRelatedVideos(response.data);
  }catch (err) {
      console.log(err)
      return err
  }
};
const parseRelatedVideos = (data) => {
    let secondaryResults;
    if (data.contents){
        secondaryResults = data.contents.twoColumnWatchNextResults.secondaryResults.secondaryResults.results;

    }else{
        secondaryResults = data.onResponseReceivedEndpoints[0].appendContinuationItemsAction.continuationItems;
    }

    let related = {videos: [], continuation: ''};
    let videos = [];
    for (let result of secondaryResults || []) {
        let showMoreRelated = result.continuationItemRenderer;
        if (showMoreRelated){
            let apiUrl = showMoreRelated.continuationEndpoint.commandMetadata.webCommandMetadata.apiUrl;
            let Token = showMoreRelated.continuationEndpoint.continuationCommand.token;
            let ctp = showMoreRelated.continuationEndpoint.clickTrackingParams;
            related.continuation = {
                apiUrl: apiUrl,
                Token: Token,
                ctp: ctp
            }

        }
        let details = result.compactVideoRenderer;
        if (details) {

            let viewCount = details.viewCountText.simpleText;
            let shortViewCount = details.shortViewCountText.simpleText;

            let browseEndpoint = details.shortBylineText.runs[0].navigationEndpoint.browseEndpoint;
            let channelId = browseEndpoint.browseId;
            let name = details.shortBylineText.runs[0].text;
            let user = (browseEndpoint.canonicalBaseUrl || '').split('/').slice(-1)[0];

            let video = {
                type: 'video',
                id: details.videoId,
                title: details.title.simpleText,
                published: details.publishedTimeText !== undefined ?  details.publishedTimeText.simpleText : '',
                author: {
                    id: channelId,
                    name,
                    user,
                    channel_url: `https://www.youtube.com/channel/${channelId}`,
                    user_url: `https://www.youtube.com/user/${user}`,
                    thumbnails: details.channelThumbnail.thumbnails.map(thumbnail => {
                        thumbnail.url = new URL(thumbnail.url, BASE_URL).toString();
                        return thumbnail;
                    }),
                    // verified: isVerified(details.ownerBadges),

                },
                short_view_count_text: shortViewCount,
                view_count: viewCount,
                length_seconds: details.lengthText !== undefined ?  details.lengthText.simpleText: '',
                thumbnails: details.thumbnail.thumbnails,
                richThumbnails:
                    details.richThumbnail ?
                        details.richThumbnail.movingThumbnailRenderer.movingThumbnailDetails.thumbnails : [],
                isLive: !!(details.badges && details.badges.find(b => b.metadataBadgeRenderer.label === 'LIVE NOW')),
            };
            // console.log(video)
            videos.push(video);
        }else{
            let playlistRenderer = result.compactPlaylistRenderer;
            if (playlistRenderer){
                // console.log(playlistRenderer);

                let playlist = {
                    type:'plalist',
                    id: playlistRenderer.playlistId,
                    title: playlistRenderer.title.simpleText,
                    thumbnail: playlistRenderer.thumbnail.thumbnails,
                    published: playlistRenderer.publishedTimeText.simpleText,
                    count: playlistRenderer.videoCountShortText.simpleText
                };
                videos.push(playlist)
            }
        }
    }

    related.videos = videos;
    // console.log(videos)
    return related
};

const setDownloadURL = (format, sig) => {
    let decodedUrl;
    if (format.url) {
        decodedUrl = format.url;
    } else {
        return;
    }

    try {
        decodedUrl = decodeURIComponent(decodedUrl);
    } catch (err) {
        return;
    }
    // Make some adjustments to the final url.
    const parsedUrl = new URL(decodedUrl);
    // This is needed for a speedier download.
    // See https://github.com/fent/node-ytdl-core/issues/127
    parsedUrl.searchParams.set('ratebypass', 'yes');

    if (sig) {
        // When YouTube provides a `sp` parameter the signature `sig` must go
        // into the parameter it specifies.
        // See https://github.com/fent/node-ytdl-core/issues/417
        parsedUrl.searchParams.set(format.sp || 'signature', sig);
    }

    format.url = parsedUrl.toString();
};

const decipherFormats = async (formats, video_id) => {
    let decipheredFormats = [];
    // let embed = await axios({
    //     method: 'get',
    //     url: EMBED_URL + video_id + '?hl=en',
    //     headers: {'content-type': 'application/json'}
    // });
    // console.log(embed.data);
    let embed = await exposedMiniget(EMBED_URL + video_id).text()
    const html5player = new URL(getHTML5player(embed), BASE_URL).toString();

    // let embed2 = await axios({
    //     method: 'get',
    //     url: html5player,
    //     headers: {'content-type': 'application/json'}
    // });
    let embed2 = await exposedMiniget(html5player).text()
    let tokens = getTokens(embed2);
    console.log(tokens)
    formats.forEach(format => {
        let cipher = format.signatureCipher || format.cipher;

        // console.log(cipher);
        // let cipher = 's=U%3D%3D%3DAhgCQhaM2KgkoBkzqLsJpx2gOZlUYjzLBjLMb4wGcumBiAgPpXXXh%3DTnA_3sm1cNtEAvnB67LaVH7dZnFnxOlezyKAhIQRw8JQ0qOAqOA&sp=sig&url=https://r1---sn-vbxgv-cxtz.googlevideo.com/videoplayback%3Fexpire%3D1634852973%26ei%3DDYxxYZPHIYv10wX-pp_IDw%26ip%3D178.135.2.221%26id%3Do-AOimtZxA9H5bnXTt1GT19ZFSYiIbsRsnH5q9ejehO05w%26itag%3D18%26source%3Dyoutube%26requiressl%3Dyes%26mh%3Dpz%26mm%3D31%252C29%26mn%3Dsn-vbxgv-cxtz%252Csn-hgn7rn7k%26ms%3Dau%252Crdu%26mv%3Dm%26mvi%3D1%26pl%3D24%26initcwndbps%3D215000%26vprv%3D1%26mime%3Dvideo%252Fmp4%26ns%3D5DeHjc0WjDgBSa595ZGDtO8G%26gir%3Dyes%26clen%3D374117740%26ratebypass%3Dyes%26dur%3D9039.690%26lmt%3D1589393625019603%26mt%3D1634830866%26fvip%3D1%26fexp%3D24001373%252C24007246%26c%3DWEB%26txp%3D5531432%26n%3D-7OzgmiygItG8cVHkHU%26sparams%3Dexpire%252Cei%252Cip%252Cid%252Citag%252Csource%252Crequiressl%252Cvprv%252Cmime%252Cns%252Cgir%252Cclen%252Cratebypass%252Cdur%252Clmt%26lsparams%3Dmh%252Cmm%252Cmn%252Cms%252Cmv%252Cmvi%252Cpl%252Cinitcwndbps%26lsig%3DAG3C_xAwRQIhANjq8UZhm8MsHX8Ly6Yf22TnY-h0NxsdDH7TAdQTIKClAiBjaZBhHkqqJdf8Z-JsS60QY43j1IxY7hh3Xvf0Uve3kg%253D%253D';
        if (cipher) {
            Object.assign(format, querystring.parse(cipher));
            delete format.signatureCipher;
            delete format.cipher;
        }
        // let tokens = format.signatureCipher.split('url=')[1].split('sig%3D')[1].split('%')[0];

        // console.log(format.s);
        // console.log(cipher)
        const sig = tokens && format.s ? decipher(tokens, format.s) : null;
        // console.log(format.url)
        setDownloadURL(format, sig);
        // console.log(format.url)
        decipheredFormats.push(format);
    });
    // console.log(decipheredFormats)
    return decipheredFormats;
};
const getTokens = (body) => {
    const tokens = extractActions(body);
    if (!tokens || !tokens.length) {
        throw Error('Could not extract signature deciphering actions');
    }
    return tokens;
};

const getHTML5player = body => {
    let html5playerRes =
        /<script\s+src="([^"]+)"(?:\s+type="text\/javascript")?\s+name="player_ias\/base"\s*>|"jsUrl":"([^"]+)"/
            .exec(body);
    return html5playerRes ? html5playerRes[1] || html5playerRes[2] : null;
};
const decipher = (tokens, sig) => {
    sig = sig.split('');
    for (let i = 0, len = tokens.length; i < len; i++) {
        let token = tokens[i], pos;
        switch (token[0]) {
            case 'r':
                sig = sig.reverse();
                break;
            case 'w':
                pos = ~~token.slice(1);
                sig = swapHeadAndPosition(sig, pos);
                break;
            case 's':
                pos = ~~token.slice(1);
                sig = sig.slice(pos);
                break;
            case 'p':
                pos = ~~token.slice(1);
                sig.splice(0, pos);
                break;
        }
    }
    return sig.join('');
};
const swapHeadAndPosition = (arr, position) => {
    const first = arr[0];
    arr[0] = arr[position % arr.length];
    arr[position] = first;
    return arr;
};
const extractActions = body => {
    const objResult = actionsObjRegexp.exec(body);
    const funcResult = actionsFuncRegexp.exec(body);
    if (!objResult || !funcResult) { return null; }

    const obj = objResult[1].replace(/\$/g, '\\$');
    const objBody = objResult[2].replace(/\$/g, '\\$');
    const funcBody = funcResult[1].replace(/\$/g, '\\$');

    let result = reverseRegexp.exec(objBody);
    const reverseKey = result && result[1]
        .replace(/\$/g, '\\$')
        .replace(/\$|^'|^"|'$|"$/g, '');
    result = sliceRegexp.exec(objBody);
    const sliceKey = result && result[1]
        .replace(/\$/g, '\\$')
        .replace(/\$|^'|^"|'$|"$/g, '');
    result = spliceRegexp.exec(objBody);
    const spliceKey = result && result[1]
        .replace(/\$/g, '\\$')
        .replace(/\$|^'|^"|'$|"$/g, '');
    result = swapRegexp.exec(objBody);
    const swapKey = result && result[1]
        .replace(/\$/g, '\\$')
        .replace(/\$|^'|^"|'$|"$/g, '');

    const keys = `(${[reverseKey, sliceKey, spliceKey, swapKey].join('|')})`;
    const myreg = `(?:a=)?${obj
            }(?:\\.${keys}|\\['${keys}'\\]|\\["${keys}"\\])` +
        `\\(a,(\\d+)\\)`;
    const tokenizeRegexp = new RegExp(myreg, 'g');
    const tokens = [];
    while ((result = tokenizeRegexp.exec(funcBody)) !== null) {
        let key = result[1] || result[2] || result[3];
        switch (key) {
            case swapKey:
                tokens.push(`w${result[4]}`);
                break;
            case reverseKey:
                tokens.push('r');
                break;
            case sliceKey:
                tokens.push(`s${result[4]}`);
                break;
            case spliceKey:
                tokens.push(`p${result[4]}`);
                break;
        }
    }
    return tokens;
};
const jsVarStr = '[a-zA-Z_\\$][a-zA-Z_0-9]*';
const jsSingleQuoteStr = `'[^'\\\\]*(:?\\\\[\\s\\S][^'\\\\]*)*'`;
const jsDoubleQuoteStr = `"[^"\\\\]*(:?\\\\[\\s\\S][^"\\\\]*)*"`;
const jsQuoteStr = `(?:${jsSingleQuoteStr}|${jsDoubleQuoteStr})`;
const jsKeyStr = `(?:${jsVarStr}|${jsQuoteStr})`;
const jsPropStr = `(?:\\.${jsVarStr}|\\[${jsQuoteStr}\\])`;
const jsEmptyStr = `(?:''|"")`;
const reverseStr = ':function\\(a\\)\\{' +
    '(?:return )?a\\.reverse\\(\\)' +
    '\\}';
const sliceStr = ':function\\(a,b\\)\\{' +
    'return a\\.slice\\(b\\)' +
    '\\}';
const spliceStr = ':function\\(a,b\\)\\{' +
    'a\\.splice\\(0,b\\)' +
    '\\}';
const swapStr = ':function\\(a,b\\)\\{' +
    'var c=a\\[0\\];a\\[0\\]=a\\[b(?:%a\\.length)?\\];a\\[b(?:%a\\.length)?\\]=c(?:;return a)?' +
    '\\}';
const actionsObjRegexp = new RegExp(
    `var (${jsVarStr})=\\{((?:(?:${
        jsKeyStr}${reverseStr}|${
        jsKeyStr}${sliceStr}|${
        jsKeyStr}${spliceStr}|${
        jsKeyStr}${swapStr
        }),?\\r?\\n?)+)\\};`);
const actionsFuncRegexp = new RegExp(`${`function(?: ${jsVarStr})?\\(a\\)\\{` +
    `a=a\\.split\\(${jsEmptyStr}\\);\\s*` +
    `((?:(?:a=)?${jsVarStr}`}${
        jsPropStr
        }\\(a,\\d+\\);)+)` +
    `return a\\.join\\(${jsEmptyStr}\\)` +
    `\\}`);
const reverseRegexp = new RegExp(`(?:^|,)(${jsKeyStr})${reverseStr}`, 'm');
const sliceRegexp = new RegExp(`(?:^|,)(${jsKeyStr})${sliceStr}`, 'm');
const spliceRegexp = new RegExp(`(?:^|,)(${jsKeyStr})${spliceStr}`, 'm');
const swapRegexp = new RegExp(`(?:^|,)(${jsKeyStr})${swapStr}`, 'm');

function StringUTF8AsBytesArrayFromString( s ) {
    let i,
        n,
        u;

    u = [];
    s = encodeURIComponent( s );

    n = s.length;
    for( i = 0; i < n; i++ )
    {
        if( s.charAt( i ) === '%' )
        {
            u.push( parseInt( s.substring( i + 1, i + 3 ), 16 ) );
            i += 2;
        }
        else
        {
            u.push( s.charCodeAt( i ) );
        }
    }

    return u;
}
function utf8_to_str(a) {
    for(let i=0, s=''; i<a.length; i++) {
        let h = a[i].toString(16);
        if(h.length < 2) h = '0' + h;
        s += '%' + h
    }
    return decodeURIComponent(s)
}
function utf8_from_str(s) {
    for(var i=0, enc = encodeURIComponent(s), a = []; i < enc.length;) {
        if(enc[i] === '%') {
            a.push(parseInt(enc.substr(i+1, 2), 16))
            i += 3
        } else {
            a.push(enc.charCodeAt(i++))
        }
    }
    return a
}
module.exports = ytaudio;
ytaudio.getPlayerdata = getPlayerdata;
ytaudio.getRelatedVideos = getRelatedVideos;
