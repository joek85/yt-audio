import ytaudio from "../index.js";


const videoId = 'WYetg3AuLE4'
let related = await ytaudio.getRelatedVideos(videoId);

console.log(related)
