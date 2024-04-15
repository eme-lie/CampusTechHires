import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { app } from "../firebase/firebase";
import { useNavigate } from "react-router";
import NavbarLoggedIn from "./loggedinnavbar";
import { PostJobPage } from "./postjobpage";

export const Employerpage = () => {
  const [view, setView] = useState("postJobView");

  const handleView = (view: string) => {
    setView(view);
  };

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

  return (
    <div className="flex flex-col gap-y-6">
      <div className="mainNavBar pt-6 pr-12 pb-6 pl-12">
        <NavbarLoggedIn
          imageLinkNavBar="src/assets/logos/CampusTechHires.svg"
          imageAltNavBar="logo"
          navbarLink={["Post A Job(Employer)"]}
          signUpHeroButtonText="Sign Out"
          onButtonClick={handleClick}
        />
      </div>
      <div className="navBars-and-companyName h-40 flex flex-col justify-between pt-8 bg-Neutral200_Secondary_Background pr-12 pl-32 border-b">
        <h1 className="companyName text-3xl font-bold">
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
                  ? `postJobText text-xl font-medium`
                  : `postJobButton text-lg font-regular`
              }
            >
              Post A Job
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
                  ? `jobApplicationsText text-xl font-medium`
                  : `jobApplicationsText text-lg font-regular`
              }
            >
              Your Active Jobs
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
                  ? `activeJobsText text-xl font-medium`
                  : `activeJobsText text-lg font-regular`
              }
            >
              Active Jobs
            </p>
          </div>
        </div>
      </div>

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
        <div className="activeJobs">
          <h1>Active Jobs</h1>
        </div>
      )}
    </div>
  );
};
