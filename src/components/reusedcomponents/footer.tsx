import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLanguage } from "@fortawesome/free-solid-svg-icons";
import CampusTechHires from "@/assets/logos/CampusTechHires.svg";
import ukflag from "@/assets/images/ukflag.svg";
import facebooklogo from "@/assets/images/facebook-logo.svg";
import instagram from "@/assets/images/instagram.svg";
import twitter from "@/assets/images/twitter-logo.svg";

function Footer() {
  return (
    <footer className="footer download flex flex-wrap pt-8 pr-12 pb-12 pl-12 gap-y-8 lg:pt-16 lg:pr-20 lg:pb-12 lg:pl-20 md:flex-nowrap">
      <div className="my_logo_section w-auto flex flex-col space-y-8">
        <img
          className="logo_footer w-2/4"
          src={CampusTechHires}
          alt="CampusTechHires logo"
        />
        <div className="my_logo_section_inner flex flex-col space-y-2">
          <div className="flag_holder w-fit flex bg-Neutral200_Secondary_Background space-x-2 p-2 rounded-md items-center">
            <img src={ukflag} alt="uk flag" className="flag w-6" />
            <p className="country text-base font-medium ">United Kingdom</p>
          </div>
          <div className="language_holder w-fit flex bg-Neutral200_Secondary_Background space-x-2 p-2 rounded-md items-center">
            <FontAwesomeIcon icon={faLanguage} style={{ color: "#0d3060" }} />
            <p className="language text-base font-medium">English</p>
          </div>
        </div>
      </div>
      <div className="right_footer_section flex flex-row justify-between flex-wrap md:flex-nowrap gap-y-4 w-3/4">
        <div className="social_media_links flex flex-col space-y-3 w-full">
          <p className="social_media_links_title text-lg font-medium">
            Social Media
          </p>
          <div className="social_container flex space-x-1 items-center w-fit">
            <img src={twitter} alt="twitter logo" className="social_logo w-6" />
            <p className="social_text text-base font-regular">Twitter</p>
          </div>
          <div className="social_container flex space-x-1 items-center w-fit">
            <img
              src={instagram}
              alt="instagram logo"
              className="social_logo w-6"
            />
            <p className="social_text text-base font-regular">Instagram</p>
          </div>
          <div className="social_container flex space-x-1 items-center w-fit">
            <img
              src={facebooklogo}
              alt="facebook logo"
              className="social_logo w-6"
            />
            <p className="social_text text-base font-regular">Facebook</p>
          </div>
        </div>
        <div className="ecocar_links flex flex-col space-y-3 w-full">
          <p className="ecocar_links_title text-lg font-medium">
            CampusTechHires
          </p>
          <div className="eco_services flex flex-col w-fit space-y-3">
            <p className="eco_services_text text-base font-regular">Hiring</p>
            <p className="eco_services_text text-base font-regular">
              Interview Tips
            </p>
            <p className="eco_services_text text-base font-regular">Careers</p>
          </div>
        </div>
        <div className="company_links flex flex-col space-y-3">
          <p className="company_links_title text-lg font-medium">Company</p>
          <div className="company_details flex flex-col w-fit space-y-3">
            <p className="company_details_text text-base font-regular">
              About Us
            </p>
            <p className="company_details_text text-base font-regular">Blog</p>
            <p className="company_details_text text-base font-regular">
              Cities
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
