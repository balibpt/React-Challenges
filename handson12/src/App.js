import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "../src/pages/Home";
import About from "../src/pages/About";
import ContactUs from "../src/pages/ContactUs";
import SubmittedForm from "../src/pages/SubmittedForm";

function App() {
  return (
    <Router>
      <ul class="nav">
        <li class="nav-item">
          <Link to="/">Home</Link>
        </li>
        <li class="nav-item">
          <Link to="about">About</Link>
        </li>
        <li class="nav-item">
          <Link to="contact-us">Contact Us</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="/contact-us" element={<ContactUs />} />

        <Route path="/submitted" element={<SubmittedForm />}></Route>
      </Routes>
    </Router>
  );
}
export default App;
