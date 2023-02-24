import { useEffect } from "react";

const HomePage = () => {
  useEffect(() => {
    document.title = "Pixel Legion | Home";
  }, []);
  // TODO: Implement the home page
  return <div>HomePage</div>;
};

export default HomePage;
