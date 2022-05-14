import ytaudio from "../index.js";

let playlistId = 'RDnjCyZOQqtJU';

let videos = await ytaudio.getPlaylist(playlistId);

 console.log(videos)