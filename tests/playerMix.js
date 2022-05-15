import ytaudio from "../index.js";

const playlistId = 'RDnjCyZOQqtJU'
let details = await ytaudio.getPlayerMix(playlistId);
console.log(details)
