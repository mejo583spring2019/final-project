

const fetch = require("node-fetch");
const fs = require("fs");

let albumList = [{
    "number": "1",
    "year": "1967",
    "album": "Sgt. Pepper's Lonely Hearts Club Band",
    "artist": "The Beatles",
    "top_genre": "Rock"
},
{
    "number": "2",
    "year": "1966",
    "album": "Pet Sounds",
    "artist": "The Beach Boys",
    "top_genre": "Rock"
},
{
    "number": "3",
    "year": "1966",
    "album": "Revolver",
    "artist": "The Beatles",
    "top_genre": "Rock"
},
{
    "number": "4",
    "year": "1965",
    "album": "Highway 61 Revisited",
    "artist": "Bob Dylan",
    "top_genre": "Rock"
},
{
    "number": "5",
    "year": "1965",
    "album": "Rubber Soul",
    "artist": "The Beatles",
    "top_genre": "Rock"
},
{
    "number": "6",
    "year": "1971",
    "album": "What's Going On",
    "artist": "Marvin Gaye",
    "top_genre": "Funk/Soul"
},
{
    "number": "7",
    "year": "1972",
    "album": "Exile on Main St.",
    "artist": "The Rolling Stones",
    "top_genre": "Rock"
},
{
    "number": "8",
    "year": "1979",
    "album": "London Calling",
    "artist": "The Clash",
    "top_genre": "Rock"
},
{
    "number": "9",
    "year": "1966",
    "album": "Blonde on Blonde",
    "artist": "Bob Dylan",
    "top_genre": "Rock"
},
{
    "number": "10",
    "year": "1968",
    "album": "The Beatles (\"The White Album\")",
    "artist": "The Beatles",
    "top_genre": "Rock"
},
{
    "number": "11",
    "year": "1976",
    "album": "The Sun Sessions",
    "artist": "Elvis Presley",
    "top_genre": "Rock"
},
{
    "number": "12",
    "year": "1959",
    "album": "Kind of Blue",
    "artist": "Miles Davis",
    "top_genre": "Jazz"
},
{
    "number": "13",
    "year": "1967",
    "album": "The Velvet Underground & Nico",
    "artist": "The Velvet Underground",
    "top_genre": "Rock"
},
{
    "number": "14",
    "year": "1969",
    "album": "Abbey Road",
    "artist": "The Beatles",
    "top_genre": "Rock"
},
{
    "number": "15",
    "year": "1967",
    "album": "Are You Experienced",
    "artist": "The Jimi Hendrix Experience",
    "top_genre": "Rock"
},
{
    "number": "16",
    "year": "1975",
    "album": "Blood on the Tracks",
    "artist": "Bob Dylan",
    "top_genre": "Rock"
},
{
    "number": "17",
    "year": "1991",
    "album": "Nevermind",
    "artist": "Nirvana",
    "top_genre": "Rock"
},
{
    "number": "18",
    "year": "1975",
    "album": "Born to Run",
    "artist": "Bruce Springsteen",
    "top_genre": "Rock"
},
{
    "number": "19",
    "year": "1968",
    "album": "Astral Weeks",
    "artist": "Van Morrison",
    "top_genre": "Jazz"
},
{
    "number": "20",
    "year": "1982",
    "album": "Thriller",
    "artist": "Michael Jackson",
    "top_genre": "Funk/Soul"
},
{
    "number": "21",
    "year": "1982",
    "album": "The Great Twenty_Eight",
    "artist": "Chuck Berry",
    "top_genre": "Rock"
},
{
    "number": "22",
    "year": "1990",
    "album": "The Complete Recordings",
    "artist": "Robert Johnson",
    "top_genre": "Blues"
},
{
    "number": "23",
    "year": "1970",
    "album": "John Lennon/Plastic Ono Band",
    "artist": "John Lennon/Plastic Ono Band",
    "top_genre": "Rock"
},
{
    "number": "24",
    "year": "1973",
    "album": "Innervisions",
    "artist": "Stevie Wonder",
    "top_genre": "Funk/Soul"
},
{
    "number": "25",
    "year": "1963",
    "album": "Live at the Apollo, 1962",
    "artist": "James Brown",
    "top_genre": "Funk/Soul"
},
{
    "number": "26",
    "year": "1977",
    "album": "Rumours",
    "artist": "Fleetwood Mac",
    "top_genre": "Rock"
},
{
    "number": "27",
    "year": "1987",
    "album": "The Joshua Tree",
    "artist": "U2",
    "top_genre": "Rock"
},
{
    "number": "28",
    "year": "1971",
    "album": "Who's Next",
    "artist": "The Who",
    "top_genre": "Rock"
},
{
    "number": "29",
    "year": "1969",
    "album": "Led Zeppelin",
    "artist": "Led Zeppelin",
    "top_genre": "Rock"
},
{
    "number": "30",
    "year": "1971",
    "album": "Blue",
    "artist": "Joni Mitchell",
    "top_genre": "Pop"
},
{
    "number": "31",
    "year": "1965",
    "album": "Bringing It All Back Home",
    "artist": "Bob Dylan",
    "top_genre": "Rock"
},
{
    "number": "32",
    "year": "1969",
    "album": "Let It Bleed",
    "artist": "The Rolling Stones",
    "top_genre": "Rock"
},
{
    "number": "33",
    "year": "1976",
    "album": "Ramones",
    "artist": "Ramones",
    "top_genre": "Rock"
},
{
    "number": "34",
    "year": "1968",
    "album": "Music From Big Pink",
    "artist": "The Band",
    "top_genre": "Rock"
},
{
    "number": "35",
    "year": "1972",
    "album": "The Rise and Fall of Ziggy Stardust and the Spiders From Mars",
    "artist": "David Bowie",
    "top_genre": "Rock"
},
{
    "number": "36",
    "year": "1971",
    "album": "Tapestry",
    "artist": "Carole King",
    "top_genre": "Rock"
},
{
    "number": "37",
    "year": "1976",
    "album": "Hotel California",
    "artist": "Eagles",
    "top_genre": "Rock"
},
{
    "number": "38",
    "year": "2001",
    "album": "The Anthology",
    "artist": "Muddy Waters",
    "top_genre": "Folk"
},
{
    "number": "39",
    "year": "1963",
    "album": "Please Please Me",
    "artist": "The Beatles",
    "top_genre": "Rock"
},
{
    "number": "40",
    "year": "1967",
    "album": "Forever Changes",
    "artist": "Love",
    "top_genre": "Rock"
},
{
    "number": "41",
    "year": "1977",
    "album": "Never Mind the Bollocks Here's the Sex Pistols",
    "artist": "Sex Pistols",
    "top_genre": "Rock"
},
{
    "number": "42",
    "year": "1967",
    "album": "The Doors",
    "artist": "The Doors",
    "top_genre": "Rock"
},
{
    "number": "43",
    "year": "1973",
    "album": "The Dark Side of the Moon",
    "artist": "Pink Floyd",
    "top_genre": "Rock"
},
{
    "number": "44",
    "year": "1975",
    "album": "Horses",
    "artist": "Patti Smith",
    "top_genre": "Rock"
},
{
    "number": "45",
    "year": "1969",
    "album": "The Band (The Brown Album)",
    "artist": "The Band",
    "top_genre": "Classical"
},
{
    "number": "46",
    "year": "1984",
    "album": "Legend: The Best of Bob Marley and The Wailers",
    "artist": "Bob Marley & The Wailers",
    "top_genre": "Reggae"
},
{
    "number": "47",
    "year": "1965",
    "album": "A Love Supreme",
    "artist": "John Coltrane",
    "top_genre": "Jazz"
},
{
    "number": "48",
    "year": "1988",
    "album": "It Takes a Nation of Millions to Hold Us Back",
    "artist": "Public Enemy",
    "top_genre": "Hip Hop"
},
{
    "number": "49",
    "year": "1971",
    "album": "At Fillmore East",
    "artist": "The Allman Brothers Band",
    "top_genre": "Rock"
},
{
    "number": "50",
    "year": "1957",
    "album": "Here's Little Richard",
    "artist": "Little Richard",
    "top_genre": "Rock"
},
{
    "number": "51",
    "year": "1970",
    "album": "Bridge Over Troubled Water",
    "artist": "Simon & Garfunkel",
    "top_genre": "Rock"
},
{
    "number": "52",
    "year": "1975",
    "album": "Greatest Hits",
    "artist": "Al Green",
    "top_genre": "Funk/Soul"
},
{
    "number": "53",
    "year": "1964",
    "album": "Meet The Beatles!",
    "artist": "The Beatles",
    "top_genre": "Rock"
},
{
    "number": "54",
    "year": "1991",
    "album": "The Birth of Soul",
    "artist": "Ray Charles",
    "top_genre": "Jazz"
},
{
    "number": "55",
    "year": "1968",
    "album": "Electric Ladyland",
    "artist": "The Jimi Hendrix Experience",
    "top_genre": "Rock"
},
{
    "number": "56",
    "year": "1956",
    "album": "Elvis Presley",
    "artist": "Elvis Presley",
    "top_genre": "Rock"
},
{
    "number": "57",
    "year": "1976",
    "album": "Songs in the Key of Life",
    "artist": "Stevie Wonder",
    "top_genre": "Funk/Soul"
},
{
    "number": "58",
    "year": "1968",
    "album": "Beggars Banquet",
    "artist": "The Rolling Stones",
    "top_genre": "Rock"
},
{
    "number": "59",
    "year": "1976",
    "album": "Chronicle: The 20 Greatest Hits",
    "artist": "Creedence Clearwater Revival",
    "top_genre": "Rock"
},
{
    "number": "60",
    "year": "1969",
    "album": "Trout Mask Replica",
    "artist": "Captain Beefheart & His Magic Band",
    "top_genre": "Rock"
},
{
    "number": "61",
    "year": "1970",
    "album": "Greatest Hits",
    "artist": "Sly & The Family Stone",
    "top_genre": "Funk/Soul"
},
{
    "number": "62",
    "year": "1987",
    "album": "Appetite for Destruction",
    "artist": "Guns N' Roses",
    "top_genre": "Rock"
},
{
    "number": "63",
    "year": "1991",
    "album": "Achtung Baby",
    "artist": "U2",
    "top_genre": "Electronic"
},
{
    "number": "64",
    "year": "1971",
    "album": "Sticky Fingers",
    "artist": "The Rolling Stones",
    "top_genre": "Rock"
},
{
    "number": "65",
    "year": "1991",
    "album": "Back to Mono (1958-1969)",
    "artist": "Phil Spector",
    "top_genre": "Rock"
},
{
    "number": "66",
    "year": "1970",
    "album": "Moondance",
    "artist": "Van Morrison",
    "top_genre": "Jazz"
},
{
    "number": "67",
    "year": "2000",
    "album": "Kid A",
    "artist": "Radiohead",
    "top_genre": "Electronic"
},
{
    "number": "68",
    "year": "1979",
    "album": "Off the Wall",
    "artist": "Michael Jackson",
    "top_genre": "Funk/Soul"
},
{
    "number": "69",
    "year": "1971",
    "album": "Led Zeppelin IV",
    "artist": "Led Zeppelin",
    "top_genre": "Rock"
},
{
    "number": "70",
    "year": "1977",
    "album": "The Stranger",
    "artist": "Billy Joel",
    "top_genre": "Rock"
},
{
    "number": "71",
    "year": "1986",
    "album": "Graceland",
    "artist": "Paul Simon",
    "top_genre": "Jazz"
},
{
    "number": "72",
    "year": "1972",
    "album": "Superfly",
    "artist": "Curtis Mayfield",
    "top_genre": "Funk/Soul"
},
{
    "number": "73",
    "year": "1975",
    "album": "Physical Graffiti",
    "artist": "Led Zeppelin",
    "top_genre": "Rock"
},
{
    "number": "74",
    "year": "1970",
    "album": "After the Gold Rush",
    "artist": "Neil Young",
    "top_genre": "Rock"
},
{
    "number": "75",
    "year": "1991",
    "album": "Star Time",
    "artist": "James Brown",
    "top_genre": "Funk/Soul"
},
{
    "number": "76",
    "year": "1984",
    "album": "Purple Rain",
    "artist": "Prince and the Revolution",
    "top_genre": "Electronic"
},
{
    "number": "77",
    "year": "1980",
    "album": "Back in Black",
    "artist": "AC/DC",
    "top_genre": "Rock"
},
{
    "number": "78",
    "year": "1965",
    "album": "Otis Blue: Otis Redding Sings Soul",
    "artist": "Otis Redding",
    "top_genre": "Funk/Soul"
},
{
    "number": "79",
    "year": "1969",
    "album": "Led Zeppelin II",
    "artist": "Led Zeppelin",
    "top_genre": "Rock"
},
{
    "number": "80",
    "year": "1971",
    "album": "Imagine",
    "artist": "John Lennon",
    "top_genre": "Rock"
},
{
    "number": "81",
    "year": "1977",
    "album": "The Clash",
    "artist": "The Clash",
    "top_genre": "Rock"
},
{
    "number": "82",
    "year": "1972",
    "album": "Harvest",
    "artist": "Neil Young",
    "top_genre": "Rock"
},
{
    "number": "83",
    "year": "1967",
    "album": "Axis: Bold as Love",
    "artist": "The Jimi Hendrix Experience",
    "top_genre": "Rock"
},
{
    "number": "84",
    "year": "1967",
    "album": "I Never Loved a Man the Way I Love You",
    "artist": "Aretha Franklin",
    "top_genre": "Funk/Soul"
},
{
    "number": "85",
    "year": "1968",
    "album": "Lady Soul",
    "artist": "Aretha Franklin",
    "top_genre": "Funk/Soul"
},
{
    "number": "86",
    "year": "1984",
    "album": "Born in the U.S.A.",
    "artist": "Bruce Springsteen",
    "top_genre": "Rock"
},
{
    "number": "87",
    "year": "1979",
    "album": "The Wall",
    "artist": "Pink Floyd",
    "top_genre": "Rock"
},
{
    "number": "88",
    "year": "1968",
    "album": "At Folsom Prison",
    "artist": "Johnny Cash",
    "top_genre": "Folk"
},
{
    "number": "89",
    "year": "1969",
    "album": "Dusty in Memphis",
    "artist": "Dusty Springfield",
    "top_genre": "Rock"
},
{
    "number": "90",
    "year": "1972",
    "album": "Talking Book",
    "artist": "Stevie Wonder",
    "top_genre": "Funk/Soul"
},
{
    "number": "91",
    "year": "1973",
    "album": "Goodbye Yellow Brick Road",
    "artist": "Elton John",
    "top_genre": "Rock"
},
{
    "number": "92",
    "year": "1978",
    "album": "20 Golden Greats\"",
    "artist": "Buddy Holly",
    "top_genre": "Rock"
},
{
    "number": "93",
    "year": "1987",
    "album": "Sign 'Peace' the Times",
    "artist": "Prince",
    "top_genre": "Rock"
},
{
    "number": "94",
    "year": "1984",
    "album": "40 Greatest Hits",
    "artist": "Hank Williams",
    "top_genre": "Folk"
},
{
    "number": "95",
    "year": "1970",
    "album": "Bitches Brew",
    "artist": "Miles Davis",
    "top_genre": "Jazz"
},
{
    "number": "96",
    "year": "1969",
    "album": "Tommy",
    "artist": "The Who",
    "top_genre": "Rock"
},
{
    "number": "97",
    "year": "1963",
    "album": "The Freewheelin' Bob Dylan",
    "artist": "Bob Dylan",
    "top_genre": "Folk"
},
{
    "number": "98",
    "year": "1978",
    "album": "This Year's Model",
    "artist": "Elvis Costello",
    "top_genre": "Rock"
},
{
    "number": "99",
    "year": "1971",
    "album": "There's a Riot Goin' On",
    "artist": "Sly & The Family Stone",
    "top_genre": "Funk/Soul"
},
{
    "number": "100",
    "year": "1968",
    "album": "Odessey and Oracle",
    "artist": "The Zombies",
    "top_genre": "Rock"
},
{
    "number": "101",
    "year": "1955",
    "album": "In the Wee Small Hours",
    "artist": "Frank Sinatra",
    "top_genre": "Jazz"
},
{
    "number": "102",
    "year": "1966",
    "album": "Fresh Cream",
    "artist": "Cream",
    "top_genre": "Rock"
},
{
    "number": "103",
    "year": "1959",
    "album": "Giant Steps",
    "artist": "John Coltrane",
    "top_genre": "Jazz"
},
{
    "number": "104",
    "year": "1970",
    "album": "Sweet Baby James",
    "artist": "James Taylor",
    "top_genre": "Rock"
},
{
    "number": "105",
    "year": "1962",
    "album": "Modern Sounds in Country and Western Music",
    "artist": "Ray Charles",
    "top_genre": "Funk/Soul"
},
{
    "number": "106",
    "year": "1977",
    "album": "Rocket to Russia",
    "artist": "Ramones",
    "top_genre": "Rock"
},
{
    "number": "107",
    "year": "2003",
    "album": "Portrait of a Legend 1951-1964",
    "artist": "Sam Cooke",
    "top_genre": "Latin"
},
{
    "number": "108",
    "year": "1971",
    "album": "Hunky Dory",
    "artist": "David Bowie",
    "top_genre": "Rock"
},
{
    "number": "109",
    "year": "1966",
    "album": "Aftermath",
    "artist": "The Rolling Stones",
    "top_genre": "Rock"
},
{
    "number": "110",
    "year": "1970",
    "album": "Loaded",
    "artist": "The Velvet Underground",
    "top_genre": "Rock"
},
{
    "number": "111",
    "year": "1995",
    "album": "The Bends",
    "artist": "Radiohead",
    "top_genre": "Rock"
},
{
    "number": "112",
    "year": "1966",
    "album": "If You Can Believe Your Eyes and Ears",
    "artist": "The Mamas and the Papas",
    "top_genre": "Rock"
},
{
    "number": "113",
    "year": "1974",
    "album": "Court and Spark",
    "artist": "Joni Mitchell",
    "top_genre": "Rock"
},
{
    "number": "114",
    "year": "1967",
    "album": "Disraeli Gears",
    "artist": "Cream",
    "top_genre": "Rock"
},
{
    "number": "115",
    "year": "1967",
    "album": "The Who Sell Out",
    "artist": "The Who",
    "top_genre": "Rock"
},
{
    "number": "116",
    "year": "1965",
    "album": "Out of Our Heads",
    "artist": "The Rolling Stones",
    "top_genre": "Rock"
},
{
    "number": "117",
    "year": "1970",
    "album": "Layla and Other Assorted Love Songs",
    "artist": "Derek and the Dominos",
    "top_genre": "Rock"
},
{
    "number": "118",
    "year": "2005",
    "album": "Late Registration",
    "artist": "Kanye West",
    "top_genre": "Hip Hop"
},
{
    "number": "119",
    "year": "1960",
    "album": "At Last!",
    "artist": "Etta James",
    "top_genre": "Funk/Soul"
},
{
    "number": "120",
    "year": "1968",
    "album": "Sweetheart of the Rodeo",
    "artist": "The Byrds",
    "top_genre": "Rock"
},
{
    "number": "121",
    "year": "1969",
    "album": "Stand!",
    "artist": "Sly & The Family Stone",
    "top_genre": "Funk/Soul"
},
{
    "number": "122",
    "year": "1972",
    "album": "The Harder They Come",
    "artist": "Various Artists",
    "top_genre": "Reggae"
},
{
    "number": "123",
    "year": "1986",
    "album": "Raising Hell",
    "artist": "Run D.M.C.",
    "top_genre": "Hip Hop"
},
{
    "number": "124",
    "year": "1967",
    "album": "Moby Grape",
    "artist": "Moby Grape",
    "top_genre": "Rock"
},
{
    "number": "125",
    "year": "1971",
    "album": "Pearl",
    "artist": "Janis Joplin",
    "top_genre": "Rock"
},
{
    "number": "126",
    "year": "1973",
    "album": "Catch a Fire",
    "artist": "The Wailers",
    "top_genre": "Reggae"
},
{
    "number": "127",
    "year": "1967",
    "album": "Younger Than Yesterday",
    "artist": "The Byrds",
    "top_genre": "Rock"
},
{
    "number": "128",
    "year": "1973",
    "album": "Raw Power",
    "artist": "Iggy and The Stooges",
    "top_genre": "Rock"
},
{
    "number": "129",
    "year": "1980",
    "album": "Remain in Light",
    "artist": "Talking Heads",
    "top_genre": "Electronic"
},
{
    "number": "130",
    "year": "1977",
    "album": "Marquee Moon",
    "artist": "Television",
    "top_genre": "Rock"
},
{
    "number": "131",
    "year": "1970",
    "album": "Paranoid",
    "artist": "Black Sabbath",
    "top_genre": "Rock"
},
{
    "number": "132",
    "year": "1977",
    "album": "Saturday Night Fever: The Original Movie Sound Track",
    "artist": "Various Artists",
    "top_genre": "Electronic"
},
{
    "number": "133",
    "year": "1973",
    "album": "The Wild, the Innocent & the E Street Shuffle",
    "artist": "Bruce Springsteen",
    "top_genre": "Rock"
},
{
    "number": "134",
    "year": "1994",
    "album": "Ready to Die",
    "artist": "The Notorious B.I.G.",
    "top_genre": "Hip Hop"
},
{
    "number": "135",
    "year": "1992",
    "album": "Slanted and Enchanted",
    "artist": "Pavement",
    "top_genre": "Rock"
},
{
    "number": "136",
    "year": "1974",
    "album": "Greatest Hits",
    "artist": "Elton John",
    "top_genre": "Rock"
},
{
    "number": "137",
    "year": "1985",
    "album": "Tim",
    "artist": "The Replacements",
    "top_genre": "Rock"
},
{
    "number": "138",
    "year": "1992",
    "album": "The Chronic",
    "artist": "Dr. Dre",
    "top_genre": "Hip Hop"
},
{
    "number": "139",
    "year": "1974",
    "album": "Rejuvenation",
    "artist": "The Meters",
    "top_genre": "Funk/Soul"
},
{
    "number": "140",
    "year": "1978",
    "album": "Parallel Lines",
    "artist": "Blondie",
    "top_genre": "Electronic"
},
{
    "number": "141",
    "year": "1965",
    "album": "Live at the Regal",
    "artist": "B.B. King",
    "top_genre": "Blues"
},
{
    "number": "142",
    "year": "1963",
    "album": "A Christmas Gift for You From Phil Spector",
    "artist": "Phil Spector",
    "top_genre": "Rock"
},
{
    "number": "143",
    "year": "1968",
    "album": "Gris-Gris",
    "artist": "Dr. John, the Night Tripper",
    "top_genre": "Jazz"
},
{
    "number": "144",
    "year": "1988",
    "album": "Straight Outta Compton",
    "artist": "N.W.A",
    "top_genre": "Hip Hop"
},
{
    "number": "145",
    "year": "1977",
    "album": "Aja",
    "artist": "Steely Dan",
    "top_genre": "Jazz"
},
{
    "number": "146",
    "year": "1967",
    "album": "Surrealistic Pillow",
    "artist": "Jefferson Airplane",
    "top_genre": "Rock"
},
{
    "number": "147",
    "year": "1970",
    "album": "Deja vu",
    "artist": "Crosby, Stills, Nash & Young",
    "top_genre": "Rock"
},
{
    "number": "148",
    "year": "1973",
    "album": "Houses of the Holy",
    "artist": "Led Zeppelin",
    "top_genre": "Rock"
},
{
    "number": "149",
    "year": "1969",
    "album": "Santana",
    "artist": "Santana",
    "top_genre": "Rock"
},
{
    "number": "150",
    "year": "1978",
    "album": "Darkness on the Edge of Town",
    "artist": "Bruce Springsteen",
    "top_genre": "Rock"
},
{
    "number": "151",
    "year": "2004",
    "album": "Funeral",
    "artist": "Arcade Fire",
    "top_genre": "Rock"
},
{
    "number": "152",
    "year": "1979",
    "album": "The B 52's/Play Loud",
    "artist": "The B 52's",
    "top_genre": "Electronic"
},
{
    "number": "153",
    "year": "1991",
    "album": "The Low End Theory",
    "artist": "A Tribe Called Quest",
    "top_genre": "Hip Hop"
},
{
    "number": "154",
    "year": "1958",
    "album": "Moanin' in the Moonlight",
    "artist": "Howlin' Wolf",
    "top_genre": "Blues"
},
{
    "number": "155",
    "year": "1980",
    "album": "Pretenders",
    "artist": "Pretenders",
    "top_genre": "Rock"
},
{
    "number": "156",
    "year": "1989",
    "album": "Paul's Boutique",
    "artist": "Beastie Boys",
    "top_genre": "Hip Hop"
},
{
    "number": "157",
    "year": "1980",
    "album": "Closer",
    "artist": "Joy Division",
    "top_genre": "Rock"
},
{
    "number": "158",
    "year": "1975",
    "album": "Captain Fantastic and the Brown Dirt Cowboy",
    "artist": "Elton John",
    "top_genre": "Rock"
},
{
    "number": "159",
    "year": "1975",
    "album": "Alive!",
    "artist": "KISS",
    "top_genre": "Rock"
},
{
    "number": "160",
    "year": "1971",
    "album": "Electric Warrior",
    "artist": "T. Rex",
    "top_genre": "Rock"
},
{
    "number": "161",
    "year": "1968",
    "album": "The Dock of the Bay",
    "artist": "Otis Redding",
    "top_genre": "Funk/Soul"
},
{
    "number": "162",
    "year": "1997",
    "album": "OK Computer",
    "artist": "Radiohead",
    "top_genre": "Electronic"
},
{
    "number": "163",
    "year": "1982",
    "album": "1999\"",
    "artist": "Prince",
    "top_genre": "Funk/Soul"
},
{
    "number": "164",
    "year": "2002",
    "album": "The Very Best of Linda Ronstadt",
    "artist": "Linda Ronstadt",
    "top_genre": "Rock"
},
{
    "number": "165",
    "year": "1973",
    "album": "Let's Get It On",
    "artist": "Marvin Gaye",
    "top_genre": "Funk/Soul"
},
{
    "number": "166",
    "year": "1982",
    "album": "Imperial Bedroom",
    "artist": "Elvis Costello & The Attractions",
    "top_genre": "Rock"
},
{
    "number": "167",
    "year": "1986",
    "album": "Master of Puppets",
    "artist": "Metallica",
    "top_genre": "Rock"
},
{
    "number": "168",
    "year": "1977",
    "album": "My Aim Is True",
    "artist": "Elvis Costello",
    "top_genre": "Rock"
},
{
    "number": "169",
    "year": "1977",
    "album": "Exodus",
    "artist": "Bob Marley & The Wailers",
    "top_genre": "Reggae"
},
{
    "number": "170",
    "year": "1970",
    "album": "Live at Leeds",
    "artist": "The Who",
    "top_genre": "Rock"
},
{
    "number": "171",
    "year": "1968",
    "album": "The Notorious Byrd Brothers",
    "artist": "The Byrds",
    "top_genre": "Rock"
},
{
    "number": "172",
    "year": "1971",
    "album": "Every Picture Tells a Story",
    "artist": "Rod Stewart",
    "top_genre": "Rock"
},
{
    "number": "173",
    "year": "1972",
    "album": "Something/Anything?",
    "artist": "Todd Rundgren",
    "top_genre": "Rock"
},
{
    "number": "174",
    "year": "1976",
    "album": "Desire",
    "artist": "Bob Dylan",
    "top_genre": "Rock"
},
{
    "number": "175",
    "year": "1970",
    "album": "Close to You",
    "artist": "Carpenters",
    "top_genre": "Rock"
},
{
    "number": "176",
    "year": "1976",
    "album": "Rocks",
    "artist": "Aerosmith",
    "top_genre": "Rock"
},
{
    "number": "177",
    "year": "1978",
    "album": "One Nation Under a Groove",
    "artist": "Funkadelic",
    "top_genre": "Funk/Soul"
},
{
    "number": "178",
    "year": "1992",
    "album": "The Anthology: 1961-1977",
    "artist": "Curtis Mayfield and The Impressions",
    "top_genre": "Funk/Soul"
},
{
    "number": "179",
    "year": "2001",
    "album": "The Definitive Collection",
    "artist": "ABBA",
    "top_genre": "Electronic"
},
{
    "number": "180",
    "year": "1965",
    "album": "The Rolling Stones, Now!",
    "artist": "The Rolling Stones",
    "top_genre": "Rock"
},
{
    "number": "181",
    "year": "1974",
    "album": "Natty Dread",
    "artist": "Bob Marley & The Wailers",
    "top_genre": "Reggae"
},
{
    "number": "182",
    "year": "1975",
    "album": "Fleetwood Mac",
    "artist": "Fleetwood Mac",
    "top_genre": "Rock"
},
{
    "number": "183",
    "year": "1975",
    "album": "Red Headed Stranger",
    "artist": "Willie Nelson",
    "top_genre": "Folk"
},
{
    "number": "184",
    "year": "1990",
    "album": "The Immaculate Collection",
    "artist": "Madonna",
    "top_genre": "Electronic"
},
{
    "number": "185",
    "year": "1969",
    "album": "The Stooges",
    "artist": "The Stooges",
    "top_genre": "Rock"
},
{
    "number": "186",
    "year": "1973",
    "album": "Fresh",
    "artist": "Sly & The Family Stone",
    "top_genre": "Funk/Soul"
},
{
    "number": "187",
    "year": "1986",
    "album": "So",
    "artist": "Peter Gabriel",
    "top_genre": "Electronic"
},
{
    "number": "188",
    "year": "1967",
    "album": "Buffalo Springfield Again",
    "artist": "Buffalo Springfield",
    "top_genre": "Rock"
},
{
    "number": "189",
    "year": "1969",
    "album": "Happy Trails",
    "artist": "Quicksilver Messenger Service",
    "top_genre": "Rock"
},
{
    "number": "190",
    "year": "1969",
    "album": "From Elvis in Memphis",
    "artist": "Elvis Presley",
    "top_genre": "Rock"
},
{
    "number": "191",
    "year": "1970",
    "album": "Fun House",
    "artist": "The Stooges",
    "top_genre": "Rock"
},
{
    "number": "192",
    "year": "1969",
    "album": "The Gilded Palace of Sin",
    "artist": "The Flying Burrito Brothers",
    "top_genre": "Rock"
},
{
    "number": "193",
    "year": "1994",
    "album": "Dookie",
    "artist": "Green Day",
    "top_genre": "Rock"
},
{
    "number": "194",
    "year": "1972",
    "album": "Transformer",
    "artist": "Lou Reed",
    "top_genre": "Rock"
},
{
    "number": "195",
    "year": "1966",
    "album": "Blues Breakers With Eric Clapton (\"The Beano Album\")",
    "artist": "John Mayall & The Bluesbreakers",
    "top_genre": "Rock"
},
{
    "number": "196",
    "year": "1998",
    "album": "Nuggets: Original Artyfacts From the First Psychedelic Era, 1965-1968",
    "artist": "Various Artists",
    "top_genre": "Rock"
},
{
    "number": "197",
    "year": "1983",
    "album": "Murmur",
    "artist": "R.E.M.",
    "top_genre": "Rock"
},
{
    "number": "198",
    "year": "1967",
    "album": "The Best of Little Walter",
    "artist": "Little Walter",
    "top_genre": "Blues"
},
{
    "number": "199",
    "year": "2001",
    "album": "Is This It",
    "artist": "The Strokes",
    "top_genre": "Rock"
},
{
    "number": "200",
    "year": "1979",
    "album": "Highway to Hell",
    "artist": "AC/DC",
    "top_genre": "Rock"
},
{
    "number": "201",
    "year": "1994",
    "album": "The Downward Spiral",
    "artist": "Nine Inch Nails",
    "top_genre": "Electronic"
},
{
    "number": "202",
    "year": "1966",
    "album": "Parsley, Sage, Rosemary and Thyme",
    "artist": "Simon & Garfunkel",
    "top_genre": "Rock"
},
{
    "number": "203",
    "year": "1987",
    "album": "Bad",
    "artist": "Michael Jackson",
    "top_genre": "Funk/Soul"
},
{
    "number": "204",
    "year": "2006",
    "album": "Modern Times",
    "artist": "Bob Dylan",
    "top_genre": "Rock"
},
{
    "number": "205",
    "year": "1968",
    "album": "Wheels of Fire",
    "artist": "Cream",
    "top_genre": "Rock"
},
{
    "number": "206",
    "year": "1980",
    "album": "Dirty Mind",
    "artist": "Prince",
    "top_genre": "Funk/Soul"
},
{
    "number": "207",
    "year": "1970",
    "album": "Abraxas",
    "artist": "Santana",
    "top_genre": "Rock"
},
{
    "number": "208",
    "year": "1970",
    "album": "Tea for the Tillerman",
    "artist": "Cat Stevens",
    "top_genre": "Rock"
},
{
    "number": "209",
    "year": "1991",
    "album": "Ten",
    "artist": "Pearl Jam",
    "top_genre": "Rock"
},
{
    "number": "210",
    "year": "1969",
    "album": "Everybody Knows This Is Nowhere",
    "artist": "Neil Young & Crazy Horse",
    "top_genre": "Rock"
},
{
    "number": "211",
    "year": "1975",
    "album": "Wish You Were Here",
    "artist": "Pink Floyd",
    "top_genre": "Rock"
},
{
    "number": "212",
    "year": "1994",
    "album": "Crooked Rain Crooked Rain",
    "artist": "Pavement",
    "top_genre": "Rock"
},
{
    "number": "213",
    "year": "1981",
    "album": "Tattoo You",
    "artist": "The Rolling Stones",
    "top_genre": "Rock"
},
{
    "number": "214",
    "year": "1991",
    "album": "Proud Mary: The Best of Ike and Tina Turner",
    "artist": "Ike & Tina Turner",
    "top_genre": "Funk/Soul"
},
{
    "number": "215",
    "year": "1973",
    "album": "New York Dolls",
    "artist": "New York Dolls",
    "top_genre": "Rock"
},
{
    "number": "216",
    "year": "1986",
    "album": "Bo Diddley/Go Bo Diddley",
    "artist": "Bo Diddley",
    "top_genre": "Rock"
},
{
    "number": "217",
    "year": "1961",
    "album": "Two Steps From the Blues",
    "artist": "Bobby \"Blue\" Bland",
    "top_genre": "Funk/Soul"
},
{
    "number": "218",
    "year": "1986",
    "album": "The Queen Is Dead",
    "artist": "The Smiths",
    "top_genre": "Rock"
},
{
    "number": "219",
    "year": "1986",
    "album": "Licensed to Ill",
    "artist": "Beastie Boys",
    "top_genre": "Hip Hop"
},
{
    "number": "220",
    "year": "1970",
    "album": "Look-Ka Py Py",
    "artist": "The Meters",
    "top_genre": "Funk/Soul"
},
{
    "number": "221",
    "year": "1991",
    "album": "Loveless",
    "artist": "My Bloody Valentine",
    "top_genre": "Rock"
},
{
    "number": "222",
    "year": "1972",
    "album": "New Orleans Piano",
    "artist": "Professor Longhair",
    "top_genre": "Funk/Soul"
},
{
    "number": "223",
    "year": "1983",
    "album": "War",
    "artist": "U2",
    "top_genre": "Rock"
},
{
    "number": "224",
    "year": "1999",
    "album": "The Neil Diamond Collection",
    "artist": "Neil Diamond",
    "top_genre": "Rock"
},
{
    "number": "225",
    "year": "2004",
    "album": "American Idiot",
    "artist": "Green Day",
    "top_genre": "Rock"
},
{
    "number": "226",
    "year": "1982",
    "album": "Nebraska",
    "artist": "Bruce Springsteen",
    "top_genre": "Rock"
},
{
    "number": "227",
    "year": "1989",
    "album": "Doolittle",
    "artist": "Pixies",
    "top_genre": "Rock"
},
{
    "number": "228",
    "year": "1987",
    "album": "Paid in Full",
    "artist": "Eric B. & Rakim",
    "top_genre": "Hip Hop"
},
{
    "number": "229",
    "year": "1975",
    "album": "Toys in the Attic",
    "artist": "Aerosmith",
    "top_genre": "Rock"
},
{
    "number": "230",
    "year": "1989",
    "album": "Nick of Time",
    "artist": "Bonnie Raitt",
    "top_genre": "Rock"
},
{
    "number": "231",
    "year": "1975",
    "album": "A Night at the Opera",
    "artist": "Queen",
    "top_genre": "Rock"
},
{
    "number": "232",
    "year": "1972",
    "album": "The Kink Kronikles",
    "artist": "The Kinks",
    "top_genre": "Rock"
},
{
    "number": "233",
    "year": "1965",
    "album": "Mr. Tambourine Man",
    "artist": "The Byrds",
    "top_genre": "Rock"
},
{
    "number": "234",
    "year": "1968",
    "album": "Bookends",
    "artist": "Simon & Garfunkel",
    "top_genre": "Rock"
},
{
    "number": "235",
    "year": "2000",
    "album": "The Ultimate Collection",
    "artist": "Patsy Cline",
    "top_genre": "Folk"
},
{
    "number": "236",
    "year": "1992",
    "album": "Mr. Excitement!",
    "artist": "Jackie Wilson",
    "top_genre": "Funk/Soul"
},
{
    "number": "237",
    "year": "1965",
    "album": "My Generation",
    "artist": "The Who",
    "top_genre": "Rock"
},
{
    "number": "238",
    "year": "1962",
    "album": "Howlin' Wolf",
    "artist": "Howlin' Wolf",
    "top_genre": "Blues"
},
{
    "number": "239",
    "year": "1989",
    "album": "Like a Prayer",
    "artist": "Madonna",
    "top_genre": "Electronic"
},
{
    "number": "240",
    "year": "1972",
    "album": "Can't Buy a Thrill",
    "artist": "Steely Dan",
    "top_genre": "Rock"
},
{
    "number": "241",
    "year": "1984",
    "album": "Let It Be",
    "artist": "The Replacements",
    "top_genre": "Rock"
},
{
    "number": "242",
    "year": "1984",
    "album": "Run D.M.C.",
    "artist": "Run D.M.C.",
    "top_genre": "Hip Hop"
},
{
    "number": "243",
    "year": "1970",
    "album": "Black Sabbath",
    "artist": "Black Sabbath",
    "top_genre": "Rock"
},
{
    "number": "244",
    "year": "2000",
    "album": "The Marshall Mathers LP",
    "artist": "Eminem",
    "top_genre": "Hip Hop"
},
{
    "number": "245",
    "year": "1993",
    "album": "All Killer No Filler! The Jerry Lee Lewis Anthology",
    "artist": "Jerry Lee Lewis",
    "top_genre": "Rock"
},
{
    "number": "246",
    "year": "1966",
    "album": "Freak Out!",
    "artist": "The Mothers of Invention",
    "top_genre": "Electronic"
},
{
    "number": "247",
    "year": "1969",
    "album": "Live/Dead",
    "artist": "The Grateful Dead",
    "top_genre": "Rock"
},
{
    "number": "248",
    "year": "1959",
    "album": "The Shape of Jazz to Come",
    "artist": "Ornette Coleman",
    "top_genre": "Jazz"
},
{
    "number": "249",
    "year": "1992",
    "album": "Automatic for the People",
    "artist": "R.E.M.",
    "top_genre": "Rock"
},
{
    "number": "250",
    "year": "1996",
    "album": "Reasonable Doubt",
    "artist": "Jay Z",
    "top_genre": "Hip Hop"
},
{
    "number": "251",
    "year": "1977",
    "album": "Low",
    "artist": "David Bowie",
    "top_genre": "Electronic"
},
{
    "number": "252",
    "year": "2001",
    "album": "The Blueprint",
    "artist": "Jay Z",
    "top_genre": "Hip Hop"
},
{
    "number": "253",
    "year": "1980",
    "album": "The River",
    "artist": "Bruce Springsteen",
    "top_genre": "Rock"
},
{
    "number": "254",
    "year": "1966",
    "album": "Complete & Unbelievable: The Otis Redding Dictionary of Soul",
    "artist": "Otis Redding",
    "top_genre": "Funk/Soul"
},
{
    "number": "255",
    "year": "1991",
    "album": "Metallica (The Black Album)",
    "artist": "Metallica",
    "top_genre": "Rock"
},
{
    "number": "256",
    "year": "1977",
    "album": "Trans Europa Express",
    "artist": "Kraftwerk",
    "top_genre": "Electronic"
},
{
    "number": "257",
    "year": "1985",
    "album": "Whitney Houston",
    "artist": "Whitney Houston",
    "top_genre": "Funk/Soul"
},
{
    "number": "258",
    "year": "1968",
    "album": "The Kinks Are The Village Green Preservation Society",
    "artist": "The Kinks",
    "top_genre": "Rock"
},
{
    "number": "259",
    "year": "1997",
    "album": "The Velvet Rope",
    "artist": "Janet",
    "top_genre": "Electronic"
},
{
    "number": "260",
    "year": "1978",
    "album": "Stardust",
    "artist": "Willie Nelson",
    "top_genre": "Pop"
},
{
    "number": "261",
    "year": "1970",
    "album": "American Beauty",
    "artist": "Grateful Dead",
    "top_genre": "Rock"
},
{
    "number": "262",
    "year": "1969",
    "album": "Crosby, Stills & Nash",
    "artist": "Crosby, Stills & Nash",
    "top_genre": "Rock"
},
{
    "number": "263",
    "year": "1988",
    "album": "Tracy Chapman",
    "artist": "Tracy Chapman",
    "top_genre": "Rock"
},
{
    "number": "264",
    "year": "1970",
    "album": "Workingman's Dead",
    "artist": "Grateful Dead",
    "top_genre": "Rock"
},
{
    "number": "265",
    "year": "1959",
    "album": "The Genius of Ray Charles",
    "artist": "Ray Charles",
    "top_genre": "Jazz"
},
{
    "number": "266",
    "year": "1968",
    "album": "Child Is Father to the Man",
    "artist": "Blood, Sweat & Tears",
    "top_genre": "Rock"
},
{
    "number": "267",
    "year": "1973",
    "album": "Quadrophenia",
    "artist": "The Who",
    "top_genre": "Rock"
},
{
    "number": "268",
    "year": "1972",
    "album": "Paul Simon",
    "artist": "Paul Simon",
    "top_genre": "Rock"
},
{
    "number": "269",
    "year": "1985",
    "album": "Psychocandy",
    "artist": "The Jesus and Mary Chain",
    "top_genre": "Rock"
},
{
    "number": "270",
    "year": "1978",
    "album": "Some Girls",
    "artist": "The Rolling Stones",
    "top_genre": "Rock"
},
{
    "number": "271",
    "year": "1965",
    "album": "The Beach Boys Today!",
    "artist": "The Beach Boys",
    "top_genre": "Rock"
},
{
    "number": "272",
    "year": "1997",
    "album": "Dig Me Out",
    "artist": "Sleater Kinney",
    "top_genre": "Rock"
},
{
    "number": "273",
    "year": "1966",
    "album": "Going to a Go-Go",
    "artist": "Smokey Robinson & The Miracles",
    "top_genre": "Funk/Soul"
},
{
    "number": "274",
    "year": "1974",
    "album": "Nightbirds",
    "artist": "LaBelle",
    "top_genre": "Funk/Soul"
},
{
    "number": "275",
    "year": "1999",
    "album": "The Slim Shady LP",
    "artist": "Eminem",
    "top_genre": "Hip Hop"
},
{
    "number": "276",
    "year": "1975",
    "album": "Mothership Connection",
    "artist": "Parliament",
    "top_genre": "Funk/Soul"
},
{
    "number": "277",
    "year": "1989",
    "album": "Rhythm Nation 1814",
    "artist": "Janet Jackson",
    "top_genre": "Electronic"
},
{
    "number": "278",
    "year": "1997",
    "album": "Anthology of American Folk Music",
    "artist": "Various",
    "top_genre": "Blues"
},
{
    "number": "279",
    "year": "1973",
    "album": "Aladdin Sane",
    "artist": "David Bowie",
    "top_genre": "Rock"
},
{
    "number": "280",
    "year": "2000",
    "album": "All That You Can't Leave Behind",
    "artist": "U2",
    "top_genre": "Rock"
},
{
    "number": "281",
    "year": "1994",
    "album": "My Life",
    "artist": "Mary J. Blige",
    "top_genre": "Hip Hop"
},
{
    "number": "282",
    "year": "1964",
    "album": "Folk Singer",
    "artist": "Muddy Waters",
    "top_genre": "Blues"
},
{
    "number": "283",
    "year": "1974",
    "album": "Can't Get Enough",
    "artist": "Barry White",
    "top_genre": "Funk/Soul"
},
{
    "number": "284",
    "year": "1978",
    "album": "The Cars",
    "artist": "The Cars",
    "top_genre": "Electronic"
},
{
    "number": "285",
    "year": "1972",
    "album": "Music of My Mind",
    "artist": "Stevie Wonder",
    "top_genre": "Funk/Soul"
},
{
    "number": "286",
    "year": "1972",
    "album": "I'm Still in Love With You",
    "artist": "Al Green",
    "top_genre": "Funk/Soul"
},
{
    "number": "287",
    "year": "1980",
    "album": "Los Angeles",
    "artist": "X",
    "top_genre": "Rock"
},
{
    "number": "288",
    "year": "1968",
    "album": "Anthem of the Sun",
    "artist": "Grateful Dead",
    "top_genre": "Rock"
},
{
    "number": "289",
    "year": "1967",
    "album": "Something Else by The Kinks",
    "artist": "The Kinks",
    "top_genre": "Rock"
},
{
    "number": "290",
    "year": "1973",
    "album": "Call Me",
    "artist": "Al Green",
    "top_genre": "Funk/Soul"
},
{
    "number": "291",
    "year": "1977",
    "album": "Talking Heads: 77",
    "artist": "Talking Heads",
    "top_genre": "Rock"
},
{
    "number": "292",
    "year": "1975",
    "album": "The Basement Tapes",
    "artist": "Bob Dylan and the Band",
    "top_genre": "Rock"
},
{
    "number": "293",
    "year": "1968",
    "album": "White Light/White Heat",
    "artist": "The Velvet Underground",
    "top_genre": "Rock"
},
{
    "number": "294",
    "year": "1969",
    "album": "Kick Out the Jams",
    "artist": "MC5",
    "top_genre": "Rock"
},
{
    "number": "295",
    "year": "1970",
    "album": "Songs of Love and Hate",
    "artist": "Leonard Cohen",
    "top_genre": "Folk"
},
{
    "number": "296",
    "year": "1985",
    "album": "Meat Is Murder",
    "artist": "The Smiths",
    "top_genre": "Rock"
},
{
    "number": "297",
    "year": "1968",
    "album": "We're Only in It for the Money",
    "artist": "The Mothers of Invention",
    "top_genre": "Electronic"
},
{
    "number": "298",
    "year": "2003",
    "album": "The College Dropout",
    "artist": "Kanye West",
    "top_genre": "Hip Hop"
},
{
    "number": "299",
    "year": "1994",
    "album": "Weezer (Blue Album)",
    "artist": "Weezer",
    "top_genre": "Rock"
},
{
    "number": "300",
    "year": "1971",
    "album": "Master of Reality",
    "artist": "Black Sabbath",
    "top_genre": "Rock"
},
{
    "number": "301",
    "year": "1971",
    "album": "Coat of Many Colors",
    "artist": "Dolly Parton",
    "top_genre": "Folk"
},
{
    "number": "302",
    "year": "1990",
    "album": "Fear of a Black Planet",
    "artist": "Public Enemy",
    "top_genre": "Hip Hop"
},
{
    "number": "303",
    "year": "1967",
    "album": "John Wesley Harding",
    "artist": "Bob Dylan",
    "top_genre": "Rock"
},
{
    "number": "304",
    "year": "1994",
    "album": "Grace",
    "artist": "Jeff Buckley",
    "top_genre": "Rock"
},
{
    "number": "305",
    "year": "1998",
    "album": "Car Wheels on a Gravel Road",
    "artist": "Lucinda Williams",
    "top_genre": "Folk"
},
{
    "number": "306",
    "year": "1996",
    "album": "Odelay",
    "artist": "Beck",
    "top_genre": "Electronic"
},
{
    "number": "307",
    "year": "1964",
    "album": "A Hard Day's Night",
    "artist": "The Beatles",
    "top_genre": "Rock"
},
{
    "number": "308",
    "year": "1956",
    "album": "Songs for Swingin' Lovers!",
    "artist": "Frank Sinatra",
    "top_genre": "Jazz"
},
{
    "number": "309",
    "year": "1969",
    "album": "Willy and the Poor Boys",
    "artist": "Creedence Clearwater Revival",
    "top_genre": "Rock"
},
{
    "number": "310",
    "year": "1991",
    "album": "Blood Sugar Sex Magik",
    "artist": "Red Hot Chili Peppers",
    "top_genre": "Rock"
},
{
    "number": "311",
    "year": "1994",
    "album": "The Sun Records Collection",
    "artist": "Various",
    "top_genre": "Rock"
},
{
    "number": "312",
    "year": "1988",
    "album": "Nothing's Shocking",
    "artist": "Jane's Addiction",
    "top_genre": "Rock"
},
{
    "number": "313",
    "year": "1994",
    "album": "MTV Unplugged in New York",
    "artist": "Nirvana",
    "top_genre": "Rock"
},
{
    "number": "314",
    "year": "1998",
    "album": "The Miseducation of Lauryn Hill",
    "artist": "Lauryn Hill",
    "top_genre": "Hip Hop"
},
{
    "number": "315",
    "year": "1979",
    "album": "Damn the Torpedoes",
    "artist": "Tom Petty and the Heartbreakers",
    "top_genre": "Rock"
},
{
    "number": "316",
    "year": "1969",
    "album": "The Velvet Underground",
    "artist": "The Velvet Underground",
    "top_genre": "Rock"
},
{
    "number": "317",
    "year": "1988",
    "album": "Surfer Rosa",
    "artist": "Pixies",
    "top_genre": "Rock"
},
{
    "number": "318",
    "year": "1972",
    "album": "Back Stabbers",
    "artist": "The O'Jays",
    "top_genre": "Funk/Soul"
},
{
    "number": "319",
    "year": "1973",
    "album": "Burnin'",
    "artist": "The Wailers",
    "top_genre": "Reggae"
},
{
    "number": "320",
    "year": "2001",
    "album": "Amnesiac",
    "artist": "Radiohead",
    "top_genre": "Electronic"
},
{
    "number": "321",
    "year": "1972",
    "album": "Pink Moon",
    "artist": "Nick Drake",
    "top_genre": "Rock"
},
{
    "number": "322",
    "year": "1972",
    "album": "Sail Away",
    "artist": "Randy Newman",
    "top_genre": "Rock"
},
{
    "number": "323",
    "year": "1981",
    "album": "Ghost in the Machine",
    "artist": "The Police",
    "top_genre": "Rock"
},
{
    "number": "324",
    "year": "1976",
    "album": "Station to Station",
    "artist": "David Bowie",
    "top_genre": "Rock"
},
{
    "number": "325",
    "year": "1977",
    "album": "Slowhand",
    "artist": "Eric Clapton",
    "top_genre": "Rock"
},
{
    "number": "326",
    "year": "1989",
    "album": "Disintegration",
    "artist": "The Cure",
    "top_genre": "Electronic"
},
{
    "number": "327",
    "year": "1993",
    "album": "Exile in Guyville",
    "artist": "Liz Phair",
    "top_genre": "Rock"
},
{
    "number": "328",
    "year": "1988",
    "album": "Daydream Nation",
    "artist": "Sonic Youth",
    "top_genre": "Rock"
},
{
    "number": "329",
    "year": "1986",
    "album": "In the Jungle Groove",
    "artist": "James Brown",
    "top_genre": "Funk/Soul"
},
{
    "number": "330",
    "year": "1975",
    "album": "Tonight's the Night",
    "artist": "Neil Young",
    "top_genre": "Rock"
},
{
    "number": "331",
    "year": "1965",
    "album": "Help!",
    "artist": "The Beatles",
    "top_genre": "Rock"
},
{
    "number": "332",
    "year": "1982",
    "album": "Shoot Out the Lights",
    "artist": "Richard & Linda Thompson",
    "top_genre": "Rock"
},
{
    "number": "333",
    "year": "1981",
    "album": "Wild Gift",
    "artist": "X",
    "top_genre": "Rock"
},
{
    "number": "334",
    "year": "1979",
    "album": "Squeezing Out Sparks",
    "artist": "Graham Parker & The Rumour",
    "top_genre": "Rock"
},
{
    "number": "335",
    "year": "1994",
    "album": "Superunknown",
    "artist": "Soundgarden",
    "top_genre": "Rock"
},
{
    "number": "336",
    "year": "2007",
    "album": "In Rainbows",
    "artist": "Radiohead",
    "top_genre": "Electronic"
},
{
    "number": "337",
    "year": "1971",
    "album": "Aqualung",
    "artist": "Jethro Tull",
    "top_genre": "Rock"
},
{
    "number": "338",
    "year": "1968",
    "album": "Cheap Thrills",
    "artist": "Big Brother & the Holding Company",
    "top_genre": "Rock"
},
{
    "number": "339",
    "year": "1974",
    "album": "The Heart of Saturday Night",
    "artist": "Tom Waits",
    "top_genre": "Jazz"
},
{
    "number": "340",
    "year": "1981",
    "album": "Damaged",
    "artist": "Black Flag",
    "top_genre": "Rock"
},
{
    "number": "341",
    "year": "1999",
    "album": "Play",
    "artist": "Moby",
    "top_genre": "Electronic"
},
{
    "number": "342",
    "year": "1990",
    "album": "Violator",
    "artist": "Depeche Mode",
    "top_genre": "Electronic"
},
{
    "number": "343",
    "year": "1977",
    "album": "Bat Out of Hell",
    "artist": "Meat Loaf",
    "top_genre": "Rock"
},
{
    "number": "344",
    "year": "1973",
    "album": "Berlin",
    "artist": "Lou Reed",
    "top_genre": "Rock"
},
{
    "number": "345",
    "year": "1984",
    "album": "Stop Making Sense",
    "artist": "Talking Heads",
    "top_genre": "Rock"
},
{
    "number": "346",
    "year": "1989",
    "album": "3 Feet High and Rising",
    "artist": "De La Soul",
    "top_genre": "Hip Hop"
},
{
    "number": "347",
    "year": "1967",
    "album": "The Piper at the Gates of Dawn",
    "artist": "Pink Floyd",
    "top_genre": "Rock"
},
{
    "number": "348",
    "year": "1960",
    "album": "Muddy Waters at Newport 1960",
    "artist": "Muddy Waters",
    "top_genre": "Rock"
},
{
    "number": "349",
    "year": "2003",
    "album": "The Black Album",
    "artist": "Jay Z",
    "top_genre": "Hip Hop"
},
{
    "number": "350",
    "year": "1966",
    "album": "Roger the Engineer",
    "artist": "The Yardbirds",
    "top_genre": "Rock"
},
{
    "number": "351",
    "year": "1979",
    "album": "Rust Never Sleeps",
    "artist": "Neil Young & Crazy Horse",
    "top_genre": "Rock"
},
{
    "number": "352",
    "year": "1985",
    "album": "Brothers in Arms",
    "artist": "Dire Straits",
    "top_genre": "Rock"
},
{
    "number": "353",
    "year": "2010",
    "album": "My Beautiful Dark Twisted Fantasy",
    "artist": "Kanye West",
    "top_genre": "Hip Hop"
},
{
    "number": "354",
    "year": "1978",
    "album": "52nd Street",
    "artist": "Billy Joel",
    "top_genre": "Jazz"
},
{
    "number": "355",
    "year": "1965",
    "album": "Having a Rave Up",
    "artist": "The Yardbirds",
    "top_genre": "Rock"
},
{
    "number": "356",
    "year": "1970",
    "album": "12 Songs",
    "artist": "Randy Newman",
    "top_genre": "Rock"
},
{
    "number": "357",
    "year": "1967",
    "album": "Between the Buttons",
    "artist": "The Rolling Stones",
    "top_genre": "Rock"
},
{
    "number": "358",
    "year": "1960",
    "album": "Sketches of Spain",
    "artist": "Miles Davis",
    "top_genre": "Jazz"
},
{
    "number": "359",
    "year": "1972",
    "album": "Honky Chateau",
    "artist": "Elton John",
    "top_genre": "Rock"
},
{
    "number": "360",
    "year": "1979",
    "album": "Singles Going Steady",
    "artist": "Buzzcocks",
    "top_genre": "Rock"
},
{
    "number": "361",
    "year": "2000",
    "album": "Stankonia",
    "artist": "OutKast",
    "top_genre": "Hip Hop"
},
{
    "number": "362",
    "year": "1993",
    "album": "Siamese Dream",
    "artist": "The Smashing Pumpkins",
    "top_genre": "Rock"
},
{
    "number": "363",
    "year": "1987",
    "album": "Substance 1987",
    "artist": "New Order",
    "top_genre": "Electronic"
},
{
    "number": "364",
    "year": "1971",
    "album": "L.A. Woman",
    "artist": "The Doors",
    "top_genre": "Rock"
},
{
    "number": "365",
    "year": "1992",
    "album": "Rage Against the Machine",
    "artist": "Rage Against the Machine",
    "top_genre": "Hip Hop"
},
{
    "number": "366",
    "year": "1994",
    "album": "American Recordings",
    "artist": "Johnny Cash",
    "top_genre": "Folk"
},
{
    "number": "367",
    "year": "1998",
    "album": "Ray of Light",
    "artist": "Madonna",
    "top_genre": "Electronic"
},
{
    "number": "368",
    "year": "1972",
    "album": "Eagles",
    "artist": "Eagles",
    "top_genre": "Rock"
},
{
    "number": "369",
    "year": "1987",
    "album": "Louder Than Bombs",
    "artist": "The Smiths",
    "top_genre": "Rock"
},
{
    "number": "370",
    "year": "1973",
    "album": "Mott",
    "artist": "Mott the Hoople",
    "top_genre": "Rock"
},
{
    "number": "371",
    "year": "2006",
    "album": "Whatever People Say I Am, That's What I'm Not",
    "artist": "Arctic Monkeys",
    "top_genre": "Rock"
},
{
    "number": "372",
    "year": "1979",
    "album": "Reggatta de Blanc",
    "artist": "The Police",
    "top_genre": "Rock"
},
{
    "number": "373",
    "year": "1969",
    "album": "Volunteers",
    "artist": "Jefferson Airplane",
    "top_genre": "Rock"
},
{
    "number": "374",
    "year": "1975",
    "album": "Siren",
    "artist": "Roxy Music",
    "top_genre": "Rock"
},
{
    "number": "375",
    "year": "1974",
    "album": "Late for the Sky",
    "artist": "Jackson Browne",
    "top_genre": "Rock"
},
{
    "number": "376",
    "year": "1995",
    "album": "Post",
    "artist": "Bjork",
    "top_genre": "Electronic"
},
{
    "number": "377",
    "year": "1991",
    "album": "The Ultimate Collection: 1948-1990",
    "artist": "John Lee Hooker",
    "top_genre": "Blues"
},
{
    "number": "378",
    "year": "1995",
    "album": "(What's the Story) Morning Glory?",
    "artist": "Oasis",
    "top_genre": "Rock"
},
{
    "number": "379",
    "year": "1994",
    "album": "CrazySexyCool",
    "artist": "TLC",
    "top_genre": "Electronic"
},
{
    "number": "380",
    "year": "1973",
    "album": "Funky Kingston",
    "artist": "Toots & The Maytals",
    "top_genre": "Reggae"
},
{
    "number": "381",
    "year": "2011",
    "album": "The Smile Sessions",
    "artist": "The Beach Boys",
    "top_genre": "Rock"
},
{
    "number": "382",
    "year": "1976",
    "album": "The Modern Lovers",
    "artist": "The Modern Lovers",
    "top_genre": "Rock"
},
{
    "number": "383",
    "year": "1978",
    "album": "More Songs About Buildings and Food",
    "artist": "Talking Heads",
    "top_genre": "Rock"
},
{
    "number": "384",
    "year": "1966",
    "album": "A Quick One",
    "artist": "The Who",
    "top_genre": "Rock"
},
{
    "number": "385",
    "year": "2001",
    "album": "Love and Theft",
    "artist": "Bob Dylan",
    "top_genre": "Rock"
},
{
    "number": "386",
    "year": "1974",
    "album": "Pretzel Logic",
    "artist": "Steely Dan",
    "top_genre": "Jazz"
},
{
    "number": "387",
    "year": "1993",
    "album": "Enter the Wu-Tang: 36 Chambers",
    "artist": "Wu Tang Clan",
    "top_genre": "Hip Hop"
},
{
    "number": "388",
    "year": "1985",
    "album": "The Indestructible Beat of Soweto",
    "artist": "Various Artists",
    "top_genre": "Funk/Soul"
},
{
    "number": "389",
    "year": "1989",
    "album": "The End of the Innocence",
    "artist": "Don Henley",
    "top_genre": "Rock"
},
{
    "number": "390",
    "year": "2003",
    "album": "Elephant",
    "artist": "The White Stripes",
    "top_genre": "Rock"
},
{
    "number": "391",
    "year": "1976",
    "album": "The Pretender",
    "artist": "Jackson Browne",
    "top_genre": "Rock"
},
{
    "number": "392",
    "year": "1970",
    "album": "Let It Be",
    "artist": "The Beatles",
    "top_genre": "Rock"
},
{
    "number": "393",
    "year": "2007",
    "album": "Kala",
    "artist": "M.I.A.",
    "top_genre": "Electronic"
},
{
    "number": "394",
    "year": "1974",
    "album": "Good Old Boys",
    "artist": "Randy Newman",
    "top_genre": "Rock"
},
{
    "number": "395",
    "year": "2007",
    "album": "Sound of Silver",
    "artist": "LCD Soundsystem",
    "top_genre": "Electronic"
},
{
    "number": "396",
    "year": "1973",
    "album": "For Your Pleasure",
    "artist": "Roxy Music",
    "top_genre": "Rock"
},
{
    "number": "397",
    "year": "1991",
    "album": "Blue Lines",
    "artist": "Massive Attack",
    "top_genre": "Electronic"
},
{
    "number": "398",
    "year": "1983",
    "album": "Eliminator",
    "artist": "ZZ Top",
    "top_genre": "Rock"
},
{
    "number": "399",
    "year": "1985",
    "album": "Rain Dogs",
    "artist": "Tom Waits",
    "top_genre": "Rock"
},
{
    "number": "400",
    "year": "1995",
    "album": "Anthology: The Best of The Temptations",
    "artist": "The Temptations",
    "top_genre": "Electronic"
},
{
    "number": "401",
    "year": "1999",
    "album": "Californication",
    "artist": "Red Hot Chili Peppers",
    "top_genre": "Rock"
},
{
    "number": "402",
    "year": "1994",
    "album": "Illmatic",
    "artist": "Nas",
    "top_genre": "Hip Hop"
},
{
    "number": "403",
    "year": "1973",
    "album": "(pronounced 'leh-'nerd 'skin-'nerd)",
    "artist": "Lynyrd Skynyrd",
    "top_genre": "Rock"
},
{
    "number": "404",
    "year": "1972",
    "album": "Dr. John's Gumbo",
    "artist": "Dr. John",
    "top_genre": "Funk/Soul"
},
{
    "number": "405",
    "year": "1974",
    "album": "Radio City",
    "artist": "Big Star",
    "top_genre": "Rock"
},
{
    "number": "406",
    "year": "1993",
    "album": "Rid of Me",
    "artist": "PJ Harvey",
    "top_genre": "Rock"
},
{
    "number": "407",
    "year": "1980",
    "album": "Sandinista!",
    "artist": "The Clash",
    "top_genre": "Rock"
},
{
    "number": "408",
    "year": "1989",
    "album": "I Do Not Want What I Haven't Got",
    "artist": "Sinead O'Connor",
    "top_genre": "Rock"
},
{
    "number": "409",
    "year": "1967",
    "album": "Strange Days",
    "artist": "The Doors",
    "top_genre": "Rock"
},
{
    "number": "410",
    "year": "1997",
    "album": "Time Out of Mind",
    "artist": "Bob Dylan",
    "top_genre": "Rock"
},
{
    "number": "411",
    "year": "1974",
    "album": "461 Ocean Boulevard",
    "artist": "Eric Clapton",
    "top_genre": "Rock"
},
{
    "number": "412",
    "year": "1977",
    "album": "Pink Flag",
    "artist": "Wire",
    "top_genre": "Rock"
},
{
    "number": "413",
    "year": "1984",
    "album": "Double Nickels on the Dime",
    "artist": "Minutemen",
    "top_genre": "Rock"
},
{
    "number": "414",
    "year": "1981",
    "album": "Beauty and the Beat",
    "artist": "The Go Go's",
    "top_genre": "Rock"
},
{
    "number": "415",
    "year": "1978",
    "album": "Van Halen",
    "artist": "Van Halen",
    "top_genre": "Rock"
},
{
    "number": "416",
    "year": "1999",
    "album": "Mule Variations",
    "artist": "Tom Waits",
    "top_genre": "Electronic"
},
{
    "number": "417",
    "year": "1980",
    "album": "Boy",
    "artist": "U2",
    "top_genre": "Rock"
},
{
    "number": "418",
    "year": "1973",
    "album": "Band on the Run",
    "artist": "Paul McCartney & Wings",
    "top_genre": "Rock"
},
{
    "number": "419",
    "year": "1994",
    "album": "Dummy",
    "artist": "Portishead",
    "top_genre": "Electronic"
},
{
    "number": "420",
    "year": "1957",
    "album": "The 'Chirping' Crickets",
    "artist": "The Crickets",
    "top_genre": "Rock"
},
{
    "number": "421",
    "year": "1990",
    "album": "The Best of the Girl Groups, Volume 1",
    "artist": "Various Artists",
    "top_genre": "Rock"
},
{
    "number": "422",
    "year": "1963",
    "album": "Presenting the Fabulous Ronettes Featuring Veronica",
    "artist": "The Ronettes",
    "top_genre": "Rock"
},
{
    "number": "423",
    "year": "2001",
    "album": "Anthology",
    "artist": "Diana Ross & The Supremes",
    "top_genre": "Electronic"
},
{
    "number": "424",
    "year": "2002",
    "album": "The Rising",
    "artist": "Bruce Springsteen",
    "top_genre": "Rock"
},
{
    "number": "425",
    "year": "1974",
    "album": "Grievous Angel",
    "artist": "Gram Parsons",
    "top_genre": "Rock"
},
{
    "number": "426",
    "year": "1978",
    "album": "Cheap Trick at Budokan",
    "artist": "Cheap Trick",
    "top_genre": "Rock"
},
{
    "number": "427",
    "year": "2002",
    "album": "Sleepless",
    "artist": "Peter Wolf",
    "top_genre": "Rock"
},
{
    "number": "428",
    "year": "1978",
    "album": "Outlandos d'Amour",
    "artist": "The Police",
    "top_genre": "Rock"
},
{
    "number": "429",
    "year": "1975",
    "album": "Another Green World",
    "artist": "Brian Eno",
    "top_genre": "Electronic"
},
{
    "number": "430",
    "year": "2007",
    "album": "Vampire Weekend",
    "artist": "Vampire Weekend",
    "top_genre": "Rock"
},
{
    "number": "431",
    "year": "2000",
    "album": "Stories From the City, Stories From the Sea",
    "artist": "PJ Harvey",
    "top_genre": "Rock"
},
{
    "number": "432",
    "year": "1973",
    "album": "Here Come the Warm Jets",
    "artist": "Brian Eno",
    "top_genre": "Rock"
},
{
    "number": "433",
    "year": "1970",
    "album": "All Things Must Pass",
    "artist": "George Harrison",
    "top_genre": "Rock"
},
{
    "number": "434",
    "year": "1972",
    "album": "#1 Record",
    "artist": "Big Star",
    "top_genre": "Rock"
},
{
    "number": "435",
    "year": "1993",
    "album": "In Utero",
    "artist": "Nirvana",
    "top_genre": "Rock"
},
{
    "number": "436",
    "year": "2002",
    "album": "Sea Change",
    "artist": "Beck",
    "top_genre": "Rock"
},
{
    "number": "437",
    "year": "2008",
    "album": "Tha Carter III",
    "artist": "Lil Wayne",
    "top_genre": "Hip Hop"
},
{
    "number": "438",
    "year": "1979",
    "album": "Boys Don't Cry",
    "artist": "The Cure",
    "top_genre": "Rock"
},
{
    "number": "439",
    "year": "1985",
    "album": "Live at the Harlem Square Club, 1963",
    "artist": "Sam Cooke",
    "top_genre": "Funk/Soul"
},
{
    "number": "440",
    "year": "1985",
    "album": "Rum Sodomy & the Lash",
    "artist": "The Pogues",
    "top_genre": "Rock"
},
{
    "number": "441",
    "year": "1977",
    "album": "Suicide",
    "artist": "Suicide",
    "top_genre": "Electronic"
},
{
    "number": "442",
    "year": "1978",
    "album": "Q: Are We Not Men? A: We Are Devo!",
    "artist": "DEVO",
    "top_genre": "Rock"
},
{
    "number": "443",
    "year": "1977",
    "album": "In Color",
    "artist": "Cheap Trick",
    "top_genre": "Rock"
},
{
    "number": "444",
    "year": "1972",
    "album": "The World Is a Ghetto",
    "artist": "War",
    "top_genre": "Funk/Soul"
},
{
    "number": "445",
    "year": "1976",
    "album": "Fly Like an Eagle",
    "artist": "Steve Miller Band",
    "top_genre": "Rock"
},
{
    "number": "446",
    "year": "1970",
    "album": "Back in the USA",
    "artist": "MC5",
    "top_genre": "Rock"
},
{
    "number": "447",
    "year": "1964",
    "album": "Getz/Gilberto",
    "artist": "Stan Getz/Joao Gilberto featuring Antonio Carlos Jobim",
    "top_genre": "Jazz"
},
{
    "number": "448",
    "year": "1983",
    "album": "Synchronicity",
    "artist": "The Police",
    "top_genre": "Rock"
},
{
    "number": "449",
    "year": "1978",
    "album": "Third/Sister Lovers",
    "artist": "Big Star",
    "top_genre": "Rock"
},
{
    "number": "450",
    "year": "1973",
    "album": "For Everyman",
    "artist": "Jackson Browne",
    "top_genre": "Rock"
},
{
    "number": "451",
    "year": "2006",
    "album": "Back to Black",
    "artist": "Amy Winehouse",
    "top_genre": "Funk/Soul"
},
{
    "number": "452",
    "year": "1971",
    "album": "John Prine",
    "artist": "John Prine",
    "top_genre": "Folk"
},
{
    "number": "453",
    "year": "1987",
    "album": "Strictly Business",
    "artist": "EPMD",
    "top_genre": "Hip Hop"
},
{
    "number": "454",
    "year": "1971",
    "album": "Love It to Death",
    "artist": "Alice Cooper",
    "top_genre": "Rock"
},
{
    "number": "455",
    "year": "1984",
    "album": "How Will the Wolf Survive?",
    "artist": "Los Lobos",
    "top_genre": "Rock"
},
{
    "number": "456",
    "year": "1978",
    "album": "Here, My Dear",
    "artist": "Marvin Gaye",
    "top_genre": "Funk/Soul"
},
{
    "number": "457",
    "year": "2005",
    "album": "Z",
    "artist": "My Morning Jacket",
    "top_genre": "Rock"
},
{
    "number": "458",
    "year": "1970",
    "album": "Tumbleweed Connection",
    "artist": "Elton John",
    "top_genre": "Rock"
},
{
    "number": "459",
    "year": "1968",
    "album": "The Drifters' Golden Hits",
    "artist": "The Drifters",
    "top_genre": "Rock"
},
{
    "number": "460",
    "year": "1994",
    "album": "Live Through This",
    "artist": "Hole",
    "top_genre": "Rock"
},
{
    "number": "461",
    "year": "1979",
    "album": "Metal Box",
    "artist": "Public Image Ltd.",
    "top_genre": "Electronic"
},
{
    "number": "462",
    "year": "1987",
    "album": "Document",
    "artist": "R.E.M.",
    "top_genre": "Rock"
},
{
    "number": "463",
    "year": "1981",
    "album": "Heaven Up Here",
    "artist": "Echo and The Bunnymen",
    "top_genre": "Rock"
},
{
    "number": "464",
    "year": "1987",
    "album": "Hysteria",
    "artist": "Def Leppard",
    "top_genre": "Rock"
},
{
    "number": "465",
    "year": "1999",
    "album": "69 Love Songs",
    "artist": "The Magnetic Fields",
    "top_genre": "Electronic"
},
{
    "number": "466",
    "year": "2002",
    "album": "A Rush of Blood to the Head",
    "artist": "Coldplay",
    "top_genre": "Rock"
},
{
    "number": "467",
    "year": "1987",
    "album": "Tunnel of Love",
    "artist": "Bruce Springsteen",
    "top_genre": "Rock"
},
{
    "number": "468",
    "year": "1965",
    "album": "The Paul Butterfield Blues Band",
    "artist": "The Paul Butterfield Blues Band",
    "top_genre": "Rock"
},
{
    "number": "469",
    "year": "1996",
    "album": "The Score",
    "artist": "Fugees",
    "top_genre": "Hip Hop"
},
{
    "number": "470",
    "year": "1985",
    "album": "Radio",
    "artist": "L.L. Cool J",
    "top_genre": "Hip Hop"
},
{
    "number": "471",
    "year": "1974",
    "album": "I Want to See the Bright Lights Tonight",
    "artist": "Richard & Linda Thompson",
    "top_genre": "Rock"
},
{
    "number": "472",
    "year": "1987",
    "album": "Faith",
    "artist": "George Michael",
    "top_genre": "Electronic"
},
{
    "number": "473",
    "year": "1984",
    "album": "The Smiths",
    "artist": "The Smiths",
    "top_genre": "Rock"
},
{
    "number": "474",
    "year": "2001",
    "album": "Proxima estacion: Esperanza",
    "artist": "Manu Chao",
    "top_genre": "Rock"
},
{
    "number": "475",
    "year": "1979",
    "album": "Armed Forces",
    "artist": "Elvis Costello & The Attractions",
    "top_genre": "Rock"
},
{
    "number": "476",
    "year": "1997",
    "album": "Life After Death",
    "artist": "The Notorious B.I.G.",
    "top_genre": "Hip Hop"
},
{
    "number": "477",
    "year": "1996",
    "album": "Down Every Road",
    "artist": "Merle Haggard",
    "top_genre": "Folk"
},
{
    "number": "478",
    "year": "2002",
    "album": "All Time Greatest Hits",
    "artist": "Loretta Lynn",
    "top_genre": "Folk"
},
{
    "number": "479",
    "year": "1971",
    "album": "Maggot Brain",
    "artist": "Funkadelic",
    "top_genre": "Rock"
},
{
    "number": "480",
    "year": "1995",
    "album": "Only Built 4 Cuban Linx",
    "artist": "Raekwon",
    "top_genre": "Hip Hop"
},
{
    "number": "481",
    "year": "2000",
    "album": "Voodoo",
    "artist": "D'Angelo",
    "top_genre": "Hip Hop"
},
{
    "number": "482",
    "year": "1986",
    "album": "Guitar Town",
    "artist": "Steve Earle",
    "top_genre": "Rock"
},
{
    "number": "483",
    "year": "1979",
    "album": "Entertainment!",
    "artist": "Gang of Four",
    "top_genre": "Rock"
},
{
    "number": "484",
    "year": "1972",
    "album": "All the Young Dudes",
    "artist": "Mott the Hoople",
    "top_genre": "Rock"
},
{
    "number": "485",
    "year": "1994",
    "album": "Vitalogy",
    "artist": "Pearl Jam",
    "top_genre": "Rock"
},
{
    "number": "486",
    "year": "1975",
    "album": "That's the Way of the World",
    "artist": "Earth, Wind & Fire",
    "top_genre": "Funk/Soul"
},
{
    "number": "487",
    "year": "1983",
    "album": "She's So Unusual",
    "artist": "Cyndi Lauper",
    "top_genre": "Electronic"
},
{
    "number": "488",
    "year": "1985",
    "album": "New Day Rising",
    "artist": "Husker Du",
    "top_genre": "Rock"
},
{
    "number": "489",
    "year": "1976",
    "album": "Destroyer",
    "artist": "KISS",
    "top_genre": "Rock"
},
{
    "number": "490",
    "year": "1973",
    "album": "Tres hombres",
    "artist": "ZZ Top",
    "top_genre": "Rock"
},
{
    "number": "491",
    "year": "1967",
    "album": "Born Under a Bad Sign",
    "artist": "Albert King",
    "top_genre": "Funk/Soul"
},
{
    "number": "492",
    "year": "1983",
    "album": "Touch",
    "artist": "Eurythmics",
    "top_genre": "Electronic"
},
{
    "number": "493",
    "year": "2002",
    "album": "Yankee Hotel Foxtrot",
    "artist": "Wilco",
    "top_genre": "Rock"
},
{
    "number": "494",
    "year": "2007",
    "album": "Oracular Spectacular",
    "artist": "MGMT",
    "top_genre": "Electronic"
},
{
    "number": "495",
    "year": "1972",
    "album": "Give It Up",
    "artist": "Bonnie Raitt",
    "top_genre": "Rock"
},
{
    "number": "496",
    "year": "1969",
    "album": "Boz Scaggs",
    "artist": "Boz Scaggs",
    "top_genre": "Rock"
},
{
    "number": "497",
    "year": "2001",
    "album": "White Blood Cells",
    "artist": "The White Stripes",
    "top_genre": "Rock"
},
{
    "number": "498",
    "year": "1989",
    "album": "The Stone Roses",
    "artist": "The Stone Roses",
    "top_genre": "Rock"
},
{
    "number": "499",
    "year": "1971",
    "album": "Live in Cook County Jail",
    "artist": "B.B. King",
    "top_genre": "Blues"
},
{
    "number": "500",
    "year": "1998",
    "album": "Aquemini",
    "artist": "OutKast",
    "top_genre": "Hip Hop"
}];

function albumTree(fullData) {
    const byGenre = {};

    fullData.forEach((r) => {
        const strGenre = String(r.top_genre);
        let genreData = byGenre[strGenre];

        if (genreData === undefined) {
            genreData = {};
        }

        const strAlbum = String(r.album);
        let albumData = genreData[strAlbum];

        if (albumData === undefined) {
            albumData = {};
        }

        albumData[r.artist] = r.number;
        genreData[strAlbum] = albumData;

        byGenre[strGenre] = genreData;
        console.log(byGenre);
    });
    return byGenre;

}

function writeJSONFile(filename, fullData) {
    const data = albumTree(fullData);
    const jsonData = JSON.stringify(data);
    fs.writeFileSync(filename, jsonData, "utf8");
}

function main() {
    process.stdout.write(`Loading data from ${albumList}\n`);
    const filename = "public/bygenre.json";
    fetch(albumList)
        .then((res) => res.json())
        .then((json) => writeJSONFile(filename, json));
    process.stdout.write(`Data written to ${filename}\n`);
    console.log("Finished");
}

