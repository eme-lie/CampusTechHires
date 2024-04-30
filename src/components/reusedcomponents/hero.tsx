import Navbar from "@/components/reusedcomponents/navbar";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface Props {
  className: string;
  heroText: string;
  heroSubText: string;
  signUpHeroButtonText: string;
  imageLinkNavBar: string;
  imageAltNavBar: string;
  navbarLink: string[];
  logoutButtonText: string;
  style?: React.CSSProperties;
}

const Hero = ({
  className,
  heroText,
  heroSubText,
  signUpHeroButtonText,
  imageLinkNavBar,
  imageAltNavBar,
  navbarLink,
  logoutButtonText,
  style,
}: Props) => {
  return (
    <>
      <div className={className} style={style}>
        <Navbar
          imageLinkNavBar={imageLinkNavBar}
          imageAltNavBar={imageAltNavBar}
          navbarLink={navbarLink}
          signUpHeroButtonText={signUpHeroButtonText}
          logoutButtonText={logoutButtonText}
        />
        <div className="flex flex-col space-y-6 md:space-y-8 lg:space-y-10">
          <div className="flex flex-col gap-y-2 md:gap-y-4 lg:gap-y-5 hero-text-container">
            <h1 className="w-2/3 md:w-1/2 lg:w-1/2 text-3xl md:text-5xl lg:text-6xl text-white font-bold hero-text">
              {heroText}
            </h1>
            <p className="hero-subtext w-3/4 md:w-1/2 lg:w-1/2 text-Neutral100_Base_Background text-xl md:text-xl lg:text-2xl font-regular">
              {heroSubText}
            </p>
          </div>
          <Link to="/signup">
            <Button className="bg-primaryColor sm:text-base sm:px-4 sm:py-2 md:text-base md:px-6 md:py-4 lg:px-6 lg:py-3 lg:text-lg font-medium w-fit">
              {signUpHeroButtonText}
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Hero;
