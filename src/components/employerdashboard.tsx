import { useState, useEffect } from "react";
import { PostJobPage } from "@/components/Forms/postjobform";
import Navbar from "@/components/reusedcomponents/navbar";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db, auth } from "@/firebase/firebase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";

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

export const EmployerDashboard = () => {
  const [jobs, setJobs] = useState<Job[]>([]); // Provide a type annotation for jobs
  const [view, setView] = useState("postJobView");

  const handleView = (view: string) => {
    setView(view);
  };

  useEffect(() => {
    const fetchJobs = async () => {
      if (view === "activeJobsView") {
        const userId = auth.currentUser?.uid;
        const q = query(
          collection(db, "jobs"),
          where("employerId", "==", userId)
        );
        const querySnapshot = await getDocs(q);
        const jobsData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as Job[];
        console.log("one");
        setJobs(jobsData);
      }
    };

    fetchJobs();
  }, [view]);

  return (
    <div className="flex flex-col bg-Neutral900_Text_main">
      <div className="nav-holder pt-6 pr-12 pb-6 pl-12">
        <Navbar
          imageLinkNavBar="src/assets/logos/CampusTechHires.svg"
          imageAltNavBar="campus-tech-hires logo"
          navbarLink={["Dashboard", "Profile", "Login"]}
          signUpHeroButtonText="Sign Up"
          logoutButtonText="Logout"
        />
      </div>

      <div className="navBars-and-companyName flex flex-col justify-between  bg-Neutral200_Secondary_Background pt-4 pr-4 pl-4 md:pr-10 md:pl-12 lg:pr-12 lg:pl-32 lg:pt-8 gap-y-3 md:gap-y-8 border-b">
        <h1 className="companyName text-xl md:text-2xl lg:text-3xl font-bold">
          Good to see you companyName👋
        </h1>
        <div className="employerNavbar flex justify-between gap-x-8">
          <div
            className={
              view === "postJobView"
                ? `postJobButton flex-grow items-center pt-2 pr-3 pb-2 pl-3 border-b-2 border-primaryColor cursor-pointer`
                : `postJobButton flex-grow items-center pt-2 pr-3 pb-2 pl-3 border-b cursor-pointer`
            }
            onClick={() => handleView("postJobView")}
          >
            <p
              className={
                view === "postJobView"
                  ? `postJobText text-sm md:text-xl font-medium`
                  : `postJobButton text-sm md:text-xl font-regular`
              }
            >
              Post A Job
            </p>
          </div>
          <div
            className={
              view === "activeJobsView"
                ? `activeJobsButton flex-grow items-center pt-2 pr-3 pb-2 pl-3 border-b-2 border-primaryColor cursor-pointer`
                : `activeJobsButton flex-grow items-center pt-2 pr-3 pb-2 pl-3 border-b cursor-pointer`
            }
            onClick={() => handleView("activeJobsView")}
          >
            <p
              className={
                view === "activeJobsView"
                  ? `activeJobsText text-sm md:text-xl font-medium`
                  : `activeJobsText text-sm md:text-xl font-regular`
              }
            >
              Active Jobs
            </p>
          </div>
          <div
            className={
              view === "jobApplicationsView"
                ? `jobApplicationsButton flex-grow items-center pt-2 pr-3 pb-2 pl-3 border-b-2 border-primaryColor cursor-pointer`
                : `jobApplicationsButton flex-grow items-center pt-2 pr-3 pb-2 pl-3 border-b cursor-pointer`
            }
            onClick={() => handleView("jobApplicationsView")}
          >
            <p
              className={
                view === "jobApplicationsView"
                  ? `jobApplicationsText text-sm md:text-xl font-medium`
                  : `jobApplicationsText text-sm md:text-xl font-regular`
              }
            >
              Applications
            </p>
          </div>
        </div>
      </div>

      <div className="views bg-Neutral100_Base_Background">
        {view === "postJobView" && (
          <div className="postJob">
            <PostJobPage />
          </div>
        )}
        {view === "jobApplicationsView" && (
          <div className="jobApplications">
            <h1>Job Applications</h1>
          </div>
        )}
        {view === "activeJobsView" && (
          <div className="activeJobs bg-Neutral100_Base_Background flex flex-col h-full gap-y-4 pt-8 pr-6 pb-6 pl-6">
            {jobs.map((job, index) => {
              return (
                <div
                  key={index}
                  className="flex justify-between rounded shadow-md pt-4 pr-3 pb-4 pl-3 md:pt-6 md:pr-12 md:pb-6 md:pl-12 bg-white items-end"
                >
                  <div className="left-side flex flex-col">
                    <h2 className="text-lg md:text-xl font-bold">
                      {job.title}
                    </h2>
                    <div className="left-bottom flex gap-x-1 md:gap-x-2 items-center">
                      <p className="left-text text-sm md:text-lg font-medium">
                        {job.location}
                      </p>
                      <p className="left-text text-sm md:text-lg font-medium">
                        |
                      </p>
                      <p className="left-text text-sm md:text-lg font-medium">
                        {job.salaryRange}
                      </p>
                    </div>
                  </div>
                  <div className="right-side flex gap-x-2 md:gap-x-6 items-center">
                    <div className="right-text-container flex gap-x-1 md:gap-x-2">
                      <p className="right-text text-sm md:text-lg">13 views</p>
                      <p className="right-text text-sm md:text-lg">|</p>
                      <p className="right-text text-sm md:text-lg">
                        0 applicants
                      </p>
                    </div>
                    <FontAwesomeIcon icon={faEllipsisVertical} />
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};
