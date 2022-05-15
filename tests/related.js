import ytaudio from "../index.js";


const videoId = 'LGIbFhmYCYk'
let related = await ytaudio.getRelatedVideos(videoId);

console.log(related)
