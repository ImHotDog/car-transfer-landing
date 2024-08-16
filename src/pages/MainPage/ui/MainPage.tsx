import HeroSection from "widgets/HeroSection/ui/HeroSection";
import { Navbar } from "widgets/Navbar";
import cls from "./MainPage.module.scss";
import { FeatureSection } from "widgets/FeatureSection";
import { FeatureAboutSection } from "widgets/FeatureAboutSection";
import { Footer } from "widgets/Footer";

const MainPage = () => {
    return (
        <div className={cls.MainPage}>
            <Navbar />

            <HeroSection />

            <div id="featureSection">
                <FeatureSection />
            </div>

            <div id="featureAboutSection">
                <FeatureAboutSection />
            </div>

            <Footer />
        </div>
    );
}

export default MainPage;