import Hero from "../reusedcomponents/hero";
import HowItWorks from "../studentHomePageSections/howItWorks";
import Faq from "../studentHomePageSections/faq";
import Download from "../studentHomePageSections/download";
import Footer from "../reusedcomponents/footer";

const StudentHomepage = () => {
  return (
    <>
      <Hero
        className="bg-student-hero-pattern bg-cover flex flex-col pt-3 pr-12 pb-12 pl-12 gap-y-12 md:pt-3 md:pr-20 md:pb-20 md:pl-20 md:gap-y-20 lg:pt-8 lg:pr-20 lg:pb-24 lg:pl-20 lg:gap-y-24 hero-home-page"
        heroText="Student IT Part Time Jobs"
        heroSubText="Your No 1 website for securing part time IT Jobs"
        imageLinkNavBar="src/assets/logos/CampusTechHires.svg"
        imageAltNavBar="campus-tech-hires logo"
        navbarLink={["Post A Job", "Dashboard", "Login"]}
        signUpHeroButtonText="Sign Up"
        logoutButtonText="Logout"
      />

      <HowItWorks />
      <Faq />
      <Download />
      <Footer />
    </>
  );
};
export default StudentHomepage;