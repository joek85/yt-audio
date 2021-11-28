import ytaudio from "../index.js";

let playlistId = 'RDCLAK5uy_lTF8NR57ogCQH2sespedzwyUhf5zlb0QE';

let videos = await ytaudio.getPlaylist(playlistId);

console.log(videos)