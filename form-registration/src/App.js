import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AboutPage } from "./pages/About";
import HomePage from "./pages/Home";
import { LoginPage } from "./pages/Login";
import ServicesPage from "./pages/Services";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}

export default App;
