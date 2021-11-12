## USAGE

### video details
```
let results = await ytaudio.getPlayerdata(videoId);

{
  videoId: 'U3SPkP4y-rY',
  thumbnails: [
    {
      url: 'https://i.ytimg.com/vi/U3SPkP4y-rY/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLACsuq_z9Q4AZIiqUU__M3Z3u-Q8Q',
      width: 168,
      height: 94
    },
    {
      url: 'https://i.ytimg.com/vi/U3SPkP4y-rY/hqdefault.jpg?sqp=-oaymwEbCMQBEG5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCSbnM1ihwzQXLKIjhamudDUBgU4Q',
      width: 196,
      height: 110
    },
    {
      url: 'https://i.ytimg.com/vi/U3SPkP4y-rY/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDzy29cduz6OkaDF5IYd33WVHHBQw',
      width: 246,
      height: 138
    },
    {
      url: 'https://i.ytimg.com/vi/U3SPkP4y-rY/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBfQst7nKDnEcznur2SFt8yuW5Rmg',
      width: 336,
      height: 188
    },
    {
      url: 'https://i.ytimg.com/vi_webp/U3SPkP4y-rY/maxresdefault.webp',
      width: 1920,
      height: 1080
    }
  ],
  title: "'Night Drive' - Relaxing Deep House & Progressive House Mix",
  isLive: undefined,
  channelId: 'UC14ap4T608Zz_Mz4eezhIqw',
  author: 'The Grand Sound',
  tags: [
    'Deep House',
    'Deep House Mix',
    'Deep House 2019',
    'Deep House Mix 2019',
    'Deep House Summer Mix',
    'Summer Mix',
    'Relaxing',
    'Elegant',
    'Lounge',
    'Studying Music',
    'Progressive House',
    'Progressive House Mix'
  ],
  viewCount: '9123933',
  publishDate: '2019-02-01',
  description: 'Pt. 2: https://youtu.be/wy6EFoVy92A\n' +
    '\n' +
    'Our favorite music on Spotify:\n' +
    'http://bit.ly/TGS-SpotifyPlaylist\n' +
    '\n' +
    'InstaGrand:\n' +
    'https://instagram.com/the.grand.sound\n' +
    '\n' +
    'More The Grand Sound:\n' +
    'https://thegrandsound.ffm.to/listen\n' +
    '\n' +
    'The Grand Sound Communities:\n' +
    'https://discord.gg/kqpNgvF\n' +
    '\n' +
    'Become a Member / Patron:\n' +
    'https://thegrandsound.ffm.to/join\n' +
    'https://www.patreon.com/TheGrandSound\n' +
    '\n' +
    'Download the Mix:\n' +
    'http://bit.ly/DownloadNightDrive\n' +
    '\n' +
    'Download the Photo:\n' +
    'https://unsplash.com/photos/_QdFx92MO2U\n' +
    '\n' +
    'Tracklist:\n' +
    '[00:00] 01. Snade - Crystal Glow\n' +
    'https://open.spotify.com/track/2rv1KaAAx8SU9Aq4UAhpuy\n' +
    '\n' +
    "[02:57] 02. Rokazer - I'm With You Now\n" +
    'https://open.spotify.com/track/5QzHH722aYJz96GGbbUkS3\n' +
    '\n' +
    '[08:49] 03. J.Weo - Lazy Weekend (Soty & Seven24 Remix)\n' +
    'https://open.spotify.com/track/7yPXQGtlUp1bDeFxk91tRd\n' +
    '\n' +
    '[13:53] 04. Ryan Z - Bandera\n' +
    'https://open.spotify.com/track/1teaZH3KQ1OZe1qC4fkigz\n' +
    '\n' +
    '[18:57] 05. Xiera - Rendezvous\n' +
    'https://open.spotify.com/track/4x2bhPRP1JWRG0ku43CZKT\n' +
    '\n' +
    '[23:45] 06. Snade - We Need To Forget\n' +
    'https://open.spotify.com/track/4dh5eNvBVVnBt1sOwEN6Lj\n' +
    '\n' +
    '[29:13] 07. Sense8 - Tamashii\n' +
    'https://open.spotify.com/track/4BxB4Zvw6ynGugag4RI8al\n' +
    '\n' +
    '[34:32] 08. Abaze - Stardust\n' +
    'https://open.spotify.com/track/6apVUHqoskr6AthJOlOFno\n' +
    '\n' +
    '[41:10] 09. Eugene Becker - Our Story\n' +
    'https://open.spotify.com/track/7JqtrQZkwnuT0fjq5Hp0jN\n' +
    '\n' +
    '[46:26] 10. South Pole - Keep Your Heart (Jettan Remix)\n' +
    'https://open.spotify.com/track/7LDcVN0mNqob93BJ6zuZoV\n' +
    '\n' +
    '[51:25] 11. Jeef B - Lost Together (Andrei Niconoff Remix)\n' +
    'https://open.spotify.com/track/17KubImD8bvXzw5PtAr9PA\n' +
    '\n' +
    '[57:42] 12. Ryan Z - Flux\n' +
    'https://open.spotify.com/track/2pv3qc63fXsHUGnp1IMz4U\n' +
    '\n' +
    '[1:03:44] 13. Odison & Twenty Three - Amalthea\n' +
    'https://open.spotify.com/track/3CLvF5FN4ztstylj6ZCyIe\n' +
    '\n' +
    '[1:08:12] 14. Nay Jay - Get Over You\n' +
    'https://open.spotify.com/track/4mMcKwzkIyrYXlmtoRGc86\n' +
    '\n' +
    '[1:12:55] 15. Orphyd - Electric Sheep\n' +
    'https://open.spotify.com/track/4dkOBQeyKVMi5XTxQujJyA\n' +
    '\n' +
    '[1:20:00] 16. Odsen - Fly South\n' +
    'https://open.spotify.com/track/0kysQiIQ1CkpdaPImUh07W\n' +
    '\n' +
    '[1:24:44] 17. Edvard Hunger - All What You Need\n' +
    'https://open.spotify.com/track/69G4EK7HRo7tEAszdifTrF\n' +
    '\n' +
    '[1:30:30] 18. Jay FM - Inner Circle\n' +
    'https://open.spotify.com/track/6LO9JvbgkDcipyviv8bjFo\n' +
    '\n' +
    '[1:35:13] 19. Stan Kolev - Listen (Max Freegrant & Slow Fish Remix)\n' +
    'https://open.spotify.com/track/5iE3PyNL1BxMBTLkq5iLIM\n' +
    '\n' +
    '[1:40:41] 20. Abaze - Unity\n' +
    'https://open.spotify.com/track/7fTih5aQTyr3j6FuPlO62J\n' +
    '\n' +
    '[1:45:36] 21. Paul Arcane & Chris Giuliano - Shapes (Liftwalkers Deep Extended Mix)\n' +
    'https://open.spotify.com/track/2lATP6s71VQl7rpwXIuza6\n' +
    '\n' +
    '[1:51:01] 22. Max Freegrant - Drama King (Stan Kolev Extended Remix)\n' +
    'https://open.spotify.com/track/18URdowxHbQuA8pMcyiChi\n' +
    '---\n' +
    'Music Genre: Deep House, Progressive House\n' +
    '\n' +
    '#DeepHouse #ProgressiveHouse #TheGrandSound',
  lengthSeconds: '7008',
  formats: [
    {
      itag: 137,
      url: 'https://r1---sn-vbxgv-cxtz.googlevideo.com/videoplayback?expire=1636669926&ei=hkWNYZuFEITIWMnlsKAI&ip=178.135.10.241&id=o-AMz1s3QcRkz4FXmxoBiZ5SCTVJ1m-cctto42tC3NOPhb&itag=137&aitags=133%2C134%2C135%2C136%2C137%2C160%2C242%2C243%2C244%2C247%2C248%2C278%2C394%2C395%2C396%2C397%2C398%2C399&source=youtube&requiressl=yes&mh=3V&mm=31%2C29&mn=sn-vbxgv-cxtz%2Csn-hgn7rn7k&ms=au%2Crdu&mv=m&mvi=1&pcm2cms=yes&pl=24&initcwndbps=210000&vprv=1&mime=video%2Fmp4&ns=ShuMDjqm-tB_Su9qkW9p1B0G&gir=yes&clen=500663131&dur=7008.133&lmt=1580511451859029&mt=1636648135&fvip=1&keepalive=yes&fexp=24001373%2C24007246&c=WEB&txp=5535432&n=HEisO6hUIV3VMnJi_H&sparams=expire%2Cei%2Cip%2Cid%2Caitags%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cdur%2Clmt&sig=AOq0QJ8wRQIhAOMwW3-yWzdxItPxSs_fdbzk2edIl-8_VHB8rUAxsfpOAiAB6aXjKMd-24Y47eIGE7xpqDJczEMzQLzV-KvGZB-UpQ%3D%3D&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpcm2cms%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRQIgLy46xOz12TMjzqIIFz4PPJOUarb3B6k5N6wOkgaCikECIQCe2aeDJHkg8fXSnrMTwrgznwhLJLP4OBUV9yhNKWY0vw%3D%3D',
      mimeType: 'video/mp4; codecs="avc1.640028"',
      bitrate: 3969171,
      width: 1920,
      height: 1080,
      initRange: [Object],
      indexRange: [Object],
      lastModified: '1580511451859029',
      contentLength: '500663131',
      quality: 'hd1080',
      fps: 30,
      qualityLabel: '1080p',
      projectionType: 'RECTANGULAR',
      averageBitrate: 571522,
      approxDurationMs: '7008133'
    },
    ...
  ]
}
```

