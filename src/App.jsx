import NavBar from "./components/NavBar"
import CardContainer from "./components/CardComponents/CardContainer";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import HeroSectionTwoTest from "./components/HeroSectionTwoTest";

export default function App() {
  return (
    <div>
      <NavBar />
      <div className="mx-8 lg:mx-32">
        <HeroSection />
        {/* <Herosectwo /> */}
        <HeroSectionTwoTest />
        <CardContainer />

      </div>
      <Footer />
    </div>
  )
}