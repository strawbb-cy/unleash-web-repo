import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { TeamSection } from "../components/TeamSection";
import { RolesSection } from "../components/RolesSection";
import { ContactsSection } from "../components/ContactsSection";


export const Home = () => {
    return <div className="min-h-screen bg-blue-pale text-foreground overflow-x-hidden">
        {/* Navbar*/}
        <Navbar/>
        {/* Main Content*/}
        <main>
            <HeroSection />
            <AboutSection/>
            <TeamSection />
            <RolesSection />
            <ContactsSection />
        </main>
        {/* Footer*/}
    </div>;
}