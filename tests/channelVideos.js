import ytaudio from "../index.js";


let channelId = 'UC14ap4T608Zz_Mz4eezhIqw';
let clickTrackingParams = 'CCQQ8JMBGAYiEwi2wsTlnpP0AhVgAwYAHS-eC-M=';
let params = 'EgZ2aWRlb3M%3D';

let videos = await ytaudio.getChannelVideos(channelId, clickTrackingParams, params);

console.log(videos)
