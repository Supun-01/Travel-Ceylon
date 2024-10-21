import NavBar from "./components/NavBar"
import CardContainer from "./components/CardComponents/CardContainer";
import Footer from "./components/Footer";
import SupunHeroSection from "./components/SupunHeroSection";

export default function App() {
  return (
    <div>
      <NavBar />
      <div className="mx-8 lg:mx-32">
        <SupunHeroSection />
        <CardContainer />
      </div>
      <Footer />
    </div>
  )
}