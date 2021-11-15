import ytaudio from "../index.js";


let searchQuery = 'inna';

let search = await ytaudio.getSearchResults(searchQuery);

console.log(search)
