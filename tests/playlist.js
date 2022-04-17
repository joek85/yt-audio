import ytaudio from "../index.js";

let playlistId = 'PL_vvkuQ8VEn53Rh9Hd8fFzyPAnUh3SPJz';

let videos = await ytaudio.getPlaylist(playlistId);

// console.log(videos)