### related videos
```
let related = await ytaudio.getRelatedVideos(videoId, continuation, tracking)

{
  videos: [
    {
      type: 'video',
      id: 'VSjTcTo5sn8',
      title: "'Night Drive' Pt. 3 - Relaxing Deep House & Progressive House Mix",
      published: '1 year ago',
      author: [Object],
      short_view_count_text: '523K views',
      view_count: '523,103 views',
      length_seconds: '1:59:55',
      thumbnails: [Object],
      richThumbnails: [],
      isLive: false
    },
    {
      type: 'video',
      id: 'n9Y2Eb4BaSg',
      title: 'Night at Work | Instrumental Chill Music Mix',
      published: '10 months ago',
      author: [Object],
      short_view_count_text: '5.2M views',
      view_count: '5,265,642 views',
      length_seconds: '1:01:40',
      thumbnails: [Object],
      richThumbnails: [],
      isLive: false
    },
    {
      type: 'plalist',
      id: 'RDCLAK5uy_mPolD_J22gS1SKxufARWcTZd1UrAH_0ZI',
      title: 'deepchill',
      thumbnail: [Object],
      published: 'Updated today',
      count: '156'
    },
    ...
  ],
  continuation: {
    apiUrl: '/youtubei/v1/next',
    Token: 'CBQSDRILVTNTUGtQNHktclkYACr-Agj_5ObRk-60lFUIqNKF8JvCjeufAQiwmuTh9eaFlKQBCLrcmPuv5vet8QEIkLjP-qiin8VZCIPbr-myspX6Kgju0MPsy9vM1OYBCP7so9e08OPLYQjc0sqytcGT6vABCPar0un7_fz6EAjnpZ3f6fCW-nII5IeC4Or26L1NCODuy6vogqGXwwEIhd3Jxqj3j-QXCKSfsovBjbr2XQjQ04S0nKym9moIqN-81_qP4dZyCPGois6wlcLQ9wEIl-Ld5Mf6w9K-AQjZ2eOYnZCq0r0BGqoBCgt2YVNvZ2RNWTdOaxqaAQoLdmFTb2dkTVk3TmsSATAaDAjGgqKEBhC4mfi2ASIGCJib2YUGKgQIDRACMkUKBAhkEAEKBQiYARABCgUI3AEQAQoFCJADEAEKBQiGBxABCgUIwAcQAQoFCMUHEAEKBQjGBxABCgUIxwcQAQoFCMgHEAE6CgoDCMwECgMIgAtCBwoDCMsBEAJKBwoDCM0BEAJSBwoDCMsBEAJqD3dhdGNoLW5leHQtZmVlZA%3D%3D',
    ctp: 'CHYQqTAiEwjv9Ifu3JD0AhWOxLQKHZYLAoM='
  }
}
```