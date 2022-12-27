import ytaudio from "../index.js";

const videoId = 'A6K95eQuneE'
let details = await ytaudio.getPlayerData(videoId);
console.log(details)
   