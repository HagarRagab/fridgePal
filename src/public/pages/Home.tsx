import BenefitsSection from "../../components/home/BenefitsSection";
import HeroSection from "../../components/home/HeroSection";
import Footer from "../../components/home/Footer";
import HowItWorks from "../../components/home/HowItWorks";
import JoinUsSection from "../../components/home/JoinUsSection";

function Home() {
    return (
        <>
            <HeroSection />
            <BenefitsSection />
            <JoinUsSection />
            <HowItWorks />
            <Footer />
        </>
    );
}

export default Home;
