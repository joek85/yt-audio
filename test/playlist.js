const axios = require('axios');
const URL = 'https://www.youtube.com/playlist?list=';

const playlistId = 'PLUnUwT_FN6u28lmPGB0-KjZXjbRAuyMYL';

const getPlayerdata = async (id) => {

    try {
        const response = await axios.get(URL + id);
        return response.data
    } catch (err) {
        return err

    }
};
getPlayerdata(playlistId).then(response => {
    let jsonContent = '{' + response.match(/"playlistVideoListRenderer".+?(},")/g);
    jsonContent = jsonContent.substr(0, jsonContent.length);
    console.log(jsonContent)
    const contentArrayJSON = JSON.parse(jsonContent)

    console.log(contentArrayJSON)
}).catch(err => {
    console.log(err)
});


