import Header from './components/common/Header/Header';
import SidebarNav from './components/common/SidebarNav/SidebarNav.tsx';
import HeroSection from './components/sections/HeroSection/HeroSection';
import AboutSection from './components/sections/AboutSection/AboutSection';
import OurServicesSection from "./components/sections/OurServicesSection/OurServicesSection.tsx";
import ContactSection from './components/sections/ContactSection/ContactSection.tsx';
import LegalSection from "./components/sections/LegalSection/LegalSection.tsx";
import Footer from "./components/sections/FooterSection/FooterSection.tsx";

function App() {
    return (
        <>
            <Header />
            <SidebarNav />
            <main>
                <HeroSection />
                <AboutSection />
                <OurServicesSection />
                <ContactSection />
                <LegalSection/>
                <Footer />
            </main>
        </>
    );
}

export default App;
