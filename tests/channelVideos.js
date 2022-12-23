import ytaudio from "../index.js";


let channelId = 'UCr8RbU-D7iSvpy0ZO-AasoQ';
let clickTrackingParams = 'CBgQ8JMBGAYiEwjEvLPRuf_7AhXOKfEFHb0jAIk=';
let params = 'EgZ2aWRlb3PyBgQKAjoA';

let videos = await ytaudio.getChannelVideos(channelId, clickTrackingParams, params);

console.log(videos)
