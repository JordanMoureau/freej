import Footer from "../Components/Footer";
import AboutMe from "./Components/AboutMe";
import FAQ from "./Components/FAQ";
import Hero from "./Components/Hero";
import InquiryForm from "./Components/InquiryForm";
import Portfolio from "./Components/Portfolio";
import ProblemSolution from "./Components/ProblemSolution";
import ServicesList from "./Components/ServicesList";
import Testimonials from "./Components/Testimonials";
import "./websites.css";

export default function Websites() {
  return (
    <div>
      <Hero />
      <ProblemSolution />
      <Portfolio />
      <Testimonials />
      <ServicesList />
      <AboutMe />

      <InquiryForm />
      <FAQ />
      <Footer />
    </div>
  );
}
