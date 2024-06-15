import React from "react";
import ContactForm from "./components/ContactForm/ContactForm";
import InformationPage from "./components/InformationPage/InformationPage";
import "./App.css";
import Services from "./components/Services";
import Portfolios from "./components/Portfolios";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Blog from "./components/Blog";
import Team from "./components/Team";
import Inquiries from "./components/Inquiries";

function App() {
  return (
    <div className="bg">
      <Home />
      <About />
      <Services />
      <Portfolios />
      <Team />
      <Projects />
      <Blog />
      <Inquiries />
      <ContactForm />
      <InformationPage />
    </div>
  );
}

export default App;
