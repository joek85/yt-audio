import ytaudio from "../index.js";


let trending = await ytaudio.getTrendingPage();

console.log(trending)