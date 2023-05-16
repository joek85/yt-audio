import fetch from 'node-fetch';

const PLAYER_API = 'https://www.youtube.com/youtubei/v1/player?key=AIzaSyAO_FJ2SlqU8Q4STEHLGCilw_Y9_11qcW8';
const RELATED_API = 'https://www.youtube.com/youtubei/v1/next?key=AIzaSyAO_FJ2SlqU8Q4STEHLGCilw_Y9_11qcW8';
const CHANNEL_API = 'https://www.youtube.com/youtubei/v1/browse?key=AIzaSyAO_FJ2SlqU8Q4STEHLGCilw_Y9_11qcW8';
const SEARCH_API = 'https://www.youtube.com/youtubei/v1/search?key=AIzaSyAO_FJ2SlqU8Q4STEHLGCilw_Y9_11qcW8';

const BASE_URL = 'https://www.youtube.com/watch?v=';
const EMBED_URL = 'https://www.youtube.com/embed/';
const SEARCH_URL = 'https://www.youtube.com/results?gl=US&hl=en&search_query='
const TRENDING_URL = 'https://www.youtube.com/feed/trending?bp=4gINGgt5dG1hX2NoYXJ0cw%3D%3D'

const USER_AGENT = "Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.98 Safari/537.36";

const DEFAULT_CONTEXT = {
    client: {
        clientName: 'WEB',
        clientVersion: '2.20201021.03.00',
        hl: 'en',
        gl: 'US'
    },
};

const headersList = {
    "Accept": "*/*",
    "User-Agent": USER_AGENT,
    "x-youtube-client-name": "1",
    "x-youtube-client-version": "2.20210622.10.00",
    "Content-Type": "application/json"
}
const context = JSON.parse(JSON.stringify(DEFAULT_CONTEXT));
export const getTrendingPage = async () => {
    try {
        const response = await fetch(TRENDING_URL + '&gl=US&hl=en', {
            method: 'GET'
        })
        let data = await response.text();
        let pos = data.indexOf('var ytInitialData = ')
        let ytInitialData = data.slice(pos + 'var ytInitialData = '.length)
        let posEnd = ytInitialData.indexOf(';</script>')
        let results = data.slice(pos + 'var ytInitialData = '.length, pos + 'var ytInitialData = '.length + posEnd)
        return parseTrending(JSON.parse(results))
    } catch (error) {
        console.log(error)
        return error
    }
}
export const getSearchResults = async (searchQuery, params, continuation) => {

    try {
        if (continuation.token) {
            let data = {
                context: context, query: searchQuery, continuation: continuation.token,
                clickTracking: { clickTrackingParams: continuation.clickTrackingParams }
            };
            const search = await post(SEARCH_API, data);
            return parseSearchResults(search)
        } else {
            const response = await fetch(SEARCH_URL + searchQuery + '&pbj=1' + '&sp=' + params, {
                method: 'GET',
                headers: headersList
            })
            let data = await response.text();
            //console.log(JSON.parse(data)[1])
            // let pos = data.indexOf('var ytInitialData = ')
            // let ytInitialData = data.slice(pos + 'var ytInitialData = '.length)
            // let posEnd = ytInitialData.indexOf(';</script>')
            // let results = data.slice(pos + 'var ytInitialData = '.length, pos + 'var ytInitialData = '.length + posEnd)
            return parseSearchResults(JSON.parse(data)[1].response)
        }

    } catch (err) {
        console.log(err);
        return err
    }
};
export const getPlayerMix = async (playlistId, clickTrackingParams, params) => {
    let data = {
        context: context,
        // clickTracking: { clickTrackingParams: 'CH8QozAYBCITCJP7_u3o3_cCFQ8UBgAdGf8CVDIKbGlzdF9vdGhlcpoBBQgMEPgd' },

        playlistId: playlistId,
        // params: 'OALAAQHCAwtuakN5Wk9RcXRKVQ%3D%3D',

    };
    try {
        const details = await post(RELATED_API, data);
        return parseMix(details)
    } catch (err) {
        console.log(err);
        return err
    }
};
export const getPlayerData = async (videoId) => {

    try {

        let details = await fetch(BASE_URL + videoId + '&pbj=1&gl=US&hl=en', {
            method: "GET",
            headers: headersList
        });
        let data = await details.text();
        return parseVideoDetails(JSON.parse((data)))
    } catch (err) {
        console.log(err);
        return err
    }
};
export const getPlayerBase = async (videoId) => {
    try {
        let res = await fetch(EMBED_URL + videoId + '?gl=US&hl=en', {
            method: "GET",
            headers: headersList
        });

        let text = await res.text();

        let player =
            /<script\s+src="([^"]+)"(?:\s+type="text\/javascript")?\s+name="player_ias\/base"\s*>|"jsUrl":"([^"]+)"/
                .exec(text);
        let pos = player[0].indexOf('/s/player/')
        let baseUrl = player[0].slice(pos + '/s/player/'.length - 1)
        return baseUrl.split('"')[0]
    } catch (err) {
        console.log(err);
        return err
    }
};
export const getChannelInfos = async (channelId) => {
    let data = { context: context, browseId: channelId };
    try {
        const infos = await post(CHANNEL_API, data)
        return parseChannelInfos(infos)
        //return infos
    } catch (err) {
        return err
    }
};
export const getChannelPlaylists = async (channelId, clickTrackingParams, params) => {
    let data = {
        context: context,
        browseId: channelId,
        clickTracking: { clickTrackingParams: clickTrackingParams },
        params: params,
    };
    try {
        const playlists = await post(CHANNEL_API, data);
        return parseChannelPlaylists(playlists)
    } catch (err) {
        return err
    }
};
export const getChannelVideos = async (channelId, clickTrackingParams, params) => {

    let data = {
        context: context,
        browseId: channelId,
        clickTracking: { clickTrackingParams: clickTrackingParams },
        params: params,
    };
    try {
        const videos = await post(CHANNEL_API, data);
        return parseChannelVideos(videos)
    } catch (err) {
        return err
    }
};
export const getRelatedVideos = async (videoId, continuation) => {
    let data = {
        context: context,
        videoId: videoId,
        continuation: continuation,
        //clickTracking: { clickTrackingParams: tracking }
    };

    try {
        const related = await post(RELATED_API, data);
        return parseRelatedVideos(related);
    } catch (err) {
        console.log(err)
        return err
    }
};
export const getPlaylist = async (browseId, clickTrackingParams) => {
    let data = {
        context: context,
        browseId: 'VL' + browseId,
        clickTracking: { clickTrackingParams: clickTrackingParams },
    };
    try {
        const playlist = await post(CHANNEL_API, data)
        return parsePlaylist(playlist)
    } catch (err) {
        return err
    }
};

