import ytaudio from "../index.js";

let playlistId = 'RDCLAK5uy_kLWIr9gv1XLlPbaDS965-Db4TrBoUTxQ8';

let videos = await ytaudio.getPlaylist(playlistId);

console.log(videos)
