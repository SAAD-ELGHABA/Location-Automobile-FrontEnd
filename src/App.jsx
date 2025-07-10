import NavBar from "@components/NavBar";
import Footer from "@components/Footer";
import ListSocialMedia from "@components/ListSocialMedia";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "@pages/Home";
import CarDetails from "@pages/CarDetails";
function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <ListSocialMedia />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details/:brand/:model/:slag" element={<CarDetails />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
