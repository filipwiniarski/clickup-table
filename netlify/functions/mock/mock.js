// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method

const mock = {
  "total": 20,
  "data": [
    {
      "external_urls": {
        "spotify": "https://open.spotify.com/artist/5Qi4Bb7a8C0a00NZcA77L0"
      },
      "followers": {
        "href": null,
        "total": 1828315
      },
      "genres": [
        "detroit hip hop",
        "gangster rap",
        "hardcore hip hop",
        "hip hop",
        "pop rap",
        "rap",
        "rap rock",
        "southern hip hop"
      ],
      "href": "https://api.spotify.com/v1/artists/5Qi4Bb7a8C0a00NZcA77L0",
      "id": "5Qi4Bb7a8C0a00NZcA77L0",
      "images": [
        {
          "height": 723,
          "url": "https://i.scdn.co/image/462121abcc7994f6c677e4c7900a791a17feafee",
          "width": 1000
        },
        {
          "height": 463,
          "url": "https://i.scdn.co/image/1e2e08b41628310eec1a4659367513e82243ab4b",
          "width": 640
        },
        {
          "height": 145,
          "url": "https://i.scdn.co/image/007a4ff7fca96ff1344905912c57da2f982d0b4d",
          "width": 200
        },
        {
          "height": 46,
          "url": "https://i.scdn.co/image/1cffda4496e9973bce746a96f6a14b45b6189882",
          "width": 64
        }
      ],
      "name": "D12",
      "popularity": 69,
      "type": "artist",
      "uri": "spotify:artist:5Qi4Bb7a8C0a00NZcA77L0"
    },
    {
      "external_urls": {
        "spotify": "https://open.spotify.com/artist/0NbfKEOTQCcwd6o7wSDOHI"
      },
      "followers": {
        "href": null,
        "total": 3414876
      },
      "genres": [
        "gangster rap",
        "hip hop",
        "pop rap",
        "rap",
        "southern hip hop",
        "trap"
      ],
      "href": "https://api.spotify.com/v1/artists/0NbfKEOTQCcwd6o7wSDOHI",
      "id": "0NbfKEOTQCcwd6o7wSDOHI",
      "images": [
        {
          "height": 640,
          "url": "https://i.scdn.co/image/78b601bc99711d752b6e28eda5a4857315488166",
          "width": 640
        },
        {
          "height": 320,
          "url": "https://i.scdn.co/image/4a1a5df2b342712465a5941b6edb6038aedcec39",
          "width": 320
        },
        {
          "height": 160,
          "url": "https://i.scdn.co/image/0d12f74c9667e0fb789353805020e54e0a57936c",
          "width": 160
        }
      ],
      "name": "The Game",
      "popularity": 76,
      "type": "artist",
      "uri": "spotify:artist:0NbfKEOTQCcwd6o7wSDOHI"
    },
    {
      "external_urls": {
        "spotify": "https://open.spotify.com/artist/77IURH5NC56Jn09QHi76is"
      },
      "followers": {
        "href": null,
        "total": 1208015
      },
      "genres": [
        "detroit hip hop",
        "gangster rap",
        "hip hop",
        "pop rap",
        "rap"
      ],
      "href": "https://api.spotify.com/v1/artists/77IURH5NC56Jn09QHi76is",
      "id": "77IURH5NC56Jn09QHi76is",
      "images": [
        {
          "height": 706,
          "url": "https://i.scdn.co/image/570d46c60960d93990710d83a5f8012217eb7aec",
          "width": 999
        },
        {
          "height": 452,
          "url": "https://i.scdn.co/image/4f153c72bff6dccba21ffd360fc308f268a23659",
          "width": 640
        },
        {
          "height": 141,
          "url": "https://i.scdn.co/image/139fd5a828a5e2c4b79d004ad7f42abf9db735c9",
          "width": 200
        },
        {
          "height": 45,
          "url": "https://i.scdn.co/image/18e647685c9870bdf987cb95aa8673d030fe9932",
          "width": 64
        }
      ],
      "name": "Bad Meets Evil",
      "popularity": 64,
      "type": "artist",
      "uri": "spotify:artist:77IURH5NC56Jn09QHi76is"
    },
    {
      "external_urls": {
        "spotify": "https://open.spotify.com/artist/7EWU4FhUJM1sZQgQKdENeT"
      },
      "followers": {
        "href": null,
        "total": 1967190
      },
      "genres": [
        "conscious hip hop",
        "hip hop",
        "pop rap",
        "rap"
      ],
      "href": "https://api.spotify.com/v1/artists/7EWU4FhUJM1sZQgQKdENeT",
      "id": "7EWU4FhUJM1sZQgQKdENeT",
      "images": [
        {
          "height": 640,
          "url": "https://i.scdn.co/image/f63366e13ad4c40ff2595be8ee0f5e2268d606f5",
          "width": 640
        },
        {
          "height": 320,
          "url": "https://i.scdn.co/image/e5ca26a6e157156cb4c3e8cdde2e7e082deb2951",
          "width": 320
        },
        {
          "height": 160,
          "url": "https://i.scdn.co/image/daf89479ee9cc953e07a03ad7d798ebff3c73baf",
          "width": 160
        }
      ],
      "name": "Hopsin",
      "popularity": 72,
      "type": "artist",
      "uri": "spotify:artist:7EWU4FhUJM1sZQgQKdENeT"
    },
    {
      "external_urls": {
        "spotify": "https://open.spotify.com/artist/68DWke2VjdDmA75aJX5C57"
      },
      "followers": {
        "href": null,
        "total": 1746018
      },
      "genres": [
        "alabama rap",
        "hip hop",
        "pop rap",
        "rap",
        "southern hip hop"
      ],
      "href": "https://api.spotify.com/v1/artists/68DWke2VjdDmA75aJX5C57",
      "id": "68DWke2VjdDmA75aJX5C57",
      "images": [
        {
          "height": 640,
          "url": "https://i.scdn.co/image/114c98dbc42f6920d40930d0c5c0997b3cb0eac1",
          "width": 640
        },
        {
          "height": 320,
          "url": "https://i.scdn.co/image/b0b9d299dd4dd7c50e5c964bc4d367bc1f25b7d7",
          "width": 320
        },
        {
          "height": 160,
          "url": "https://i.scdn.co/image/549710140f7ff6f64c6ecbeee193238ed1bc91df",
          "width": 160
        }
      ],
      "name": "Yelawolf",
      "popularity": 73,
      "type": "artist",
      "uri": "spotify:artist:68DWke2VjdDmA75aJX5C57"
    },
    {
      "external_urls": {
        "spotify": "https://open.spotify.com/artist/6UBA15slIuadJ8h2lPRPos"
      },
      "followers": {
        "href": null,
        "total": 2039033
      },
      "genres": [
        "hip hop",
        "kansas city hip hop",
        "pop rap",
        "rap"
      ],
      "href": "https://api.spotify.com/v1/artists/6UBA15slIuadJ8h2lPRPos",
      "id": "6UBA15slIuadJ8h2lPRPos",
      "images": [
        {
          "height": 640,
          "url": "https://i.scdn.co/image/51f88e794401a338e9df945883c3c6a081451a63",
          "width": 640
        },
        {
          "height": 320,
          "url": "https://i.scdn.co/image/bf8620753d9ea92623654686da01c16dac1925f2",
          "width": 320
        },
        {
          "height": 160,
          "url": "https://i.scdn.co/image/f8498a95d0e21f42b2d0eb3b032ccf253955469c",
          "width": 160
        }
      ],
      "name": "Tech N9ne",
      "popularity": 76,
      "type": "artist",
      "uri": "spotify:artist:6UBA15slIuadJ8h2lPRPos"
    },
    {
      "external_urls": {
        "spotify": "https://open.spotify.com/artist/3q7HBObVc0L8jNeTe5Gofh"
      },
      "followers": {
        "href": null,
        "total": 7181951
      },
      "genres": [
        "east coast hip hop",
        "gangster rap",
        "hip hop",
        "pop rap",
        "queens hip hop",
        "rap"
      ],
      "href": "https://api.spotify.com/v1/artists/3q7HBObVc0L8jNeTe5Gofh",
      "id": "3q7HBObVc0L8jNeTe5Gofh",
      "images": [
        {
          "height": 977,
          "url": "https://i.scdn.co/image/dd031b9c5d1b6eba4a691cd89c954255aae787f2",
          "width": 781
        },
        {
          "height": 801,
          "url": "https://i.scdn.co/image/6f0da41419b31d9d2ba55d2df212f59ad0668118",
          "width": 640
        },
        {
          "height": 250,
          "url": "https://i.scdn.co/image/df73c0cebe56cafe705ffdba5085ccbd5680bd16",
          "width": 200
        },
        {
          "height": 80,
          "url": "https://i.scdn.co/image/1a44043542c997ef835c89e185f0cf79d7402153",
          "width": 64
        }
      ],
      "name": "50 Cent",
      "popularity": 85,
      "type": "artist",
      "uri": "spotify:artist:3q7HBObVc0L8jNeTe5Gofh"
    },
    {
      "external_urls": {
        "spotify": "https://open.spotify.com/artist/6DPYiyq5kWVQS4RGwxzPC7"
      },
      "followers": {
        "href": null,
        "total": 5685582
      },
      "genres": [
        "g funk",
        "gangster rap",
        "hip hop",
        "rap",
        "west coast rap"
      ],
      "href": "https://api.spotify.com/v1/artists/6DPYiyq5kWVQS4RGwxzPC7",
      "id": "6DPYiyq5kWVQS4RGwxzPC7",
      "images": [
        {
          "height": 1005,
          "url": "https://i.scdn.co/image/83d2489cade1dadcdc533ddbcd74993d0ca6d4cb",
          "width": 1000
        },
        {
          "height": 643,
          "url": "https://i.scdn.co/image/170254ebdd747f4e7045df1cae8f11a42dc1a547",
          "width": 640
        },
        {
          "height": 201,
          "url": "https://i.scdn.co/image/dd4a7102c5e1897bab2b1fa4bbc086fbe2fc87dc",
          "width": 200
        },
        {
          "height": 64,
          "url": "https://i.scdn.co/image/85ebf2f6c52139b3384b596063678b47ab0fcb95",
          "width": 64
        }
      ],
      "name": "Dr. Dre",
      "popularity": 82,
      "type": "artist",
      "uri": "spotify:artist:6DPYiyq5kWVQS4RGwxzPC7"
    },
    {
      "external_urls": {
        "spotify": "https://open.spotify.com/artist/4OBJLual30L7gRl5UkeRcT"
      },
      "followers": {
        "href": null,
        "total": 3767026
      },
      "genres": [
        "atl hip hop",
        "dance pop",
        "dirty south rap",
        "gangster rap",
        "hip hop",
        "pop rap",
        "rap",
        "southern hip hop",
        "trap"
      ],
      "href": "https://api.spotify.com/v1/artists/4OBJLual30L7gRl5UkeRcT",
      "id": "4OBJLual30L7gRl5UkeRcT",
      "images": [
        {
          "height": 640,
          "url": "https://i.scdn.co/image/eae4a88e33baad4b4ce4605aa074c45766e94d09",
          "width": 640
        },
        {
          "height": 320,
          "url": "https://i.scdn.co/image/b83211485b5ad5e57b9d3659a096ffef3d6f3171",
          "width": 320
        },
        {
          "height": 160,
          "url": "https://i.scdn.co/image/c1cb65dc810e054da565baa5cbb746b6b44a9aed",
          "width": 160
        }
      ],
      "name": "T.I.",
      "popularity": 80,
      "type": "artist",
      "uri": "spotify:artist:4OBJLual30L7gRl5UkeRcT"
    },
    {
      "external_urls": {
        "spotify": "https://open.spotify.com/artist/3Mcii5XWf6E0lrY3Uky4cA"
      },
      "followers": {
        "href": null,
        "total": 4512769
      },
      "genres": [
        "conscious hip hop",
        "g funk",
        "gangster rap",
        "hip hop",
        "rap",
        "west coast rap"
      ],
      "href": "https://api.spotify.com/v1/artists/3Mcii5XWf6E0lrY3Uky4cA",
      "id": "3Mcii5XWf6E0lrY3Uky4cA",
      "images": [
        {
          "height": 640,
          "url": "https://i.scdn.co/image/8ed73361f9c205b88c4d092b2f628576e2c719c8",
          "width": 640
        },
        {
          "height": 320,
          "url": "https://i.scdn.co/image/5414f371462d8c9d5d35c1a1b908d9f2a65fefbb",
          "width": 320
        },
        {
          "height": 160,
          "url": "https://i.scdn.co/image/24c863b3ebfa8848f7691a2084456cd9a7dac567",
          "width": 160
        }
      ],
      "name": "Ice Cube",
      "popularity": 77,
      "type": "artist",
      "uri": "spotify:artist:3Mcii5XWf6E0lrY3Uky4cA"
    },
    {
      "external_urls": {
        "spotify": "https://open.spotify.com/artist/4tujQJicOnuZRLiBFdp3Ou"
      },
      "followers": {
        "href": null,
        "total": 1219734
      },
      "genres": [
        "detroit hip hop",
        "g funk",
        "gangster rap",
        "hardcore hip hop",
        "hip hop",
        "pop rap",
        "rap",
        "west coast rap"
      ],
      "href": "https://api.spotify.com/v1/artists/4tujQJicOnuZRLiBFdp3Ou",
      "id": "4tujQJicOnuZRLiBFdp3Ou",
      "images": [
        {
          "height": 640,
          "url": "https://i.scdn.co/image/f17bd1b3b6e1b72962ad8b0d60190b5ab725ad7c",
          "width": 640
        },
        {
          "height": 320,
          "url": "https://i.scdn.co/image/565bd7e6cb475003a4a644a6a667ae5518a529f8",
          "width": 320
        },
        {
          "height": 160,
          "url": "https://i.scdn.co/image/67979bd06edd104fb29fbc57c4a1542feb5682a2",
          "width": 160
        }
      ],
      "name": "Xzibit",
      "popularity": 69,
      "type": "artist",
      "uri": "spotify:artist:4tujQJicOnuZRLiBFdp3Ou"
    },
    {
      "external_urls": {
        "spotify": "https://open.spotify.com/artist/7hJcb9fa4alzcOq3EaNPoG"
      },
      "followers": {
        "href": null,
        "total": 6953840
      },
      "genres": [
        "g funk",
        "gangster rap",
        "hip hop",
        "pop rap",
        "rap",
        "west coast rap"
      ],
      "href": "https://api.spotify.com/v1/artists/7hJcb9fa4alzcOq3EaNPoG",
      "id": "7hJcb9fa4alzcOq3EaNPoG",
      "images": [
        {
          "height": 640,
          "url": "https://i.scdn.co/image/11208d65843456cf3854717b8e411ef8fede7141",
          "width": 640
        },
        {
          "height": 320,
          "url": "https://i.scdn.co/image/4ddba58867285a1e858291a108613526df2ce934",
          "width": 320
        },
        {
          "height": 160,
          "url": "https://i.scdn.co/image/1e67815be9174e75753d52a006b86077a39719cf",
          "width": 160
        }
      ],
      "name": "Snoop Dogg",
      "popularity": 87,
      "type": "artist",
      "uri": "spotify:artist:7hJcb9fa4alzcOq3EaNPoG"
    },
    {
      "external_urls": {
        "spotify": "https://open.spotify.com/artist/6evKD5JWJON3qPBJtUEmtY"
      },
      "followers": {
        "href": null,
        "total": 1506125
      },
      "genres": [
        "gangster rap",
        "hardcore hip hop",
        "hip hop",
        "pop rap",
        "queens hip hop",
        "rap",
        "southern hip hop",
        "trap"
      ],
      "href": "https://api.spotify.com/v1/artists/6evKD5JWJON3qPBJtUEmtY",
      "id": "6evKD5JWJON3qPBJtUEmtY",
      "images": [
        {
          "height": 1000,
          "url": "https://i.scdn.co/image/a668bc3f083377ca8889e9f8273c752e0342c4e0",
          "width": 1000
        },
        {
          "height": 640,
          "url": "https://i.scdn.co/image/883505d6cbdbbb54837b345a84722dc78764ab67",
          "width": 640
        },
        {
          "height": 200,
          "url": "https://i.scdn.co/image/9f44104fb873364b96ae5110f6a3959ba173f8e2",
          "width": 200
        },
        {
          "height": 64,
          "url": "https://i.scdn.co/image/2bdf7edfdd1e4704729662421a69edefa0481ec7",
          "width": 64
        }
      ],
      "name": "G-Unit",
      "popularity": 65,
      "type": "artist",
      "uri": "spotify:artist:6evKD5JWJON3qPBJtUEmtY"
    },
    {
      "external_urls": {
        "spotify": "https://open.spotify.com/artist/2XnnxQzxFZG8qEPjakokPM"
      },
      "followers": {
        "href": null,
        "total": 632002
      },
      "genres": [
        "detroit hip hop",
        "gangster rap",
        "hardcore hip hop",
        "hip hop",
        "pop rap",
        "rap",
        "southern hip hop"
      ],
      "href": "https://api.spotify.com/v1/artists/2XnnxQzxFZG8qEPjakokPM",
      "id": "2XnnxQzxFZG8qEPjakokPM",
      "images": [
        {
          "height": 796,
          "url": "https://i.scdn.co/image/13998fd88695a34cec8350675cb3ceffa4573ae3",
          "width": 1000
        },
        {
          "height": 509,
          "url": "https://i.scdn.co/image/d6ebc26b7f361aa6de3a8992b49bf4a2536af3fc",
          "width": 640
        },
        {
          "height": 159,
          "url": "https://i.scdn.co/image/08a2905bb68fb37de8d3bb426249a65732700696",
          "width": 200
        },
        {
          "height": 51,
          "url": "https://i.scdn.co/image/89d41a378f7bd5b0806a8c0b4ba0545ebbaf1ee2",
          "width": 64
        }
      ],
      "name": "Obie Trice",
      "popularity": 63,
      "type": "artist",
      "uri": "spotify:artist:2XnnxQzxFZG8qEPjakokPM"
    },
    {
      "external_urls": {
        "spotify": "https://open.spotify.com/artist/1HwM5zlC5qNWhJtM00yXzG"
      },
      "followers": {
        "href": null,
        "total": 2752514
      },
      "genres": [
        "east coast hip hop",
        "gangster rap",
        "hardcore hip hop",
        "hip hop",
        "rap"
      ],
      "href": "https://api.spotify.com/v1/artists/1HwM5zlC5qNWhJtM00yXzG",
      "id": "1HwM5zlC5qNWhJtM00yXzG",
      "images": [
        {
          "height": 1506,
          "url": "https://i.scdn.co/image/a164c44d2c4260d5c17df105601d0e9bb76f2ef2",
          "width": 1000
        },
        {
          "height": 964,
          "url": "https://i.scdn.co/image/8bf081adcfb9eb259fca3f0bd00b848153982d64",
          "width": 640
        },
        {
          "height": 301,
          "url": "https://i.scdn.co/image/0de7a35c79b610f914106504cce67a86a90cfd91",
          "width": 200
        },
        {
          "height": 96,
          "url": "https://i.scdn.co/image/465b9748893f4bcc766196e131c6977f8e41bad9",
          "width": 64
        }
      ],
      "name": "DMX",
      "popularity": 80,
      "type": "artist",
      "uri": "spotify:artist:1HwM5zlC5qNWhJtM00yXzG"
    },
    {
      "external_urls": {
        "spotify": "https://open.spotify.com/artist/3ipn9JLAPI5GUEo4y4jcoi"
      },
      "followers": {
        "href": null,
        "total": 2155748
      },
      "genres": [
        "atl hip hop",
        "dirty south rap",
        "hip hop",
        "pop rap",
        "rap",
        "southern hip hop",
        "trap"
      ],
      "href": "https://api.spotify.com/v1/artists/3ipn9JLAPI5GUEo4y4jcoi",
      "id": "3ipn9JLAPI5GUEo4y4jcoi",
      "images": [
        {
          "height": 667,
          "url": "https://i.scdn.co/image/adcc1cb654e89f2e404688ae0d1bbc942ce02e5d",
          "width": 1000
        },
        {
          "height": 427,
          "url": "https://i.scdn.co/image/0515a0dfc9c25cd8290cc4be58abf6f66f21706a",
          "width": 640
        },
        {
          "height": 133,
          "url": "https://i.scdn.co/image/ec9b2c869d9a04eae2fe5be44e285f5a48c97efd",
          "width": 200
        },
        {
          "height": 43,
          "url": "https://i.scdn.co/image/931d3d9ff7243f2a1a3f9d775959b06c28e19ad6",
          "width": 64
        }
      ],
      "name": "Ludacris",
      "popularity": 81,
      "type": "artist",
      "uri": "spotify:artist:3ipn9JLAPI5GUEo4y4jcoi"
    },
    {
      "external_urls": {
        "spotify": "https://open.spotify.com/artist/4EnEZVjo3w1cwcQYePccay"
      },
      "followers": {
        "href": null,
        "total": 3492371
      },
      "genres": [
        "conscious hip hop",
        "gangster rap",
        "golden age hip hop",
        "hardcore hip hop",
        "hip hop",
        "old school hip hop",
        "rap",
        "west coast rap"
      ],
      "href": "https://api.spotify.com/v1/artists/4EnEZVjo3w1cwcQYePccay",
      "id": "4EnEZVjo3w1cwcQYePccay",
      "images": [
        {
          "height": 1000,
          "url": "https://i.scdn.co/image/4f36d3f900eaf8381b0d3f5febe0e5bf8c94dbea",
          "width": 1000
        },
        {
          "height": 640,
          "url": "https://i.scdn.co/image/6c6c5456aa373c9cbf4f385c2dd69c4177e6e3fa",
          "width": 640
        },
        {
          "height": 200,
          "url": "https://i.scdn.co/image/e3e634272efd0251c2b8298b25fcd4b659993178",
          "width": 200
        },
        {
          "height": 64,
          "url": "https://i.scdn.co/image/8bf427fbb118c36cd56439a06f0bfb77e4e7bdf3",
          "width": 64
        }
      ],
      "name": "N.W.A.",
      "popularity": 70,
      "type": "artist",
      "uri": "spotify:artist:4EnEZVjo3w1cwcQYePccay"
    },
    {
      "external_urls": {
        "spotify": "https://open.spotify.com/artist/5ndkK3dpZLKtBklKjxNQwT"
      },
      "followers": {
        "href": null,
        "total": 1861646
      },
      "genres": [
        "atl hip hop",
        "dance pop",
        "hip hop",
        "pop",
        "pop rap",
        "rap",
        "southern hip hop"
      ],
      "href": "https://api.spotify.com/v1/artists/5ndkK3dpZLKtBklKjxNQwT",
      "id": "5ndkK3dpZLKtBklKjxNQwT",
      "images": [
        {
          "height": 640,
          "url": "https://i.scdn.co/image/ac855e73f52190052ed8c4dfa03bc0b85bdc5ce5",
          "width": 640
        },
        {
          "height": 320,
          "url": "https://i.scdn.co/image/3cc98fa86043616517d5991f9140f977faadfcf0",
          "width": 320
        },
        {
          "height": 160,
          "url": "https://i.scdn.co/image/8464a22ceecf92740be8e6d9a9ad74939ebc8fca",
          "width": 160
        }
      ],
      "name": "B.o.B",
      "popularity": 77,
      "type": "artist",
      "uri": "spotify:artist:5ndkK3dpZLKtBklKjxNQwT"
    },
    {
      "external_urls": {
        "spotify": "https://open.spotify.com/artist/5me0Irg2ANcsgc93uaYrpb"
      },
      "followers": {
        "href": null,
        "total": 6421597
      },
      "genres": [
        "east coast hip hop",
        "gangster rap",
        "hardcore hip hop",
        "hip hop",
        "rap"
      ],
      "href": "https://api.spotify.com/v1/artists/5me0Irg2ANcsgc93uaYrpb",
      "id": "5me0Irg2ANcsgc93uaYrpb",
      "images": [
        {
          "height": 1250,
          "url": "https://i.scdn.co/image/1b4858fbd24046a81cace5ee18d19c868262b91f",
          "width": 1000
        },
        {
          "height": 800,
          "url": "https://i.scdn.co/image/9bb42de208edcb69653a8e7951fa93b13f598cdd",
          "width": 640
        },
        {
          "height": 250,
          "url": "https://i.scdn.co/image/e56612ae56c9007e99ab36b83efd4faf6401260d",
          "width": 200
        },
        {
          "height": 80,
          "url": "https://i.scdn.co/image/fc074d287739cca12a89c76fd338ff7d4aa4acee",
          "width": 64
        }
      ],
      "name": "The Notorious B.I.G.",
      "popularity": 82,
      "type": "artist",
      "uri": "spotify:artist:5me0Irg2ANcsgc93uaYrpb"
    },
    {
      "external_urls": {
        "spotify": "https://open.spotify.com/artist/6C1ohJrd5VydigQtaGy5Wa"
      },
      "followers": {
        "href": null,
        "total": 1682135
      },
      "genres": [
        "boston hip hop",
        "hip hop",
        "pop rap",
        "rap"
      ],
      "href": "https://api.spotify.com/v1/artists/6C1ohJrd5VydigQtaGy5Wa",
      "id": "6C1ohJrd5VydigQtaGy5Wa",
      "images": [
        {
          "height": 640,
          "url": "https://i.scdn.co/image/994fdbaf1eff70a1263ec509bc857e73450871e1",
          "width": 640
        },
        {
          "height": 320,
          "url": "https://i.scdn.co/image/b0b6ebed0eb8180d2ccc960af6540bb878761ab6",
          "width": 320
        },
        {
          "height": 160,
          "url": "https://i.scdn.co/image/b2ed88d1cfd1ae50aad4d0e07a49f521772cf497",
          "width": 160
        }
      ],
      "name": "Joyner Lucas",
      "popularity": 79,
      "type": "artist",
      "uri": "spotify:artist:6C1ohJrd5VydigQtaGy5Wa"
    }
  ]
}

const headers = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE'
};


const handler = async (event) => {
  const {size, page, query} = event.queryStringParameters;
  const _size = Number(size);
  const _page = Number(page);
  const start = _page * _size;
  const take = start + _size >= 20 ? 20 : start + _size;

  let results;

  try {
    if (query?.length > 0 && query !== 'null') {
      console.log(query);
      results = mock.data.filter(item => item.name.toLowerCase().includes(query.toLowerCase())).slice(start, take);
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({
          data: results,
          total: results.length,
        }),
      }
    } else {
      results = mock.data.slice(start, take);
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({
          data: results,
          total: 20,
        }),
      }
    }
  } catch (error) {
    return {
      statusCode: 500,
      headers,
      body: error.toString() }
  }
}

module.exports = { handler }
