import Hero from "../reusedcomponents/hero";
import WhyUseUs from "@/components/employerHomePageSections/whyuseus";
import ReadyToGetStarted from "@/components/employerHomePageSections/readytogetstarted";
import Footer from "@/components/reusedcomponents/footer";
import CampusTechHires from "@/assets/logos/CampusTechHires.svg";
import employer from "@/assets/images/employer.png";

const EmployerHomepage = () => {
  return (
    <div className="">
      <Hero
        className="hero-post-page bg-cover flex flex-col pt-3 pr-12 pb-12 pl-12 gap-y-12 md:pt-3 md:pr-20 md:pb-20 md:pl-20 md:gap-y-20 lg:pt-8 lg:pr-20 lg:pb-24 lg:pl-20 lg:gap-y-24"
        style={{ backgroundImage: `url(${employer})` }}
        arial-label="an employer with a candidate"
        heroText="Hire your next great candidate"
        heroSubText="Your No 1 website for securing the best students"
        imageLinkNavBar={CampusTechHires}
        imageAltNavBar="campus-tech-hires logo"
        navbarLink={["Post A Job", "Dashboard", "Login"]}
        signUpHeroButtonText="Sign Up"
        logoutButtonText="Logout"
      />
      <WhyUseUs />
      <ReadyToGetStarted />
      <Footer />
    </div>
  );
};

export default EmployerHomepage;
