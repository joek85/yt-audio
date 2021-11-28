import ytaudio from "../index.js";

let playlistId = '';

let videos = await ytaudio.getPlaylist(playlistId);

console.log(videos)