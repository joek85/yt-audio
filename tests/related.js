import ytaudio from "../index.js";


const videoId = 'Qa0k7Qfis1I'
let related = await ytaudio.getRelatedVideos(videoId);

console.log(related)
