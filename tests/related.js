import ytaudio from "../index.js";


const videoId = 'D76nTdQ1A-0'
let related = await ytaudio.getRelatedVideos(videoId);

console.log(related)
