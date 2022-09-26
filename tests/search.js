import ytaudio from "../index.js";
import path from'path';
import fs from 'fs';
const filepath = path.resolve('/home/joe/Documents/WebstormProjects/yt-audio/', 'info.json');
let searchQuery = 'asot live';

let search = await ytaudio.getSearchResults(searchQuery, '', '');

//   const json = JSON.stringify(search, null, 2)
//     // eslint-disable-next-line max-len
//     .replace(/(ip(?:=|%3D|\/))((?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|[0-9a-f]{1,4}(?:(?::|%3A)[0-9a-f]{1,4}){7})/ig, '$10.0.0.0');
//   fs.writeFile(filepath, json, err2 => {
//     if (err2) throw err2;
//   });
 console.log(search.primaryResults)
