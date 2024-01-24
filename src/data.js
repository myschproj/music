import { v4 as uuidv4 } from "uuid";

function chillHop() {
  return [
    {
      name: "Your drums, your love",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg",
      artist: "Aluna&George",
      audio: "https://github.com/myschproj/music/raw/main/audios/AlunaGeorge%20%E2%80%93%20Your%20Drums,%20Your%20Love.m4a",
      color: ["#205950", "#2ab3bf"],
      id: uuidv4(),
      active: true,
    },
    {
      name: "Masunya",
      cover:
        "https://raw.githubusercontent.com/myschproj/music/main/audios/IMG_9016.jpeg",
      artist: "AtdaiHleb x NecoArc",
      audio: "https://github.com/myschproj/music/raw/main/audios/ATDAI-HLEB-%D0%9C%D0%90%D0%A1%D0%AE%D0%9D%D0%AF-prod-white.m4a",
      color: ["#EF8EA9", "#ab417f"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "エレクトロ・ワールド",
      cover:
        "https://raw.githubusercontent.com/myschproj/music/main/audios/IMG_8946.jpeg",
      artist: "Perfume",
      audio: "https://github.com/myschproj/music/raw/main/audios/Perfume%20%E2%80%93%20%5BOfficial%20Music%20Video%5D%20%20....m4a",
      color: ["#EF8EA9", "#ab417f"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Fire for you",
      cover:
        "https://raw.githubusercontent.com/myschproj/music/main/audios/IMG_9019.jpeg",
      artist: "Cannons",
      audio: "https://github.com/myschproj/music/raw/main/audios/CannonsVEVO%20%E2%80%93%20Cannons%20-%20Fire%20for%20You%20(....m4a",
      color: ["#EF8EA9", "#ab417f"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Keep Going",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg",
      artist: "Swørn",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=9222",
      color: ["#CD607D", "#c94043"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Nightfall",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-1024x1024.jpg",
      artist: "Aiguille",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=9148",
      color: ["#EF8EA9", "#ab417f"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Reflection",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg",
      artist: "Swørn",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=9228",
      color: ["#CD607D", "#c94043"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Under the City Stars",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg",
      artist: "Aso, Middle School, Aviino",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=10074",
      color: ['#205950', '#2ab3bf'],
      id: uuidv4(),
      active: false,
    },
    //ADD MORE HERE
  ];
}

export default chillHop;
