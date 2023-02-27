import { useEffect } from "react";

export const AboutPage = () => {
  useEffect(() => {
    document.title = "Pixel Legion | About Us";
  }, []);
  // TODO: Implement About Page
  return (
    <div className="bg-blackTransparent py-10 px-5 my-14 text-center">
      <h1 className="header-text my-14">PIXEL LEGION。</h1>

      <p className="text-lg font-display text-gray-300 phone:text-xl phone:mx-14 phone:mt-14">
        Pixel Legion was established in 2019. We are a talents company made by
        passionate artists that started with making pixel art and voxel art. As
        time goes by, we started growing and adding more members on our team.
        Now we are teeming with talented people all across the Philippines.
      </p>
      <div className="flex items-end justify-center pr-10">
        <img
          src="https://cdna.artstation.com/p/assets/images/images/011/687/842/original/roque-franco-unnamed.gif"
          alt="dark mage"
          className="h-40 mb-3"
        />
        <img
          src="https://img.itch.zone/aW1nLzMzMzY4OTguZ2lm/original/0Ut41Y.gif"
          alt="Swordman"
          className="h-32"
        />
      </div>
      <p className="text-lg font-display text-gray-300 phone:text-xl phone:mx-14 phone:mb-14">
        We familiarize ourselves with various technologies and rising trends in
        order to keep up with client demands. As of 2023, We have used apps like
        Aseprite, Adobe Photoshop, Krita, GIMP, Piskel, and more. Thanks to our
        clients and our evergrowing team, we are able to build awesome art.
      </p>
      <p className="text-xl text-mauve font-silkscreen tracking-tighter phone:text-xl phone:mx-16 phone:mt-16 mt-7">
        Towards the future, Pixel Legion!
      </p>
    </div>
  );
};
