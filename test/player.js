const ytaudio = require('..');

ytaudio.getPlayerdata('K890_UvhXZc').then(res =>{
    console.log(res)
    // console.log(res.data)
}).catch(err => {
    console.log(err)
});