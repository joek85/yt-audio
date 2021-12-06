import ytaudio from "../index.js";

let playlistId = 'RDCLAK5uy_nGZRi-an-ruqiZlNJSGhCDHucdp2FBNfI';

let videos = await ytaudio.getPlaylist(playlistId);

console.log(videos)