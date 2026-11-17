import Navbar from "@/components/Navbar";
import BlackFridayPopup from "@/components/BlackFridayPopup";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ClassesSection from "@/components/ClassesSection";
import MembershipsSection from "@/components/MembershipsSection";
import PrivatesSection from "@/components/PrivatesSection";
import GiftCardSection from "@/components/GiftCardSection";
import AppDownloadSection from "@/components/AppDownloadSection";
import FAQSection from "@/components/FAQSection";
import SocialSection from "@/components/SocialSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ReviewsSection from "@/components/ReviewsSection";

const Index = () => (
  <div className="min-h-screen">
    <BlackFridayPopup />
    <Navbar />
    <HeroSection />
    <AboutSection />
    <ClassesSection />
    <MembershipsSection />
    <PrivatesSection />
    <ReviewsSection />
    <GiftCardSection />
    <AppDownloadSection />
    <FAQSection />
    <SocialSection />
    <ContactSection />
    <Footer />
  </div>
);

export default Index;
