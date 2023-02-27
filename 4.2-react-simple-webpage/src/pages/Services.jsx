import { useEffect } from "react";
import Artwork from "../models/Artwork.jsx";
import { BsStarFill, BsStarHalf, BsStars } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const ServicesPage = () => {
  useEffect(() => {
    document.title = "Pixel Legion | Services & Portfolio";
  }, []);

  const navigate = useNavigate();
  const navigateTo = (link) => {
    navigate(link);
  };

  const artworks = Artwork.get();
  const priceCardInfos = {
    "Ideastorm: Let's see what can be improved with your idea!": 1,
    "Tips Master: Talk with us, we can provide planning & prototyping tips!": 1,
    "Styles: You may provide us a reference for the style": 1,
    "3 Revisions: Change whatever is in the artwork": 0,
    "3 Recolors: Change the color palette and make it feel different.": 0,
    "5 Revisions: Change whatever is in the artwork": 1,
    "5 Recolors: Change the color palette and make it feel different.": 1,
    "Unlimited Revisions: Until you feel it!": 2,
    "Unlimited Recolors: Until you feel it!": 2,
    "Obtain the final product only in image form": 0,
    "Obtain the final product in image form and project form": 2,
  };

  const basicStuff = Object.entries(priceCardInfos).slice(0, 3);
  console.log(basicStuff);

  const basicList = [...basicStuff];
  basicList.push(...Object.entries(priceCardInfos).slice(3, 5));
  basicList.push(Object.entries(priceCardInfos).at(9));

  const premiumList = [...basicStuff];
  premiumList.push(...Object.entries(priceCardInfos).slice(5, 7));
  premiumList.push(Object.entries(priceCardInfos).at(9));

  const professionalList = [...basicStuff];
  professionalList.push(...Object.entries(priceCardInfos).slice(7, 9));
  professionalList.push(Object.entries(priceCardInfos).at(10));

  // TODO: Implement the services page
  return (
    <div className="bg-blackTransparent text-white py-10 px-5 my-14 text-center">
      <h1 className="header-text m-10">We got great art</h1>
      <div className="tablet:grid tablet:grid-cols-3 pc:grid-cols-4 tablet:gap-4 tablet:justify-items-center flex items-center flex-wrap justify-center">
        <ArtworkSet artworks={artworks} className="tablet:m-0 m-10" />
      </div>
      <h1 className="header-text mt-20 my-4">Services</h1>
      <div className="flex items-center justify-center flex-wrap duration-200 price-card-holder">
        <PriceCard
          title="Basic"
          price="$10.00"
          onClick={() => navigateTo("/services/avail?tier=1")}
        >
          <PriceCardListItem items={basicList} className="my-2 text-mauve" />
        </PriceCard>
        <PriceCard
          title="Premium"
          price="$15.00"
          onClick={() => navigateTo("/services/avail?tier=2")}
        >
          <PriceCardListItem items={premiumList} className="my-2 text-mauve" />
        </PriceCard>
        <PriceCard
          title="Professional"
          price="$30.00"
          onClick={() => navigateTo("/services/avail?tier=3")}
        >
          <PriceCardListItem
            items={professionalList}
            className="my-2 text-yellow-300"
          />
        </PriceCard>
      </div>
    </div>
  );
};

const PriceCard = ({ title, price, children, onClick }) => {
  return (
    <div className="bg-blackTransparent m-5 rounded-lg" onClick={onClick}>
      <div className="text-left m-4">
        <h1 className="my-2 text-3xl text-salmon">{title}</h1>
        <h2 className="my-2 text-xl text-mauve">{price}</h2>
      </div>
      <hr className="m-auto" style={{ width: "90%" }} />
      <div className="mt-6 mb-20">
        <ul className="m-5 text-start text-sm">{children}</ul>
      </div>
    </div>
  );
};

const PriceCardListItem = ({ icon, text, className, items }) => {
  const PriceCardItem = ({ icon, text, className, items }) => (
    <li>
      <p className={className}>
        {icon === 0 ? (
          <BsStarHalf className="inline mb-1" />
        ) : icon === 1 ? (
          <BsStarFill className="inline mb-1" />
        ) : (
          <BsStars className="inline mb-1" />
        )}
        {` ${text}`}
      </p>
    </li>
  );

  if (items === undefined) {
    return (
      <PriceCardItem
        icon={icon}
        text={text}
        className={className}
        items={items}
      />
    );
  } else {
    const listItemSet = (
      <>
        {items.map((e, i) => (
          <PriceCardItem
            key={i}
            icon={e[1]}
            text={e[0]}
            className={className}
          />
        ))}
      </>
    );
    return listItemSet;
  }
};

const ArtworkSet = ({ artworks, alt, className = "", classNames = [] }) => {
  const Artwork = artworks.map((e, index) => (
    <img
      key={index}
      src={e}
      alt={`${alt} ${index}`}
      className={`${className} ${classNames[index] ?? ""}`}
    />
  ));
  return Artwork;
};

export default ServicesPage;
