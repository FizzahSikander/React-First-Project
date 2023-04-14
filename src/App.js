import { BrowserRouter, Form, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Login from "./components/ContactMe";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <div className="containerone">
          <Header />
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/ContactMe" element={<Login />} />
          </Routes>
        </div>
          <Footer />
      </div>
    </BrowserRouter>
  );
}
export default App;