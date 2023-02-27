export default class Artwork {
  static artBackgrounds = [
    "https://wallpaperaccess.com/full/5927911.gif",
    "https://64.media.tumblr.com/4c989428ba947bc4966e07e76d36bd28/118ec01107834a73-07/s1280x1920/fdb109b146e112c17776b4198d1fa61396b951e0.gif",
    "https://i.pinimg.com/originals/4e/f6/08/4ef608e95677dc3dab15a00df8148277.gif",
    "https://i.kym-cdn.com/photos/images/newsfeed/001/345/250/f36.gif",
    "https://i.kym-cdn.com/photos/images/original/001/169/604/9fb.gif",
  ];

  static artNetwork = [
    "https://www.wallpaperup.com/uploads/wallpapers/2016/09/30/1021485/656e2f1f48855191c97e39ffebf4cda7-700.jpg",
    "https://i.pinimg.com/originals/23/33/ca/2333ca6c7f629377c10af5feb64e5762.jpg",
    "https://rare-gallery.com/uploads/posts/979678-nature-landscape-pixel-art-pixelated-pixels-mountains.png",
    "https://cdnb.artstation.com/p/assets/images/images/032/387/895/medium/philipp-a-urlich-bridge-320x240-des.jpg",
    "https://mir-s3-cdn-cf.behance.net/project_modules/disp/099a7f70285849.5ba0ecc4e857e.gif",
    "https://wallpapercave.com/wp/wp7495776.jpg",
    "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/5a220d100613349.5f0ea8cbc6d35.jpeg",
    ...this.artBackgrounds,
  ];

  static artLocal = [
    "1.png",
    "2.jpg",
    "3.png",
    "4.jpg",
    "5.gif",
    "6.webp",
    "7.jpeg",
    "8.gif",
    "9.gif",
    "10.gif",
    "11.gif",
    "12.gif",
  ];

  static get(arr = this.artNetwork) {
    // Shuffling algorithm based on Fisher-Yates Shuffle
    // From https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
    let currentIndex = arr.length,
      randomIndex;

    while (currentIndex !== 0) {
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

  static getLocal() {
    return this.get(this.artLocal);
  }

  static getOne() {
    return this.get()[0];
  }
}
