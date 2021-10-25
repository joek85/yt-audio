const ytaudio = require('..');

ytaudio.getPlayerdata('FSJ-rMBgMcg').then(res =>{
    // console.log(res)
    // console.log(res.data)
}).catch(err => {
    console.log(err)
});