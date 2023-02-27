import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Artwork from "./models/Artwork";
import { AboutPage } from "./pages/About";
import ErrorPage from "./pages/Error";
import HomePage from "./pages/Home";
import { LoginPage } from "./pages/Login";
import { RegisterPage } from "./pages/Register";
import ServicesPage from "./pages/Services";
import Footer from "./shared/Footer";
import Navbar from "./shared/Navbar";

function App() {
  useEffect(() => {
    document.body.style.background = `url('${Artwork.getOne()}')`;
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundAttachment = "fixed";
  });
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/about" element={<AboutPage />} />
          <Route exact path="/services" element={<ServicesPage />} />
          <Route path="/u/login" element={<LoginPage />} />
          <Route path="/u/Register" element={<RegisterPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
