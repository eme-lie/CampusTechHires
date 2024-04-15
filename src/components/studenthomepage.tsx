import Hero from "./hero";
import HowItWorks from "./howItWorks";
import Faq from "./faq";
import Download from "./download";
import Footer from "./footer";
import Example from "./ui/datepicker";

// Configure FirebaseUI

const StudentHomepage = () => {
  return (
    <>
      <Example />
      <Hero
        className="bg-student-hero-pattern bg-cover flex flex-col pt-3 pr-12 pb-12 pl-12 gap-y-12 md:pt-3 md:pr-20 md:pb-20 md:pl-20 md:gap-y-20 lg:pt-8 lg:pr-20 lg:pb-24 lg:pl-20 lg:gap-y-24 hero-home-page"
        heroText="Student IT Part Time Jobs"
        heroSubText="Your No 1 website for securing part time IT Jobs"
        imageLinkNavBar="src/assets/logos/CampusTechHires.svg"
        imageAltNavBar="campus-tech-hires logo"
        navbarLink={["Post Jobs", "Apply for Jobs", "Login"]}
        signUpHeroButtonText="Sign Up"
      />

      <HowItWorks />
      <Faq />
      <Download />
      <Footer />
    </>
  );
};
export default StudentHomepage;
