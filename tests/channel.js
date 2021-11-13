import ytaudio from "../index.js";

let channelId = 'UC14ap4T608Zz_Mz4eezhIqw';

let videos = await ytaudio.getChannelInfos(channelId);

console.log(videos)
