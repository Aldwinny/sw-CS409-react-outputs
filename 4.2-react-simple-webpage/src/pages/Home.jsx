import { useEffect, useState, useRef } from "react";
import { BsChevronDown } from "react-icons/bs";
import pixImage1 from "../assets/1.png";
import pixImage2 from "../assets/2.jpg";
import pixImage3 from "../assets/3.png";

const HomePage = () => {
  const [isArrow, toggleArrow] = useState(false);
  const ref = useRef(null);

  const scrollToElem = () => {
    toggleArrow(false);
    ref.current.scrollIntoView();
    setTimeout(() => {
      toggleArrow(true);
    }, 500);
  };

  useEffect(() => {
    document.title = "Pixel Legion | Home";

    setTimeout(() => {
      toggleArrow(true);
    }, 500);
  }, []);
  // TODO: Implement the home page
  return (
    <>
      <div className="pc:p-20 my-24 header-height">
        <h1 className="pc:p-5 text-5xl font-silkscreen font-bold tracking-tighter text-red-500 mb-10 shadow-glitch">
          Pixel Legion Rocks! Welcome!
        </h1>
        <h2 className="pc:p-5 text-2xl font-display text-mauve mr-64 shadow-normal">
          We are a group of artists that work together in making commissions. We
          offer various styles from characters to landscaping, and we also make
          pixelized assets for your games!
        </h2>
      </div>
      <div className="absolute">
        <div
          onClick={scrollToElem}
          className={`text-white rel-center ${
            isArrow ? "rel-center-animation" : ""
          }`}
        >
          <BsChevronDown className="text-mauve" size={30} />
        </div>
      </div>
      <div
        className={`bg-blackTransparent mb-4 py-9
        ${isArrow ? "shadow-top" : "shadow-down"}`}
        ref={ref}
      >
        <h1 className="text-center text-salmon text-3xl font-silkscreen">
          We do Pixel Art
        </h1>
        <div className="flex justify-center flex-wrap gallery">
          <GalleryItem
            title="Beautiful Sceneries"
            description="We make beautiful sceneries utilizing various colors appropriate
              to the artwork. Depending on what you want, our pixel art can be
              vibrant or dull, and it can present the emotion you want to feel."
            src={pixImage1}
            alt="sunset"
          />
          <GalleryItem
            title="Wild Imaginations"
            description="
            We bring your ideas to reality, and even add our hint of
            creativity to it! Pixel Legion is a place where brainstorming is a
            norm and coloring is free."
            src={pixImage2}
            alt="sunset"
          />
          <GalleryItem
            title="Creative Pixel Art"
            description="
          We will always make sure that your art will be at its best within
          the deadline while ensuring quality."
            src={pixImage3}
            alt="sunset"
          />
        </div>
        <h1 className="text-center text-salmon text-3xl font-silkscreen mt-16 mb-7">
          We also make art on
        </h1>
        <div className="flex flex-row flex-wrap justify-center content-center">
          <SVGIconSet
            srcs={[
              "https://www.vectorlogo.zone/logos/unity3d/unity3d-ar21.svg",
              "https://static.wikia.nocookie.net/logopedia/images/3/38/Unreal_Engine_2021.svg",
              "https://www.vectorlogo.zone/logos/godotengine/godotengine-ar21.svg",
              "https://vectorwiki.com/images/qz3pp__blender.svg",
              "https://vectorwiki.com/images/IgsmY__maya-2017.svg",
            ]}
            alts={["Unity", "Unreal Engine", "Godot"]}
            className="h-24 my-11 mx-9"
            classNames={["filter-white", "filter-white"]}
          />
        </div>
        <h1 className="text-center text-salmon text-3xl font-silkscreen mt-16 mb-7">
          Our reviews
        </h1>
        <div className="flex flex-col justify-center items-center mb-5">
          <Quote
            author="VAGameDevs Association"
            quote="Working with them has been great! The assets feels like they're truly fresh out of the oven."
          />
          <Quote
            author="Spearworks Interative Ltd."
            quote="They master the intricacies of colors and shapes. Truly beautiful."
          />
          <Quote
            author="John Matthew Croissant"
            quote="I wanted more and they delivered more."
          />
        </div>
      </div>
      <div className="h-52"></div>
    </>
  );
};

const Quote = ({ author = "John Doe", quote = "..." }) => {
  return (
    <div className="my-14 mx-7">
      <p className="text-2xl text-mauve italic font-display">"{quote}"</p>
      <p className="text-xl text-mauve not-italic">- {author}</p>
    </div>
  );
};

const SVGIconSet = ({ srcs, alts, className = "", classNames = [] }) => {
  const items = srcs.map((e, index) => (
    <img
      key={index}
      src={e}
      alt={alts[index]}
      className={`${className} ${classNames[index] ?? ""}`}
    />
  ));
  return <>{items}</>;
};

const GalleryItem = ({ title, description, src, alt }) => {
  return (
    <div>
      <img src={src} alt={alt} />
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
};

export default HomePage;
