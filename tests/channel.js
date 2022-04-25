import ytaudio from "../index.js";

let channelId = 'UCu5jfQcpRLm9xhmlSd5S8xw';

let videos = await ytaudio.getChannelInfos(channelId);

console.log(videos.items[0].tabs)
