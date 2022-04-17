import ytaudio from "../index.js";

let channelId = 'UC-9-kyTW8ZkZNDHQJ6FgpwQ';

let videos = await ytaudio.getChannelInfos(channelId);

console.log(videos)
