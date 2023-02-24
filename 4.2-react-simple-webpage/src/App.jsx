import { Route, Routes } from "react-router-dom";
import { AboutPage } from "./pages/About";
import HomePage from "./pages/Home";
import { LoginPage } from "./pages/Login";
import ServicesPage from "./pages/Services";
import Navbar from "./shared/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/about" element={<AboutPage />} />
          <Route exact path="/services" element={<ServicesPage />} />
          <Route path="/u/login" element={<LoginPage />} />
          <Route path="/u/Register" element={<LoginPage />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
