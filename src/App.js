import { BrowserRouter, Form, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Login from "./components/Login";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Footer/>
      </div>
      <div>
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;