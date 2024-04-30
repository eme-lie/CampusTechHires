// import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useState } from "react";

import Navbar from "./reusedcomponents/navbar";

export const StudentDashboard = () => {
  const [view, setView] = useState("appliedJobsView");

  const handleView = (view: string) => {
    setView(view);
  };

  return (
    <div className="flex flex-col gap-y-6 bg-Neutral900_Text_main">
      <div className="nav-holder pt-6 pr-12 pb-3 pl-8 md:pt-6 md:pr-12 md:pb-6 md:pl-12">
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
              view === "appliedJobsView"
                ? `appliedJobsButton flex-grow items-center h-6 md:h-12 border-b-2 border-primaryColor cursor-pointer`
                : `appliedJobsButton flex-grow items-center h-6 md:h-12 border-b cursor-pointer`
            }
            onClick={() => handleView("appliedJobsView")}
          >
            <p
              className={
                view === "appliedJobsView"
                  ? `appliedJobsText text-sm md:text-xl font-medium`
                  : `appliedJobsButton text-sm md:text-xl font-regular`
              }
            >
              Applied Jobs
            </p>
          </div>
          <div
            className={
              view === "savedJobsView"
                ? `savedJobsButton flex-grow items-center h-6 md:h-12 border-b-2 border-primaryColor cursor-pointer`
                : `savedJobsButton flex-grow items-center h-6 md:h-12 border-b cursor-pointer`
            }
            onClick={() => handleView("savedJobsView")}
          >
            <p
              className={
                view === "savedJobsView"
                  ? `savedJobsText text-sm md:text-xl font-medium`
                  : `savedJobsText text-sm md:text-xl font-regular`
              }
            >
              Your Saved Jobs
            </p>
          </div>
        </div>
      </div>

      {view === "appliedJobsView" && (
        <div className="appliedJobs">
          <h1>Job Applications</h1>
        </div>
      )}
      {view === "savedJobsView" && (
        <div className="savedJobs">
          <h1>Saved Jobs</h1>
        </div>
      )}
    </div>
  );
};
