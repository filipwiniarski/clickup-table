// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method

const total = 80;

const mock = {
  total: total,
  data: [
    {
      external_urls: {
        spotify: "https://open.spotify.com/artist/3wYyutjgII8LJVVOLrGI0D",
      },
      followers: {
        href: null,
        total: 882987,
      },
      genres: [
        "adult standards",
        "brill building pop",
        "folk rock",
        "rock-and-roll",
        "rockabilly",
      ],
      href: "https://api.spotify.com/v1/artists/3wYyutjgII8LJVVOLrGI0D",
      id: "3wYyutjgII8LJVVOLrGI0D",
      images: [
        {
          height: 1266,
          url: "https://i.scdn.co/image/ff6c6ecd90618f5fb0f8fbf51bf8477586c8843b",
          width: 1000,
        },
        {
          height: 810,
          url: "https://i.scdn.co/image/a6f9cbb13f743c1b397e73e77d564603ea8a7c1a",
          width: 640,
        },
        {
          height: 253,
          url: "https://i.scdn.co/image/6291c6dce69ccc5bf017a2a348c8b7e507882e0c",
          width: 200,
        },
        {
          height: 81,
          url: "https://i.scdn.co/image/b187258df5341858dbc1d4c09fc098a9a7aedbab",
          width: 64,
        },
      ],
      name: "Buddy Holly",
      popularity: 63,
      type: "artist",
      uri: "spotify:artist:3wYyutjgII8LJVVOLrGI0D",
    },
    {
      external_urls: {
        spotify: "https://open.spotify.com/artist/2zyz0VJqrDXeFDIyrfVXSo",
      },
      followers: {
        href: null,
        total: 581414,
      },
      genres: [
        "adult standards",
        "brill building pop",
        "piano rock",
        "rock-and-roll",
        "rockabilly",
      ],
      href: "https://api.spotify.com/v1/artists/2zyz0VJqrDXeFDIyrfVXSo",
      id: "2zyz0VJqrDXeFDIyrfVXSo",
      images: [
        {
          height: 640,
          url: "https://i.scdn.co/image/cfa2ca7065e4e435b0ef28d1eb5f0e507b7d9cff",
          width: 640,
        },
        {
          height: 320,
          url: "https://i.scdn.co/image/b9d86330e56cea7c2d744b57ab65387e387ef7e3",
          width: 320,
        },
        {
          height: 160,
          url: "https://i.scdn.co/image/f3c411c43ce6bd8f64df0eefd9576f11a449bdf6",
          width: 160,
        },
      ],
      name: "Jerry Lee Lewis",
      popularity: 61,
      type: "artist",
      uri: "spotify:artist:2zyz0VJqrDXeFDIyrfVXSo",
    },
    {
      external_urls: {
        spotify: "https://open.spotify.com/artist/0JDkhL4rjiPNEp92jAgJnS",
      },
      followers: {
        href: null,
        total: 1279580,
      },
      genres: [
        "adult standards",
        "brill building pop",
        "classic rock",
        "folk rock",
        "mellow gold",
        "rock-and-roll",
        "rockabilly",
        "soft rock",
      ],
      href: "https://api.spotify.com/v1/artists/0JDkhL4rjiPNEp92jAgJnS",
      id: "0JDkhL4rjiPNEp92jAgJnS",
      images: [
        {
          height: 640,
          url: "https://i.scdn.co/image/846e8808178b1b66a5220f947185dc91b89f6f5b",
          width: 640,
        },
        {
          height: 320,
          url: "https://i.scdn.co/image/02f851191e49bdd2fa6ea0f48249c29bf3f83e02",
          width: 320,
        },
        {
          height: 160,
          url: "https://i.scdn.co/image/eb0071dff0b03dc8d7b3f91c92277c0480c30b32",
          width: 160,
        },
      ],
      name: "Roy Orbison",
      popularity: 70,
      type: "artist",
      uri: "spotify:artist:0JDkhL4rjiPNEp92jAgJnS",
    },
    {
      external_urls: {
        spotify: "https://open.spotify.com/artist/293zczrfYafIItmnmM3coR",
      },
      followers: {
        href: null,
        total: 1400411,
      },
      genres: [
        "blues rock",
        "classic rock",
        "rock",
        "rock-and-roll",
        "rockabilly",
        "soul",
      ],
      href: "https://api.spotify.com/v1/artists/293zczrfYafIItmnmM3coR",
      id: "293zczrfYafIItmnmM3coR",
      images: [
        {
          height: 1198,
          url: "https://i.scdn.co/image/d58323616d4f5d22b51e9dfe0ba53aedabe53cd4",
          width: 1000,
        },
        {
          height: 766,
          url: "https://i.scdn.co/image/7cfff5d03c5f80539eebba8827e8569c71898ea4",
          width: 640,
        },
        {
          height: 240,
          url: "https://i.scdn.co/image/dd7b763fb49c35b1ebaadf3695156aeb7d9f9ca3",
          width: 200,
        },
        {
          height: 77,
          url: "https://i.scdn.co/image/127a6c846e601f5201e4e4bc19d43c388da97b99",
          width: 64,
        },
      ],
      name: "Chuck Berry",
      popularity: 69,
      type: "artist",
      uri: "spotify:artist:293zczrfYafIItmnmM3coR",
    },
    {
      external_urls: {
        spotify: "https://open.spotify.com/artist/4ACplpEqD6JIVgKrafauzs",
      },
      followers: {
        href: null,
        total: 550241,
      },
      genres: [
        "adult standards",
        "brill building pop",
        "folk rock",
        "mellow gold",
        "rock-and-roll",
        "rockabilly",
        "soul",
        "sunshine pop",
      ],
      href: "https://api.spotify.com/v1/artists/4ACplpEqD6JIVgKrafauzs",
      id: "4ACplpEqD6JIVgKrafauzs",
      images: [
        {
          height: 1035,
          url: "https://i.scdn.co/image/143996e5147b6767719a60163488e342b3fc2efe",
          width: 1000,
        },
        {
          height: 662,
          url: "https://i.scdn.co/image/ecd862317d93b07ff51218eee3fcb1e971ced621",
          width: 640,
        },
        {
          height: 207,
          url: "https://i.scdn.co/image/8eee809edea1af0fc95620c95f8ecd6b7cdc6cc9",
          width: 200,
        },
        {
          height: 66,
          url: "https://i.scdn.co/image/0d0e09e6e99dcbe60af88d03ff8f6ffe9bfe6d08",
          width: 64,
        },
      ],
      name: "The Everly Brothers",
      popularity: 64,
      type: "artist",
      uri: "spotify:artist:4ACplpEqD6JIVgKrafauzs",
    },
    {
      external_urls: {
        spotify: "https://open.spotify.com/artist/1p0t3JtUTayV2wb1RGN9mO",
      },
      followers: {
        href: null,
        total: 225050,
      },
      genres: [
        "adult standards",
        "brill building pop",
        "rock-and-roll",
        "rockabilly",
      ],
      href: "https://api.spotify.com/v1/artists/1p0t3JtUTayV2wb1RGN9mO",
      id: "1p0t3JtUTayV2wb1RGN9mO",
      images: [
        {
          height: 1000,
          url: "https://i.scdn.co/image/598642ecbc39004cdbb63dd018042db59b0385e5",
          width: 1000,
        },
        {
          height: 743,
          url: "https://i.scdn.co/image/55b746de045ed8ef3383ed9aef4efcfdb8537645",
          width: 640,
        },
        {
          height: 232,
          url: "https://i.scdn.co/image/8a6d73006026ed04e7cd4e942d0bc857cd4e629a",
          width: 200,
        },
        {
          height: 74,
          url: "https://i.scdn.co/image/8f65907593700fe5ba7b1e479e359b7be73f2bff",
          width: 64,
        },
      ],
      name: "Eddie Cochran",
      popularity: 56,
      type: "artist",
      uri: "spotify:artist:1p0t3JtUTayV2wb1RGN9mO",
    },
    {
      external_urls: {
        spotify: "https://open.spotify.com/artist/4xls23Ye9WR9yy3yYMpAMm",
      },
      followers: {
        href: null,
        total: 648524,
      },
      genres: [
        "adult standards",
        "brill building pop",
        "rock-and-roll",
        "rockabilly",
        "soul",
      ],
      href: "https://api.spotify.com/v1/artists/4xls23Ye9WR9yy3yYMpAMm",
      id: "4xls23Ye9WR9yy3yYMpAMm",
      images: [
        {
          height: 596,
          url: "https://i.scdn.co/image/8482a715712ad99032f35870bd2430b9b71b7283",
          width: 477,
        },
        {
          height: 250,
          url: "https://i.scdn.co/image/0d374a6e20f8bb052cbe2a73f90f2dadfd46c7bc",
          width: 200,
        },
        {
          height: 80,
          url: "https://i.scdn.co/image/f399df3b8c85af0054b31a2118fa39f20fe77cde",
          width: 64,
        },
      ],
      name: "Little Richard",
      popularity: 61,
      type: "artist",
      uri: "spotify:artist:4xls23Ye9WR9yy3yYMpAMm",
    },
    {
      external_urls: {
        spotify: "https://open.spotify.com/artist/3MFp4cYuYtTZe3d3xkLLbr",
      },
      followers: {
        href: null,
        total: 214010,
      },
      genres: [
        "adult standards",
        "brill building pop",
        "rock-and-roll",
        "rockabilly",
      ],
      href: "https://api.spotify.com/v1/artists/3MFp4cYuYtTZe3d3xkLLbr",
      id: "3MFp4cYuYtTZe3d3xkLLbr",
      images: [
        {
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b2739060a2c0a01366ee03274597",
          width: 640,
        },
        {
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e029060a2c0a01366ee03274597",
          width: 300,
        },
        {
          height: 64,
          url: "https://i.scdn.co/image/ab67616d000048519060a2c0a01366ee03274597",
          width: 64,
        },
      ],
      name: "Bill Haley & His Comets",
      popularity: 57,
      type: "artist",
      uri: "spotify:artist:3MFp4cYuYtTZe3d3xkLLbr",
    },
    {
      external_urls: {
        spotify: "https://open.spotify.com/artist/73sSFVlM6pkweLXE8qw1OS",
      },
      followers: {
        href: null,
        total: 299042,
      },
      genres: [
        "adult standards",
        "brill building pop",
        "bubblegum pop",
        "folk rock",
        "lounge",
        "rock-and-roll",
        "rockabilly",
      ],
      href: "https://api.spotify.com/v1/artists/73sSFVlM6pkweLXE8qw1OS",
      id: "73sSFVlM6pkweLXE8qw1OS",
      images: [
        {
          height: 1129,
          url: "https://i.scdn.co/image/99ee90438c46d52c9007866740f5504834d20f99",
          width: 1000,
        },
        {
          height: 723,
          url: "https://i.scdn.co/image/3c0b0278e7cc5a8f062f7797993e099683b10e1e",
          width: 640,
        },
        {
          height: 226,
          url: "https://i.scdn.co/image/53705a46b8496509b92c70268dabdc8a41899fb6",
          width: 200,
        },
        {
          height: 72,
          url: "https://i.scdn.co/image/534d374e547c994f09b030f3921fca41f0e1750f",
          width: 64,
        },
      ],
      name: "Ricky Nelson",
      popularity: 62,
      type: "artist",
      uri: "spotify:artist:73sSFVlM6pkweLXE8qw1OS",
    },
    {
      external_urls: {
        spotify: "https://open.spotify.com/artist/09C0xjtosNAIXP36wTnWxd",
      },
      followers: {
        href: null,
        total: 364074,
      },
      genres: [
        "adult standards",
        "brill building pop",
        "louisiana blues",
        "lounge",
        "new orleans blues",
        "piano blues",
        "rhythm and blues",
        "rock-and-roll",
        "rockabilly",
        "soul",
      ],
      href: "https://api.spotify.com/v1/artists/09C0xjtosNAIXP36wTnWxd",
      id: "09C0xjtosNAIXP36wTnWxd",
      images: [
        {
          height: 1170,
          url: "https://i.scdn.co/image/795ae538a48341d36523c1644b0da31a542db7e5",
          width: 1000,
        },
        {
          height: 749,
          url: "https://i.scdn.co/image/87c3cd1c4917dc6961fafa5b679fafc7c00cb1eb",
          width: 640,
        },
        {
          height: 234,
          url: "https://i.scdn.co/image/e1ecb1edaf668afe7eb974bae90fd7bf00679108",
          width: 200,
        },
        {
          height: 75,
          url: "https://i.scdn.co/image/aa497e48f8054c5a5838e9372bdceaa38237f8a3",
          width: 64,
        },
      ],
      name: "Fats Domino",
      popularity: 60,
      type: "artist",
      uri: "spotify:artist:09C0xjtosNAIXP36wTnWxd",
    },
    {
      external_urls: {
        spotify: "https://open.spotify.com/artist/6KWcxMWVNVIYbdOQyJtsSy",
      },
      followers: {
        href: null,
        total: 510052,
      },
      genres: [
        "adult standards",
        "brill building pop",
        "doo-wop",
        "lounge",
        "rock-and-roll",
        "rockabilly",
        "soul",
        "vocal jazz",
      ],
      href: "https://api.spotify.com/v1/artists/6KWcxMWVNVIYbdOQyJtsSy",
      id: "6KWcxMWVNVIYbdOQyJtsSy",
      images: [
        {
          height: 640,
          url: "https://i.scdn.co/image/ab6761610000e5eb09f5cc21795aaad250e43e7a",
          width: 640,
        },
        {
          height: 320,
          url: "https://i.scdn.co/image/ab6761610000517409f5cc21795aaad250e43e7a",
          width: 320,
        },
        {
          height: 160,
          url: "https://i.scdn.co/image/ab6761610000f17809f5cc21795aaad250e43e7a",
          width: 160,
        },
      ],
      name: "The Platters",
      popularity: 63,
      type: "artist",
      uri: "spotify:artist:6KWcxMWVNVIYbdOQyJtsSy",
    },
    {
      external_urls: {
        spotify: "https://open.spotify.com/artist/5N6GwJzOcOY5kv8p0NjhYL",
      },
      followers: {
        href: null,
        total: 334958,
      },
      genres: [
        "adult standards",
        "brill building pop",
        "bubblegum pop",
        "folk rock",
        "lounge",
        "mellow gold",
        "rockabilly",
        "soft rock",
      ],
      href: "https://api.spotify.com/v1/artists/5N6GwJzOcOY5kv8p0NjhYL",
      id: "5N6GwJzOcOY5kv8p0NjhYL",
      images: [
        {
          height: 1000,
          url: "https://i.scdn.co/image/131c254129758c4951b09c4ffc07e5c09a7dcbec",
          width: 1000,
        },
        {
          height: 640,
          url: "https://i.scdn.co/image/c90b9a4e05771345c7ab6b85af6a7e4dd49302a1",
          width: 640,
        },
        {
          height: 200,
          url: "https://i.scdn.co/image/21f3544ff17435fb877ecaf81904b3c0a8d4e7d8",
          width: 200,
        },
        {
          height: 64,
          url: "https://i.scdn.co/image/796c4145b78175343e650ca79325dec1d7771a60",
          width: 64,
        },
      ],
      name: "Neil Sedaka",
      popularity: 61,
      type: "artist",
      uri: "spotify:artist:5N6GwJzOcOY5kv8p0NjhYL",
    },
    {
      external_urls: {
        spotify: "https://open.spotify.com/artist/5Y9xEAGW4GwGJgbiI6W85P",
      },
      followers: {
        href: null,
        total: 377808,
      },
      genres: [
        "adult standards",
        "brill building pop",
        "rock-and-roll",
        "rockabilly",
      ],
      href: "https://api.spotify.com/v1/artists/5Y9xEAGW4GwGJgbiI6W85P",
      id: "5Y9xEAGW4GwGJgbiI6W85P",
      images: [
        {
          height: 1124,
          url: "https://i.scdn.co/image/c0797b7eeb72ffd9760fa5a026641d14b3fd547a",
          width: 1000,
        },
        {
          height: 719,
          url: "https://i.scdn.co/image/bfa2d94ae1da800701ceb6fd4e2d4ed278ac1700",
          width: 640,
        },
        {
          height: 225,
          url: "https://i.scdn.co/image/9e428b0f0a17c0d9ff108340f6f304919af7c435",
          width: 200,
        },
        {
          height: 72,
          url: "https://i.scdn.co/image/47a1ce1e030d6f5487e988d7ab6899808fa6116a",
          width: 64,
        },
      ],
      name: "Ritchie Valens",
      popularity: 60,
      type: "artist",
      uri: "spotify:artist:5Y9xEAGW4GwGJgbiI6W85P",
    },
    {
      external_urls: {
        spotify: "https://open.spotify.com/artist/4b0WsB47XCa9F83BmwQ7WX",
      },
      followers: {
        href: null,
        total: 373624,
      },
      genres: [
        "adult standards",
        "brill building pop",
        "bubblegum pop",
        "folk rock",
        "mellow gold",
        "motown",
        "rock-and-roll",
        "rockabilly",
        "soul",
      ],
      href: "https://api.spotify.com/v1/artists/4b0WsB47XCa9F83BmwQ7WX",
      id: "4b0WsB47XCa9F83BmwQ7WX",
      images: [
        {
          height: 1292,
          url: "https://i.scdn.co/image/21584a935b760f20b4b08f7f9ddd012c12437798",
          width: 1000,
        },
        {
          height: 827,
          url: "https://i.scdn.co/image/e97b7cd22945863ebc926c5c8e4e92bd2b8698d9",
          width: 640,
        },
        {
          height: 258,
          url: "https://i.scdn.co/image/04ac9d38712494d9347ecc5115b22115c9f34717",
          width: 200,
        },
        {
          height: 83,
          url: "https://i.scdn.co/image/b101249b1356e58639c151a4772258caea50197d",
          width: 64,
        },
      ],
      name: "The Righteous Brothers",
      popularity: 65,
      type: "artist",
      uri: "spotify:artist:4b0WsB47XCa9F83BmwQ7WX",
    },
    {
      external_urls: {
        spotify: "https://open.spotify.com/artist/1FqqOl9itIUpXr4jZPIVoT",
      },
      followers: {
        href: null,
        total: 353687,
      },
      genres: [
        "adult standards",
        "brill building pop",
        "bubblegum pop",
        "motown",
        "rock-and-roll",
        "rockabilly",
        "soul",
      ],
      href: "https://api.spotify.com/v1/artists/1FqqOl9itIUpXr4jZPIVoT",
      id: "1FqqOl9itIUpXr4jZPIVoT",
      images: [
        {
          height: 1000,
          url: "https://i.scdn.co/image/9cebb08480116550d85b6268d9adb1c2aee718f7",
          width: 1000,
        },
        {
          height: 640,
          url: "https://i.scdn.co/image/3361d8c88dc781f3a76657778454051db42e6d9e",
          width: 640,
        },
        {
          height: 200,
          url: "https://i.scdn.co/image/ed6c740fd6ad7faa31964b7a7762009b4b7826bd",
          width: 200,
        },
        {
          height: 64,
          url: "https://i.scdn.co/image/686750d79b66f2658a84cda6d2e25de97aa85faa",
          width: 64,
        },
      ],
      name: "The Drifters",
      popularity: 64,
      type: "artist",
      uri: "spotify:artist:1FqqOl9itIUpXr4jZPIVoT",
    },
    {
      external_urls: {
        spotify: "https://open.spotify.com/artist/7qQJQ3YtcGlqaLg5tcypN2",
      },
      followers: {
        href: null,
        total: 221047,
      },
      genres: [
        "adult standards",
        "brill building pop",
        "bubblegum pop",
        "rock-and-roll",
        "rockabilly",
      ],
      href: "https://api.spotify.com/v1/artists/7qQJQ3YtcGlqaLg5tcypN2",
      id: "7qQJQ3YtcGlqaLg5tcypN2",
      images: [
        {
          height: 1250,
          url: "https://i.scdn.co/image/4b719e0ecea3eb92d294b838db79874318f35da1",
          width: 1000,
        },
        {
          height: 800,
          url: "https://i.scdn.co/image/115419ce22f5572aadae7318cf4d1b9ece82397b",
          width: 640,
        },
        {
          height: 250,
          url: "https://i.scdn.co/image/117a1d78e1aa00ebac7c8b2cad631d79be813b24",
          width: 200,
        },
        {
          height: 80,
          url: "https://i.scdn.co/image/c16b2df508a1c6412444dcc99da6275b42269647",
          width: 64,
        },
      ],
      name: "Chubby Checker",
      popularity: 58,
      type: "artist",
      uri: "spotify:artist:7qQJQ3YtcGlqaLg5tcypN2",
    },
    {
      external_urls: {
        spotify: "https://open.spotify.com/artist/15FyiY3ChN0QRspHIQYq0W",
      },
      followers: {
        href: null,
        total: 142197,
      },
      genres: [
        "adult standards",
        "brill building pop",
        "doo-wop",
        "lounge",
        "rock-and-roll",
        "rockabilly",
      ],
      href: "https://api.spotify.com/v1/artists/15FyiY3ChN0QRspHIQYq0W",
      id: "15FyiY3ChN0QRspHIQYq0W",
      images: [
        {
          height: 1263,
          url: "https://i.scdn.co/image/28bf7291b822222629d722d8fae7223d9193d597",
          width: 1000,
        },
        {
          height: 808,
          url: "https://i.scdn.co/image/7a86dcb7c043db8c8c8a8e9e6737cc5ed1808032",
          width: 640,
        },
        {
          height: 253,
          url: "https://i.scdn.co/image/489d4673dc61a8704f7e692ab41dca2255cbe048",
          width: 200,
        },
        {
          height: 81,
          url: "https://i.scdn.co/image/e163e5d5861c5465e66292d1edd2a5eea70eaf7f",
          width: 64,
        },
      ],
      name: "Dion",
      popularity: 61,
      type: "artist",
      uri: "spotify:artist:15FyiY3ChN0QRspHIQYq0W",
    },
    {
      external_urls: {
        spotify: "https://open.spotify.com/artist/0EodhzA6yW1bIdD5B4tcmJ",
      },
      followers: {
        href: null,
        total: 370323,
      },
      genres: [
        "adult standards",
        "brill building pop",
        "easy listening",
        "lounge",
        "motown",
        "rock-and-roll",
        "rockabilly",
        "soul",
        "swing",
        "vocal jazz",
      ],
      href: "https://api.spotify.com/v1/artists/0EodhzA6yW1bIdD5B4tcmJ",
      id: "0EodhzA6yW1bIdD5B4tcmJ",
      images: [
        {
          height: 1263,
          url: "https://i.scdn.co/image/ae8a8b9d9b6a35f00b87fdae31f46db6a13fcd0e",
          width: 1000,
        },
        {
          height: 808,
          url: "https://i.scdn.co/image/0145d946866cb2205bba2f17ab445e290eb1ec4c",
          width: 640,
        },
        {
          height: 253,
          url: "https://i.scdn.co/image/0ca3415278b5ae71a13f475bc4d00b568e73af21",
          width: 200,
        },
        {
          height: 81,
          url: "https://i.scdn.co/image/99c37f6288d2933d59d2342e762beb5f640ab478",
          width: 64,
        },
      ],
      name: "Bobby Darin",
      popularity: 64,
      type: "artist",
      uri: "spotify:artist:0EodhzA6yW1bIdD5B4tcmJ",
    },
    {
      external_urls: {
        spotify: "https://open.spotify.com/artist/7ceUfdWq2t5nbatS6ollHh",
      },
      followers: {
        href: null,
        total: 463131,
      },
      genres: [
        "adult standards",
        "brill building pop",
        "canadian pop",
        "easy listening",
        "lounge",
        "rock-and-roll",
      ],
      href: "https://api.spotify.com/v1/artists/7ceUfdWq2t5nbatS6ollHh",
      id: "7ceUfdWq2t5nbatS6ollHh",
      images: [
        {
          height: 640,
          url: "https://i.scdn.co/image/ab6761610000e5eb7f6196428e9a4f69df9e6ff1",
          width: 640,
        },
        {
          height: 320,
          url: "https://i.scdn.co/image/ab676161000051747f6196428e9a4f69df9e6ff1",
          width: 320,
        },
        {
          height: 160,
          url: "https://i.scdn.co/image/ab6761610000f1787f6196428e9a4f69df9e6ff1",
          width: 160,
        },
      ],
      name: "Paul Anka",
      popularity: 66,
      type: "artist",
      uri: "spotify:artist:7ceUfdWq2t5nbatS6ollHh",
    },
    {
      external_urls: {
        spotify: "https://open.spotify.com/artist/3EY5DxGdy7x4GelivOjS2Q",
      },
      followers: {
        href: null,
        total: 274829,
      },
      genres: [
        "adult standards",
        "brill building pop",
        "easy listening",
        "lounge",
        "rock-and-roll",
        "rockabilly",
      ],
      href: "https://api.spotify.com/v1/artists/3EY5DxGdy7x4GelivOjS2Q",
      id: "3EY5DxGdy7x4GelivOjS2Q",
      images: [
        {
          height: 1196,
          url: "https://i.scdn.co/image/8bdcb1cc65a0ca1d54018e308bd2471e9c4820ce",
          width: 1000,
        },
        {
          height: 765,
          url: "https://i.scdn.co/image/f21c10c96a065f438d1511fb493847c301f8ae9c",
          width: 640,
        },
        {
          height: 239,
          url: "https://i.scdn.co/image/4a241bc89998f11920f10bd354374c4e8f3b90d3",
          width: 200,
        },
        {
          height: 77,
          url: "https://i.scdn.co/image/bf2ff77d590d81b37682813dd8f7e3ac3928922f",
          width: 64,
        },
      ],
      name: "Connie Francis",
      popularity: 59,
      type: "artist",
      uri: "spotify:artist:3EY5DxGdy7x4GelivOjS2Q",
    },
    {
      external_urls: {
        spotify: "https://open.spotify.com/artist/3BmGtnKgCSGYIUhmivXKWX",
      },
      followers: {
        href: null,
        total: 7704966,
      },
      genres: [
        "dance pop",
        "neo mellow",
        "pop",
        "pop rock",
        "post-teen pop",
        "talent show",
        "viral pop",
      ],
      href: "https://api.spotify.com/v1/artists/3BmGtnKgCSGYIUhmivXKWX",
      id: "3BmGtnKgCSGYIUhmivXKWX",
      images: [
        {
          height: 640,
          url: "https://i.scdn.co/image/edf21f431930210f657b50c50f1af3835d65447a",
          width: 640,
        },
        {
          height: 320,
          url: "https://i.scdn.co/image/f7a4ef53b6a609ad8ec39e39b6c548aa98a1935f",
          width: 320,
        },
        {
          height: 160,
          url: "https://i.scdn.co/image/25db89294764aa3d4b6782733dc69078efeb59b5",
          width: 160,
        },
      ],
      name: "Kelly Clarkson",
      popularity: 78,
      type: "artist",
      uri: "spotify:artist:3BmGtnKgCSGYIUhmivXKWX",
    },
    {
      external_urls: {
        spotify: "https://open.spotify.com/artist/6dJeKm76NjfXBNTpHmOhfO",
      },
      followers: {
        href: null,
        total: 6546020,
      },
      genres: [
        "dance pop",
        "electropop",
        "pop",
        "pop rap",
        "post-teen pop",
        "viral pop",
      ],
      href: "https://api.spotify.com/v1/artists/6dJeKm76NjfXBNTpHmOhfO",
      id: "6dJeKm76NjfXBNTpHmOhfO",
      images: [
        {
          height: 1333,
          url: "https://i.scdn.co/image/469b6a74f5ddca9560e9f5137842e3772c8576c0",
          width: 1000,
        },
        {
          height: 853,
          url: "https://i.scdn.co/image/e732af47c9b0c55a56a2eb9dc554928212f344bb",
          width: 640,
        },
        {
          height: 267,
          url: "https://i.scdn.co/image/b73fec33c90639d9586681afffcf6773d48a8103",
          width: 200,
        },
        {
          height: 85,
          url: "https://i.scdn.co/image/ed02316da670954a09d1283204724e7987408611",
          width: 64,
        },
      ],
      name: "Selena Gomez & The Scene",
      popularity: 71,
      type: "artist",
      uri: "spotify:artist:6dJeKm76NjfXBNTpHmOhfO",
    },
    {
      external_urls: {
        spotify: "https://open.spotify.com/artist/2gsggkzM5R49q6jpPvazou",
      },
      followers: {
        href: null,
        total: 8658473,
      },
      genres: ["dance pop", "electropop", "pop", "pop rap", "post-teen pop"],
      href: "https://api.spotify.com/v1/artists/2gsggkzM5R49q6jpPvazou",
      id: "2gsggkzM5R49q6jpPvazou",
      images: [
        {
          height: 640,
          url: "https://i.scdn.co/image/ab6761610000e5eb91f0dd753c09e051675a1ca6",
          width: 640,
        },
        {
          height: 320,
          url: "https://i.scdn.co/image/ab6761610000517491f0dd753c09e051675a1ca6",
          width: 320,
        },
        {
          height: 160,
          url: "https://i.scdn.co/image/ab6761610000f17891f0dd753c09e051675a1ca6",
          width: 160,
        },
      ],
      name: "Jessie J",
      popularity: 76,
      type: "artist",
      uri: "spotify:artist:2gsggkzM5R49q6jpPvazou",
    },
    {
      external_urls: {
        spotify: "https://open.spotify.com/artist/3r17AfJCCUqC9Lf0OAc73G",
      },
      followers: {
        href: null,
        total: 4471602,
      },
      genres: ["dance pop", "pop", "post-teen pop", "urban contemporary"],
      href: "https://api.spotify.com/v1/artists/3r17AfJCCUqC9Lf0OAc73G",
      id: "3r17AfJCCUqC9Lf0OAc73G",
      images: [
        {
          height: 640,
          url: "https://i.scdn.co/image/8f3351450c30b08da0fcfc9a7c317570b6bb291d",
          width: 640,
        },
        {
          height: 320,
          url: "https://i.scdn.co/image/ca659033a3fa16d89414cc895b155b2f5883f018",
          width: 320,
        },
        {
          height: 160,
          url: "https://i.scdn.co/image/63b54537b124e1f4f99f6b8b12202615eabef01f",
          width: 160,
        },
      ],
      name: "Fergie",
      popularity: 74,
      type: "artist",
      uri: "spotify:artist:3r17AfJCCUqC9Lf0OAc73G",
    },
    {
      external_urls: {
        spotify: "https://open.spotify.com/artist/6wPhSqRtPu1UhRCDX5yaDJ",
      },
      followers: {
        href: null,
        total: 4337613,
      },
      genres: [
        "dance pop",
        "girl group",
        "hip pop",
        "pop",
        "pop rap",
        "post-teen pop",
        "urban contemporary",
      ],
      href: "https://api.spotify.com/v1/artists/6wPhSqRtPu1UhRCDX5yaDJ",
      id: "6wPhSqRtPu1UhRCDX5yaDJ",
      images: [
        {
          height: 640,
          url: "https://i.scdn.co/image/15793cac497b87ee337ed77a85b7896c23ae2b15",
          width: 640,
        },
        {
          height: 320,
          url: "https://i.scdn.co/image/ba4d36d340214cb25b0a79ee0b93672c50450750",
          width: 320,
        },
        {
          height: 160,
          url: "https://i.scdn.co/image/201f68d44574e836ac0bcd808261b46a2ff1142a",
          width: 160,
        },
      ],
      name: "The Pussycat Dolls",
      popularity: 74,
      type: "artist",
      uri: "spotify:artist:6wPhSqRtPu1UhRCDX5yaDJ",
    },
    {
      external_urls: {
        spotify: "https://open.spotify.com/artist/4yiQZ8tQPux8cPriYMWUFP",
      },
      followers: {
        href: null,
        total: 4702694,
      },
      genres: [
        "dance pop",
        "hip pop",
        "pop",
        "pop rock",
        "post-teen pop",
        "urban contemporary",
      ],
      href: "https://api.spotify.com/v1/artists/4yiQZ8tQPux8cPriYMWUFP",
      id: "4yiQZ8tQPux8cPriYMWUFP",
      images: [
        {
          height: 640,
          url: "https://i.scdn.co/image/85a848ab7b9280082b13db82ac875c6a8c81c912",
          width: 640,
        },
        {
          height: 320,
          url: "https://i.scdn.co/image/e114e6bf5b8ac00d7f68bb6ed94fb24c8845264e",
          width: 320,
        },
        {
          height: 160,
          url: "https://i.scdn.co/image/d2c0967c7e0b864d56188cb71115eee966da4e4a",
          width: 160,
        },
      ],
      name: "Gwen Stefani",
      popularity: 77,
      type: "artist",
      uri: "spotify:artist:4yiQZ8tQPux8cPriYMWUFP",
    },
    {
      external_urls: {
        spotify: "https://open.spotify.com/artist/0p4nmQO2msCgU4IF37Wi3j",
      },
      followers: {
        href: null,
        total: 7326701,
      },
      genres: [
        "canadian pop",
        "candy pop",
        "dance pop",
        "pop",
        "post-teen pop",
      ],
      href: "https://api.spotify.com/v1/artists/0p4nmQO2msCgU4IF37Wi3j",
      id: "0p4nmQO2msCgU4IF37Wi3j",
      images: [
        {
          height: 640,
          url: "https://i.scdn.co/image/be5a4056eb50c465291d6c2334322cc1c7b3a0dc",
          width: 640,
        },
        {
          height: 320,
          url: "https://i.scdn.co/image/94ec2e6091591313e91848e641fb85bc11bcf6d7",
          width: 320,
        },
        {
          height: 160,
          url: "https://i.scdn.co/image/d63237906fdd5296dc20ddb9d23be2ebb8f20c13",
          width: 160,
        },
      ],
      name: "Avril Lavigne",
      popularity: 80,
      type: "artist",
      uri: "spotify:artist:0p4nmQO2msCgU4IF37Wi3j",
    },
    {
      external_urls: {
        spotify: "https://open.spotify.com/artist/6LqNN22kT3074XbTVUrhzX",
      },
      followers: {
        href: null,
        total: 6413782,
      },
      genres: ["dance pop", "electropop", "pop", "post-teen pop"],
      href: "https://api.spotify.com/v1/artists/6LqNN22kT3074XbTVUrhzX",
      id: "6LqNN22kT3074XbTVUrhzX",
      images: [
        {
          height: 640,
          url: "https://i.scdn.co/image/282055081bba71c1f715c6459de13d12fb4373d5",
          width: 640,
        },
        {
          height: 320,
          url: "https://i.scdn.co/image/1ff77be1c42cfacecbcb22b6965e8ae9c39c0c12",
          width: 320,
        },
        {
          height: 160,
          url: "https://i.scdn.co/image/ceff67562edd8f597d3cfc0d607c438960944b0d",
          width: 160,
        },
      ],
      name: "Kesha",
      popularity: 81,
      type: "artist",
      uri: "spotify:artist:6LqNN22kT3074XbTVUrhzX",
    },
    {
      external_urls: {
        spotify: "https://open.spotify.com/artist/1KCSPY1glIKqW2TotWuXOR",
      },
      followers: {
        href: null,
        total: 11087132,
      },
      genres: ["dance pop", "pop", "post-teen pop"],
      href: "https://api.spotify.com/v1/artists/1KCSPY1glIKqW2TotWuXOR",
      id: "1KCSPY1glIKqW2TotWuXOR",
      images: [
        {
          height: 640,
          url: "https://i.scdn.co/image/afc2d276d9c1b398d4f1048c20584f926296b9c0",
          width: 640,
        },
        {
          height: 320,
          url: "https://i.scdn.co/image/0bbf030d5fbc44787fa641733e810cd1b928c230",
          width: 320,
        },
        {
          height: 160,
          url: "https://i.scdn.co/image/55019ce117b4ddb39caf51e589df6675905fd1b5",
          width: 160,
        },
      ],
      name: "P!nk",
      popularity: 87,
      type: "artist",
      uri: "spotify:artist:1KCSPY1glIKqW2TotWuXOR",
    },
    {
      external_urls: {
        spotify: "https://open.spotify.com/artist/5YGY8feqx7naU7z4HrwZM6",
      },
      followers: {
        href: null,
        total: 15261318,
      },
      genres: ["dance pop", "pop", "post-teen pop"],
      href: "https://api.spotify.com/v1/artists/5YGY8feqx7naU7z4HrwZM6",
      id: "5YGY8feqx7naU7z4HrwZM6",
      images: [
        {
          height: 640,
          url: "https://i.scdn.co/image/f040656afb8bc16cd44781dd39ea3d02184f5c0f",
          width: 640,
        },
        {
          height: 320,
          url: "https://i.scdn.co/image/8d15c82eaf82ee38af11c2d755293ba6fb2ea036",
          width: 320,
        },
        {
          height: 160,
          url: "https://i.scdn.co/image/8a303968e21579c92c2c1e9c811e0578c401423e",
          width: 160,
        },
      ],
      name: "Miley Cyrus",
      popularity: 88,
      type: "artist",
      uri: "spotify:artist:5YGY8feqx7naU7z4HrwZM6",
    },
    {
      external_urls: {
        spotify: "https://open.spotify.com/artist/1l8Fu6IkuTP0U5QetQJ5Xt",
      },
      followers: {
        href: null,
        total: 12769529,
      },
      genres: [
        "dance pop",
        "girl group",
        "pop",
        "post-teen pop",
        "talent show",
      ],
      href: "https://api.spotify.com/v1/artists/1l8Fu6IkuTP0U5QetQJ5Xt",
      id: "1l8Fu6IkuTP0U5QetQJ5Xt",
      images: [
        {
          height: 640,
          url: "https://i.scdn.co/image/c5e2e813755c107d8f4b068ec1001ea0f91409f1",
          width: 640,
        },
        {
          height: 320,
          url: "https://i.scdn.co/image/41935c973086a4e4ad47dfda8914eb4a4aca1423",
          width: 320,
        },
        {
          height: 160,
          url: "https://i.scdn.co/image/27a42ab5ba14d9d941aa6801ce2e85806d6f9b32",
          width: 160,
        },
      ],
      name: "Fifth Harmony",
      popularity: 74,
      type: "artist",
      uri: "spotify:artist:1l8Fu6IkuTP0U5QetQJ5Xt",
    },
    {
      external_urls: {
        spotify: "https://open.spotify.com/artist/2S9W9aSAd7e5mp8WqWxN2h",
      },
      followers: {
        href: null,
        total: 1849939,
      },
      genres: ["dance pop", "pop", "post-teen pop"],
      href: "https://api.spotify.com/v1/artists/2S9W9aSAd7e5mp8WqWxN2h",
      id: "2S9W9aSAd7e5mp8WqWxN2h",
      images: [
        {
          height: 563,
          url: "https://i.scdn.co/image/2b46c43a2c8d3af23f3183299c2070c2d42ad039",
          width: 1000,
        },
        {
          height: 360,
          url: "https://i.scdn.co/image/df2f2f41ff8aa1f1d24c12a5e0c96fd66b3a975e",
          width: 640,
        },
        {
          height: 113,
          url: "https://i.scdn.co/image/d08392366ca41c605b91c88d933925932a007a92",
          width: 200,
        },
        {
          height: 36,
          url: "https://i.scdn.co/image/39b33c98173f680cb6c2a4eea3d7e8823017fb2f",
          width: 64,
        },
      ],
      name: "Hilary Duff",
      popularity: 60,
      type: "artist",
      uri: "spotify:artist:2S9W9aSAd7e5mp8WqWxN2h",
    },
    {
      external_urls: {
        spotify: "https://open.spotify.com/artist/7o95ZoZt5ZYn31e9z1Hc0a",
      },
      followers: {
        href: null,
        total: 1233508,
      },
      genres: [
        "dance pop",
        "europop",
        "neo mellow",
        "pop",
        "pop rap",
        "pop rock",
        "post-teen pop",
      ],
      href: "https://api.spotify.com/v1/artists/7o95ZoZt5ZYn31e9z1Hc0a",
      id: "7o95ZoZt5ZYn31e9z1Hc0a",
      images: [
        {
          height: 640,
          url: "https://i.scdn.co/image/ab6761610000e5eb7a64b9ca8bf5a022474111ff",
          width: 640,
        },
        {
          height: 320,
          url: "https://i.scdn.co/image/ab676161000051747a64b9ca8bf5a022474111ff",
          width: 320,
        },
        {
          height: 160,
          url: "https://i.scdn.co/image/ab6761610000f1787a64b9ca8bf5a022474111ff",
          width: 160,
        },
      ],
      name: "Natasha Bedingfield",
      popularity: 70,
      type: "artist",
      uri: "spotify:artist:7o95ZoZt5ZYn31e9z1Hc0a",
    },
    {
      external_urls: {
        spotify: "https://open.spotify.com/artist/7nU4hB040gTmHm45YYMvqc",
      },
      followers: {
        href: null,
        total: 3426443,
      },
      genres: ["dance pop", "pop", "post-teen pop", "social media pop"],
      href: "https://api.spotify.com/v1/artists/7nU4hB040gTmHm45YYMvqc",
      id: "7nU4hB040gTmHm45YYMvqc",
      images: [
        {
          height: 1096,
          url: "https://i.scdn.co/image/1bb652996764243c1d963008898de2ab514b4796",
          width: 822,
        },
        {
          height: 853,
          url: "https://i.scdn.co/image/0f08574233467fe4e5ffb889ece10b9c0868610e",
          width: 640,
        },
        {
          height: 267,
          url: "https://i.scdn.co/image/21dafec9d875038f5d2dbaa842ef37422a84b3aa",
          width: 200,
        },
        {
          height: 85,
          url: "https://i.scdn.co/image/473d0d85a8aae2366ec20819419462487a190152",
          width: 64,
        },
      ],
      name: "Hannah Montana",
      popularity: 68,
      type: "artist",
      uri: "spotify:artist:7nU4hB040gTmHm45YYMvqc",
    },
    {
      external_urls: {
        spotify: "https://open.spotify.com/artist/6S2OmqARrzebs0tKUEyXyp",
      },
      followers: {
        href: null,
        total: 19930063,
      },
      genres: ["dance pop", "pop", "post-teen pop"],
      href: "https://api.spotify.com/v1/artists/6S2OmqARrzebs0tKUEyXyp",
      id: "6S2OmqARrzebs0tKUEyXyp",
      images: [
        {
          height: 640,
          url: "https://i.scdn.co/image/9a0055f65c4f9e6d58dd480ecf6ecc7ecfb2e90a",
          width: 640,
        },
        {
          height: 320,
          url: "https://i.scdn.co/image/781d06e6535817d37b0f0d28c40a79a6e67d7f96",
          width: 320,
        },
        {
          height: 160,
          url: "https://i.scdn.co/image/1814f3dd6934c7b472907e679a6bac01aaaf3903",
          width: 160,
        },
      ],
      name: "Demi Lovato",
      popularity: 87,
      type: "artist",
      uri: "spotify:artist:6S2OmqARrzebs0tKUEyXyp",
    },
    {
      external_urls: {
        spotify: "https://open.spotify.com/artist/0SCbttzoZTnLFebDYmAWCm",
      },
      followers: {
        href: null,
        total: 1384529,
      },
      genres: ["glee club", "hollywood", "post-teen pop"],
      href: "https://api.spotify.com/v1/artists/0SCbttzoZTnLFebDYmAWCm",
      id: "0SCbttzoZTnLFebDYmAWCm",
      images: [
        {
          height: 450,
          url: "https://i.scdn.co/image/5b5a95f260ac429405e871777e3c17c9126c30ad",
          width: 600,
        },
        {
          height: 150,
          url: "https://i.scdn.co/image/446aee35047292c4ba3e57e83ef97e6a9ffea669",
          width: 200,
        },
        {
          height: 48,
          url: "https://i.scdn.co/image/ba0a93f82502495617bc233f726b0debed5c43d9",
          width: 64,
        },
      ],
      name: "Glee Cast",
      popularity: 78,
      type: "artist",
      uri: "spotify:artist:0SCbttzoZTnLFebDYmAWCm",
    },
    {
      external_urls: {
        spotify: "https://open.spotify.com/artist/4m4SfDVbF5wxrwEjDKgi4k",
      },
      followers: {
        href: null,
        total: 2368838,
      },
      genres: [
        "dance pop",
        "electropop",
        "pop",
        "post-teen pop",
        "social media pop",
        "talent show",
        "viral pop",
      ],
      href: "https://api.spotify.com/v1/artists/4m4SfDVbF5wxrwEjDKgi4k",
      id: "4m4SfDVbF5wxrwEjDKgi4k",
      images: [
        {
          height: 640,
          url: "https://i.scdn.co/image/ab6761610000e5ebb5231a91bb97ad31e3607f30",
          width: 640,
        },
        {
          height: 320,
          url: "https://i.scdn.co/image/ab67616100005174b5231a91bb97ad31e3607f30",
          width: 320,
        },
        {
          height: 160,
          url: "https://i.scdn.co/image/ab6761610000f178b5231a91bb97ad31e3607f30",
          width: 160,
        },
      ],
      name: "Cher Lloyd",
      popularity: 67,
      type: "artist",
      uri: "spotify:artist:4m4SfDVbF5wxrwEjDKgi4k",
    },
    {
      external_urls: {
        spotify: "https://open.spotify.com/artist/26dSoYclwsYLMAKD3tpOr4",
      },
      followers: {
        href: null,
        total: 9149997,
      },
      genres: ["dance pop", "pop", "post-teen pop"],
      href: "https://api.spotify.com/v1/artists/26dSoYclwsYLMAKD3tpOr4",
      id: "26dSoYclwsYLMAKD3tpOr4",
      images: [
        {
          height: 640,
          url: "https://i.scdn.co/image/88b5417c1aef3bbdff1889714136deb5ea310ab8",
          width: 640,
        },
        {
          height: 320,
          url: "https://i.scdn.co/image/8bafec3ea590b2b4d5b25b01e8adb49bac451929",
          width: 320,
        },
        {
          height: 160,
          url: "https://i.scdn.co/image/e78a6b30e56481315a4c37c8da8bc195ba2613dc",
          width: 160,
        },
      ],
      name: "Britney Spears",
      popularity: 84,
      type: "artist",
      uri: "spotify:artist:26dSoYclwsYLMAKD3tpOr4",
    },
    {
      external_urls: {
        spotify: "https://open.spotify.com/artist/1l7ZsJRRS8wlW3WfJfPfNS",
      },
      followers: {
        href: null,
        total: 6156814,
      },
      genres: ["dance pop", "pop", "pop rap", "post-teen pop"],
      href: "https://api.spotify.com/v1/artists/1l7ZsJRRS8wlW3WfJfPfNS",
      id: "1l7ZsJRRS8wlW3WfJfPfNS",
      images: [
        {
          height: 640,
          url: "https://i.scdn.co/image/e3ea6d2340bba0d93450a813a0843fd9cf998e39",
          width: 640,
        },
        {
          height: 320,
          url: "https://i.scdn.co/image/e452b8ffb52395516723d21f721cc7c4cdbd04ce",
          width: 320,
        },
        {
          height: 160,
          url: "https://i.scdn.co/image/122618dc921de18a54320e50061395ceb5d76695",
          width: 160,
        },
      ],
      name: "Christina Aguilera",
      popularity: 82,
      type: "artist",
      uri: "spotify:artist:1l7ZsJRRS8wlW3WfJfPfNS",
    },
    {
      external_urls: {
        spotify: "https://open.spotify.com/artist/2AQjGvtT0pFYfxR3neFcvz",
      },
      followers: {
        href: null,
        total: 1782485,
      },
      genres: [
        "dance pop",
        "pop",
        "pop rap",
        "pop rock",
        "post-teen pop",
        "r&b",
        "urban contemporary",
      ],
      href: "https://api.spotify.com/v1/artists/2AQjGvtT0pFYfxR3neFcvz",
      id: "2AQjGvtT0pFYfxR3neFcvz",
      images: [
        {
          height: 640,
          url: "https://i.scdn.co/image/67c0578bd64b4634e0d3f07c1c4e3772d138cf9d",
          width: 640,
        },
        {
          height: 320,
          url: "https://i.scdn.co/image/2b449bc53fb898b9035c31c7842c0f3b4fa6fd66",
          width: 320,
        },
        {
          height: 160,
          url: "https://i.scdn.co/image/e4e6c4dd812b8c720ea077505938f7e5a0f52809",
          width: 160,
        },
      ],
      name: "Jordin Sparks",
      popularity: 67,
      type: "artist",
      uri: "spotify:artist:2AQjGvtT0pFYfxR3neFcvz",
    },
    {
      external_urls: {
        spotify: "https://open.spotify.com/artist/2B4ZHz4QDWJTXPFPgO5peE",
      },
      followers: {
        href: null,
        total: 1539447,
      },
      genres: [
        "g funk",
        "gangster rap",
        "hardcore hip hop",
        "hip hop",
        "pop rap",
        "rap",
        "west coast rap",
      ],
      href: "https://api.spotify.com/v1/artists/2B4ZHz4QDWJTXPFPgO5peE",
      id: "2B4ZHz4QDWJTXPFPgO5peE",
      images: [
        {
          height: 1415,
          url: "https://i.scdn.co/image/b4e391e4baf471b23cbb34ca6a7fdfb972f01177",
          width: 1000,
        },
        {
          height: 905,
          url: "https://i.scdn.co/image/504a16559393702b641beeee6bec8b2fbeaecc9d",
          width: 640,
        },
        {
          height: 283,
          url: "https://i.scdn.co/image/28c4009b0e086d6c5e4f2d3cbe44a5dce692beaa",
          width: 200,
        },
        {
          height: 91,
          url: "https://i.scdn.co/image/a957aa25534e73b6ccc20df16710f98adb91333c",
          width: 64,
        },
      ],
      name: "Warren G",
      popularity: 69,
      type: "artist",
      uri: "spotify:artist:2B4ZHz4QDWJTXPFPgO5peE",
    },
    {
      external_urls: {
        spotify: "https://open.spotify.com/artist/3USpNaxpX1iNqNnQWqg9ob",
      },
      followers: {
        href: null,
        total: 465551,
      },
      genres: [
        "chicano rap",
        "g funk",
        "gangster rap",
        "hardcore hip hop",
        "hip hop",
        "hyphy",
        "rap",
        "southern hip hop",
        "west coast rap",
        "west coast trap",
      ],
      href: "https://api.spotify.com/v1/artists/3USpNaxpX1iNqNnQWqg9ob",
      id: "3USpNaxpX1iNqNnQWqg9ob",
      images: [
        {
          height: 723,
          url: "https://i.scdn.co/image/8c2d565aef07726d000e91a76105ca86bd415b32",
          width: 1000,
        },
        {
          height: 463,
          url: "https://i.scdn.co/image/4aed47e43ba9188a8c5bd99a931e0d846b2856ac",
          width: 640,
        },
        {
          height: 145,
          url: "https://i.scdn.co/image/c02c372dc9244f9752856fb1e31fbccfd176e9df",
          width: 200,
        },
        {
          height: 46,
          url: "https://i.scdn.co/image/c4b3d0a440991144706d47c3371681091454954d",
          width: 64,
        },
      ],
      name: "Mack 10",
      popularity: 61,
      type: "artist",
      uri: "spotify:artist:3USpNaxpX1iNqNnQWqg9ob",
    },
    {
      external_urls: {
        spotify: "https://open.spotify.com/artist/3zNM2tRfTX6LI1lN2PlrTt",
      },
      followers: {
        href: null,
        total: 887814,
      },
      genres: [
        "g funk",
        "gangster rap",
        "hardcore hip hop",
        "hip hop",
        "rap",
        "southern hip hop",
        "west coast rap",
      ],
      href: "https://api.spotify.com/v1/artists/3zNM2tRfTX6LI1lN2PlrTt",
      id: "3zNM2tRfTX6LI1lN2PlrTt",
      images: [
        {
          height: 1012,
          url: "https://i.scdn.co/image/a7f34c1303821f7889443c61f0f31dc23a639de0",
          width: 1000,
        },
        {
          height: 648,
          url: "https://i.scdn.co/image/3f29ea082ebfc951f40646ff4487ee50157b4425",
          width: 640,
        },
        {
          height: 202,
          url: "https://i.scdn.co/image/f62f36a35f85cd324676551f8b4f0c0932af01ab",
          width: 200,
        },
        {
          height: 65,
          url: "https://i.scdn.co/image/59a0c55cc11e262efa7181a668cde0a6c0f57c7c",
          width: 64,
        },
      ],
      name: "Westside Connection",
      popularity: 61,
      type: "artist",
      uri: "spotify:artist:3zNM2tRfTX6LI1lN2PlrTt",
    },
    {
      external_urls: {
        spotify: "https://open.spotify.com/artist/0b2XeWDPeBiLeskT6RFqMb",
      },
      followers: {
        href: null,
        total: 615733,
      },
      genres: [
        "g funk",
        "gangster rap",
        "hardcore hip hop",
        "hip hop",
        "hyphy",
        "popping",
        "rap",
        "southern hip hop",
        "west coast rap",
      ],
      href: "https://api.spotify.com/v1/artists/0b2XeWDPeBiLeskT6RFqMb",
      id: "0b2XeWDPeBiLeskT6RFqMb",
      images: [
        {
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273dc3ce2b787ae2ca365f974f0",
          width: 640,
        },
        {
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02dc3ce2b787ae2ca365f974f0",
          width: 300,
        },
        {
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851dc3ce2b787ae2ca365f974f0",
          width: 64,
        },
      ],
      name: "DJ Quik",
      popularity: 59,
      type: "artist",
      uri: "spotify:artist:0b2XeWDPeBiLeskT6RFqMb",
    },
    {
      external_urls: {
        spotify: "https://open.spotify.com/artist/6NyJIFHAePjHR1pFxwisqz",
      },
      followers: {
        href: null,
        total: 448127,
      },
      genres: [
        "g funk",
        "gangster rap",
        "hardcore hip hop",
        "hip hop",
        "rap",
        "west coast rap",
        "west coast trap",
      ],
      href: "https://api.spotify.com/v1/artists/6NyJIFHAePjHR1pFxwisqz",
      id: "6NyJIFHAePjHR1pFxwisqz",
      images: [
        {
          height: 732,
          url: "https://i.scdn.co/image/8d3e5e7bf70fe107b338556fcffbe575e9ac453c",
          width: 800,
        },
        {
          height: 586,
          url: "https://i.scdn.co/image/da8f8708b5df41a754da8b86e058e0498758a744",
          width: 640,
        },
        {
          height: 183,
          url: "https://i.scdn.co/image/be6822e6622f82481538c53d3a2bad3cff70d841",
          width: 200,
        },
        {
          height: 59,
          url: "https://i.scdn.co/image/78e8e103768b5cc3fe61af848448d51e4f15ef62",
          width: 64,
        },
      ],
      name: "Kurupt",
      popularity: 67,
      type: "artist",
      uri: "spotify:artist:6NyJIFHAePjHR1pFxwisqz",
    },
    {
      external_urls: {
        spotify: "https://open.spotify.com/artist/7B4hKK0S9QYnaoqa9OuwgX",
      },
      followers: {
        href: null,
        total: 3161301,
      },
      genres: [
        "g funk",
        "gangster rap",
        "hardcore hip hop",
        "hip hop",
        "rap",
        "west coast rap",
      ],
      href: "https://api.spotify.com/v1/artists/7B4hKK0S9QYnaoqa9OuwgX",
      id: "7B4hKK0S9QYnaoqa9OuwgX",
      images: [
        {
          height: 1452,
          url: "https://i.scdn.co/image/86dccc14ded05c08b96d314a5b0ddf95bb01f013",
          width: 968,
        },
        {
          height: 960,
          url: "https://i.scdn.co/image/d01a3ee2567867cc2f1bd2b56d778874d2b89b50",
          width: 640,
        },
        {
          height: 300,
          url: "https://i.scdn.co/image/827529e6f65be4c27f9a97d27943f4fb082d265e",
          width: 200,
        },
        {
          height: 96,
          url: "https://i.scdn.co/image/263a3292af691daeb8c5104306c1158cac4c4f4f",
          width: 64,
        },
      ],
      name: "Eazy-E",
      popularity: 67,
      type: "artist",
      uri: "spotify:artist:7B4hKK0S9QYnaoqa9OuwgX",
    },
    {
      external_urls: {
        spotify: "https://open.spotify.com/artist/4pmNqFu71wEmFXSsYAiWK8",
      },
      followers: {
        href: null,
        total: 1424316,
      },
      genres: ["gangster rap", "hardcore hip hop", "hip hop", "rap"],
      href: "https://api.spotify.com/v1/artists/4pmNqFu71wEmFXSsYAiWK8",
      id: "4pmNqFu71wEmFXSsYAiWK8",
      images: [
        {
          height: 640,
          url: "https://i.scdn.co/image/6c277d530d53fef22b2eb935dd329a51ca3f9d20",
          width: 640,
        },
        {
          height: 320,
          url: "https://i.scdn.co/image/c3af2d4288209ee2e6dcc118f911d494442d4093",
          width: 320,
        },
        {
          height: 160,
          url: "https://i.scdn.co/image/d3167ba925693805c4993b1463675db1c7861913",
          width: 160,
        },
      ],
      name: "Makaveli",
      popularity: 54,
      type: "artist",
      uri: "spotify:artist:4pmNqFu71wEmFXSsYAiWK8",
    },
    {
      external_urls: {
        spotify: "https://open.spotify.com/artist/4sb7rZNN93BSS6Gqgepo4v",
      },
      followers: {
        href: null,
        total: 1016855,
      },
      genres: [
        "cali rap",
        "gangster rap",
        "golden age hip hop",
        "hip hop",
        "hyphy",
        "oakland hip hop",
        "pop rap",
        "rap",
        "southern hip hop",
        "west coast rap",
      ],
      href: "https://api.spotify.com/v1/artists/4sb7rZNN93BSS6Gqgepo4v",
      id: "4sb7rZNN93BSS6Gqgepo4v",
      images: [
        {
          height: 640,
          url: "https://i.scdn.co/image/f2e0c6bcd0ef6cba2a82875efbed7e1601b2610a",
          width: 640,
        },
        {
          height: 320,
          url: "https://i.scdn.co/image/4c16782270c5a966f6fd89f29aded7d3c8e192b2",
          width: 320,
        },
        {
          height: 160,
          url: "https://i.scdn.co/image/6bf0817647a1764fa7ce04d4f5b9204e7edacd4d",
          width: 160,
        },
      ],
      name: "Too $hort",
      popularity: 69,
      type: "artist",
      uri: "spotify:artist:4sb7rZNN93BSS6Gqgepo4v",
    },
    {
      external_urls: {
        spotify: "https://open.spotify.com/artist/5Jz9kKRnCRLTodCH58MyB4",
      },
      followers: {
        href: null,
        total: 181996,
      },
      genres: [
        "g funk",
        "gangster rap",
        "hip hop",
        "rap",
        "west coast rap",
        "west coast trap",
      ],
      href: "https://api.spotify.com/v1/artists/5Jz9kKRnCRLTodCH58MyB4",
      id: "5Jz9kKRnCRLTodCH58MyB4",
      images: [
        {
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b2739c63deddff43d8e8d6bc8d27",
          width: 640,
        },
        {
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e029c63deddff43d8e8d6bc8d27",
          width: 300,
        },
        {
          height: 64,
          url: "https://i.scdn.co/image/ab67616d000048519c63deddff43d8e8d6bc8d27",
          width: 64,
        },
      ],
      name: "Daz Dillinger",
      popularity: 64,
      type: "artist",
      uri: "spotify:artist:5Jz9kKRnCRLTodCH58MyB4",
    },
    {
      external_urls: {
        spotify: "https://open.spotify.com/artist/4EnEZVjo3w1cwcQYePccay",
      },
      followers: {
        href: null,
        total: 3492371,
      },
      genres: [
        "conscious hip hop",
        "gangster rap",
        "golden age hip hop",
        "hardcore hip hop",
        "hip hop",
        "old school hip hop",
        "rap",
        "west coast rap",
      ],
      href: "https://api.spotify.com/v1/artists/4EnEZVjo3w1cwcQYePccay",
      id: "4EnEZVjo3w1cwcQYePccay",
      images: [
        {
          height: 1000,
          url: "https://i.scdn.co/image/4f36d3f900eaf8381b0d3f5febe0e5bf8c94dbea",
          width: 1000,
        },
        {
          height: 640,
          url: "https://i.scdn.co/image/6c6c5456aa373c9cbf4f385c2dd69c4177e6e3fa",
          width: 640,
        },
        {
          height: 200,
          url: "https://i.scdn.co/image/e3e634272efd0251c2b8298b25fcd4b659993178",
          width: 200,
        },
        {
          height: 64,
          url: "https://i.scdn.co/image/8bf427fbb118c36cd56439a06f0bfb77e4e7bdf3",
          width: 64,
        },
      ],
      name: "N.W.A.",
      popularity: 70,
      type: "artist",
      uri: "spotify:artist:4EnEZVjo3w1cwcQYePccay",
    },
    {
      external_urls: {
        spotify: "https://open.spotify.com/artist/0NbfKEOTQCcwd6o7wSDOHI",
      },
      followers: {
        href: null,
        total: 3414876,
      },
      genres: [
        "gangster rap",
        "hip hop",
        "pop rap",
        "rap",
        "southern hip hop",
        "trap",
      ],
      href: "https://api.spotify.com/v1/artists/0NbfKEOTQCcwd6o7wSDOHI",
      id: "0NbfKEOTQCcwd6o7wSDOHI",
      images: [
        {
          height: 640,
          url: "https://i.scdn.co/image/78b601bc99711d752b6e28eda5a4857315488166",
          width: 640,
        },
        {
          height: 320,
          url: "https://i.scdn.co/image/4a1a5df2b342712465a5941b6edb6038aedcec39",
          width: 320,
        },
        {
          height: 160,
          url: "https://i.scdn.co/image/0d12f74c9667e0fb789353805020e54e0a57936c",
          width: 160,
        },
      ],
      name: "The Game",
      popularity: 76,
      type: "artist",
      uri: "spotify:artist:0NbfKEOTQCcwd6o7wSDOHI",
    },
    {
      external_urls: {
        spotify: "https://open.spotify.com/artist/5spEJXLwD1sKUdC2bnOHPg",
      },
      followers: {
        href: null,
        total: 1876721,
      },
      genres: [
        "gangster rap",
        "hip hop",
        "ohio hip hop",
        "pop rap",
        "rap",
        "southern hip hop",
      ],
      href: "https://api.spotify.com/v1/artists/5spEJXLwD1sKUdC2bnOHPg",
      id: "5spEJXLwD1sKUdC2bnOHPg",
      images: [
        {
          height: 640,
          url: "https://i.scdn.co/image/2549ade83c56688941a10a824779d755361c3dce",
          width: 640,
        },
        {
          height: 320,
          url: "https://i.scdn.co/image/ffa85a955833830f2a71cf484d47cf2037225881",
          width: 320,
        },
        {
          height: 160,
          url: "https://i.scdn.co/image/0ed65c7f244650976648abf99cf1e6db5b38210c",
          width: 160,
        },
      ],
      name: "Bone Thugs-N-Harmony",
      popularity: 69,
      type: "artist",
      uri: "spotify:artist:5spEJXLwD1sKUdC2bnOHPg",
    },
    {
      external_urls: {
        spotify: "https://open.spotify.com/artist/3Mcii5XWf6E0lrY3Uky4cA",
      },
      followers: {
        href: null,
        total: 4512769,
      },
      genres: [
        "conscious hip hop",
        "g funk",
        "gangster rap",
        "hip hop",
        "rap",
        "west coast rap",
      ],
      href: "https://api.spotify.com/v1/artists/3Mcii5XWf6E0lrY3Uky4cA",
      id: "3Mcii5XWf6E0lrY3Uky4cA",
      images: [
        {
          height: 640,
          url: "https://i.scdn.co/image/8ed73361f9c205b88c4d092b2f628576e2c719c8",
          width: 640,
        },
        {
          height: 320,
          url: "https://i.scdn.co/image/5414f371462d8c9d5d35c1a1b908d9f2a65fefbb",
          width: 320,
        },
        {
          height: 160,
          url: "https://i.scdn.co/image/24c863b3ebfa8848f7691a2084456cd9a7dac567",
          width: 160,
        },
      ],
      name: "Ice Cube",
      popularity: 77,
      type: "artist",
      uri: "spotify:artist:3Mcii5XWf6E0lrY3Uky4cA",
    },
    {
      external_urls: {
        spotify: "https://open.spotify.com/artist/1Oa0bMld0A3u5OTYfMzp5h",
      },
      followers: {
        href: null,
        total: 1048471,
      },
      genres: [
        "g funk",
        "gangster rap",
        "hip hop",
        "pop rap",
        "rap",
        "west coast rap",
      ],
      href: "https://api.spotify.com/v1/artists/1Oa0bMld0A3u5OTYfMzp5h",
      id: "1Oa0bMld0A3u5OTYfMzp5h",
      images: [
        {
          height: 1243,
          url: "https://i.scdn.co/image/fd5d1f379a33ee26e2dfaf296bbab0970ec95ede",
          width: 1000,
        },
        {
          height: 795,
          url: "https://i.scdn.co/image/6ee73d7a40401620c5296011dedeea959bd039a0",
          width: 640,
        },
        {
          height: 249,
          url: "https://i.scdn.co/image/e5e37b75daf498d5c94f48d4de226d0a8914ef44",
          width: 200,
        },
        {
          height: 80,
          url: "https://i.scdn.co/image/6da3fe2807deed1d16e26ec24b183b9c23f2ea2e",
          width: 64,
        },
      ],
      name: "Nate Dogg",
      popularity: 80,
      type: "artist",
      uri: "spotify:artist:1Oa0bMld0A3u5OTYfMzp5h",
    },
    {
      external_urls: {
        spotify: "https://open.spotify.com/artist/4tujQJicOnuZRLiBFdp3Ou",
      },
      followers: {
        href: null,
        total: 1219734,
      },
      genres: [
        "detroit hip hop",
        "g funk",
        "gangster rap",
        "hardcore hip hop",
        "hip hop",
        "pop rap",
        "rap",
        "west coast rap",
      ],
      href: "https://api.spotify.com/v1/artists/4tujQJicOnuZRLiBFdp3Ou",
      id: "4tujQJicOnuZRLiBFdp3Ou",
      images: [
        {
          height: 640,
          url: "https://i.scdn.co/image/f17bd1b3b6e1b72962ad8b0d60190b5ab725ad7c",
          width: 640,
        },
        {
          height: 320,
          url: "https://i.scdn.co/image/565bd7e6cb475003a4a644a6a667ae5518a529f8",
          width: 320,
        },
        {
          height: 160,
          url: "https://i.scdn.co/image/67979bd06edd104fb29fbc57c4a1542feb5682a2",
          width: 160,
        },
      ],
      name: "Xzibit",
      popularity: 69,
      type: "artist",
      uri: "spotify:artist:4tujQJicOnuZRLiBFdp3Ou",
    },
    {
      external_urls: {
        spotify: "https://open.spotify.com/artist/7AjokpCIqf0gHMZJlodw2k",
      },
      followers: {
        href: null,
        total: 256126,
      },
      genres: [
        "g funk",
        "gangster rap",
        "hip hop",
        "hyphy",
        "rap",
        "west coast rap",
        "west coast trap",
      ],
      href: "https://api.spotify.com/v1/artists/7AjokpCIqf0gHMZJlodw2k",
      id: "7AjokpCIqf0gHMZJlodw2k",
      images: [
        {
          height: 567,
          url: "https://i.scdn.co/image/92ad3bfe0aa4efc3769634bf8098430a70c28bc9",
          width: 1000,
        },
        {
          height: 363,
          url: "https://i.scdn.co/image/4eb7a59ed0b851f363321a0822309e474798d302",
          width: 640,
        },
        {
          height: 113,
          url: "https://i.scdn.co/image/21866aab8330bd22539fbf5fe6f49e004e76b638",
          width: 199,
        },
        {
          height: 36,
          url: "https://i.scdn.co/image/d334428fdb894eca9063831f0bef5ced4f54e574",
          width: 64,
        },
      ],
      name: "Suga Free",
      popularity: 52,
      type: "artist",
      uri: "spotify:artist:7AjokpCIqf0gHMZJlodw2k",
    },
    {
      external_urls: {
        spotify: "https://open.spotify.com/artist/5me0Irg2ANcsgc93uaYrpb",
      },
      followers: {
        href: null,
        total: 6421597,
      },
      genres: [
        "east coast hip hop",
        "gangster rap",
        "hardcore hip hop",
        "hip hop",
        "rap",
      ],
      href: "https://api.spotify.com/v1/artists/5me0Irg2ANcsgc93uaYrpb",
      id: "5me0Irg2ANcsgc93uaYrpb",
      images: [
        {
          height: 1250,
          url: "https://i.scdn.co/image/1b4858fbd24046a81cace5ee18d19c868262b91f",
          width: 1000,
        },
        {
          height: 800,
          url: "https://i.scdn.co/image/9bb42de208edcb69653a8e7951fa93b13f598cdd",
          width: 640,
        },
        {
          height: 250,
          url: "https://i.scdn.co/image/e56612ae56c9007e99ab36b83efd4faf6401260d",
          width: 200,
        },
        {
          height: 80,
          url: "https://i.scdn.co/image/fc074d287739cca12a89c76fd338ff7d4aa4acee",
          width: 64,
        },
      ],
      name: "The Notorious B.I.G.",
      popularity: 82,
      type: "artist",
      uri: "spotify:artist:5me0Irg2ANcsgc93uaYrpb",
    },
    {
      external_urls: {
        spotify: "https://open.spotify.com/artist/3NgwMzys77S7sgfh2W5k0V",
      },
      followers: {
        href: null,
        total: 290138,
      },
      genres: ["gangster rap", "hip hop", "hyphy", "rap", "west coast rap"],
      href: "https://api.spotify.com/v1/artists/3NgwMzys77S7sgfh2W5k0V",
      id: "3NgwMzys77S7sgfh2W5k0V",
      images: [
        {
          height: 1174,
          url: "https://i.scdn.co/image/d273e8e435b0c21657812fac2f709623c532c89e",
          width: 1000,
        },
        {
          height: 752,
          url: "https://i.scdn.co/image/7c2177c5980d9676d246f49b86e3c28afb61fc24",
          width: 640,
        },
        {
          height: 235,
          url: "https://i.scdn.co/image/fed6587b0b3fd0324c5ed7ee2bc1528eee0714fb",
          width: 200,
        },
        {
          height: 75,
          url: "https://i.scdn.co/image/98f05aacdb798b07eaf3152a73d76af7b34e50c1",
          width: 64,
        },
      ],
      name: "WC",
      popularity: 52,
      type: "artist",
      uri: "spotify:artist:3NgwMzys77S7sgfh2W5k0V",
    },
    {
      external_urls: {
        spotify: "https://open.spotify.com/artist/76fO70b6BK2xt3UVOe4BIZ",
      },
      followers: {
        href: null,
        total: 608472,
      },
      genres: ["gangster rap", "hardcore hip hop", "hip hop", "rap"],
      href: "https://api.spotify.com/v1/artists/76fO70b6BK2xt3UVOe4BIZ",
      id: "76fO70b6BK2xt3UVOe4BIZ",
      images: [
        {
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273a807ea7d3c719d4e7232af89",
          width: 640,
        },
        {
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02a807ea7d3c719d4e7232af89",
          width: 300,
        },
        {
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851a807ea7d3c719d4e7232af89",
          width: 64,
        },
      ],
      name: "Thug Life",
      popularity: 50,
      type: "artist",
      uri: "spotify:artist:76fO70b6BK2xt3UVOe4BIZ",
    },
    {
      external_urls: {
        spotify: "https://open.spotify.com/artist/4Otx4bRLSfpah5kX8hdgDC",
      },
      followers: {
        href: null,
        total: 751031,
      },
      genres: [
        "east coast hip hop",
        "gangster rap",
        "hardcore hip hop",
        "hip hop",
        "hip pop",
        "new jersey rap",
        "pop rap",
        "rap",
      ],
      href: "https://api.spotify.com/v1/artists/4Otx4bRLSfpah5kX8hdgDC",
      id: "4Otx4bRLSfpah5kX8hdgDC",
      images: [
        {
          height: 640,
          url: "https://i.scdn.co/image/8e6cfc4fc96ec5feb0e5c8ae22bf1ed28daf133d",
          width: 640,
        },
        {
          height: 320,
          url: "https://i.scdn.co/image/3e72aba1130f20632e5ce54c0423c21214d7abc0",
          width: 320,
        },
        {
          height: 160,
          url: "https://i.scdn.co/image/01959784d97e14e523f9b6063eacac4aea7b8eea",
          width: 160,
        },
      ],
      name: "Naughty By Nature",
      popularity: 62,
      type: "artist",
      uri: "spotify:artist:4Otx4bRLSfpah5kX8hdgDC",
    },
    {
      external_urls: {
        spotify: "https://open.spotify.com/artist/5Qi4Bb7a8C0a00NZcA77L0",
      },
      followers: {
        href: null,
        total: 1828315,
      },
      genres: [
        "detroit hip hop",
        "gangster rap",
        "hardcore hip hop",
        "hip hop",
        "pop rap",
        "rap",
        "rap rock",
        "southern hip hop",
      ],
      href: "https://api.spotify.com/v1/artists/5Qi4Bb7a8C0a00NZcA77L0",
      id: "5Qi4Bb7a8C0a00NZcA77L0",
      images: [
        {
          height: 723,
          url: "https://i.scdn.co/image/462121abcc7994f6c677e4c7900a791a17feafee",
          width: 1000,
        },
        {
          height: 463,
          url: "https://i.scdn.co/image/1e2e08b41628310eec1a4659367513e82243ab4b",
          width: 640,
        },
        {
          height: 145,
          url: "https://i.scdn.co/image/007a4ff7fca96ff1344905912c57da2f982d0b4d",
          width: 200,
        },
        {
          height: 46,
          url: "https://i.scdn.co/image/1cffda4496e9973bce746a96f6a14b45b6189882",
          width: 64,
        },
      ],
      name: "D12",
      popularity: 69,
      type: "artist",
      uri: "spotify:artist:5Qi4Bb7a8C0a00NZcA77L0",
    },
    {
      external_urls: {
        spotify: "https://open.spotify.com/artist/0NbfKEOTQCcwd6o7wSDOHI",
      },
      followers: {
        href: null,
        total: 3414876,
      },
      genres: [
        "gangster rap",
        "hip hop",
        "pop rap",
        "rap",
        "southern hip hop",
        "trap",
      ],
      href: "https://api.spotify.com/v1/artists/0NbfKEOTQCcwd6o7wSDOHI",
      id: "0NbfKEOTQCcwd6o7wSDOHI",
      images: [
        {
          height: 640,
          url: "https://i.scdn.co/image/78b601bc99711d752b6e28eda5a4857315488166",
          width: 640,
        },
        {
          height: 320,
          url: "https://i.scdn.co/image/4a1a5df2b342712465a5941b6edb6038aedcec39",
          width: 320,
        },
        {
          height: 160,
          url: "https://i.scdn.co/image/0d12f74c9667e0fb789353805020e54e0a57936c",
          width: 160,
        },
      ],
      name: "The Game",
      popularity: 76,
      type: "artist",
      uri: "spotify:artist:0NbfKEOTQCcwd6o7wSDOHI",
    },
    {
      external_urls: {
        spotify: "https://open.spotify.com/artist/77IURH5NC56Jn09QHi76is",
      },
      followers: {
        href: null,
        total: 1208015,
      },
      genres: ["detroit hip hop", "gangster rap", "hip hop", "pop rap", "rap"],
      href: "https://api.spotify.com/v1/artists/77IURH5NC56Jn09QHi76is",
      id: "77IURH5NC56Jn09QHi76is",
      images: [
        {
          height: 706,
          url: "https://i.scdn.co/image/570d46c60960d93990710d83a5f8012217eb7aec",
          width: 999,
        },
        {
          height: 452,
          url: "https://i.scdn.co/image/4f153c72bff6dccba21ffd360fc308f268a23659",
          width: 640,
        },
        {
          height: 141,
          url: "https://i.scdn.co/image/139fd5a828a5e2c4b79d004ad7f42abf9db735c9",
          width: 200,
        },
        {
          height: 45,
          url: "https://i.scdn.co/image/18e647685c9870bdf987cb95aa8673d030fe9932",
          width: 64,
        },
      ],
      name: "Bad Meets Evil",
      popularity: 64,
      type: "artist",
      uri: "spotify:artist:77IURH5NC56Jn09QHi76is",
    },
    {
      external_urls: {
        spotify: "https://open.spotify.com/artist/7EWU4FhUJM1sZQgQKdENeT",
      },
      followers: {
        href: null,
        total: 1967190,
      },
      genres: ["conscious hip hop", "hip hop", "pop rap", "rap"],
      href: "https://api.spotify.com/v1/artists/7EWU4FhUJM1sZQgQKdENeT",
      id: "7EWU4FhUJM1sZQgQKdENeT",
      images: [
        {
          height: 640,
          url: "https://i.scdn.co/image/f63366e13ad4c40ff2595be8ee0f5e2268d606f5",
          width: 640,
        },
        {
          height: 320,
          url: "https://i.scdn.co/image/e5ca26a6e157156cb4c3e8cdde2e7e082deb2951",
          width: 320,
        },
        {
          height: 160,
          url: "https://i.scdn.co/image/daf89479ee9cc953e07a03ad7d798ebff3c73baf",
          width: 160,
        },
      ],
      name: "Hopsin",
      popularity: 72,
      type: "artist",
      uri: "spotify:artist:7EWU4FhUJM1sZQgQKdENeT",
    },
    {
      external_urls: {
        spotify: "https://open.spotify.com/artist/68DWke2VjdDmA75aJX5C57",
      },
      followers: {
        href: null,
        total: 1746018,
      },
      genres: ["alabama rap", "hip hop", "pop rap", "rap", "southern hip hop"],
      href: "https://api.spotify.com/v1/artists/68DWke2VjdDmA75aJX5C57",
      id: "68DWke2VjdDmA75aJX5C57",
      images: [
        {
          height: 640,
          url: "https://i.scdn.co/image/114c98dbc42f6920d40930d0c5c0997b3cb0eac1",
          width: 640,
        },
        {
          height: 320,
          url: "https://i.scdn.co/image/b0b9d299dd4dd7c50e5c964bc4d367bc1f25b7d7",
          width: 320,
        },
        {
          height: 160,
          url: "https://i.scdn.co/image/549710140f7ff6f64c6ecbeee193238ed1bc91df",
          width: 160,
        },
      ],
      name: "Yelawolf",
      popularity: 73,
      type: "artist",
      uri: "spotify:artist:68DWke2VjdDmA75aJX5C57",
    },
    {
      external_urls: {
        spotify: "https://open.spotify.com/artist/6UBA15slIuadJ8h2lPRPos",
      },
      followers: {
        href: null,
        total: 2039033,
      },
      genres: ["hip hop", "kansas city hip hop", "pop rap", "rap"],
      href: "https://api.spotify.com/v1/artists/6UBA15slIuadJ8h2lPRPos",
      id: "6UBA15slIuadJ8h2lPRPos",
      images: [
        {
          height: 640,
          url: "https://i.scdn.co/image/51f88e794401a338e9df945883c3c6a081451a63",
          width: 640,
        },
        {
          height: 320,
          url: "https://i.scdn.co/image/bf8620753d9ea92623654686da01c16dac1925f2",
          width: 320,
        },
        {
          height: 160,
          url: "https://i.scdn.co/image/f8498a95d0e21f42b2d0eb3b032ccf253955469c",
          width: 160,
        },
      ],
      name: "Tech N9ne",
      popularity: 76,
      type: "artist",
      uri: "spotify:artist:6UBA15slIuadJ8h2lPRPos",
    },
    {
      external_urls: {
        spotify: "https://open.spotify.com/artist/3q7HBObVc0L8jNeTe5Gofh",
      },
      followers: {
        href: null,
        total: 7181951,
      },
      genres: [
        "east coast hip hop",
        "gangster rap",
        "hip hop",
        "pop rap",
        "queens hip hop",
        "rap",
      ],
      href: "https://api.spotify.com/v1/artists/3q7HBObVc0L8jNeTe5Gofh",
      id: "3q7HBObVc0L8jNeTe5Gofh",
      images: [
        {
          height: 977,
          url: "https://i.scdn.co/image/dd031b9c5d1b6eba4a691cd89c954255aae787f2",
          width: 781,
        },
        {
          height: 801,
          url: "https://i.scdn.co/image/6f0da41419b31d9d2ba55d2df212f59ad0668118",
          width: 640,
        },
        {
          height: 250,
          url: "https://i.scdn.co/image/df73c0cebe56cafe705ffdba5085ccbd5680bd16",
          width: 200,
        },
        {
          height: 80,
          url: "https://i.scdn.co/image/1a44043542c997ef835c89e185f0cf79d7402153",
          width: 64,
        },
      ],
      name: "50 Cent",
      popularity: 85,
      type: "artist",
      uri: "spotify:artist:3q7HBObVc0L8jNeTe5Gofh",
    },
    {
      external_urls: {
        spotify: "https://open.spotify.com/artist/6DPYiyq5kWVQS4RGwxzPC7",
      },
      followers: {
        href: null,
        total: 5685582,
      },
      genres: ["g funk", "gangster rap", "hip hop", "rap", "west coast rap"],
      href: "https://api.spotify.com/v1/artists/6DPYiyq5kWVQS4RGwxzPC7",
      id: "6DPYiyq5kWVQS4RGwxzPC7",
      images: [
        {
          height: 1005,
          url: "https://i.scdn.co/image/83d2489cade1dadcdc533ddbcd74993d0ca6d4cb",
          width: 1000,
        },
        {
          height: 643,
          url: "https://i.scdn.co/image/170254ebdd747f4e7045df1cae8f11a42dc1a547",
          width: 640,
        },
        {
          height: 201,
          url: "https://i.scdn.co/image/dd4a7102c5e1897bab2b1fa4bbc086fbe2fc87dc",
          width: 200,
        },
        {
          height: 64,
          url: "https://i.scdn.co/image/85ebf2f6c52139b3384b596063678b47ab0fcb95",
          width: 64,
        },
      ],
      name: "Dr. Dre",
      popularity: 82,
      type: "artist",
      uri: "spotify:artist:6DPYiyq5kWVQS4RGwxzPC7",
    },
    {
      external_urls: {
        spotify: "https://open.spotify.com/artist/4OBJLual30L7gRl5UkeRcT",
      },
      followers: {
        href: null,
        total: 3767026,
      },
      genres: [
        "atl hip hop",
        "dance pop",
        "dirty south rap",
        "gangster rap",
        "hip hop",
        "pop rap",
        "rap",
        "southern hip hop",
        "trap",
      ],
      href: "https://api.spotify.com/v1/artists/4OBJLual30L7gRl5UkeRcT",
      id: "4OBJLual30L7gRl5UkeRcT",
      images: [
        {
          height: 640,
          url: "https://i.scdn.co/image/eae4a88e33baad4b4ce4605aa074c45766e94d09",
          width: 640,
        },
        {
          height: 320,
          url: "https://i.scdn.co/image/b83211485b5ad5e57b9d3659a096ffef3d6f3171",
          width: 320,
        },
        {
          height: 160,
          url: "https://i.scdn.co/image/c1cb65dc810e054da565baa5cbb746b6b44a9aed",
          width: 160,
        },
      ],
      name: "T.I.",
      popularity: 80,
      type: "artist",
      uri: "spotify:artist:4OBJLual30L7gRl5UkeRcT",
    },
    {
      external_urls: {
        spotify: "https://open.spotify.com/artist/3Mcii5XWf6E0lrY3Uky4cA",
      },
      followers: {
        href: null,
        total: 4512769,
      },
      genres: [
        "conscious hip hop",
        "g funk",
        "gangster rap",
        "hip hop",
        "rap",
        "west coast rap",
      ],
      href: "https://api.spotify.com/v1/artists/3Mcii5XWf6E0lrY3Uky4cA",
      id: "3Mcii5XWf6E0lrY3Uky4cA",
      images: [
        {
          height: 640,
          url: "https://i.scdn.co/image/8ed73361f9c205b88c4d092b2f628576e2c719c8",
          width: 640,
        },
        {
          height: 320,
          url: "https://i.scdn.co/image/5414f371462d8c9d5d35c1a1b908d9f2a65fefbb",
          width: 320,
        },
        {
          height: 160,
          url: "https://i.scdn.co/image/24c863b3ebfa8848f7691a2084456cd9a7dac567",
          width: 160,
        },
      ],
      name: "Ice Cube",
      popularity: 77,
      type: "artist",
      uri: "spotify:artist:3Mcii5XWf6E0lrY3Uky4cA",
    },
    {
      external_urls: {
        spotify: "https://open.spotify.com/artist/4tujQJicOnuZRLiBFdp3Ou",
      },
      followers: {
        href: null,
        total: 1219734,
      },
      genres: [
        "detroit hip hop",
        "g funk",
        "gangster rap",
        "hardcore hip hop",
        "hip hop",
        "pop rap",
        "rap",
        "west coast rap",
      ],
      href: "https://api.spotify.com/v1/artists/4tujQJicOnuZRLiBFdp3Ou",
      id: "4tujQJicOnuZRLiBFdp3Ou",
      images: [
        {
          height: 640,
          url: "https://i.scdn.co/image/f17bd1b3b6e1b72962ad8b0d60190b5ab725ad7c",
          width: 640,
        },
        {
          height: 320,
          url: "https://i.scdn.co/image/565bd7e6cb475003a4a644a6a667ae5518a529f8",
          width: 320,
        },
        {
          height: 160,
          url: "https://i.scdn.co/image/67979bd06edd104fb29fbc57c4a1542feb5682a2",
          width: 160,
        },
      ],
      name: "Xzibit",
      popularity: 69,
      type: "artist",
      uri: "spotify:artist:4tujQJicOnuZRLiBFdp3Ou",
    },
    {
      external_urls: {
        spotify: "https://open.spotify.com/artist/7hJcb9fa4alzcOq3EaNPoG",
      },
      followers: {
        href: null,
        total: 6953840,
      },
      genres: [
        "g funk",
        "gangster rap",
        "hip hop",
        "pop rap",
        "rap",
        "west coast rap",
      ],
      href: "https://api.spotify.com/v1/artists/7hJcb9fa4alzcOq3EaNPoG",
      id: "7hJcb9fa4alzcOq3EaNPoG",
      images: [
        {
          height: 640,
          url: "https://i.scdn.co/image/11208d65843456cf3854717b8e411ef8fede7141",
          width: 640,
        },
        {
          height: 320,
          url: "https://i.scdn.co/image/4ddba58867285a1e858291a108613526df2ce934",
          width: 320,
        },
        {
          height: 160,
          url: "https://i.scdn.co/image/1e67815be9174e75753d52a006b86077a39719cf",
          width: 160,
        },
      ],
      name: "Snoop Dogg",
      popularity: 87,
      type: "artist",
      uri: "spotify:artist:7hJcb9fa4alzcOq3EaNPoG",
    },
    {
      external_urls: {
        spotify: "https://open.spotify.com/artist/6evKD5JWJON3qPBJtUEmtY",
      },
      followers: {
        href: null,
        total: 1506125,
      },
      genres: [
        "gangster rap",
        "hardcore hip hop",
        "hip hop",
        "pop rap",
        "queens hip hop",
        "rap",
        "southern hip hop",
        "trap",
      ],
      href: "https://api.spotify.com/v1/artists/6evKD5JWJON3qPBJtUEmtY",
      id: "6evKD5JWJON3qPBJtUEmtY",
      images: [
        {
          height: 1000,
          url: "https://i.scdn.co/image/a668bc3f083377ca8889e9f8273c752e0342c4e0",
          width: 1000,
        },
        {
          height: 640,
          url: "https://i.scdn.co/image/883505d6cbdbbb54837b345a84722dc78764ab67",
          width: 640,
        },
        {
          height: 200,
          url: "https://i.scdn.co/image/9f44104fb873364b96ae5110f6a3959ba173f8e2",
          width: 200,
        },
        {
          height: 64,
          url: "https://i.scdn.co/image/2bdf7edfdd1e4704729662421a69edefa0481ec7",
          width: 64,
        },
      ],
      name: "G-Unit",
      popularity: 65,
      type: "artist",
      uri: "spotify:artist:6evKD5JWJON3qPBJtUEmtY",
    },
    {
      external_urls: {
        spotify: "https://open.spotify.com/artist/2XnnxQzxFZG8qEPjakokPM",
      },
      followers: {
        href: null,
        total: 632002,
      },
      genres: [
        "detroit hip hop",
        "gangster rap",
        "hardcore hip hop",
        "hip hop",
        "pop rap",
        "rap",
        "southern hip hop",
      ],
      href: "https://api.spotify.com/v1/artists/2XnnxQzxFZG8qEPjakokPM",
      id: "2XnnxQzxFZG8qEPjakokPM",
      images: [
        {
          height: 796,
          url: "https://i.scdn.co/image/13998fd88695a34cec8350675cb3ceffa4573ae3",
          width: 1000,
        },
        {
          height: 509,
          url: "https://i.scdn.co/image/d6ebc26b7f361aa6de3a8992b49bf4a2536af3fc",
          width: 640,
        },
        {
          height: 159,
          url: "https://i.scdn.co/image/08a2905bb68fb37de8d3bb426249a65732700696",
          width: 200,
        },
        {
          height: 51,
          url: "https://i.scdn.co/image/89d41a378f7bd5b0806a8c0b4ba0545ebbaf1ee2",
          width: 64,
        },
      ],
      name: "Obie Trice",
      popularity: 63,
      type: "artist",
      uri: "spotify:artist:2XnnxQzxFZG8qEPjakokPM",
    },
    {
      external_urls: {
        spotify: "https://open.spotify.com/artist/1HwM5zlC5qNWhJtM00yXzG",
      },
      followers: {
        href: null,
        total: 2752514,
      },
      genres: [
        "east coast hip hop",
        "gangster rap",
        "hardcore hip hop",
        "hip hop",
        "rap",
      ],
      href: "https://api.spotify.com/v1/artists/1HwM5zlC5qNWhJtM00yXzG",
      id: "1HwM5zlC5qNWhJtM00yXzG",
      images: [
        {
          height: 1506,
          url: "https://i.scdn.co/image/a164c44d2c4260d5c17df105601d0e9bb76f2ef2",
          width: 1000,
        },
        {
          height: 964,
          url: "https://i.scdn.co/image/8bf081adcfb9eb259fca3f0bd00b848153982d64",
          width: 640,
        },
        {
          height: 301,
          url: "https://i.scdn.co/image/0de7a35c79b610f914106504cce67a86a90cfd91",
          width: 200,
        },
        {
          height: 96,
          url: "https://i.scdn.co/image/465b9748893f4bcc766196e131c6977f8e41bad9",
          width: 64,
        },
      ],
      name: "DMX",
      popularity: 80,
      type: "artist",
      uri: "spotify:artist:1HwM5zlC5qNWhJtM00yXzG",
    },
    {
      external_urls: {
        spotify: "https://open.spotify.com/artist/3ipn9JLAPI5GUEo4y4jcoi",
      },
      followers: {
        href: null,
        total: 2155748,
      },
      genres: [
        "atl hip hop",
        "dirty south rap",
        "hip hop",
        "pop rap",
        "rap",
        "southern hip hop",
        "trap",
      ],
      href: "https://api.spotify.com/v1/artists/3ipn9JLAPI5GUEo4y4jcoi",
      id: "3ipn9JLAPI5GUEo4y4jcoi",
      images: [
        {
          height: 667,
          url: "https://i.scdn.co/image/adcc1cb654e89f2e404688ae0d1bbc942ce02e5d",
          width: 1000,
        },
        {
          height: 427,
          url: "https://i.scdn.co/image/0515a0dfc9c25cd8290cc4be58abf6f66f21706a",
          width: 640,
        },
        {
          height: 133,
          url: "https://i.scdn.co/image/ec9b2c869d9a04eae2fe5be44e285f5a48c97efd",
          width: 200,
        },
        {
          height: 43,
          url: "https://i.scdn.co/image/931d3d9ff7243f2a1a3f9d775959b06c28e19ad6",
          width: 64,
        },
      ],
      name: "Ludacris",
      popularity: 81,
      type: "artist",
      uri: "spotify:artist:3ipn9JLAPI5GUEo4y4jcoi",
    },
    {
      external_urls: {
        spotify: "https://open.spotify.com/artist/4EnEZVjo3w1cwcQYePccay",
      },
      followers: {
        href: null,
        total: 3492371,
      },
      genres: [
        "conscious hip hop",
        "gangster rap",
        "golden age hip hop",
        "hardcore hip hop",
        "hip hop",
        "old school hip hop",
        "rap",
        "west coast rap",
      ],
      href: "https://api.spotify.com/v1/artists/4EnEZVjo3w1cwcQYePccay",
      id: "4EnEZVjo3w1cwcQYePccay",
      images: [
        {
          height: 1000,
          url: "https://i.scdn.co/image/4f36d3f900eaf8381b0d3f5febe0e5bf8c94dbea",
          width: 1000,
        },
        {
          height: 640,
          url: "https://i.scdn.co/image/6c6c5456aa373c9cbf4f385c2dd69c4177e6e3fa",
          width: 640,
        },
        {
          height: 200,
          url: "https://i.scdn.co/image/e3e634272efd0251c2b8298b25fcd4b659993178",
          width: 200,
        },
        {
          height: 64,
          url: "https://i.scdn.co/image/8bf427fbb118c36cd56439a06f0bfb77e4e7bdf3",
          width: 64,
        },
      ],
      name: "N.W.A.",
      popularity: 70,
      type: "artist",
      uri: "spotify:artist:4EnEZVjo3w1cwcQYePccay",
    },
    {
      external_urls: {
        spotify: "https://open.spotify.com/artist/5ndkK3dpZLKtBklKjxNQwT",
      },
      followers: {
        href: null,
        total: 1861646,
      },
      genres: [
        "atl hip hop",
        "dance pop",
        "hip hop",
        "pop",
        "pop rap",
        "rap",
        "southern hip hop",
      ],
      href: "https://api.spotify.com/v1/artists/5ndkK3dpZLKtBklKjxNQwT",
      id: "5ndkK3dpZLKtBklKjxNQwT",
      images: [
        {
          height: 640,
          url: "https://i.scdn.co/image/ac855e73f52190052ed8c4dfa03bc0b85bdc5ce5",
          width: 640,
        },
        {
          height: 320,
          url: "https://i.scdn.co/image/3cc98fa86043616517d5991f9140f977faadfcf0",
          width: 320,
        },
        {
          height: 160,
          url: "https://i.scdn.co/image/8464a22ceecf92740be8e6d9a9ad74939ebc8fca",
          width: 160,
        },
      ],
      name: "B.o.B",
      popularity: 77,
      type: "artist",
      uri: "spotify:artist:5ndkK3dpZLKtBklKjxNQwT",
    },
    {
      external_urls: {
        spotify: "https://open.spotify.com/artist/5me0Irg2ANcsgc93uaYrpb",
      },
      followers: {
        href: null,
        total: 6421597,
      },
      genres: [
        "east coast hip hop",
        "gangster rap",
        "hardcore hip hop",
        "hip hop",
        "rap",
      ],
      href: "https://api.spotify.com/v1/artists/5me0Irg2ANcsgc93uaYrpb",
      id: "5me0Irg2ANcsgc93uaYrpb",
      images: [
        {
          height: 1250,
          url: "https://i.scdn.co/image/1b4858fbd24046a81cace5ee18d19c868262b91f",
          width: 1000,
        },
        {
          height: 800,
          url: "https://i.scdn.co/image/9bb42de208edcb69653a8e7951fa93b13f598cdd",
          width: 640,
        },
        {
          height: 250,
          url: "https://i.scdn.co/image/e56612ae56c9007e99ab36b83efd4faf6401260d",
          width: 200,
        },
        {
          height: 80,
          url: "https://i.scdn.co/image/fc074d287739cca12a89c76fd338ff7d4aa4acee",
          width: 64,
        },
      ],
      name: "The Notorious B.I.G.",
      popularity: 82,
      type: "artist",
      uri: "spotify:artist:5me0Irg2ANcsgc93uaYrpb",
    },
    {
      external_urls: {
        spotify: "https://open.spotify.com/artist/6C1ohJrd5VydigQtaGy5Wa",
      },
      followers: {
        href: null,
        total: 1682135,
      },
      genres: ["boston hip hop", "hip hop", "pop rap", "rap"],
      href: "https://api.spotify.com/v1/artists/6C1ohJrd5VydigQtaGy5Wa",
      id: "6C1ohJrd5VydigQtaGy5Wa",
      images: [
        {
          height: 640,
          url: "https://i.scdn.co/image/994fdbaf1eff70a1263ec509bc857e73450871e1",
          width: 640,
        },
        {
          height: 320,
          url: "https://i.scdn.co/image/b0b6ebed0eb8180d2ccc960af6540bb878761ab6",
          width: 320,
        },
        {
          height: 160,
          url: "https://i.scdn.co/image/b2ed88d1cfd1ae50aad4d0e07a49f521772cf497",
          width: 160,
        },
      ],
      name: "Joyner Lucas",
      popularity: 79,
      type: "artist",
      uri: "spotify:artist:6C1ohJrd5VydigQtaGy5Wa",
    },
  ],
};

const headers = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Content-Type",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
};

const handler = async (event) => {
  const { size, page, query } = event.queryStringParameters;
  const _size = Number(size);
  const _page = Number(page);
  const start = _page * _size;
  const take = start + _size >= total ? total : start + _size;

  let results;

  try {
    if (query?.length > 0 && query !== "null") {
      results = mock.data
        .filter((item) => item.name.toLowerCase().includes(query.toLowerCase()))
        .slice(start, take);
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({
          data: results,
          total: results.length,
        }),
      };
    } else {
      results = mock.data.slice(start, take);
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({
          data: results,
          total: total,
        }),
      };
    }
  } catch (error) {
    return {
      statusCode: 500,
      headers,
      body: error.toString(),
    };
  }
};

module.exports = { handler };
