import HeroSection from './HeroSection'
import HeroSectionTwoTest from './HeroSectionTwoTest'
import NavBar from '../../components/NavBar'
import Footer from '../../components/Footer'
import CardContainer from '../CardComponents/CardContainer'

function HeroSectionPage() {
    return (
        <div>
            <HeroSection />
            <HeroSectionTwoTest />
            <CardContainer />
        </div>
    )
}

export default HeroSectionPage