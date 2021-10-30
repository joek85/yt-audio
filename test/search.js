const ytaudio = require('..');
const path = require('path');
const fs = require('fs');
const filepath = path.resolve(__dirname, 'search.json');

ytaudio.getSearchResults('inna').then(res =>{
    console.log(res)
    //
    // const json = JSON.stringify(res, null, 2)
    //   .replace(/(ip(?:=|%3D|\/))((?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|[0-9a-f]{1,4}(?:(?::|%3A)[0-9a-f]{1,4}){7})/ig, '$10.0.0.0');
    // fs.writeFile(filepath, json, err2 => {
    //   if (err2) throw err2;
    // });

}).catch(err => {
    console.log(err)
});