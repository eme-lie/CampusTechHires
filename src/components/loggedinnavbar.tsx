import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import { Button } from "./ui/button";
import { Link } from "react-router-dom";

// import { AArrowDown } from "lucide-react";

interface Props {
  imageLinkNavBar: string;
  imageAltNavBar: string;
  navbarLink: string[];
  signUpHeroButtonText: string;
  onButtonClick: () => void;
}

function NavbarLoggedIn({
  imageLinkNavBar,
  imageAltNavBar,
  navbarLink,
  signUpHeroButtonText,
  onButtonClick,
}: Props) {
  return (
    <div className="navbar flex justify-between">
      <img
        src={imageLinkNavBar}
        alt={imageAltNavBar}
        className="w-40 md:w-48 lg:w-64"
      />
      <div className="navbar-links-main">
        <ul className="navbar-links">
          {navbarLink.map((link) =>
            link === "Post A Job(Employer)" ? (
              <Link to="/employerpage">
                <li className="text-Neutral100_Base_Background sm:text-base md:text-base lg:text-lg hidden lg:block">
                  {link}
                </li>
              </Link>
            ) : (
              <li className="text-Neutral100_Base_Background sm:text-base md:text-base lg:text-lg hidden lg:block">
                {link}
              </li>
            )
          )}
        </ul>

        <Link to="/signupp">
          <Button
            onClick={onButtonClick}
            className="bg-primaryColor sm:px-4 sm:py-2 md:px-6 md:py-4 lg:px-8 lg:py-6 sm:text-base md:text-base lg:text-lg font-normal hidden lg:flex"
          >
            {signUpHeroButtonText}
          </Button>
        </Link>

        <FontAwesomeIcon
          icon={faBars}
          style={{ color: "#fafafa" }}
          className="size-12 bg-Neutral100_Base_Background block lg:hidden"
        />
        {/* <button className="sign-up-hero-button">{signUpHeroButtonText}</button> */}
      </div>
    </div>
  );
}

export default NavbarLoggedIn;
