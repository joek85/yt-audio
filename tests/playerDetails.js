import ytaudio from "../index.js";
import fetch from 'node-fetch';

const videoId = '-EJHanyDBnQ'
let details = await ytaudio.getPlayerData(videoId);
console.log(details.chapters)
   