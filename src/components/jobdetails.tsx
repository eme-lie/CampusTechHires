import { useParams } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { getJob } from "../firebase/firebase";
import NavbarLoggedIn from "./loggedinnavbar";
import { app } from "../firebase/firebase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faMoneyBillWave,
  faBusinessTime,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";

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

export const Job = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(false);

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
  const [job, setJob] = useState<Job | null>(null);
  const { id } = useParams();
  // Use the id to fetch the job details and display them
  useEffect(() => {
    if (!id) {
      console.error("id is undefined");
      return;
    }
    getJob(id).then((jobData) => {
      setJob(jobData);
    });
  }, [id]);
  if (!job) {
    return <p>Loading...</p>;
  }
  return (
    <div className="main-container flex flex-col gap-y-8 pt-6 pr-12 pb-12 pl-12">
      <NavbarLoggedIn
        imageLinkNavBar="src/assets/logos/CampusTechHires.svg"
        imageAltNavBar="logo"
        navbarLink={["Post A Job(Employer)"]}
        signUpHeroButtonText="Sign Out"
        onButtonClick={handleClick}
      />
      <div className="header flex justify-between items-center bg-Neutral900_Text_main pt-12 pr-12 pb-12 pl-12 rounded-2xl border-primaryColor border-2 ">
        <div className="left-side flex flex-col gap-y-6">
          <div className="left-side-top">
            <div className="title-and-company-name">
              <h1 className="job-title text-primaryColor text-3xl">
                {job.title}
              </h1>
              <h2 className="company-name text-Neutral100_Base_Background text-lg">
                {job.companyName}
              </h2>
            </div>
          </div>
          <div className="left-side-bottom flex items-center pt-1 pr-2 pb-1 pl-2 gap-x-4 rounded">
            <div className="location-container flex items-center bg-Neutral100_Base_Background pt-2 pr-3 pb-2 pl-3 gap-x-2 rounded shadow-md">
              <FontAwesomeIcon
                icon={faLocationDot}
                className="location-icon text-lg"
              />
              <p className="left-side-location ">{job.location}</p>
            </div>
            <div className="salary-container flex items-center bg-Neutral100_Base_Background pt-2 pr-3 pb-2 pl-3 gap-x-2 rounded shadow-md">
              <FontAwesomeIcon
                icon={faMoneyBillWave}
                className="salary-icon text-lg"
              />
              <p className="left-side-salary ">{job.salaryRange}</p>
            </div>
            <div className="hours-per-week-container flex items-center bg-Neutral100_Base_Background pt-2 pr-3 pb-2 pl-3 gap-x-2 rounded shadow-md">
              <FontAwesomeIcon
                icon={faBusinessTime}
                className="hour-per-week-icon text-lg"
              />
              <p className="left-side-salary ">{job.hourPerWeek}</p>
            </div>
          </div>
        </div>
        <div className="right-side">
          <div className="apply-button-container flex items-center bg-primaryColor pt-3 pr-6 pb-3 pl-6 gap-x-2 rounded shadow-md">
            <FontAwesomeIcon
              icon={faCheck}
              className="hour-per-week-icon text-lg"
            />
            <p className="left-side-salary text-Neutral100_Base_Background font-regular text-lg ">
              Apply
            </p>
          </div>
        </div>
      </div>
      <div className="body flex flex-col pt-12 pr-12 pb-12 pl-12 rounded-2xl shadow-md gap-y-8 ">
        <div className="description-container">
          <h3 className="text-Neutral900_Text_main text-xl font-medium">
            Job Description
          </h3>
          <p className="text-Neutral900_Text_main text-lg">{job.description}</p>
        </div>
        <div className="requirement-container">
          <h3 className="text-Neutral900_Text_main text-xl font-medium">
            Job Requirement
          </h3>
          <p className="text-Neutral900_Text_main text-lg">{job.requirement}</p>
        </div>
      </div>
    </div>
  );
};
