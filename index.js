const axios = require('axios');
const querystring = require('querystring');
const miniget = require('miniget');

const PLAYER_URL = 'https://www.youtube.com/youtubei/v1/player?key=AIzaSyAO_FJ2SlqU8Q4STEHLGCilw_Y9_11qcW8';
const RELATED_URL = 'https://www.youtube.com/youtubei/v1/next?key=AIzaSyAO_FJ2SlqU8Q4STEHLGCilw_Y9_11qcW8';
const CHANNEL_URL = 'https://www.youtube.com/youtubei/v1/browse?key=AIzaSyAO_FJ2SlqU8Q4STEHLGCilw_Y9_11qcW8';
const SEARCH_URL = 'https://www.youtube.com/youtubei/v1/search?key=AIzaSyAO_FJ2SlqU8Q4STEHLGCilw_Y9_11qcW8';

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
const getSearchResults = async (searchQuery) => {
    let data = {context: context, query: searchQuery};
    try {
        const response = await axios.post(SEARCH_URL, data, {
            headers: {'content-type': 'application/json'}
        });
        return parseSearchResults(response.data)
    } catch (err) {
        console.log(err);
        return err
    }
};

const getPlayerdata = async (videoId) => {
    let data = {context: context, videoId: videoId};
    try {
        const response = await axios.post(PLAYER_URL, data, {
            headers: {'content-type': 'application/json'}
        });
        // console.log(decipherFormats(response.data.streamingData.adaptiveFormats))
        // decipherFormats(response.data.streamingData.adaptiveFormats)
        // console.log(response.data.cards.cardCollectionRenderer.cards[0].cardRenderer)
        return getVideoDetails(response.data)
    } catch (err) {
        console.log(err);
        return err
    }
};
const getVideoDetails = (data) => {
    let videoDetails = {};
    // console.log(data)
    videoDetails.videoId = data.videoDetails.videoId;
    videoDetails.thumbnails = data.videoDetails.thumbnail.thumbnails;
    videoDetails.title = data.videoDetails.title;
    videoDetails.isLive = data.videoDetails.isLive;
    videoDetails.channelId = data.videoDetails.channelId;
    videoDetails.author = data.videoDetails.author;
    // videoDetails.authorThumbnail = data.annotations[0].playerAnnotationsExpandedRenderer.featuredChannel.watermark.thumbnails[0].url;
    videoDetails.tags = data.videoDetails.keywords;
    videoDetails.viewCount = data.videoDetails.viewCount;
    videoDetails.publishDate = data.microformat.playerMicroformatRenderer.publishDate;
    videoDetails.description = (data.videoDetails.shortDescription);

    videoDetails.lengthSeconds = data.videoDetails.lengthSeconds;
    // videoDetails.audioFormats = data.streamingData.adaptiveFormats.find((formats) => {
    //     return formats.itag === 140
    // }).url;
    // decipherFormats(data.streamingData.adaptiveFormats, videoDetails.videoId);
    videoDetails.audioFormats = [];
    // console.log(videoDetails.authorThumbnail)
    return videoDetails;
};
const getChannelInfos = async (channelId) => {
    let data = {context: context, browseId: channelId};
    try {
        const response = await axios.post(CHANNEL_URL, data);
        return parseChannelInfos(response.data)
    } catch (err) {
        return err
    }
};
const getChannelPlaylists = async (channelId, clickTrackingParams, params) => {
    let data = {
        context: context,
        browseId: channelId,
        clickTracking: {clickTrackingParams: clickTrackingParams},
        params: params,
    };
    try {
        const response = await axios.post(CHANNEL_URL, data);
        return parseChannelPlaylists(response.data)
    } catch (err) {
        return err
    }
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
const getPlaylist = async (browseId, clickTrackingParams) => {
    let data = {
        context: context,
        browseId: browseId,
        clickTracking: {clickTrackingParams: clickTrackingParams},
    };
    try {
        const response = await axios.post(CHANNEL_URL, data);
        return parsePlaylist(response.data)
    } catch (err) {
        return err
    }
};
const parsePlaylist = (data) => {
    let playlist = {sidebar: {}, videos: []};
    let sidebar = data.sidebar.playlistSidebarRenderer.items[0].playlistSidebarPrimaryInfoRenderer;
    playlist.sidebar = {
      thumnails: sidebar.thumbnailRenderer.playlistVideoThumbnailRenderer.thumbnail.thumbnails,
        title: sidebar.title.runs[0].text,
        videoCounts: sidebar.stats[0].runs[0].text + sidebar.stats[0].runs[1].text,
        views: sidebar.stats[1].simpleText,
        published: sidebar.stats[2].runs[0].text + sidebar.stats[2].runs[1].text
    };

    let tab = data.contents.twoColumnBrowseResultsRenderer.tabs[0];
    let contents = tab.tabRenderer.content.sectionListRenderer.contents;
    let renderers = contents.itemSectionRenderer.contents[0].playlistVideoListRenderer;
    for (video of renderers.contents){
        playlist.videos.push({
            videoId: video.videoRenderer.videoId,
            thumbnails: prepImg(video.videoRenderer.thumbnail.thumbnails)[0],
            title: video.videoRenderer.title.simpleText,
            published: video.videoRenderer.publishedTimeText ? video.videoRenderer.publishedTimeText.simpleText : '',
            views: video.videoRenderer.shortViewCountText.simpleText,
            subtitle: video.videoRenderer.shortBylineText ? video.videoRenderer.shortBylineText.runs[0].text : '',
            duration: video.videoRenderer.lengthText.simpleText
        })
    }

    return playlist;
};
const parsePlaylists = (playlist) => {
  let playlists = {};
  if (playlist.gridPlaylistRenderer) {
      playlists = {
          playlistId: playlist.gridPlaylistRenderer.playlistId,
          thumbnails: prepImg(playlist.gridPlaylistRenderer.thumbnail.thumbnails)[0],
          title: playlist.gridPlaylistRenderer.title.runs[0].text,
          subtitle: playlist.gridPlaylistRenderer.shortBylineText ? playlist.gridPlaylistRenderer.shortBylineText.runs[0].text : '',
          videoCounts: playlist.gridPlaylistRenderer.videoCountShortText.simpleText,
          browsId: playlist.gridPlaylistRenderer.viewPlaylistText.runs[0].navigationEndpoint.browseEndpoint.browseId,
          clickTrackingParams: playlist.gridPlaylistRenderer.viewPlaylistText.runs[0].navigationEndpoint.clickTrackingParams
      }
  }
  return playlists
};
const parseChannelInfos = (data) => {
    let channelInfos = {header: {}, items: []};
    let header = data.header.c4TabbedHeaderRenderer;
    let tabs = data.contents.twoColumnBrowseResultsRenderer.tabs;

    if (header) {
        channelInfos.header.channelId = header.channelId;
        channelInfos.header.title = header.title;
        channelInfos.header.avatar = prepImg(header.avatar.thumbnails)[0];
        channelInfos.header.banner = header.banner ? prepImg(header.banner.thumbnails)[0] : [];
        channelInfos.header.subscribers = header.subscriberCountText ? header.subscriberCountText.simpleText : '';
        channelInfos.header.descriptions = data.metadata.channelMetadataRenderer.description;
    }

    if (tabs) {
        for (let tab of tabs || []) {
            let item = {tabs: {title: '', items: []}};
            if (tab.tabRenderer) {
                switch (tab.tabRenderer.title) {
                    case 'Home':
                        let contents = tab.tabRenderer.content;
                        if (contents) {
                            let sectionListRenderer = contents.sectionListRenderer.contents;
                            for (let itemSectionRenderer of sectionListRenderer) {
                                let SectionRenderer = itemSectionRenderer.itemSectionRenderer.contents[0];
                                if (SectionRenderer.channelVideoPlayerRenderer) {
                                    item.tabs.items.push({
                                        type: 'channelVideo',
                                        videoId: SectionRenderer.channelVideoPlayerRenderer.videoId,
                                        title: SectionRenderer.channelVideoPlayerRenderer.title.runs[0].text,
                                        description: SectionRenderer.channelVideoPlayerRenderer.description ? SectionRenderer.channelVideoPlayerRenderer.description.runs[0].text : '',
                                        views: SectionRenderer.channelVideoPlayerRenderer.viewCountText.simpleText,
                                        published: SectionRenderer.channelVideoPlayerRenderer.publishedTimeText.runs[0].text
                                    })
                                }else if (SectionRenderer.channelFeaturedContentRenderer) {
                                    let videos = [];
                                    for (let video of SectionRenderer.channelFeaturedContentRenderer.items){
                                        videos.push({
                                            videoId: video.videoRenderer.videoId,
                                            thumbnails: prepImg(video.videoRenderer.thumbnail.thumbnails)[0],
                                            title: video.videoRenderer.title.runs[0].text,
                                            views: video.videoRenderer.shortViewCountText.runs[0].text + video.videoRenderer.shortViewCountText.runs[1].text,
                                            description: video.videoRenderer.descriptionSnippet.runs[0].text
                                        })
                                    }
                                    item.tabs.items.push({
                                        type: 'channelFeaturedVideos',
                                        title: SectionRenderer.channelFeaturedContentRenderer.title.runs[0].text + SectionRenderer.channelFeaturedContentRenderer.title.runs[1].text,
                                        videos: videos
                                    })
                                }else if (SectionRenderer.shelfRenderer){
                                    let videos = {type: '', items: []};
                                    if (SectionRenderer.shelfRenderer.content.horizontalListRenderer) {
                                        for (let video of SectionRenderer.shelfRenderer.content.horizontalListRenderer.items){
                                            if (video.gridVideoRenderer){
                                                videos.type = 'videos';
                                                videos.items.push({
                                                    videoId: video.gridVideoRenderer.videoId,
                                                    thumbnails: prepImg(video.gridVideoRenderer.thumbnail.thumbnails)[0],
                                                    title: video.gridVideoRenderer.title.simpleText,
                                                    published: video.gridVideoRenderer.publishedTimeText ? video.gridVideoRenderer.publishedTimeText.simpleText : '',
                                                    views: video.gridVideoRenderer.shortViewCountText ? video.gridVideoRenderer.shortViewCountText.simpleText: '',
                                                    subtitle: video.gridVideoRenderer.shortBylineText ? video.gridVideoRenderer.shortBylineText.runs[0].text : '',
                                                    duration: video.gridVideoRenderer.thumbnailOverlays[0].thumbnailOverlayTimeStatusRenderer.text.simpleText
                                                })
                                            }else if (video.gridPlaylistRenderer){
                                                videos.type = 'playlists';
                                                videos.items.push(parsePlaylists(video))
                                            }else if (video.gridChannelRenderer){
                                                videos.type = 'channel';
                                                videos.items.push({
                                                    channelId: video.gridChannelRenderer.channelId,
                                                    thumbnails: prepImg(video.gridChannelRenderer.thumbnail.thumbnails)[0],
                                                    videoCounts: video.gridChannelRenderer.videoCountText.runs[0].text,
                                                    subscribers: video.gridChannelRenderer.subscriberCountText ? video.gridChannelRenderer.subscriberCountText.simpleText : '',
                                                    title: video.gridChannelRenderer.title.simpleText
                                                })
                                            }
                                        }
                                    }else if (SectionRenderer.shelfRenderer.content.expandedShelfContentsRenderer) {
                                        for (let video of SectionRenderer.shelfRenderer.content.expandedShelfContentsRenderer.items){
                                            if (video.videoRenderer) {
                                                videos.type = 'videos';
                                                videos.items.push({
                                                    videoId: video.videoRenderer.videoId,
                                                    thumbnails: prepImg(video.videoRenderer.thumbnail.thumbnails)[0],
                                                    title: video.videoRenderer.title.simpleText,
                                                    published: video.videoRenderer.publishedTimeText ? video.videoRenderer.publishedTimeText.simpleText : '',
                                                    views: video.videoRenderer.shortViewCountText.simpleText,
                                                    subtitle: video.videoRenderer.shortBylineText ? video.videoRenderer.shortBylineText.runs[0].text : '',
                                                    duration: video.videoRenderer.lengthText.simpleText
                                                })
                                            }else if (video.playlistRenderer) {
                                                videos.type = 'playlists';
                                                videos.items.push({
                                                    playlistId: video.playlistRenderer.playlistId,
                                                    thumbnails: prepImg(video.playlistRenderer.thumbnails[0].thumbnails)[0],
                                                    title: video.playlistRenderer.title.simpleText,
                                                    subtitle: video.playlistRenderer.shortBylineText.runs[0].text,
                                                    videoCounts: video.playlistRenderer.videoCountText.runs[0].text,
                                                })
                                            }else if (video.channelRenderer) {
                                                videos.type = 'channel';
                                                videos.items.push({
                                                    channelId: video.channelRenderer.channelId,
                                                    thumbnails: prepImg(video.channelRenderer.thumbnail.thumbnails)[0],
                                                    videoCounts: video.channelRenderer.videoCountText.runs[0].text,
                                                    subscribers: video.channelRenderer.subscriberCountText ? video.channelRenderer.subscriberCountText.simpleText : '',
                                                    title: video.channelRenderer.title.simpleText
                                                })
                                            }
                                        }
                                    }
                                    item.tabs.items.push({
                                        type: 'shelf',
                                        title: SectionRenderer.shelfRenderer.title.runs[0].text,
                                        subtitle: SectionRenderer.shelfRenderer.subtitle ? SectionRenderer.shelfRenderer.subtitle.simpleText : '',
                                        videos: videos
                                    })
                                }
                            }
                            item.tabs.title = tab.tabRenderer.title;
                            channelInfos.items.push(item)
                        }
                        break;
                    case 'Videos':
                        item.tabs.title = tab.tabRenderer.title;
                        item.tabs.items.push({
                            clickTrackingParams: tab.tabRenderer.endpoint.clickTrackingParams,
                            browseId: tab.tabRenderer.endpoint.browseEndpoint.browseId,
                            params: tab.tabRenderer.endpoint.browseEndpoint.params
                        });
                        channelInfos.items.push(item);
                        break;
                    case 'Playlists':
                        item.tabs.title = tab.tabRenderer.title;
                        item.tabs.items.push({
                            clickTrackingParams: tab.tabRenderer.endpoint.clickTrackingParams,
                            browseId: tab.tabRenderer.endpoint.browseEndpoint.browseId,
                            params: tab.tabRenderer.endpoint.browseEndpoint.params
                        });
                        channelInfos.items.push(item);
                        break;
                }
            }
        }
    }

    return channelInfos;
};
const parseChannelPlaylists = (data) => {
    let playlists = [];

    let tabs = data.contents.twoColumnBrowseResultsRenderer.tabs;
    if (tabs) {
        for (let tab of tabs || []) {
            if (tab.tabRenderer) {
                if (tab.tabRenderer.title) {
                    switch (tab.tabRenderer.title) {
                        case 'Playlists':
                            let contents = tab.tabRenderer.content.sectionListRenderer.contents;
                            for (let content of contents) {
                                let renderers = content.itemSectionRenderer.contents[0];
                                let p = {type: '', title: '', items: []};
                                if (renderers.gridRenderer){
                                    let items = renderers.gridRenderer.items;
                                    p.type = 'grid';
                                    for (let playlist of items) {
                                        p.items.push(parsePlaylists(playlist))
                                    }

                                }else if (renderers.shelfRenderer) {
                                    let items = renderers.shelfRenderer.content.horizontalListRenderer.items;
                                    let title = renderers.shelfRenderer.title.runs[0].text;
                                    p.type = 'shelf';
                                    p.title = title;
                                    for (let playlist of items){
                                        p.items.push(parsePlaylists(playlist))
                                    }
                                }
                                playlists.push(p)
                            }
                            break;
                    }
                }else {

                }

            }
        }
    }
    return playlists
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

            let viewCount = details.viewCountText ? details.viewCountText.simpleText : '';
            let shortViewCount = details.shortViewCountText ? details.shortViewCountText.simpleText : '';

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
                    thumbnails: prepImg(details.channelThumbnail.thumbnails)[0],
                    // verified: isVerified(details.ownerBadges),

                },
                short_view_count_text: shortViewCount,
                view_count: viewCount,
                length_seconds: details.lengthText !== undefined ?  details.lengthText.simpleText: '',
                thumbnails: prepImg(details.thumbnail.thumbnails)[0],
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
                    thumbnail: prepImg(playlistRenderer.thumbnail.thumbnails)[0],
                    published: playlistRenderer.publishedTimeText ? playlistRenderer.publishedTimeText.simpleText: '',
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

const parseSearchResults = (data) => {
    let estimatedResults = data.estimatedResults;
    let refinements = data.refinements;
    let primaryContents = data.contents.twoColumnSearchResultsRenderer.primaryContents;
    let secondaryContents = data.contents.twoColumnSearchResultsRenderer.secondaryContents;
    let continuation = {};

    let primaryResults = [];

    let contents = findKey(primaryContents, 'sectionListRenderer').contents;
    let itemSectionRenderer = contents[0].itemSectionRenderer.contents;
    let continuationItemRenderer = contents[1].continuationItemRenderer;
    if (continuationItemRenderer) {
        continuation = {
            clickTrackingParams: continuationItemRenderer.continuationEndpoint.clickTrackingParams,
            token: continuationItemRenderer.continuationEndpoint.continuationCommand.token
        }
    }
    if (itemSectionRenderer) {
        for (let i of itemSectionRenderer) {
            switch (Object.keys(i)[0]) {
                case 'videoRenderer':
                    primaryResults.push({
                        type: 'video',
                        items: parseVideoRenderer(i.videoRenderer)
                    });
                    break;
                case 'channelRenderer':
                    primaryResults.push({
                        type: 'channel',
                        items: parseChannelRenderer(i.channelRenderer)
                    });
                    break;
                case 'shelfRenderer':
                    primaryResults.push({
                        type: 'shelf',
                        items: parseShelfRenderer(i.shelfRenderer)
                    });
                    break;
                case 'horizontalCardListRenderer':
                    primaryResults.push({
                        type: 'cards',
                        items: parseCards(i.horizontalCardListRenderer)
                    });
                    break;
            }
        }
    }


    return {
        primaryResults: primaryResults,
        continuation: continuation,
        estimatedResults: estimatedResults,
        refinements: refinements
    }
};
const parseVideoRenderer = (renderer) => {
    // console.log(renderer)
    return {
        videoId: renderer.videoId,
        title: renderer.title.runs[0].text,
        thumbnail: prepImg(renderer.thumbnail.thumbnails)[0],
        publishedT: renderer.publishedTimeText.simpleText,
        duration: renderer.lengthText.simpleText,
        views: renderer.shortViewCountText.simpleText,
        author: {
            name:renderer.shortBylineText.runs[0].text,
            thumbnail: prepImg(renderer.channelThumbnailSupportedRenderers.channelThumbnailWithLinkRenderer.thumbnail.thumbnails)[0],
            channelId: renderer.shortBylineText.runs[0].navigationEndpoint.browseEndpoint.browseId
        }
    }
};
const parseChannelRenderer = (renderer) => {
    return {
        channelId: renderer.channelId,
        title: renderer.title.simpleText,
        thumbnail: prepImg(renderer.thumbnail.thumbnails)[0],
        videoCounts: renderer.videoCountText.runs[0].text + renderer.videoCountText.runs[1].text,
        description: renderer.descriptionSnippet.runs[0].text
    }
};
const parseShelfRenderer = (renderer) => {
    let videos = [];
    let items = renderer.content.verticalListRenderer.items;
    for (let video of items) {
        videos.push(parseVideoRenderer(video.videoRenderer))
    }
    return {
        title: renderer.title.simpleText,
        videos: videos
    }
};
const parseCards = (renderer) => {
    let searchRefinments = [];
    let cards = renderer.cards;
    for (let card of cards) {
        searchRefinments.push({
            query: card.searchRefinementCardRenderer.query.runs[0].text,
            thumbnail: prepImg(card.searchRefinementCardRenderer.thumbnail.thumbnails)[0]
        })
    }
    return {
        title: renderer.header.richListHeaderRenderer.title.simpleText,
        searchRefinments: searchRefinments
    }
};

function findKey(obj, key) {
    for ([k, v] of Object.entries(obj)){
        if (k === key) return v;
        if (typeof v === 'object' &&  v !== null ){
            let found = findKey(v, key);
            if (found) return found
        }
    }
}
const prepImg = img => {
    // Resolve url
    img.forEach(x => x.url = x.url ? new URL(x.url, BASE_URL).toString() : null);
    // Sort
    return img.sort((a, b) => b.width - a.width);
};


const exposedMiniget = (url, options = {}, requestOptionsOverwrite) => {
    const req = miniget(url, requestOptionsOverwrite || options.requestOptions);
    if (typeof options.requestCallback === 'function') options.requestCallback(req);
    return req;
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
ytaudio.getChannelInfos = getChannelInfos;
ytaudio.getChannelPlaylists = getChannelPlaylists;
ytaudio.getPlaylist = getPlaylist;
ytaudio.getSearchResults = getSearchResults;