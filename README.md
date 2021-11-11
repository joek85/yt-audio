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
    {
      itag: 248,
      url: 'https://r1---sn-vbxgv-cxtz.googlevideo.com/videoplayback?expire=1636669926&ei=hkWNYZuFEITIWMnlsKAI&ip=178.135.10.241&id=o-AMz1s3QcRkz4FXmxoBiZ5SCTVJ1m-cctto42tC3NOPhb&itag=248&aitags=133%2C134%2C135%2C136%2C137%2C160%2C242%2C243%2C244%2C247%2C248%2C278%2C394%2C395%2C396%2C397%2C398%2C399&source=youtube&requiressl=yes&mh=3V&mm=31%2C29&mn=sn-vbxgv-cxtz%2Csn-hgn7rn7k&ms=au%2Crdu&mv=m&mvi=1&pcm2cms=yes&pl=24&initcwndbps=210000&vprv=1&mime=video%2Fwebm&ns=ShuMDjqm-tB_Su9qkW9p1B0G&gir=yes&clen=599945059&dur=7008.134&lmt=1580512377631195&mt=1636648135&fvip=1&keepalive=yes&fexp=24001373%2C24007246&c=WEB&txp=5535432&n=HEisO6hUIV3VMnJi_H&sparams=expire%2Cei%2Cip%2Cid%2Caitags%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cdur%2Clmt&sig=AOq0QJ8wRQIhAMwRBRIvnNS-cSFX6oyqdWJE4-gy7MByQ0USaVJmMeCiAiBhs7pIToOpOh6bizMcwPE-6mBnAQz7oEH6D5H6outDmw%3D%3D&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpcm2cms%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRQIgLy46xOz12TMjzqIIFz4PPJOUarb3B6k5N6wOkgaCikECIQCe2aeDJHkg8fXSnrMTwrgznwhLJLP4OBUV9yhNKWY0vw%3D%3D',
      mimeType: 'video/webm; codecs="vp9"',
      bitrate: 2682968,
      width: 1920,
      height: 1080,
      initRange: [Object],
      indexRange: [Object],
      lastModified: '1580512377631195',
      contentLength: '599945059',
      quality: 'hd1080',
      fps: 30,
      qualityLabel: '1080p',
      projectionType: 'RECTANGULAR',
      averageBitrate: 684855,
      colorInfo: [Object],
      approxDurationMs: '7008134'
    },
    {
      itag: 399,
      url: 'https://r1---sn-vbxgv-cxtz.googlevideo.com/videoplayback?expire=1636669926&ei=hkWNYZuFEITIWMnlsKAI&ip=178.135.10.241&id=o-AMz1s3QcRkz4FXmxoBiZ5SCTVJ1m-cctto42tC3NOPhb&itag=399&aitags=133%2C134%2C135%2C136%2C137%2C160%2C242%2C243%2C244%2C247%2C248%2C278%2C394%2C395%2C396%2C397%2C398%2C399&source=youtube&requiressl=yes&mh=3V&mm=31%2C29&mn=sn-vbxgv-cxtz%2Csn-hgn7rn7k&ms=au%2Crdu&mv=m&mvi=1&pcm2cms=yes&pl=24&initcwndbps=210000&vprv=1&mime=video%2Fmp4&ns=ShuMDjqm-tB_Su9qkW9p1B0G&gir=yes&clen=798492398&dur=7008.133&lmt=1580547896395068&mt=1636648135&fvip=1&keepalive=yes&fexp=24001373%2C24007246&c=WEB&txp=5531432&n=HEisO6hUIV3VMnJi_H&sparams=expire%2Cei%2Cip%2Cid%2Caitags%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cdur%2Clmt&sig=AOq0QJ8wRQIgEbTemBhEfJbmPGMwLbcUFyRZ7VqW-m3-VhYdQfqdIQsCIQD53TufHlfctG7oemlJ9QZrlMRFv8wVsUva9v0bZIn2Lw%3D%3D&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpcm2cms%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRQIgLy46xOz12TMjzqIIFz4PPJOUarb3B6k5N6wOkgaCikECIQCe2aeDJHkg8fXSnrMTwrgznwhLJLP4OBUV9yhNKWY0vw%3D%3D',
      mimeType: 'video/mp4; codecs="av01.0.08M.08"',
      bitrate: 2446207,
      width: 1920,
      height: 1080,
      initRange: [Object],
      indexRange: [Object],
      lastModified: '1580547896395068',
      contentLength: '798492398',
      quality: 'hd1080',
      fps: 30,
      qualityLabel: '1080p',
      projectionType: 'RECTANGULAR',
      averageBitrate: 911503,
      colorInfo: [Object],
      approxDurationMs: '7008133'
    },
    {
      itag: 136,
      url: 'https://r1---sn-vbxgv-cxtz.googlevideo.com/videoplayback?expire=1636669926&ei=hkWNYZuFEITIWMnlsKAI&ip=178.135.10.241&id=o-AMz1s3QcRkz4FXmxoBiZ5SCTVJ1m-cctto42tC3NOPhb&itag=136&aitags=133%2C134%2C135%2C136%2C137%2C160%2C242%2C243%2C244%2C247%2C248%2C278%2C394%2C395%2C396%2C397%2C398%2C399&source=youtube&requiressl=yes&mh=3V&mm=31%2C29&mn=sn-vbxgv-cxtz%2Csn-hgn7rn7k&ms=au%2Crdu&mv=m&mvi=1&pcm2cms=yes&pl=24&initcwndbps=210000&vprv=1&mime=video%2Fmp4&ns=ShuMDjqm-tB_Su9qkW9p1B0G&gir=yes&clen=142408445&dur=7008.133&lmt=1580511693932146&mt=1636648135&fvip=1&keepalive=yes&fexp=24001373%2C24007246&c=WEB&txp=5535432&n=HEisO6hUIV3VMnJi_H&sparams=expire%2Cei%2Cip%2Cid%2Caitags%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cdur%2Clmt&sig=AOq0QJ8wRQIgDKvK6RB_2OEwe4T6VaqryI-9qF4wyH6FoLo97wqkDmYCIQCMvxYZxT9STZ43w1OQnFSRZjH21XycKMtlEK6BwOAqZA%3D%3D&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpcm2cms%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRQIgLy46xOz12TMjzqIIFz4PPJOUarb3B6k5N6wOkgaCikECIQCe2aeDJHkg8fXSnrMTwrgznwhLJLP4OBUV9yhNKWY0vw%3D%3D',
      mimeType: 'video/mp4; codecs="avc1.4d401f"',
      bitrate: 1938110,
      width: 1280,
      height: 720,
      initRange: [Object],
      indexRange: [Object],
      lastModified: '1580511693932146',
      contentLength: '142408445',
      quality: 'hd720',
      fps: 30,
      qualityLabel: '720p',
      projectionType: 'RECTANGULAR',
      averageBitrate: 162563,
      approxDurationMs: '7008133'
    },
    {
      itag: 247,
      url: 'https://r1---sn-vbxgv-cxtz.googlevideo.com/videoplayback?expire=1636669926&ei=hkWNYZuFEITIWMnlsKAI&ip=178.135.10.241&id=o-AMz1s3QcRkz4FXmxoBiZ5SCTVJ1m-cctto42tC3NOPhb&itag=247&aitags=133%2C134%2C135%2C136%2C137%2C160%2C242%2C243%2C244%2C247%2C248%2C278%2C394%2C395%2C396%2C397%2C398%2C399&source=youtube&requiressl=yes&mh=3V&mm=31%2C29&mn=sn-vbxgv-cxtz%2Csn-hgn7rn7k&ms=au%2Crdu&mv=m&mvi=1&pcm2cms=yes&pl=24&initcwndbps=210000&vprv=1&mime=video%2Fwebm&ns=ShuMDjqm-tB_Su9qkW9p1B0G&gir=yes&clen=453751778&dur=7008.134&lmt=1580513214224480&mt=1636648135&fvip=1&keepalive=yes&fexp=24001373%2C24007246&c=WEB&txp=5535432&n=HEisO6hUIV3VMnJi_H&sparams=expire%2Cei%2Cip%2Cid%2Caitags%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cdur%2Clmt&sig=AOq0QJ8wRAIgWliul_klxVje1BMbyBxuU8ENOqzcmhuVheEl10s4T2kCIEi-btA_rd0hh33ZMJn65GAF89dkS3WZIK2fce190w4n&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpcm2cms%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRQIgLy46xOz12TMjzqIIFz4PPJOUarb3B6k5N6wOkgaCikECIQCe2aeDJHkg8fXSnrMTwrgznwhLJLP4OBUV9yhNKWY0vw%3D%3D',
      mimeType: 'video/webm; codecs="vp9"',
      bitrate: 1540041,
      width: 1280,
      height: 720,
      initRange: [Object],
      indexRange: [Object],
      lastModified: '1580513214224480',
      contentLength: '453751778',
      quality: 'hd720',
      fps: 30,
      qualityLabel: '720p',
      projectionType: 'RECTANGULAR',
      averageBitrate: 517971,
      colorInfo: [Object],
      approxDurationMs: '7008134'
    },
    {
      itag: 398,
      url: 'https://r1---sn-vbxgv-cxtz.googlevideo.com/videoplayback?expire=1636669926&ei=hkWNYZuFEITIWMnlsKAI&ip=178.135.10.241&id=o-AMz1s3QcRkz4FXmxoBiZ5SCTVJ1m-cctto42tC3NOPhb&itag=398&aitags=133%2C134%2C135%2C136%2C137%2C160%2C242%2C243%2C244%2C247%2C248%2C278%2C394%2C395%2C396%2C397%2C398%2C399&source=youtube&requiressl=yes&mh=3V&mm=31%2C29&mn=sn-vbxgv-cxtz%2Csn-hgn7rn7k&ms=au%2Crdu&mv=m&mvi=1&pcm2cms=yes&pl=24&initcwndbps=210000&vprv=1&mime=video%2Fmp4&ns=ShuMDjqm-tB_Su9qkW9p1B0G&gir=yes&clen=464719046&dur=7008.133&lmt=1580542843817457&mt=1636648135&fvip=1&keepalive=yes&fexp=24001373%2C24007246&c=WEB&txp=5531432&n=HEisO6hUIV3VMnJi_H&sparams=expire%2Cei%2Cip%2Cid%2Caitags%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cdur%2Clmt&sig=AOq0QJ8wRAIgEn0MgfgsenNor-kWTsdYbwzyXdRn1ADaKq18XwsdUyQCIBEvWZziMCwFmOJJABxsNh0wYOX8QhYOCpmCH7O0f0FP&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpcm2cms%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRQIgLy46xOz12TMjzqIIFz4PPJOUarb3B6k5N6wOkgaCikECIQCe2aeDJHkg8fXSnrMTwrgznwhLJLP4OBUV9yhNKWY0vw%3D%3D',
      mimeType: 'video/mp4; codecs="av01.0.05M.08"',
      bitrate: 1337465,
      width: 1280,
      height: 720,
      initRange: [Object],
      indexRange: [Object],
      lastModified: '1580542843817457',
      contentLength: '464719046',
      quality: 'hd720',
      fps: 30,
      qualityLabel: '720p',
      projectionType: 'RECTANGULAR',
      averageBitrate: 530491,
      colorInfo: [Object],
      approxDurationMs: '7008133'
    },
    {
      itag: 135,
      url: 'https://r1---sn-vbxgv-cxtz.googlevideo.com/videoplayback?expire=1636669926&ei=hkWNYZuFEITIWMnlsKAI&ip=178.135.10.241&id=o-AMz1s3QcRkz4FXmxoBiZ5SCTVJ1m-cctto42tC3NOPhb&itag=135&aitags=133%2C134%2C135%2C136%2C137%2C160%2C242%2C243%2C244%2C247%2C248%2C278%2C394%2C395%2C396%2C397%2C398%2C399&source=youtube&requiressl=yes&mh=3V&mm=31%2C29&mn=sn-vbxgv-cxtz%2Csn-hgn7rn7k&ms=au%2Crdu&mv=m&mvi=1&pcm2cms=yes&pl=24&initcwndbps=210000&vprv=1&mime=video%2Fmp4&ns=ShuMDjqm-tB_Su9qkW9p1B0G&gir=yes&clen=71905224&dur=7008.133&lmt=1580511693933017&mt=1636648135&fvip=1&keepalive=yes&fexp=24001373%2C24007246&c=WEB&txp=5535432&n=HEisO6hUIV3VMnJi_H&sparams=expire%2Cei%2Cip%2Cid%2Caitags%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cdur%2Clmt&sig=AOq0QJ8wRQIgTskWvd_kqGHt8SsIb9rI_C-EWf0ZtJK1QLT_1g-6MNICIQDEkAM9BOJ9Dod24wqLG4cRHCCbbZPgzwbTD-X0SITIzg%3D%3D&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpcm2cms%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRQIgLy46xOz12TMjzqIIFz4PPJOUarb3B6k5N6wOkgaCikECIQCe2aeDJHkg8fXSnrMTwrgznwhLJLP4OBUV9yhNKWY0vw%3D%3D',
      mimeType: 'video/mp4; codecs="avc1.4d401f"',
      bitrate: 834728,
      width: 854,
      height: 480,
      initRange: [Object],
      indexRange: [Object],
      lastModified: '1580511693933017',
      contentLength: '71905224',
      quality: 'large',
      fps: 30,
      qualityLabel: '480p',
      projectionType: 'RECTANGULAR',
      averageBitrate: 82082,
      approxDurationMs: '7008133'
    },
    {
      itag: 244,
      url: 'https://r1---sn-vbxgv-cxtz.googlevideo.com/videoplayback?expire=1636669926&ei=hkWNYZuFEITIWMnlsKAI&ip=178.135.10.241&id=o-AMz1s3QcRkz4FXmxoBiZ5SCTVJ1m-cctto42tC3NOPhb&itag=244&aitags=133%2C134%2C135%2C136%2C137%2C160%2C242%2C243%2C244%2C247%2C248%2C278%2C394%2C395%2C396%2C397%2C398%2C399&source=youtube&requiressl=yes&mh=3V&mm=31%2C29&mn=sn-vbxgv-cxtz%2Csn-hgn7rn7k&ms=au%2Crdu&mv=m&mvi=1&pcm2cms=yes&pl=24&initcwndbps=210000&vprv=1&mime=video%2Fwebm&ns=ShuMDjqm-tB_Su9qkW9p1B0G&gir=yes&clen=225666096&dur=7008.134&lmt=1580513214222403&mt=1636648135&fvip=1&keepalive=yes&fexp=24001373%2C24007246&c=WEB&txp=5535432&n=HEisO6hUIV3VMnJi_H&sparams=expire%2Cei%2Cip%2Cid%2Caitags%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cdur%2Clmt&sig=AOq0QJ8wRQIgYMFD6ycwet_L-rscIG2kjF759OnA1AvRaIZv0IGeJ0ACIQD_W_q4taLugQiNWNZFqrYNsBECaXmh3RUr5KWS5cPafQ%3D%3D&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpcm2cms%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRQIgLy46xOz12TMjzqIIFz4PPJOUarb3B6k5N6wOkgaCikECIQCe2aeDJHkg8fXSnrMTwrgznwhLJLP4OBUV9yhNKWY0vw%3D%3D',
      mimeType: 'video/webm; codecs="vp9"',
      bitrate: 778000,
      width: 854,
      height: 480,
      initRange: [Object],
      indexRange: [Object],
      lastModified: '1580513214222403',
      contentLength: '225666096',
      quality: 'large',
      fps: 30,
      qualityLabel: '480p',
      projectionType: 'RECTANGULAR',
      averageBitrate: 257604,
      colorInfo: [Object],
      approxDurationMs: '7008134'
    },
    {
      itag: 397,
      url: 'https://r1---sn-vbxgv-cxtz.googlevideo.com/videoplayback?expire=1636669926&ei=hkWNYZuFEITIWMnlsKAI&ip=178.135.10.241&id=o-AMz1s3QcRkz4FXmxoBiZ5SCTVJ1m-cctto42tC3NOPhb&itag=397&aitags=133%2C134%2C135%2C136%2C137%2C160%2C242%2C243%2C244%2C247%2C248%2C278%2C394%2C395%2C396%2C397%2C398%2C399&source=youtube&requiressl=yes&mh=3V&mm=31%2C29&mn=sn-vbxgv-cxtz%2Csn-hgn7rn7k&ms=au%2Crdu&mv=m&mvi=1&pcm2cms=yes&pl=24&initcwndbps=210000&vprv=1&mime=video%2Fmp4&ns=ShuMDjqm-tB_Su9qkW9p1B0G&gir=yes&clen=228534503&dur=7008.133&lmt=1580541007582449&mt=1636648135&fvip=1&keepalive=yes&fexp=24001373%2C24007246&c=WEB&txp=5531432&n=HEisO6hUIV3VMnJi_H&sparams=expire%2Cei%2Cip%2Cid%2Caitags%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cdur%2Clmt&sig=AOq0QJ8wRAIgJzU7cociHuh22NWmpPbo5fjaYZmQfOv84g-fkn0iv68CIBHCyOZSqzTHqSjrb-LcUutopP60i5oRGHfoGAr89V9D&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpcm2cms%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRQIgLy46xOz12TMjzqIIFz4PPJOUarb3B6k5N6wOkgaCikECIQCe2aeDJHkg8fXSnrMTwrgznwhLJLP4OBUV9yhNKWY0vw%3D%3D',
      mimeType: 'video/mp4; codecs="av01.0.04M.08"',
      bitrate: 665611,
      width: 854,
      height: 480,
      initRange: [Object],
      indexRange: [Object],
      lastModified: '1580541007582449',
      contentLength: '228534503',
      quality: 'large',
      fps: 30,
      qualityLabel: '480p',
      projectionType: 'RECTANGULAR',
      averageBitrate: 260879,
      colorInfo: [Object],
      approxDurationMs: '7008133'
    },
    {
      itag: 134,
      url: 'https://r1---sn-vbxgv-cxtz.googlevideo.com/videoplayback?expire=1636669926&ei=hkWNYZuFEITIWMnlsKAI&ip=178.135.10.241&id=o-AMz1s3QcRkz4FXmxoBiZ5SCTVJ1m-cctto42tC3NOPhb&itag=134&aitags=133%2C134%2C135%2C136%2C137%2C160%2C242%2C243%2C244%2C247%2C248%2C278%2C394%2C395%2C396%2C397%2C398%2C399&source=youtube&requiressl=yes&mh=3V&mm=31%2C29&mn=sn-vbxgv-cxtz%2Csn-hgn7rn7k&ms=au%2Crdu&mv=m&mvi=1&pcm2cms=yes&pl=24&initcwndbps=210000&vprv=1&mime=video%2Fmp4&ns=ShuMDjqm-tB_Su9qkW9p1B0G&gir=yes&clen=45778783&dur=7008.133&lmt=1580511693932039&mt=1636648135&fvip=1&keepalive=yes&fexp=24001373%2C24007246&c=WEB&txp=5535432&n=HEisO6hUIV3VMnJi_H&sparams=expire%2Cei%2Cip%2Cid%2Caitags%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cdur%2Clmt&sig=AOq0QJ8wRAIgKlQ2XTzTCO_Ctl2Ap77NrDZYxpYI33VJNhJQZyIYBSACICWv0EJYsKHwdnZmUHfRMVb6unMcyNAGbDO_mE5_SZzO&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpcm2cms%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRQIgLy46xOz12TMjzqIIFz4PPJOUarb3B6k5N6wOkgaCikECIQCe2aeDJHkg8fXSnrMTwrgznwhLJLP4OBUV9yhNKWY0vw%3D%3D',
      mimeType: 'video/mp4; codecs="avc1.4d401e"',
      bitrate: 665162,
      width: 640,
      height: 360,
      initRange: [Object],
      indexRange: [Object],
      lastModified: '1580511693932039',
      contentLength: '45778783',
      quality: 'medium',
      fps: 30,
      qualityLabel: '360p',
      projectionType: 'RECTANGULAR',
      averageBitrate: 52257,
      highReplication: true,
      approxDurationMs: '7008133'
    },
    {
      itag: 243,
      url: 'https://r1---sn-vbxgv-cxtz.googlevideo.com/videoplayback?expire=1636669926&ei=hkWNYZuFEITIWMnlsKAI&ip=178.135.10.241&id=o-AMz1s3QcRkz4FXmxoBiZ5SCTVJ1m-cctto42tC3NOPhb&itag=243&aitags=133%2C134%2C135%2C136%2C137%2C160%2C242%2C243%2C244%2C247%2C248%2C278%2C394%2C395%2C396%2C397%2C398%2C399&source=youtube&requiressl=yes&mh=3V&mm=31%2C29&mn=sn-vbxgv-cxtz%2Csn-hgn7rn7k&ms=au%2Crdu&mv=m&mvi=1&pcm2cms=yes&pl=24&initcwndbps=210000&vprv=1&mime=video%2Fwebm&ns=ShuMDjqm-tB_Su9qkW9p1B0G&gir=yes&clen=121090185&dur=7008.134&lmt=1580513214223046&mt=1636648135&fvip=1&keepalive=yes&fexp=24001373%2C24007246&c=WEB&txp=5535432&n=HEisO6hUIV3VMnJi_H&sparams=expire%2Cei%2Cip%2Cid%2Caitags%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cdur%2Clmt&sig=AOq0QJ8wRQIhAMEK_RlKSYSCO6JJnZxrpnu1xrsPjRdM-z96c7f-YiycAiA75VpEip7LJ1etWn-LgTiuqfhEco0pc1ejNzfJkTZ4jg%3D%3D&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpcm2cms%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRQIgLy46xOz12TMjzqIIFz4PPJOUarb3B6k5N6wOkgaCikECIQCe2aeDJHkg8fXSnrMTwrgznwhLJLP4OBUV9yhNKWY0vw%3D%3D',
      mimeType: 'video/webm; codecs="vp9"',
      bitrate: 430546,
      width: 640,
      height: 360,
      initRange: [Object],
      indexRange: [Object],
      lastModified: '1580513214223046',
      contentLength: '121090185',
      quality: 'medium',
      fps: 30,
      qualityLabel: '360p',
      projectionType: 'RECTANGULAR',
      averageBitrate: 138228,
      colorInfo: [Object],
      approxDurationMs: '7008134'
    },
    {
      itag: 396,
      url: 'https://r1---sn-vbxgv-cxtz.googlevideo.com/videoplayback?expire=1636669926&ei=hkWNYZuFEITIWMnlsKAI&ip=178.135.10.241&id=o-AMz1s3QcRkz4FXmxoBiZ5SCTVJ1m-cctto42tC3NOPhb&itag=396&aitags=133%2C134%2C135%2C136%2C137%2C160%2C242%2C243%2C244%2C247%2C248%2C278%2C394%2C395%2C396%2C397%2C398%2C399&source=youtube&requiressl=yes&mh=3V&mm=31%2C29&mn=sn-vbxgv-cxtz%2Csn-hgn7rn7k&ms=au%2Crdu&mv=m&mvi=1&pcm2cms=yes&pl=24&initcwndbps=210000&vprv=1&mime=video%2Fmp4&ns=ShuMDjqm-tB_Su9qkW9p1B0G&gir=yes&clen=132417194&dur=7008.133&lmt=1580540249923860&mt=1636648135&fvip=1&keepalive=yes&fexp=24001373%2C24007246&c=WEB&txp=5531432&n=HEisO6hUIV3VMnJi_H&sparams=expire%2Cei%2Cip%2Cid%2Caitags%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cdur%2Clmt&sig=AOq0QJ8wRQIhALO8yr3MzHvn8F7Oj9wIGp3vcwy6tE2pl-IJSCVNslgyAiApMjSRvigzKQ4W5Yh8PQl2pmHqmOuqTlHVtmtQQHXw5A%3D%3D&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpcm2cms%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRQIgLy46xOz12TMjzqIIFz4PPJOUarb3B6k5N6wOkgaCikECIQCe2aeDJHkg8fXSnrMTwrgznwhLJLP4OBUV9yhNKWY0vw%3D%3D',
      mimeType: 'video/mp4; codecs="av01.0.01M.08"',
      bitrate: 352683,
      width: 640,
      height: 360,
      initRange: [Object],
      indexRange: [Object],
      lastModified: '1580540249923860',
      contentLength: '132417194',
      quality: 'medium',
      fps: 30,
      qualityLabel: '360p',
      projectionType: 'RECTANGULAR',
      averageBitrate: 151158,
      colorInfo: [Object],
      approxDurationMs: '7008133'
    },
    {
      itag: 133,
      url: 'https://r1---sn-vbxgv-cxtz.googlevideo.com/videoplayback?expire=1636669926&ei=hkWNYZuFEITIWMnlsKAI&ip=178.135.10.241&id=o-AMz1s3QcRkz4FXmxoBiZ5SCTVJ1m-cctto42tC3NOPhb&itag=133&aitags=133%2C134%2C135%2C136%2C137%2C160%2C242%2C243%2C244%2C247%2C248%2C278%2C394%2C395%2C396%2C397%2C398%2C399&source=youtube&requiressl=yes&mh=3V&mm=31%2C29&mn=sn-vbxgv-cxtz%2Csn-hgn7rn7k&ms=au%2Crdu&mv=m&mvi=1&pcm2cms=yes&pl=24&initcwndbps=210000&vprv=1&mime=video%2Fmp4&ns=ShuMDjqm-tB_Su9qkW9p1B0G&gir=yes&clen=24896519&dur=7008.133&lmt=1580511693933948&mt=1636648135&fvip=1&keepalive=yes&fexp=24001373%2C24007246&c=WEB&txp=5535432&n=HEisO6hUIV3VMnJi_H&sparams=expire%2Cei%2Cip%2Cid%2Caitags%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cdur%2Clmt&sig=AOq0QJ8wRAIgeNW-yQsgNQ72yTfqoyKKIPqBTwgXkapyuVfrm57ejtACID-kBHPTgh8LilN5Iy8bJlcNwFkyPq0o5oSv23ofeyLX&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpcm2cms%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRQIgLy46xOz12TMjzqIIFz4PPJOUarb3B6k5N6wOkgaCikECIQCe2aeDJHkg8fXSnrMTwrgznwhLJLP4OBUV9yhNKWY0vw%3D%3D',
      mimeType: 'video/mp4; codecs="avc1.4d4015"',
      bitrate: 286937,
      width: 426,
      height: 240,
      initRange: [Object],
      indexRange: [Object],
      lastModified: '1580511693933948',
      contentLength: '24896519',
      quality: 'small',
      fps: 30,
      qualityLabel: '240p',
      projectionType: 'RECTANGULAR',
      averageBitrate: 28420,
      approxDurationMs: '7008133'
    },
    {
      itag: 242,
      url: 'https://r1---sn-vbxgv-cxtz.googlevideo.com/videoplayback?expire=1636669926&ei=hkWNYZuFEITIWMnlsKAI&ip=178.135.10.241&id=o-AMz1s3QcRkz4FXmxoBiZ5SCTVJ1m-cctto42tC3NOPhb&itag=242&aitags=133%2C134%2C135%2C136%2C137%2C160%2C242%2C243%2C244%2C247%2C248%2C278%2C394%2C395%2C396%2C397%2C398%2C399&source=youtube&requiressl=yes&mh=3V&mm=31%2C29&mn=sn-vbxgv-cxtz%2Csn-hgn7rn7k&ms=au%2Crdu&mv=m&mvi=1&pcm2cms=yes&pl=24&initcwndbps=210000&vprv=1&mime=video%2Fwebm&ns=ShuMDjqm-tB_Su9qkW9p1B0G&gir=yes&clen=65894102&dur=7008.134&lmt=1580513214219494&mt=1636648135&fvip=1&keepalive=yes&fexp=24001373%2C24007246&c=WEB&txp=5535432&n=HEisO6hUIV3VMnJi_H&sparams=expire%2Cei%2Cip%2Cid%2Caitags%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cdur%2Clmt&sig=AOq0QJ8wRAIgCMrjSUZhCE27l6VK7Ca7K-iQ8tNQGGjj1isDMz7wZlsCIDCYafi5a-K9QhwPspJ0c9X5Ysa1CG2Ze9ZuHh94Gpkj&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpcm2cms%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRQIgLy46xOz12TMjzqIIFz4PPJOUarb3B6k5N6wOkgaCikECIQCe2aeDJHkg8fXSnrMTwrgznwhLJLP4OBUV9yhNKWY0vw%3D%3D',
      mimeType: 'video/webm; codecs="vp9"',
      bitrate: 255057,
      width: 426,
      height: 240,
      initRange: [Object],
      indexRange: [Object],
      lastModified: '1580513214219494',
      contentLength: '65894102',
      quality: 'small',
      fps: 30,
      qualityLabel: '240p',
      projectionType: 'RECTANGULAR',
      averageBitrate: 75220,
      colorInfo: [Object],
      approxDurationMs: '7008134'
    },
    {
      itag: 395,
      url: 'https://r1---sn-vbxgv-cxtz.googlevideo.com/videoplayback?expire=1636669926&ei=hkWNYZuFEITIWMnlsKAI&ip=178.135.10.241&id=o-AMz1s3QcRkz4FXmxoBiZ5SCTVJ1m-cctto42tC3NOPhb&itag=395&aitags=133%2C134%2C135%2C136%2C137%2C160%2C242%2C243%2C244%2C247%2C248%2C278%2C394%2C395%2C396%2C397%2C398%2C399&source=youtube&requiressl=yes&mh=3V&mm=31%2C29&mn=sn-vbxgv-cxtz%2Csn-hgn7rn7k&ms=au%2Crdu&mv=m&mvi=1&pcm2cms=yes&pl=24&initcwndbps=210000&vprv=1&mime=video%2Fmp4&ns=ShuMDjqm-tB_Su9qkW9p1B0G&gir=yes&clen=66478157&dur=7008.133&lmt=1580539964638283&mt=1636648135&fvip=1&keepalive=yes&fexp=24001373%2C24007246&c=WEB&txp=5531432&n=HEisO6hUIV3VMnJi_H&sparams=expire%2Cei%2Cip%2Cid%2Caitags%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cdur%2Clmt&sig=AOq0QJ8wRgIhAMrjVCQh50EllP8iFRg-qY6nIcwZowrbQwJjQK6N-aM_AiEAr7qSIwRbWthlbVEmaiES389m_71QJ3rY6Xe9K72OH7A%3D&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpcm2cms%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRQIgLy46xOz12TMjzqIIFz4PPJOUarb3B6k5N6wOkgaCikECIQCe2aeDJHkg8fXSnrMTwrgznwhLJLP4OBUV9yhNKWY0vw%3D%3D',
      mimeType: 'video/mp4; codecs="av01.0.00M.08"',
      bitrate: 206532,
      width: 426,
      height: 240,
      initRange: [Object],
      indexRange: [Object],
      lastModified: '1580539964638283',
      contentLength: '66478157',
      quality: 'small',
      fps: 30,
      qualityLabel: '240p',
      projectionType: 'RECTANGULAR',
      averageBitrate: 75886,
      colorInfo: [Object],
      approxDurationMs: '7008133'
    },
    {
      itag: 160,
      url: 'https://r1---sn-vbxgv-cxtz.googlevideo.com/videoplayback?expire=1636669926&ei=hkWNYZuFEITIWMnlsKAI&ip=178.135.10.241&id=o-AMz1s3QcRkz4FXmxoBiZ5SCTVJ1m-cctto42tC3NOPhb&itag=160&aitags=133%2C134%2C135%2C136%2C137%2C160%2C242%2C243%2C244%2C247%2C248%2C278%2C394%2C395%2C396%2C397%2C398%2C399&source=youtube&requiressl=yes&mh=3V&mm=31%2C29&mn=sn-vbxgv-cxtz%2Csn-hgn7rn7k&ms=au%2Crdu&mv=m&mvi=1&pcm2cms=yes&pl=24&initcwndbps=210000&vprv=1&mime=video%2Fmp4&ns=ShuMDjqm-tB_Su9qkW9p1B0G&gir=yes&clen=15594318&dur=7008.133&lmt=1580511693933295&mt=1636648135&fvip=1&keepalive=yes&fexp=24001373%2C24007246&c=WEB&txp=5535432&n=HEisO6hUIV3VMnJi_H&sparams=expire%2Cei%2Cip%2Cid%2Caitags%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cdur%2Clmt&sig=AOq0QJ8wRgIhAKMiX8kkLwDpEoUdD2mTmGHJfqHKrSmO3THXHfVX8bITAiEA7cNMYZeX7c7f4LRmLO2IfaQsS6KcyaZi9SfFT9QEGtk%3D&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpcm2cms%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRQIgLy46xOz12TMjzqIIFz4PPJOUarb3B6k5N6wOkgaCikECIQCe2aeDJHkg8fXSnrMTwrgznwhLJLP4OBUV9yhNKWY0vw%3D%3D',
      mimeType: 'video/mp4; codecs="avc1.4d400c"',
      bitrate: 139653,
      width: 256,
      height: 144,
      initRange: [Object],
      indexRange: [Object],
      lastModified: '1580511693933295',
      contentLength: '15594318',
      quality: 'tiny',
      fps: 30,
      qualityLabel: '144p',
      projectionType: 'RECTANGULAR',
      averageBitrate: 17801,
      approxDurationMs: '7008133'
    },
    {
      itag: 278,
      url: 'https://r1---sn-vbxgv-cxtz.googlevideo.com/videoplayback?expire=1636669926&ei=hkWNYZuFEITIWMnlsKAI&ip=178.135.10.241&id=o-AMz1s3QcRkz4FXmxoBiZ5SCTVJ1m-cctto42tC3NOPhb&itag=278&aitags=133%2C134%2C135%2C136%2C137%2C160%2C242%2C243%2C244%2C247%2C248%2C278%2C394%2C395%2C396%2C397%2C398%2C399&source=youtube&requiressl=yes&mh=3V&mm=31%2C29&mn=sn-vbxgv-cxtz%2Csn-hgn7rn7k&ms=au%2Crdu&mv=m&mvi=1&pcm2cms=yes&pl=24&initcwndbps=210000&vprv=1&mime=video%2Fwebm&ns=ShuMDjqm-tB_Su9qkW9p1B0G&gir=yes&clen=31577566&dur=7008.134&lmt=1580513214219782&mt=1636648135&fvip=1&keepalive=yes&fexp=24001373%2C24007246&c=WEB&txp=5535432&n=HEisO6hUIV3VMnJi_H&sparams=expire%2Cei%2Cip%2Cid%2Caitags%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cdur%2Clmt&sig=AOq0QJ8wRQIhALFsYJzeW1KzvMmbWdkF0O0vHMIx_Mzmk0ld8zO6sQIIAiBicnmt7Z01Km5wU1iTQR21H9KrU-63iJIPGo1yVLc7jw%3D%3D&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpcm2cms%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRQIgLy46xOz12TMjzqIIFz4PPJOUarb3B6k5N6wOkgaCikECIQCe2aeDJHkg8fXSnrMTwrgznwhLJLP4OBUV9yhNKWY0vw%3D%3D',
      mimeType: 'video/webm; codecs="vp9"',
      bitrate: 134761,
      width: 256,
      height: 144,
      initRange: [Object],
      indexRange: [Object],
      lastModified: '1580513214219782',
      contentLength: '31577566',
      quality: 'tiny',
      fps: 30,
      qualityLabel: '144p',
      projectionType: 'RECTANGULAR',
      averageBitrate: 36046,
      colorInfo: [Object],
      approxDurationMs: '7008134'
    },
    {
      itag: 394,
      url: 'https://r1---sn-vbxgv-cxtz.googlevideo.com/videoplayback?expire=1636669926&ei=hkWNYZuFEITIWMnlsKAI&ip=178.135.10.241&id=o-AMz1s3QcRkz4FXmxoBiZ5SCTVJ1m-cctto42tC3NOPhb&itag=394&aitags=133%2C134%2C135%2C136%2C137%2C160%2C242%2C243%2C244%2C247%2C248%2C278%2C394%2C395%2C396%2C397%2C398%2C399&source=youtube&requiressl=yes&mh=3V&mm=31%2C29&mn=sn-vbxgv-cxtz%2Csn-hgn7rn7k&ms=au%2Crdu&mv=m&mvi=1&pcm2cms=yes&pl=24&initcwndbps=210000&vprv=1&mime=video%2Fmp4&ns=ShuMDjqm-tB_Su9qkW9p1B0G&gir=yes&clen=33857075&dur=7008.133&lmt=1580539497303481&mt=1636648135&fvip=1&keepalive=yes&fexp=24001373%2C24007246&c=WEB&txp=5531432&n=HEisO6hUIV3VMnJi_H&sparams=expire%2Cei%2Cip%2Cid%2Caitags%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cdur%2Clmt&sig=AOq0QJ8wRQIhALP9NXiHXqgT5OJghLqNs7POA_RAN2-JpMrW84mL-SYHAiBYaaeXHJwkse-ecpT2PbMEI4DgdymkPvItWu1BKeVJHA%3D%3D&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpcm2cms%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRQIgLy46xOz12TMjzqIIFz4PPJOUarb3B6k5N6wOkgaCikECIQCe2aeDJHkg8fXSnrMTwrgznwhLJLP4OBUV9yhNKWY0vw%3D%3D',
      mimeType: 'video/mp4; codecs="av01.0.00M.08"',
      bitrate: 107827,
      width: 256,
      height: 144,
      initRange: [Object],
      indexRange: [Object],
      lastModified: '1580539497303481',
      contentLength: '33857075',
      quality: 'tiny',
      fps: 30,
      qualityLabel: '144p',
      projectionType: 'RECTANGULAR',
      averageBitrate: 38648,
      colorInfo: [Object],
      approxDurationMs: '7008133'
    },
    {
      itag: 140,
      url: 'https://r1---sn-vbxgv-cxtz.googlevideo.com/videoplayback?expire=1636669926&ei=hkWNYZuFEITIWMnlsKAI&ip=178.135.10.241&id=o-AMz1s3QcRkz4FXmxoBiZ5SCTVJ1m-cctto42tC3NOPhb&itag=140&source=youtube&requiressl=yes&mh=3V&mm=31%2C29&mn=sn-vbxgv-cxtz%2Csn-hgn7rn7k&ms=au%2Crdu&mv=m&mvi=1&pcm2cms=yes&pl=24&initcwndbps=210000&vprv=1&mime=audio%2Fmp4&ns=ShuMDjqm-tB_Su9qkW9p1B0G&gir=yes&clen=113421323&dur=7008.246&lmt=1580509882200594&mt=1636648135&fvip=1&keepalive=yes&fexp=24001373%2C24007246&c=WEB&txp=5531432&n=HEisO6hUIV3VMnJi_H&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cdur%2Clmt&sig=AOq0QJ8wRQIgGbuqK2d9BOLhDD4krcOcHD_e6MZPwBT7-bpJw84pe6kCIQCYTndtFB_spj76zfFGdAcPBAb0eKRcGdcb4wmmctHRYQ%3D%3D&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpcm2cms%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRQIgLy46xOz12TMjzqIIFz4PPJOUarb3B6k5N6wOkgaCikECIQCe2aeDJHkg8fXSnrMTwrgznwhLJLP4OBUV9yhNKWY0vw%3D%3D',
      mimeType: 'audio/mp4; codecs="mp4a.40.2"',
      bitrate: 137044,
      initRange: [Object],
      indexRange: [Object],
      lastModified: '1580509882200594',
      contentLength: '113421323',
      quality: 'tiny',
      projectionType: 'RECTANGULAR',
      averageBitrate: 129471,
      highReplication: true,
      audioQuality: 'AUDIO_QUALITY_MEDIUM',
      approxDurationMs: '7008246',
      audioSampleRate: '44100',
      audioChannels: 2,
      loudnessDb: 3.6991596
    },
    {
      itag: 249,
      url: 'https://r1---sn-vbxgv-cxtz.googlevideo.com/videoplayback?expire=1636669926&ei=hkWNYZuFEITIWMnlsKAI&ip=178.135.10.241&id=o-AMz1s3QcRkz4FXmxoBiZ5SCTVJ1m-cctto42tC3NOPhb&itag=249&source=youtube&requiressl=yes&mh=3V&mm=31%2C29&mn=sn-vbxgv-cxtz%2Csn-hgn7rn7k&ms=au%2Crdu&mv=m&mvi=1&pcm2cms=yes&pl=24&initcwndbps=210000&vprv=1&mime=audio%2Fwebm&ns=ShuMDjqm-tB_Su9qkW9p1B0G&gir=yes&clen=44853056&dur=7008.201&lmt=1580509851520840&mt=1636648135&fvip=1&keepalive=yes&fexp=24001373%2C24007246&c=WEB&txp=5531432&n=HEisO6hUIV3VMnJi_H&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cdur%2Clmt&sig=AOq0QJ8wRAIgZFxxAtmQoeblKUQcZGmFGraCnLn8RuOGPleK22jfX5oCIAQmVTqxH11iavrMBWtMG7m72_X-O4H16ObDqzRmoBDX&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpcm2cms%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRQIgLy46xOz12TMjzqIIFz4PPJOUarb3B6k5N6wOkgaCikECIQCe2aeDJHkg8fXSnrMTwrgznwhLJLP4OBUV9yhNKWY0vw%3D%3D',
      mimeType: 'audio/webm; codecs="opus"',
      bitrate: 84054,
      initRange: [Object],
      indexRange: [Object],
      lastModified: '1580509851520840',
      contentLength: '44853056',
      quality: 'tiny',
      projectionType: 'RECTANGULAR',
      averageBitrate: 51200,
      audioQuality: 'AUDIO_QUALITY_LOW',
      approxDurationMs: '7008201',
      audioSampleRate: '48000',
      audioChannels: 2,
      loudnessDb: 3.6991596
    },
    {
      itag: 250,
      url: 'https://r1---sn-vbxgv-cxtz.googlevideo.com/videoplayback?expire=1636669926&ei=hkWNYZuFEITIWMnlsKAI&ip=178.135.10.241&id=o-AMz1s3QcRkz4FXmxoBiZ5SCTVJ1m-cctto42tC3NOPhb&itag=250&source=youtube&requiressl=yes&mh=3V&mm=31%2C29&mn=sn-vbxgv-cxtz%2Csn-hgn7rn7k&ms=au%2Crdu&mv=m&mvi=1&pcm2cms=yes&pl=24&initcwndbps=210000&vprv=1&mime=audio%2Fwebm&ns=ShuMDjqm-tB_Su9qkW9p1B0G&gir=yes&clen=59345628&dur=7008.201&lmt=1580509858231617&mt=1636648135&fvip=1&keepalive=yes&fexp=24001373%2C24007246&c=WEB&txp=5531432&n=HEisO6hUIV3VMnJi_H&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cdur%2Clmt&sig=AOq0QJ8wRgIhANZVTbvTFc-CZv92C9s69sd_xvbRTtj3e6Kg86xaKV5rAiEAxf9fw-THJFuxgQjkiX_Epyy93zk9JSfiYOpNKwmVPk8%3D&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpcm2cms%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRQIgLy46xOz12TMjzqIIFz4PPJOUarb3B6k5N6wOkgaCikECIQCe2aeDJHkg8fXSnrMTwrgznwhLJLP4OBUV9yhNKWY0vw%3D%3D',
      mimeType: 'audio/webm; codecs="opus"',
      bitrate: 105812,
      initRange: [Object],
      indexRange: [Object],
      lastModified: '1580509858231617',
      contentLength: '59345628',
      quality: 'tiny',
      projectionType: 'RECTANGULAR',
      averageBitrate: 67744,
      audioQuality: 'AUDIO_QUALITY_LOW',
      approxDurationMs: '7008201',
      audioSampleRate: '48000',
      audioChannels: 2,
      loudnessDb: 3.6991596
    },
    {
      itag: 251,
      url: 'https://r1---sn-vbxgv-cxtz.googlevideo.com/videoplayback?expire=1636669926&ei=hkWNYZuFEITIWMnlsKAI&ip=178.135.10.241&id=o-AMz1s3QcRkz4FXmxoBiZ5SCTVJ1m-cctto42tC3NOPhb&itag=251&source=youtube&requiressl=yes&mh=3V&mm=31%2C29&mn=sn-vbxgv-cxtz%2Csn-hgn7rn7k&ms=au%2Crdu&mv=m&mvi=1&pcm2cms=yes&pl=24&initcwndbps=210000&vprv=1&mime=audio%2Fwebm&ns=ShuMDjqm-tB_Su9qkW9p1B0G&gir=yes&clen=118364242&dur=7008.201&lmt=1580509898122617&mt=1636648135&fvip=1&keepalive=yes&fexp=24001373%2C24007246&c=WEB&txp=5531432&n=HEisO6hUIV3VMnJi_H&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cdur%2Clmt&sig=AOq0QJ8wRQIhAKNZAo50hNx1gK2bgFmP-Yyss2C_1AWbcSgEETkFhjGHAiBdjKuEo0LBqZxTG1M5Y8irYJY7q8XT_MCGpFCetuAC-A%3D%3D&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpcm2cms%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRQIgLy46xOz12TMjzqIIFz4PPJOUarb3B6k5N6wOkgaCikECIQCe2aeDJHkg8fXSnrMTwrgznwhLJLP4OBUV9yhNKWY0vw%3D%3D',
      mimeType: 'audio/webm; codecs="opus"',
      bitrate: 186700,
      initRange: [Object],
      indexRange: [Object],
      lastModified: '1580509898122617',
      contentLength: '118364242',
      quality: 'tiny',
      projectionType: 'RECTANGULAR',
      averageBitrate: 135115,
      audioQuality: 'AUDIO_QUALITY_MEDIUM',
      approxDurationMs: '7008201',
      audioSampleRate: '48000',
      audioChannels: 2,
      loudnessDb: 3.6991596
    }
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
    {
      type: 'video',
      id: '8VvfMv9mLjo',
      title: '4K Maldives Summer Mix 2021 🍓 Best Of Tropical Deep House Music Chill Out Mix By Deep Mix #2',
      published: '5 months ago',
      author: [Object],
      short_view_count_text: '2.7M views',
      view_count: '2,727,221 views',
      length_seconds: '4:07:47',
      thumbnails: [Object],
      richThumbnails: [],
      isLive: false
    },
    {
      type: 'video',
      id: 'WYp9Eo9T3BA',
      title: 'Best of Shingo Nakamura 01 (2-Hour Melodic Progressive House Mix)',
      published: '4 years ago',
      author: [Object],
      short_view_count_text: '8.6M views',
      view_count: '8,673,097 views',
      length_seconds: '2:15:21',
      thumbnails: [Object],
      richThumbnails: [],
      isLive: false
    },
    {
      type: 'video',
      id: 'KvRVky0r7YM',
      title: 'Progressive House · Relaxing Focus Music · 24/7 Live Radio',
      published: '',
      author: [Object],
      short_view_count_text: undefined,
      view_count: undefined,
      length_seconds: '',
      thumbnails: [Object],
      richThumbnails: [],
      isLive: true
    },
    {
      type: 'video',
      id: '5qky3L2Q6G4',
      title: 'Deep House 2021 · Relaxing Study Music · 24/7 Live Radio',
      published: '',
      author: [Object],
      short_view_count_text: undefined,
      view_count: undefined,
      length_seconds: '',
      thumbnails: [Object],
      richThumbnails: [],
      isLive: true
    },
    {
      type: 'video',
      id: 'YZePg0ro9n4',
      title: 'Emma Peters, Zubi, Leo Kodian, Moxura, Dj Goja, Efemero, Stoto, Linkin Park - Feelings Good Mix',
      published: '2 days ago',
      author: [Object],
      short_view_count_text: '46K views',
      view_count: '46,083 views',
      length_seconds: '3:34:19',
      thumbnails: [Object],
      richThumbnails: [],
      isLive: false
    },
    {
      type: 'video',
      id: '8NROC1ZSqVw',
      title: '♫ Best Progressive House Mix 2021 Vol. #4 ♫',
      published: '5 months ago',
      author: [Object],
      short_view_count_text: '307K views',
      view_count: '307,306 views',
      length_seconds: '2:00:01',
      thumbnails: [Object],
      richThumbnails: [],
      isLive: false
    },
    {
      type: 'video',
      id: 'EPXz7700lfY',
      title: 'Deep Emotions 2021 | Deep House • Nu Disco • Chill House Mix #16',
      published: '4 months ago',
      author: [Object],
      short_view_count_text: '3.5M views',
      view_count: '3,590,663 views',
      length_seconds: '2:48:53',
      thumbnails: [Object],
      richThumbnails: [],
      isLive: false
    },
    {
      type: 'video',
      id: 'cvRbhpvnUuc',
      title: '♫ Best Deep House Mix 2018 Vol. #1 ♫',
      published: '3 years ago',
      author: [Object],
      short_view_count_text: '11M views',
      view_count: '11,384,803 views',
      length_seconds: '1:59:56',
      thumbnails: [Object],
      richThumbnails: [],
      isLive: false
    },
    {
      type: 'video',
      id: 'TXujtqwAg-Q',
      title: "'Rooftop Lounge' - Relaxing Deep House & Progressive House Mix",
      published: '2 years ago',
      author: [Object],
      short_view_count_text: '1.2M views',
      view_count: '1,277,848 views',
      length_seconds: '1:58:09',
      thumbnails: [Object],
      richThumbnails: [],
      isLive: false
    },
    {
      type: 'video',
      id: 'wy6EFoVy92A',
      title: "'Night Drive' Pt. 2 - Relaxing Deep House & Progressive House Mix",
      published: '2 years ago',
      author: [Object],
      short_view_count_text: '1.4M views',
      view_count: '1,453,304 views',
      length_seconds: '1:59:54',
      thumbnails: [Object],
      richThumbnails: [],
      isLive: false
    },
    {
      type: 'video',
      id: 'F8g_uojSboU',
      title: 'Johnny M - Deep Addicted | Deep House Mix',
      published: '1 month ago',
      author: [Object],
      short_view_count_text: '178K views',
      view_count: '178,994 views',
      length_seconds: '1:07:02',
      thumbnails: [Object],
      richThumbnails: [],
      isLive: false
    },
    {
      type: 'video',
      id: 'XezobBFsj6Q',
      title: 'Boris Brejcha - Paul Kalkbrenner - Faithless - Daft Punk - WhoMadeWho • ASTRONAUT (Vasho Mix)',
      published: '5 months ago',
      author: [Object],
      short_view_count_text: '1.8M views',
      view_count: '1,801,930 views',
      length_seconds: '1:24:25',
      thumbnails: [Object],
      richThumbnails: [],
      isLive: false
    },
    {
      type: 'video',
      id: 'auyZYcaBKdA',
      title: '♫ Best Progressive Trance Mix 2021 Vol. #2 ♫',
      published: '3 months ago',
      author: [Object],
      short_view_count_text: '168K views',
      view_count: '168,839 views',
      length_seconds: '2:00:01',
      thumbnails: [Object],
      richThumbnails: [],
      isLive: false
    },
    {
      type: 'video',
      id: 'cq2Ef6rvL6g',
      title: 'AMBIENT CHILLOUT LOUNGE RELAXING MUSIC - Essential Relax Session 1 - Background Chill Out Music -',
      published: '2 years ago',
      author: [Object],
      short_view_count_text: '26M views',
      view_count: '26,571,560 views',
      length_seconds: '3:03:14',
      thumbnails: [Object],
      richThumbnails: [],
      isLive: false
    },
    {
      type: 'video',
      id: '96EIqwnClHE',
      title: '♫ Best Progressive House Mix 2015 Vol. #10 [HD] ♫',
      published: '5 years ago',
      author: [Object],
      short_view_count_text: '1.6M views',
      view_count: '1,674,223 views',
      length_seconds: '2:05:03',
      thumbnails: [Object],
      richThumbnails: [],
      isLive: false
    },
    {
      type: 'video',
      id: 'vqUP1HyXcRc',
      title: '♫ Best Progressive House Mix 2020 Vol. #2 ♫',
      published: '1 year ago',
      author: [Object],
      short_view_count_text: '1.2M views',
      view_count: '1,249,909 views',
      length_seconds: '1:59:59',
      thumbnails: [Object],
      richThumbnails: [],
      isLive: false
    },
    {
      type: 'video',
      id: 'vaSogdMY7Nk',
      title: 'Best Of Gentleman Radio • Deep House Mix [Summer Selection Vol.2]',
      published: '6 months ago',
      author: [Object],
      short_view_count_text: '490K views',
      view_count: '490,233 views',
      length_seconds: '2:55:38',
      thumbnails: [Object],
      richThumbnails: [],
      isLive: false
    }
  ],
  continuation: {
    apiUrl: '/youtubei/v1/next',
    Token: 'CBQSDRILVTNTUGtQNHktclkYACr-Agj_5ObRk-60lFUIqNKF8JvCjeufAQiwmuTh9eaFlKQBCLrcmPuv5vet8QEIkLjP-qiin8VZCIPbr-myspX6Kgju0MPsy9vM1OYBCP7so9e08OPLYQjc0sqytcGT6vABCPar0un7_fz6EAjnpZ3f6fCW-nII5IeC4Or26L1NCODuy6vogqGXwwEIhd3Jxqj3j-QXCKSfsovBjbr2XQjQ04S0nKym9moIqN-81_qP4dZyCPGois6wlcLQ9wEIl-Ld5Mf6w9K-AQjZ2eOYnZCq0r0BGqoBCgt2YVNvZ2RNWTdOaxqaAQoLdmFTb2dkTVk3TmsSATAaDAjGgqKEBhC4mfi2ASIGCJib2YUGKgQIDRACMkUKBAhkEAEKBQiYARABCgUI3AEQAQoFCJADEAEKBQiGBxABCgUIwAcQAQoFCMUHEAEKBQjGBxABCgUIxwcQAQoFCMgHEAE6CgoDCMwECgMIgAtCBwoDCMsBEAJKBwoDCM0BEAJSBwoDCMsBEAJqD3dhdGNoLW5leHQtZmVlZA%3D%3D',
    ctp: 'CHYQqTAiEwjv9Ifu3JD0AhWOxLQKHZYLAoM='
  }
}
```