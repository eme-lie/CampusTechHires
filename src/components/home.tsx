import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
// import "./App.css";
import { app } from "../firebase/firebase";
import NavbarLoggedIn from "./loggedinnavbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { getJobs } from "../firebase/firebase";
import { Link } from "react-router-dom";

interface Job {
  id: string;
  title: string;
  location: string;
  description: string;
  requirement: string;
  hourPerWeek: string;
  salaryRange: string;
  companyName: string;
  // Add other properties of a job here
}

export default function Home() {
  const navigate = useNavigate();
  const [user, setUser] = useState(false);
  const [jobs, setJobs] = useState<Job[]>([]); // Provide a type annotation for jobs
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    getJobs().then((jobsData) => {
      setJobs(jobsData);
    });
  }, []);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(getAuth(app), (user) => {
      console.log(user);
      if (!user) {
        navigate("/studenthomepage");
      }
      setUser(!!user);
    });

    return () => {
      unsubscribe();
    };
  }, [user, setUser, navigate]);

  function handleClick() {
    const auth = getAuth(app);
    auth.signOut();
  }
  console.log(user);

  return (
    <div className="flex flex-col">
      <div className="bg-home-image bg-cover flex flex-col pt-3 pr-12 pb-12 pl-12 gap-y-12 md:pt-3 md:pr-20 md:pb-20 md:pl-20 md:gap-y-20 lg:pt-8 lg:pr-20 lg:pb-48 lg:pl-20 lg:gap-y-24 hero-home-page">
        <NavbarLoggedIn
          imageLinkNavBar="src/assets/logos/CampusTechHires.svg"
          imageAltNavBar="logo"
          navbarLink={["Post A Job(Employer)"]}
          signUpHeroButtonText="Sign Out"
          onButtonClick={handleClick}
        />
        <div className="hero-text flex flex-col items-center gap-y-4">
          <h1 className="hero-main-text text-3xl md:text-5xl lg:text-6xl text-white font-bold">
            Gain Industry Experience
          </h1>
          <p className="hero-sub-text text-Neutral100_Base_Background text-xl md:text-xl lg:text-2xl font-regular">
            Get the best part-time IT jobs and internships in the industry
          </p>
        </div>
      </div>

      {/* <button onClick={handleClick}>Sign out</button>
      <h1>Home</h1> */}
      <div className="input-background bg-primaryColor flex pt-12 pr-12 pb-12 pl-12 w-3/4 h-40 self-center -mt-20 mb-16">
        <div className="inputandicon flex w-full bg-Neutral100_Base_Background items-center pl-8 gap-x-6">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
          <input
            type="text"
            className="h-16 self-center w-full text-Neutral900_Text_main focus: outline-none bg-Neutral100_Base_Background placeholder-Neutral300_Border"
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
                className="flex justify-between border-t border-b border-Neutral300_Border w-full pt-4 pr-4 pb-4 pl-4 items-center pt-4 pr-8 pb-4 pl-8"
                key={index}
              >
                <div className="left-side flex flex-col gap-y-2">
                  <h3 className="job-title text-Neutral900_Text_main font-medium text-2xl">
                    {job.title}
                  </h3>
                  <div className="left-side-bottom flex gap-x-3">
                    <h6 className="company-name text-primaryColor font-regular text-xl">
                      {job.companyName}
                    </h6>
                    <div className="left-side-bottom-right flex items-center gap-x-1">
                      <FontAwesomeIcon
                        icon={faLocationDot}
                        className="location-icon text-lg"
                      />
                      <p className="job-location text-Neutral300_Border font-regular text-sm">
                        {job.location}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="right-side flex flex-col items-center gap-y-2">
                  <p className="hour-per-week text-Neutral900_Text_main font-regular text-lg">
                    {job.hourPerWeek}
                  </p>
                  <div className="salary bg-success flex justify-center pt-2 pr-2 pb-2 pl-2 w-32 rounded">
                    <p className="salary-range text-Neutral100_Base_Background font-regular text-lg">
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

// export const Home = () => {
//   return (
//     <div>
//       <h1>Home</h1>
//     </div>
//   );
// };
