import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getJob } from "../../firebase/firebase";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { storage } from "../../firebase/firebase";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { v4 as uuidv4 } from "uuid";

import Navbar from "../reusedcomponents/navbar";
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
}

export const Job = () => {
  const { id } = useParams();
  const [job, setJob] = useState<Job | null>(null);
  const [imageUpload, setImageUpload] = useState<File | null>(null);

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setImageUpload(e.target.files[0]);
    }
  };
  const handleUpload = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!imageUpload) {
      return;
    }
    const storageRef = ref(storage, `images/${uuidv4()}`);
    const uploadTask = uploadBytesResumable(storageRef, imageUpload);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log(`Upload is ${progress}% done`);
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
        }
      },
      (error) => {
        console.error(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log("File available at", downloadURL);
        });
      }
    );
  };
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
    <div className="main-container flex flex-col">
      <div className="navbar-container bg-Neutral900_Text_main flex flex-col pt-4 pr-6 pb-4 pl-6 md:pt-8 md:pr-12 md:pb-8 md:pl-12">
        <Navbar
          imageLinkNavBar="src/assets/logos/CampusTechHires.svg"
          imageAltNavBar="campus-tech-hires logo"
          navbarLink={["Dashboard", "Profile", "Login"]}
          signUpHeroButtonText="Sign Up"
          logoutButtonText="Logout"
        />
      </div>

      <div className="header flex flex-wrap md:flex-nowrap md:justify-between items-end bg-Neutral200_Secondary_Background pt-4 pr-6 pb-6 pl-4 md:pt-4 md:pr-12 md:pb-8 md:pl-8 lg:pt-6 lg:pr-16 lg:pb-12 lg:pl-12 gap-y-2">
        <div className="left-side flex flex-col gap-y-6">
          <div className="left-side-top">
            <div className="title-and-company-name">
              <h1 className="job-title text-primaryColor text-xl md:text-2xl lg:text-3xl font-bold">
                {job.title}
              </h1>
              <h2 className="company-name text-Neutral900_Text_main text-lg md:text-xl lg:text-2xl font-medium">
                {job.companyName}
              </h2>
            </div>
          </div>
          <div className="left-side-bottom flex items-center pt-1 pr-2 pb-1 pl-2 gap-x-2 md:gap-x-4 rounded">
            <div className="location-container flex items-center bg-Neutral100_Base_Background pt-1 pr-2 pb-1 pl-2 md:pt-2 md:pr-3 md:pb-2 md:pl-3 gap-x-1 rounded shadow-md">
              <FontAwesomeIcon
                icon={faLocationDot}
                className="location-icon text-sm md:text-lg"
              />
              <p className="left-side-location text-sm md:text-lg ">
                {job.location}
              </p>
            </div>
            <div className="salary-container flex items-center bg-Neutral100_Base_Background pt-1 pr-2 pb-1 pl-2 md:pt-2 md:pr-3 md:pb-2 md:pl-3 gap-x-1 rounded shadow-md">
              <FontAwesomeIcon
                icon={faMoneyBillWave}
                className="salary-icon text-sm md:text-lg"
              />
              <p className="left-side-salary text-sm md:text-lg">
                {job.salaryRange}
              </p>
            </div>
            <div className="hours-per-week-container flex items-center bg-Neutral100_Base_Background pt-1 pr-2 pb-1 pl-2 md:pt-2 md:pr-3 md:pb-2 md:pl-3 gap-x-1 rounded shadow-md">
              <FontAwesomeIcon
                icon={faBusinessTime}
                className="hour-per-week-icon text-sm md:text-lg"
              />
              <p className="left-side-salary text-sm md:text-lg ">
                {job.hourPerWeek}
              </p>
            </div>
          </div>
        </div>
        <div className="right-side">
          <Popover>
            <PopoverTrigger>
              <div className="apply-button-container flex items-center bg-primaryColor pt-2 pr-3 pb-3 pl-3 md:pt-3 md:pr-4 md:pb-3 md:pl-4 gap-x-2 rounded shadow-md">
                <FontAwesomeIcon
                  icon={faCheck}
                  className="hour-per-week-icon text-sm md:text-lg"
                />
                <p className="left-side-salary text-Neutral100_Base_Background font-regular text-sm md:text-lg ">
                  Apply
                </p>
              </div>
            </PopoverTrigger>
            <PopoverContent className="flex flex-col w-full">
              <form onSubmit={handleUpload}>
                <div className="main-form bg-Neutral400 flex flex-col justify-between h-full pb-4 ">
                  <div className="title-and-inputs-and-button flex flex-col pt-6 pr-8 pb-8 pl-8 gap-y-4">
                    <p className="title flex flex-col">Fill the form</p>
                    <div className="inputs flex flex-col gap-y-4">
                      <label htmlFor="file-upload">Choose a file:</label>
                      <input
                        type="file"
                        id="file-upload"
                        name="file-upload"
                        onChange={handleImageUpload}
                      ></input>
                      <input type="submit" value="Upload"></input>
                    </div>
                  </div>
                </div>
              </form>
            </PopoverContent>
          </Popover>
        </div>
      </div>
      <div className="body flex flex-col pt-4 pr-6 pb-6 pl-6 md:pt-8 md:pr-12 md:pb-12 md:pl-12 gap-y-4 md:gap-y-8 mt-4 md:mt-6">
        <div className="description-container pt-4 pr-6 pb-4 pl-6 md:pt-12 md:pr-12 md:pb-12 md:pl-12 rounded-2xl shadow-md border-primaryColor border-l-4 border-r-4 gap-y-2 md:gap-y-3 lg:gap-y-4">
          <h3 className="text-Neutral900_Text_main text-lg md:text-xl lg:text-2xl font-medium">
            Job Description
          </h3>
          <p className="text-Neutral900_Text_main text-lg">{job.description}</p>
        </div>
        <div className="requirement-container pt-4 pr-6 pb-4 pl-6 md:pt-12 md:pr-12 md:pb-12 md:pl-12 rounded-2xl shadow-md border-primaryColor border-l-4 border-r-4">
          <h3 className="text-Neutral900_Text_main text-lg md:text-xl lg:text-2xl font-medium">
            Job Requirement
          </h3>
          <p className="text-Neutral900_Text_main text-lg">{job.requirement}</p>
        </div>
      </div>
    </div>
  );
};
