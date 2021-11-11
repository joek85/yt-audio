const ytaudio = require('..');

ytaudio.getPlayerdata('DurbFnNpoZw').then(res =>{
    console.log(res)
    // console.log(res.data)
}).catch(err => {
    console.log(err)
});