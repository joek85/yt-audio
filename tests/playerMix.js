import ytaudio from "../index.js";

const playlistId = 'RDnjCyZOQqtJU'
let details = await ytaudio.getPlayerMix(playlistId);
//console.log(details.contents.twoColumnWatchNextResults.playlist.playlist)
// console.log(details.contents.twoColumnWatchNextResults.secondaryResults.secondaryResults)
console.log(details)
