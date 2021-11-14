import ytaudio from "../index.js";

let channelId = 'UCV-iSZdmPWV9pq-t-dlYzQg';

let videos = await ytaudio.getChannelInfos(channelId);

console.log(videos)
