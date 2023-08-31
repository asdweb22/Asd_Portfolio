import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

// portfolio2 Started
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import PortfolioHome1 from "./components/PortfolioHome1";
import PageNotFound from "./components/PageNotFound";
import Home from "./components/Home";
import Aboutus from "./components/Aboutus";
import Experience from "./components/Experience";
import TechStack from "./components/TechStack";
import Certifications from "./components/Certifications";
import Education from "./components/Education";
import Project from "./components/Project";
import ContactForm from "./components/ContactForm";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <ToastContainer />
      <Home />
      <Aboutus />
      <Experience />
      <TechStack />
      <Certifications />
      <Education />
      <Project />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
