import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { getJobs } from "../../firebase/firebase";
import { Link } from "react-router-dom";
import Navbar from "../reusedcomponents/navbar";

interface Job {
  id: string;
  title: string;
  location: string;
  description: string;
  requirement: string;
  hourPerWeek: string;
  salaryRange: string;
  companyName: string;
}

export default function Home() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    getJobs().then((jobsData) => {
      setJobs(jobsData);
      console.log(jobs);
    });
  }, []);

  return (
    <div className="flex flex-col">
      <div className="bg-home-image bg-cover flex flex-col pt-6 pr-8 pb-12 pl-8 gap-y-10 md:pt-6 md:pr-20 md:pb-20 md:pl-20 md:gap-y-20 lg:pt-8 lg:pr-20 lg:pb-48 lg:pl-20 lg:gap-y-24 hero-home-page">
        <Navbar
          imageLinkNavBar="src/assets/logos/CampusTechHires.svg"
          imageAltNavBar="campus-tech-hires logo"
          navbarLink={["Dashboard", "Profile", "Login"]}
          signUpHeroButtonText="Sign Up"
          logoutButtonText="Logout"
        />

        <div className="hero-text flex flex-col items-center gap-y-2">
          <h1 className="hero-main-text text-center text-2xl md:text-4xl lg:text-6xl text-white font-bold">
            Gain Industry Experience
          </h1>
          <p className="hero-sub-text text-center text-Neutral100_Base_Background text-lg md:text-lg lg:text-2xl font-regular">
            Get the best part-time IT jobs and internships in the industry
          </p>
        </div>
      </div>

      <div className="input-background bg-primaryColor flex pt-4 pr-4 pb-4 pl-4 lg:pt-12 lg:pr-12 lg:pb-12 lg:pl-12 w-3/4 h-16 md:h-20 lg:h-40 self-center -mt-8 lg:-mt-20 mb-8 md:mb-16 lg:mb-20">
        <div className="inputandicon flex w-full bg-Neutral100_Base_Background items-center pl-4 md:pl-8 gap-x-4 md:gap-x-6">
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="h-3 w-3 md:w-4 sm:h-4"
          />
          <input
            type="text"
            className=" h-8 md:h-10 self-center w-full text-Neutral900_Text_main focus: outline-none bg-Neutral100_Base_Background placeholder-Neutral300_Border"
            placeholder="Search for jobs"
            onChange={(e) => setInputValue(e.target.value)}
          />
        </div>
      </div>
      <div className="jobs-container flex flex-col pr-8 pl-8 cursor-pointer">
        {jobs
          .filter((job) => {
            return inputValue.toLowerCase() === ""
              ? job
              : job.title.toLowerCase().includes(inputValue.toLowerCase());
          })
          .map((job, index) => (
            <Link to={`/jobdetails/${job.id}`} key={index}>
              <div
                className="flex justify-between border-t border-b border-Neutral300_Border w-full pt-4 pr-4 pb-4 pl-4 items-center lg:pt-4 lg:pr-8 lg:pb-4 lg:pl-8"
                key={index}
              >
                <div className="left-side flex flex-col gap-y-2">
                  <h3 className="job-title text-Neutral900_Text_main font-medium text-lg md:text-xl lg:text-2xl">
                    {job.title}
                  </h3>
                  <div className="left-side-bottom flex gap-x-3">
                    <h6 className="company-name text-primaryColor font-regular text-sm md:text-lg lg:text-xl">
                      {job.companyName}
                    </h6>
                    <div className="left-side-bottom-right flex items-center gap-x-1">
                      <FontAwesomeIcon
                        icon={faLocationDot}
                        className="location-icon text-lg h-4 w-4 md:h-4 md:w-4"
                      />
                      <p className="job-location text-Neutral300_Border font-regular text-sm">
                        {job.location}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="right-side flex flex-col items-center gap-y-2">
                  <p className="hour-per-week text-Neutral900_Text_main font-regular text-sm md:text-lg lg:text-xl">
                    {job.hourPerWeek}
                  </p>
                  <div className="salary bg-success flex justify-center pt-2 pr-2 pb-2 pl-2 w-20 md:w-24 lg:w-32 rounded">
                    <p className="salary-range text-Neutral100_Base_Background font-regular text-sm md:text-lg lg:text-xl">
                      {job.salaryRange}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
}
