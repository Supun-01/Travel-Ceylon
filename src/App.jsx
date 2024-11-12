import NavBar from "./components/NavBar"
import CardContainer from "./components/CardComponents/CardContainer";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import HeroSectionTwoTest from "./components/HeroSectionTwoTest";
import PaymentForm from "./components/PaymentComponents/PaymentForm";

export default function App() {
  return (
    <div>
      <NavBar />
      <div className="mx-2 lg:mx-52">
        <HeroSection />
        {/* <Herosectwo /> */}
        <HeroSectionTwoTest />
        <CardContainer />

      </div>
      <Footer />

      <br/>
      <NavBar />
      <PaymentForm/>
      <Footer />
    </div>
  )
}