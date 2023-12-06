import "./App.css";
import { styled } from "@mui/material";
import Home from "./pages/Home/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Services from "./pages/Services/Services";
import Contact from "./pages/Contactus/Contact";
import About from "./pages/About/About";

const Wrapper = styled("div")({
  width: "100vw",
});
function App() {
  return (
    <BrowserRouter>
      <Wrapper>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />

          {/* <Home /> */}
        </Routes>
        <Footer />
      </Wrapper>
    </BrowserRouter>
  );
}

export default App;
