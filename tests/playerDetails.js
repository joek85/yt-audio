import ytaudio from "../index.js";

const videoId = 'GCpvmHi1gxU'
let details = await ytaudio.getPlayerData(videoId);
console.log(details)