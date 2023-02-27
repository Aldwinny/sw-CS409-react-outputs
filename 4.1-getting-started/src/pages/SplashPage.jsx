import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SplashPage = () => {
  let navigator = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigator("/home");
    }, 1000);
  }, [navigator]);

  return (
    <div className="splash">
      <img src="https://pbs.twimg.com/media/FJ9-iMHXwAsQAES.png" alt="splash" />
      <h2>Pixel Legion</h2>
      <h4>Welcome!</h4>
    </div>
  );
};

export default SplashPage;
