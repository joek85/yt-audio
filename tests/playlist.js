import ytaudio from "../index.js";

let playlistId = 'PLFn7cc_pELdZ3Xf3L637ggUcqESDpC5nb';

let videos = await ytaudio.getPlaylist(playlistId);

console.log(videos)
