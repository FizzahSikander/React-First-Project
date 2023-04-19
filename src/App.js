/*imported elements from the components*/
import { BrowserRouter, Form, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";
/*imported elements from the components*/
function App() {
  return (
    <BrowserRouter>
      <div className="containerone">
        <Header />
        <div>
          {/*home page will be the first one to be displayed*/}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/ContactMe" element={<ContactMe />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
export default App;