const parseMix = (data) => {
    let playlist = data.contents.twoColumnWatchNextResults.playlist.playlist
    let videos = []
    let contents = playlist.contents

    for (const playlistPanelVideoRenderer of contents) {

        let videoRenderer = playlistPanelVideoRenderer.playlistPanelVideoRenderer

        videos.push({
            title: videoRenderer.title.simpleText,
            author: videoRenderer.longBylineText.runs[0].text,
            videoId: videoRenderer.videoId,
            thumbnail: prepImg(videoRenderer.thumbnail.thumbnails)[0],
            duration: videoRenderer.lengthText.simpleText,
            selected: videoRenderer.selected,
            playlistSetVideoId: videoRenderer.playlistSetVideoId,
            playlistId: videoRenderer.navigationEndpoint.watchEndpoint.playlistId,
            index: videoRenderer.navigationEndpoint.watchEndpoint.index,
            params: videoRenderer.navigationEndpoint.watchEndpoint.params

        })
    }
    return {
        title: playlist.title,
        author: playlist.ownerName.simpleText,
        playlistId: playlist.playlistId,
        currentIndex: playlist.currentIndex,
        localCurrentIndex: playlist.localCurrentIndex,
        trackingParams: playlist.trackingParams,
        videos: videos
    }
}

const parseTrending = (data) => {
    let items = data.contents.twoColumnBrowseResultsRenderer.tabs[1].tabRenderer.content.sectionListRenderer.contents[0].itemSectionRenderer.contents[0].shelfRenderer.content.expandedShelfContentsRenderer.items
    let videos = []
    for (let renderer of items) {
        videos.push(parseVideoRenderer(renderer.videoRenderer))
    }
    return videos
};
const parseVideoDetails = async (data) => {
    let results = {};
    let detailsPage = data[2];
    let watchPage = data[3];
    let playabilityStatus = detailsPage.playerResponse.playabilityStatus;
    let videoDetails = {};
    let owner = {};
    let relatedVideos = [];
    let chapters = [];

    if (playabilityStatus.status == "ERROR") return {
        videoDetails: videoDetails,
        owner: owner,
        relatedVideos: relatedVideos,
        chapters: chapters
    };
    if (detailsPage) {
        let playerResponse = detailsPage.playerResponse;

        videoDetails.videoId = playerResponse.videoDetails.videoId;
        videoDetails.thumbnails = prepImg(playerResponse.videoDetails.thumbnail.thumbnails)[0];
        videoDetails.title = playerResponse.videoDetails.title;
        videoDetails.isLive = playerResponse.videoDetails.isLiveContent;
        videoDetails.channelId = playerResponse.videoDetails.channelId;
        videoDetails.author = playerResponse.videoDetails.author;
        videoDetails.tags = playerResponse.videoDetails.keywords;
        videoDetails.viewCount = playerResponse.videoDetails.viewCount;
        videoDetails.publishDate = playerResponse.microformat.playerMicroformatRenderer.publishDate;
        videoDetails.description = (playerResponse.videoDetails.shortDescription);
        videoDetails.lengthSeconds = playerResponse.videoDetails.lengthSeconds;
        videoDetails.formats = {
            adaptiveFormats: playerResponse.streamingData.adaptiveFormats,
            expiresInSeconds: playerResponse.streamingData.expiresInSeconds
        };
    }

    if (watchPage) {
        let contents = watchPage.response.contents;
        let primaryResults = contents.twoColumnWatchNextResults.results.results.contents;
        let secondaryResults = contents.twoColumnWatchNextResults.secondaryResults.secondaryResults.results;
        let videoSecondaryInfoRenderer = primaryResults[1].videoSecondaryInfoRenderer;
        let engagementPanels = watchPage.response.engagementPanels;

        owner = parseVideoSecondaryInfoRenderer(videoSecondaryInfoRenderer);
        relatedVideos = parseRelatedVideos(secondaryResults);
        chapters = parseChapters(engagementPanels);

    }

    results = {
        videoDetails: videoDetails,
        owner: owner,
        relatedVideos: relatedVideos,
        chapters: chapters
    }
    return results;
};
const parseChapters = (renderer) => {
    let engagementPanelSectionListRenderer;
    let chapters = [];
    for (let panel of renderer) {
        let targetId = panel.engagementPanelSectionListRenderer.targetId
        if (targetId.includes('chapters')) {
            engagementPanelSectionListRenderer = panel;
            break;
        }
    }
    if (engagementPanelSectionListRenderer) {
        let contents = engagementPanelSectionListRenderer.engagementPanelSectionListRenderer.content;
        let macroMarkersListRendererContents = contents.macroMarkersListRenderer.contents;

        for (let listRenderer of macroMarkersListRendererContents) {
            chapters.push({
                title: listRenderer.macroMarkersListItemRenderer.title.simpleText,
                timeDescription: listRenderer.macroMarkersListItemRenderer.timeDescription.simpleText,
                startTimeSeconds: listRenderer.macroMarkersListItemRenderer.onTap.watchEndpoint.startTimeSeconds,
                thumbnail: prepImg(listRenderer.macroMarkersListItemRenderer.thumbnail.thumbnails)[0]
            })
        }
    }

    return chapters;
};
const parseVideoSecondaryInfoRenderer = (renderer) => {
    let owner = {
        thumbnails: prepImg(renderer.owner.videoOwnerRenderer.thumbnail.thumbnails)[0],
        title: renderer.owner.videoOwnerRenderer.title.runs[0].text,
        channelId: renderer.owner.videoOwnerRenderer.title.runs[0].navigationEndpoint.browseEndpoint.browseId,
        subscriberCount: renderer.owner.videoOwnerRenderer.subscriberCountText.simpleText
    }
    let description = {}

    return {
        owner: owner,
        description: description
    }
};
const parsePlaylist = (data) => {
    let playlist = { sidebar: {}, videos: [] };
    let sidebar = data.sidebar.playlistSidebarRenderer.items[0].playlistSidebarPrimaryInfoRenderer;
    let renderer = sidebar.thumbnailRenderer.playlistVideoThumbnailRenderer || sidebar.thumbnailRenderer.playlistCustomThumbnailRenderer

    playlist.sidebar = {
        thumbnails: prepImg(renderer.thumbnail.thumbnails)[0],
        title: sidebar.title.runs[0].text,
        videoCounts: sidebar.stats[0].runs.map(text => { return text.text }).join(""),
        views: sidebar.stats[1].simpleText,
        published: sidebar.stats[2].runs.map(text => { return text.text }).join("")
    };

    let tab = data.contents.twoColumnBrowseResultsRenderer.tabs[0];
    let contents = tab.tabRenderer.content.sectionListRenderer.contents[0];
    let renderers = contents.itemSectionRenderer.contents[0].playlistVideoListRenderer;
    for (let video of renderers.contents) {
        if (video.playlistVideoRenderer) {

            playlist.videos.push({
                videoId: video.playlistVideoRenderer.videoId,
                thumbnails: prepImg(video.playlistVideoRenderer.thumbnail.thumbnails)[0],
                title: video.playlistVideoRenderer.title.runs[0].text,
                subtitle: video.playlistVideoRenderer.shortBylineText ? video.playlistVideoRenderer.shortBylineText.runs[0].text : '',
                duration: video.playlistVideoRenderer.lengthText ? video.playlistVideoRenderer.lengthText.simpleText : ''
            })
        }
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
    let channelInfos = { header: {}, items: [] };
    let header = data.header.c4TabbedHeaderRenderer ? data.header.c4TabbedHeaderRenderer : data.header.carouselHeaderRenderer.contents[1].topicChannelDetailsRenderer;
    let tabs = data.contents.twoColumnBrowseResultsRenderer.tabs;
    let carouselThumbnails;
    if (data.header.carouselHeaderRenderer) {
        carouselThumbnails = data.header.carouselHeaderRenderer.contents[0].carouselItemRenderer.carouselItems[0].defaultPromoPanelRenderer.largeFormFactorBackgroundThumbnail.thumbnailLandscapePortraitRenderer.landscape;
    }
    if (header) {
        channelInfos.header.channelId = header.channelId;
        channelInfos.header.title = header.title.simpleText ? header.title.simpleText : header.title;
        channelInfos.header.avatar = prepImg(header.avatar.thumbnails)[0];
        channelInfos.header.banner = header.banner ? prepImg(header.banner.thumbnails)[0] : prepImg(carouselThumbnails.thumbnails)[0];
        channelInfos.header.subscribers = header.subscriberCountText ? header.subscriberCountText.simpleText : '';
        channelInfos.header.descriptions = data.metadata.channelMetadataRenderer.description;
    } else {
        channelInfos.header = null;
    }

    if (tabs) {
        for (let tab of tabs || []) {
            let item = { tabs: { title: '', items: [] } };
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
                                } else if (SectionRenderer.channelFeaturedContentRenderer) {
                                    let videos = [];
                                    for (let video of SectionRenderer.channelFeaturedContentRenderer.items) {
                                        videos.push({
                                            videoId: video.videoRenderer.videoId,
                                            thumbnails: prepImg(video.videoRenderer.thumbnail.thumbnails)[0],
                                            title: video.videoRenderer.title.runs[0].text,
                                            views: video.videoRenderer.shortViewCountText ? (video.videoRenderer.shortViewCountText.runs[0].text + video.videoRenderer.shortViewCountText.runs[1].text) : '',
                                            description: video.videoRenderer.descriptionSnippet.runs[0].text
                                        })
                                    }
                                    item.tabs.items.push({
                                        type: 'channelFeaturedVideos',
                                        title: SectionRenderer.channelFeaturedContentRenderer.title ? (SectionRenderer.channelFeaturedContentRenderer.title.runs[0].text + SectionRenderer.channelFeaturedContentRenderer.title.runs[1].text) : '',
                                        videos: videos
                                    })
                                } else if (SectionRenderer.shelfRenderer) {
                                    let videos = { type: '', items: [] };
                                    if (SectionRenderer.shelfRenderer.content.horizontalListRenderer) {
                                        console.log(SectionRenderer.shelfRenderer.content.horizontalListRenderer.items)
                                        for (let video of SectionRenderer.shelfRenderer.content.horizontalListRenderer.items) {
                                            if (video.gridVideoRenderer) {
                                                videos.type = 'videos';
                                                videos.items.push(parseGridVideoRenderer(video.gridVideoRenderer))
                                            } else if (video.gridPlaylistRenderer) {
                                                videos.type = 'playlists';
                                                videos.items.push(parsePlaylists(video))
                                            } else if (video.gridChannelRenderer) {
                                                videos.type = 'channel';
                                                videos.items.push({
                                                    channelId: video.gridChannelRenderer.channelId,
                                                    thumbnails: prepImg(video.gridChannelRenderer.thumbnail.thumbnails)[0],
                                                    videoCounts: video.gridChannelRenderer.videoCountText ? video.gridChannelRenderer.videoCountText.runs[0].text : 0,
                                                    subscribers: video.gridChannelRenderer.subscriberCountText ? video.gridChannelRenderer.subscriberCountText.simpleText : '',
                                                    title: video.gridChannelRenderer.title.simpleText
                                                })
                                            }
                                        }
                                    } else if (SectionRenderer.shelfRenderer.content.expandedShelfContentsRenderer) {
                                        for (let video of SectionRenderer.shelfRenderer.content.expandedShelfContentsRenderer.items) {
                                            if (video.videoRenderer) {
                                                videos.type = 'videos';
                                                videos.items.push({
                                                    videoId: video.videoRenderer.videoId,
                                                    thumbnails: prepImg(video.videoRenderer.thumbnail.thumbnails)[0],
                                                    title: video.videoRenderer.title.simpleText,
                                                    published: video.videoRenderer.publishedTimeText ? video.videoRenderer.publishedTimeText.simpleText : '',
                                                    views: video.videoRenderer.shortViewCountText.simpleText,
                                                    subtitle: video.videoRenderer.shortBylineText ? video.videoRenderer.shortBylineText.runs[0].text : '',
                                                    duration: video.videoRenderer.lengthText ? video.videoRenderer.lengthText.simpleText : ''
                                                })
                                            } else if (video.playlistRenderer) {
                                                videos.type = 'playlists';
                                                videos.items.push({
                                                    playlistId: video.playlistRenderer.playlistId,
                                                    thumbnails: prepImg(video.playlistRenderer.thumbnails[0].thumbnails)[0],
                                                    title: video.playlistRenderer.title.simpleText,
                                                    subtitle: video.playlistRenderer.shortBylineText.runs[0].text,
                                                    videoCounts: video.playlistRenderer.videoCountText.runs[0].text,
                                                })
                                            } else if (video.channelRenderer) {
                                                videos.type = 'channel';
                                                videos.items.push({
                                                    channelId: video.channelRenderer.channelId,
                                                    thumbnails: prepImg(video.channelRenderer.thumbnail.thumbnails)[0],
                                                    videoCounts: video.channelRenderer.videoCountText ? video.channelRenderer.videoCountText.runs[0].text : '',
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
                                        browseId: SectionRenderer.shelfRenderer.title.runs[0].navigationEndpoint.browseEndpoint.canonicalBaseUrl ? '' : SectionRenderer.shelfRenderer.title.runs[0].navigationEndpoint.browseEndpoint.browseId.substring(2),
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
                                let p = { type: '', title: '', items: [] };
                                if (renderers.gridRenderer) {
                                    let items = renderers.gridRenderer.items;
                                    p.type = 'grid';
                                    for (let playlist of items) {
                                        p.items.push(parsePlaylists(playlist))
                                    }

                                } else if (renderers.shelfRenderer) {
                                    let items = renderers.shelfRenderer.content.horizontalListRenderer.items;
                                    let title = renderers.shelfRenderer.title.runs[0].text;
                                    p.type = 'shelf';
                                    p.title = title;
                                    for (let playlist of items) {
                                        p.items.push(parsePlaylists(playlist))
                                    }
                                }
                                playlists.push(p)
                            }
                            break;
                    }
                } else {

                }

            }
        }
    }
    return playlists
};
const parseChannelVideos = (data) => {

    let tabs = data.contents.twoColumnBrowseResultsRenderer.tabs;
    let contents = tabs[1].tabRenderer.content.richGridRenderer.contents;
    let header = tabs[1].tabRenderer.content.richGridRenderer.header.feedFilterChipBarRenderer;
    let videos = { videos: [], continuation: '', headers: [] };

    for (let video of contents) {
        if (video.richItemRenderer) {
            videos.videos.push(parseGridVideoRenderer(video.richItemRenderer.content.videoRenderer))
        } else if (video.continuationItemRenderer) {
            let Token = video.continuationItemRenderer.continuationEndpoint.continuationCommand.token;
            let ctp = video.continuationItemRenderer.continuationEndpoint.clickTrackingParams;
            videos.continuation = {
                Token: Token,
                ctp: ctp
            }
        }
    }
    for (const h of header.contents) {

        videos.headers.push({
            title: h.chipCloudChipRenderer.text.simpleText,
            navigationEndpoint: h.chipCloudChipRenderer.navigationEndpoint
        })
    }
    // console.log(h)
    return videos
};
const parseRelatedVideos = (data) => {
    let secondaryResults;
    if (data.contents) {
        secondaryResults = data.contents.twoColumnWatchNextResults.secondaryResults.secondaryResults.results;

    } else if (data.onResponseReceivedEndpoints) {
        secondaryResults = data.onResponseReceivedEndpoints[0].appendContinuationItemsAction.continuationItems;
    } else {
        secondaryResults = data;
    }

    let related = { videos: [], continuation: '' };
    let videos = [];
    for (let result of secondaryResults || []) {
        let showMoreRelated = result.continuationItemRenderer;
        if (showMoreRelated) {
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

            let viewCount = details.viewCountText ? details.viewCountText.simpleText ? details.viewCountText.simpleText : details.viewCountText.runs.map(text => { return text.text }).join("") : 0;
            let shortViewCount = details.shortViewCountText ? details.shortViewCountText.simpleText ? details.shortViewCountText.simpleText : details.shortViewCountText.runs.map(text => { return text.text }).join("") : 0;

            let browseEndpoint = details.shortBylineText.runs[0].navigationEndpoint.browseEndpoint;
            let channelId = browseEndpoint.browseId;
            let name = details.shortBylineText.runs[0].text;
            let user = (browseEndpoint.canonicalBaseUrl || '').split('/').slice(-1)[0];

            //console.log(details )
            let video = {
                type: 'video',
                id: details.videoId,
                title: details.title.simpleText,
                published: details.publishedTimeText !== undefined ? details.publishedTimeText.simpleText : '',
                author: {
                    id: channelId,
                    name,
                    user,
                    CHANNEL_API: `https://www.youtube.com/channel/${channelId}`,
                    user_url: `https://www.youtube.com/user/${user}`,
                    thumbnails: prepImg(details.channelThumbnail.thumbnails)[0],
                },
                short_view_count_text: shortViewCount,
                view_count: viewCount,
                length_seconds: details.lengthText !== undefined ? details.lengthText.simpleText : '',
                thumbnails: prepImg(details.thumbnail.thumbnails)[0],
                // richThumbnails:
                //     details.richThumbnail ?
                //         details.richThumbnail.movingThumbnailRenderer.movingThumbnailDetails.thumbnails : [],
                isLive: !!(details.badges && details.badges.find(b => b.metadataBadgeRenderer.label === 'LIVE')),
            };
            videos.push(video);
        } else if (result.compactPlaylistRenderer) {
            let playlistRenderer = result.compactPlaylistRenderer;
            let playlist = {
                type: 'playlist',
                id: playlistRenderer.playlistId,
                title: playlistRenderer.title.simpleText,
                subtitle: playlistRenderer.shortBylineText.runs ? playlistRenderer.shortBylineText.runs[0].text : playlistRenderer.shortBylineText.simpleText,
                thumbnail: prepImg(playlistRenderer.thumbnail.thumbnails)[0],
                published: playlistRenderer.publishedTimeText ? playlistRenderer.publishedTimeText.simpleText : '',
                count: playlistRenderer.videoCountShortText.simpleText
            };
            videos.push(playlist)

        } else if (result.compactRadioRenderer) {

            let compactRadioRenderer = result.compactRadioRenderer
            let mix = {
                type: 'mix',
                playlistId: compactRadioRenderer.playlistId,
                videoId: compactRadioRenderer.navigationEndpoint.watchEndpoint.videoId,
                thumbnail: prepImg(compactRadioRenderer.thumbnail.thumbnails)[0],
                title: compactRadioRenderer.title.simpleText,
                author: compactRadioRenderer.longBylineText.simpleText,
                videoCounts: compactRadioRenderer.videoCountShortText.runs[0].text,
                clickTrackingParams: compactRadioRenderer.navigationEndpoint.clickTrackingParams,
                params: compactRadioRenderer.navigationEndpoint.watchEndpoint.params
            }
            videos.push(mix)
        }
    }

    related.videos = videos;

    return related
};
const parseSearchResults = (data) => {
    let continuation = {};
    let searchFilters = []
    let primaryResults = [];
    let secondaryResults;

    if (data.contents) {
        let estimatedResults = data.estimatedResults;
        let refinements = data.refinements;
        let primaryContents = data.contents.twoColumnSearchResultsRenderer.primaryContents;
        let secondaryContents = data.contents.twoColumnSearchResultsRenderer.secondaryContents;

        let subMenu = primaryContents.sectionListRenderer.subMenu;
        let contents = findKey(primaryContents, 'sectionListRenderer').contents;
        let itemSectionRenderer = contents[0].itemSectionRenderer.contents;
        let continuationItemRenderer = contents[1] ? contents[1].continuationItemRenderer : null;

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
                    case 'playlistRenderer':
                        primaryResults.push({
                            type: 'playlist',
                            items: {
                                playlistId: i.playlistRenderer.playlistId,
                                thumbnails: prepImg(i.playlistRenderer.thumbnails[0].thumbnails)[0],
                                title: i.playlistRenderer.title.simpleText,
                                subtitle: i.playlistRenderer.shortBylineText.runs[0].text,
                                channelId: i.playlistRenderer.shortBylineText.runs[0].navigationEndpoint ? i.playlistRenderer.shortBylineText.runs[0].navigationEndpoint.browseEndpoint.browseId : '',
                                videoCounts: i.playlistRenderer.videoCountText.runs.map(text => { return text.text }).join(""),
                                videos: i.playlistRenderer.videos.map(renderer => {
                                    return {
                                        title: renderer.childVideoRenderer.title.simpleText,
                                        duration: renderer.childVideoRenderer.lengthText.simpleText,
                                        videoId: renderer.childVideoRenderer.videoId
                                    }
                                })
                            }
                        })
                        break;
                }
            }
        }
        if (subMenu) {
            let groups = subMenu.searchSubMenuRenderer.groups;

            for (const searchFilter of groups) {
                let groupRenderer = searchFilter.searchFilterGroupRenderer;
                let searchTitle = groupRenderer.title.simpleText;
                let filters = [];
                for (const filter of groupRenderer.filters) {
                    let navigationEndpoint = filter.searchFilterRenderer.navigationEndpoint;
                    if (navigationEndpoint) {
                        filters.push({ title: filter.searchFilterRenderer.label.simpleText, params: navigationEndpoint.searchEndpoint.params })
                    }
                }
                searchFilters.push({
                    title: searchTitle,
                    filters: filters
                })
            }
        }

        if (secondaryContents) {
            secondaryResults = parseSecondaryContents(secondaryContents);
        }
        return {
            primaryResults: primaryResults,
            secondaryResults: secondaryResults,
            continuation: continuation,
            estimatedResults: estimatedResults,
            refinements: refinements,
            searchFilters: searchFilters
        }
    } else {
        let primaryContents = data.onResponseReceivedCommands[0].appendContinuationItemsAction.continuationItems
        let contents = findKey(primaryContents[0], 'itemSectionRenderer').contents;
        let continuationItemRenderer = primaryContents[1] ? primaryContents[1].continuationItemRenderer : null;

        if (continuationItemRenderer) {
            continuation = {
                clickTrackingParams: continuationItemRenderer.continuationEndpoint.clickTrackingParams,
                token: continuationItemRenderer.continuationEndpoint.continuationCommand.token
            }
        }
        if (contents) {
            for (let i of contents) {
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
        }
    }

};
const parseSecondaryContents = (renderer) => {
    let secondaryContents = renderer.secondarySearchContainerRenderer.contents[0];
    let container = secondaryContents.universalWatchCardRenderer;
    let header = {};
    let action = {};
    let sections = [];

    if (container) {
        header = {
            id: container.header.watchCardRichHeaderRenderer.titleNavigationEndpoint.browseEndpoint.browseId,
            title: container.header.watchCardRichHeaderRenderer.title.simpleText,
            subtitle: container.header.watchCardRichHeaderRenderer.subtitle.simpleText,
            avatar: container.header.watchCardRichHeaderRenderer.avatar ? prepImg(container.header.watchCardRichHeaderRenderer.avatar.thumbnails)[0] : '',
        };
        action = {
            title: container.callToAction.watchCardHeroVideoRenderer.title ? container.callToAction.watchCardHeroVideoRenderer.title.simpleText : '',
            subtitle: container.callToAction.watchCardHeroVideoRenderer.subtitle ? container.callToAction.watchCardHeroVideoRenderer.subtitle.simpleText : '',
            duration: container.callToAction.watchCardHeroVideoRenderer.lengthText ? container.callToAction.watchCardHeroVideoRenderer.lengthText.simpleText : '',
            thumbnail: container.callToAction.watchCardHeroVideoRenderer.heroImage.singleHeroImageRenderer ? prepImg(container.callToAction.watchCardHeroVideoRenderer.heroImage.singleHeroImageRenderer.thumbnail.thumbnails)[0] : '',
            videoId: container.callToAction.watchCardHeroVideoRenderer.navigationEndpoint.watchEndpoint ? container.callToAction.watchCardHeroVideoRenderer.navigationEndpoint.watchEndpoint.videoId : ''
        };
        for (let section of container.sections) {
            let watchCard = section.watchCardSectionSequenceRenderer.lists[0];
            if (watchCard.verticalWatchCardListRenderer) {
                sections.push({
                    type: 'vertical',
                    items: parseVerticalWatchCard(watchCard.verticalWatchCardListRenderer)
                });
            } else if (watchCard.horizontalCardListRenderer) {
                sections.push({
                    type: 'horizontal',
                    items: parseHorizontalCardListRenderer(watchCard.horizontalCardListRenderer)
                });
            }
        }
    }
    return {
        header: header,
        action: action,
        sections: sections
    }
};
const parseVerticalWatchCard = (renderer) => {
    let items = [];
    for (let item of renderer.items) {
        items.push({
            videoId: item.watchCardCompactVideoRenderer.navigationEndpoint.watchEndpoint.videoId,
            title: item.watchCardCompactVideoRenderer.title.simpleText,
            subtitle: item.watchCardCompactVideoRenderer.subtitle.simpleText,
            duration: item.watchCardCompactVideoRenderer.lengthText.simpleText,
        })
    }
    return items;
};
const parseHorizontalCardListRenderer = (renderer) => {
    let items = [];

    for (let card of renderer.cards) {
        items.push({
            thumbnail: prepImg(card.searchRefinementCardRenderer.thumbnail.thumbnails)[0],
            query: card.searchRefinementCardRenderer.query.runs[0].text,
            playlistId: card.searchRefinementCardRenderer.searchEndpoint.watchPlaylistEndpoint.playlistId
        })
    }

    return {
        title: renderer.header.titleAndButtonListHeaderRenderer.title.simpleText,
        items: items
    };
};
const parseVideoRenderer = (renderer) => {
    return {
        videoId: renderer.videoId,
        title: renderer.title.runs ? renderer.title.runs[0].text : '',
        thumbnail: prepImg(renderer.thumbnail.thumbnails)[0],
        published: renderer.publishedTimeText ? renderer.publishedTimeText.simpleText : '',
        duration: renderer.lengthText ? renderer.lengthText.simpleText : '',
        views: renderer.shortViewCountText ? (renderer.shortViewCountText.simpleText || renderer.shortViewCountText.runs.map(text => { return text.text }).join("")) : '',
        author: {
            name: renderer.shortBylineText.runs[0].text,
            thumbnail: prepImg(renderer.channelThumbnailSupportedRenderers.channelThumbnailWithLinkRenderer.thumbnail.thumbnails)[0],
            channelId: renderer.shortBylineText.runs[0].navigationEndpoint.browseEndpoint.browseId
        },
        description: renderer.detailedMetadataSnippets ? renderer.detailedMetadataSnippets[0].snippetText.runs.map(text => { return text.text }).join("") : '',
        badges: renderer.badges ? renderer.badges[0].metadataBadgeRenderer.label : ''
    }
};
const parseChannelRenderer = (renderer) => {

    return {
        channelId: renderer.channelId,
        title: renderer.title.simpleText,
        thumbnail: prepImg(renderer.thumbnail.thumbnails)[0],
        videoCounts: renderer.videoCountText.runs ? renderer.videoCountText.runs.map(text => { return text.text }).join("") : renderer.videoCountText.simpleText,
        description: renderer.descriptionSnippet ? renderer.descriptionSnippet.runs[0].text : '',
        subscribers: renderer.subscriberCountText ? renderer.subscriberCountText.simpleText : ''
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
const parseGridVideoRenderer = (renderer) => {
    return {
        videoId: renderer.videoId,
        thumbnails: prepImg(renderer.thumbnail.thumbnails)[0],
        title: (renderer.title.simpleText || renderer.title.runs[0].text),
        published: renderer.publishedTimeText ? renderer.publishedTimeText.simpleText : '',
        views: renderer.shortViewCountText ? renderer.shortViewCountText.simpleText : '',
        duration: renderer.thumbnailOverlays[0].thumbnailOverlayTimeStatusRenderer.text.simpleText
    }
};
const parseRichItemRenderer = (renderer) => {

}
const findKey = (obj, key) => {
    for (let [k, v] of Object.entries(obj)) {
        if (k === key) return v;
        if (typeof v === 'object' && v !== null) {
            let found = findKey(v, key);
            if (found) return found
        }
    }
};
const prepImg = img => {
    img.forEach(x => x.url = x.url ? new URL(x.url, BASE_URL).toString() : null);
    return img.sort((a, b) => b.width - a.width);
};

async function post(url, data) {
    const dataString = JSON.stringify(data)
    let response = await fetch(url, {
        body: dataString,
        headers: {
            headersList,
            'Content-Length': dataString.length
        },
        method: 'post'
    })
    return await response.json()
}
export default {
    getPlayerData,
    getPlayerMix,
    getRelatedVideos,
    getChannelInfos,
    getChannelPlaylists,
    getChannelVideos,
    getPlaylist,
    getSearchResults,
    getTrendingPage,
    getPlayerBase
}

