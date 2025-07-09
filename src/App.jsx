import NavBar from "@components/NavBar";
import Footer from "@components/Footer";
import ListSocialMedia from "@components/ListSocialMedia";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "@pages/Home";
function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <ListSocialMedia />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
