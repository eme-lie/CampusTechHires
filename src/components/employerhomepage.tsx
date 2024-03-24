import Hero from "./hero";

const EmployerHomepage = () => {
  return (
    <div className="">
      <Hero
        className="heroPostPage"
        heroText="Hire your next great candidate"
        heroSubText="Your No 1 website for securing part time IT Jobs"
        imageLinkNavBar="src/assets/logos/CampusTechHires.svg"
        imageAltNavBar="campus-tech-hires logo"
        navbarLink={["Post Jobs", "Apply for Jobs", "Login"]}
        signUpHeroButtonText="Sign Up"
      />
    </div>
  );
};

export default EmployerHomepage;
