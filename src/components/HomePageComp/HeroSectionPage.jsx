import HeroSection from './HeroSection'
import HeroSectionTwoTest from './HeroSectionTwoTest'
import NavBar from '../../components/NavBar'
import Footer from '../../components/Footer'
import CardContainer from '../CardComponents/CardContainer'

function HeroSectionPage() {
    return (
        <div>
            <NavBar />
            <div className='py-5 px-5 lg:px-20 lg:py-4'>
                <HeroSection />
                <HeroSectionTwoTest />
                <CardContainer />
            </div>
            <Footer />
        </div>
    )
}

export default HeroSectionPage