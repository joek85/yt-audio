import ytaudio from "../index.js";

const videoId = 'U3SPkP4y-rY'
let related = await ytaudio.getPlayerdata(videoId);

console.log(related)
