const dir = "../assets/";

class Artwork {
  static artLocal = [
    "1.png",
    "2.jpg",
    "3.png",
    "4.jpg",
    "5.gif",
    "6.webp",
    "7.jpeg",
  ];
  static artNetwork = [
    "https://www.wallpaperup.com/uploads/wallpapers/2016/09/30/1021485/656e2f1f48855191c97e39ffebf4cda7-700.jpg",
    "https://i.pinimg.com/originals/23/33/ca/2333ca6c7f629377c10af5feb64e5762.jpg",
    "https://rare-gallery.com/uploads/posts/979678-nature-landscape-pixel-art-pixelated-pixels-mountains.png",
    "https://cdnb.artstation.com/p/assets/images/images/032/387/895/medium/philipp-a-urlich-bridge-320x240-des.jpg",
    "https://mir-s3-cdn-cf.behance.net/project_modules/disp/099a7f70285849.5ba0ecc4e857e.gif",
    "https://wallpapercave.com/wp/wp7495776.jpg",
    "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/5a220d100613349.5f0ea8cbc6d35.jpeg",
  ];
  static useLocal = true;

  get() {
    const arr = useLocal ? artLocal : artNetwork;

    // Shuffling algorithm based on Fisher-Yates Shuffle
    // From https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
    let currentIndex = arr.length,
      randomIndex;

    while (currentIndex != 0) {
      // Pick a remaining element
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // swap it with the current element
      [arr[currentIndex], arr[randomIndex]] = [
        arr[randomIndex],
        arr[currentIndex],
      ];
    }

    return arr;
  }
}
