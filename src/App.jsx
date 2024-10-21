
import NavBar from "./components/NavBar";
import Button from "./components/subComponents/Button";

import Searchbar from "./components/Searchbar";
import Hero from "./components/herosecone/Hero";

import NavBar from "./components/NavBar"
import CardContainer from "./components/CardComponents/CardContainer";
import Footer from "./components/Footer";


export default function App() {
  return (
    <div>
      <NavBar />


      <Hero />

      <div className="mx-8 lg:mx-32">
        <CardContainer />
      </div>
      <Footer />

    </div>
  );
}
