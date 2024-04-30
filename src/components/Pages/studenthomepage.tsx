import Hero from "@/components/reusedcomponents/hero";
import HowItWorks from "@/components/studentHomePageSections/howItWorks";
import Faq from "@/components/studentHomePageSections/faq";
import Download from "@/components/studentHomePageSections/download";
import Footer from "@/components/reusedcomponents/footer";
import CampusTechHires from "@/assets/logos/CampusTechHires.svg";
import students from "@/assets/images/students.jpg";

const StudentHomepage = () => {
  return (
    <>
      <Hero
        className="bg-cover flex flex-col pt-3 pr-12 pb-12 pl-12 gap-y-12 md:pt-3 md:pr-20 md:pb-20 md:pl-20 md:gap-y-20 lg:pt-8 lg:pr-20 lg:pb-24 lg:pl-20 lg:gap-y-24 hero-home-page"
        style={{ backgroundImage: `url(${students})` }}
        arial-label="a group of students studying together"
        heroText="Student IT Part Time Jobs"
        heroSubText="Your No 1 website for securing part time IT Jobs"
        imageLinkNavBar={CampusTechHires}
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
