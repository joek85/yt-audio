import ytaudio from "../index.js";

let playlistId = 'RDCLAK5uy_nvu_HUY0DPNpbB_V0moUfs9s5zABAF8xQ';

let videos = await ytaudio.getPlaylist(playlistId);

 console.log(videos)