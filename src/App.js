import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

//components
import Navbar from "./components/Navbar";

//pages
import Home from "./Pages/Home";
import About from "./Pages/About";
import Products from "./Pages/Products";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <h1>Context</h1>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/Products" element={<Products />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
