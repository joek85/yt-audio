import ytaudio from "../index.js";


const videoId = 'njCyZOQqtJU'
let related = await ytaudio.getRelatedVideos(videoId);

//console.log(related)
