import ytaudio from "../index.js";

const videoId = '7TSP1BT2Duo'
let details = await ytaudio.getPlayerdata(videoId);

console.log(details)
