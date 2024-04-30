import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faChevronUp,
  faChevronDown,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { doSignOut } from "@/firebase/auth";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { login, logout } from "@/redux/userauthslice";
import { auth } from "@/firebase/firebase";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Mobilenavbar } from "@/components/reusedcomponents/mobilenavbar";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/firebase/firebase";
// import { AuthComponent } from "@/firebase/auth";

interface RootState {
  userAuth: {
    isLoggedIn: boolean;
  };
}

interface Props {
  imageLinkNavBar: string;
  imageAltNavBar: string;
  navbarLink: string[];
  signUpHeroButtonText: string;
  logoutButtonText: string;
}

function Navbar({
  imageLinkNavBar,
  imageAltNavBar,
  navbarLink,
  signUpHeroButtonText,
  logoutButtonText,
}: Props) {
  const isLoggedIn = useSelector(
    (state: RootState) => state.userAuth.isLoggedIn
  );
  const dispatch = useDispatch();

  const [profileView, setProfileView] = useState("hide");

  const handleProfileView = () => {
    if (profileView === "hide") {
      setProfileView("show");
    } else {
      setProfileView("hide");
    }
  };

  const [authInitialized, setAuthInitialized] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(login());
      } else {
        dispatch(logout());
      }
      console.log(unsubscribe);
      console.log(user);
      setAuthInitialized(true);
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  const [userType, setUserType] = useState(null);
  useEffect(() => {
    const fetchUserData = async () => {
      if (auth.currentUser) {
        try {
          const docSnapshot = await getDoc(
            doc(db, "users", auth.currentUser.uid)
          );
          if (docSnapshot.exists()) {
            console.log("Document data:", docSnapshot.data().userType);
            setUserType(docSnapshot.data().userType);
          } else {
            console.log("No such document!");
          }
        } catch (error) {
          console.log("Error getting document:", error);
        }
      } else {
        console.log("No current user");
      }
    };

    if (authInitialized) {
      // Only run fetchUserData if authInitialized is true
      fetchUserData();
    }
  }, [authInitialized]);

  return (
    <div className="navbar flex justify-between">
      {isLoggedIn ? (
        <Link to="/home">
          <img
            src={imageLinkNavBar}
            alt={imageAltNavBar}
            className="w-40 md:w-64 lg:w-72"
          />
        </Link>
      ) : (
        <Link to="/">
          <img
            src={imageLinkNavBar}
            alt={imageAltNavBar}
            className="w-40 md:w-64 lg:w-72"
          />
        </Link>
      )}
      <div className="navbar-links-main flex items-center gap-x-6">
        <ul className="navbar-links flex items-center gap-x-6">
          {navbarLink.map((link) => {
            if (link === "Dashboard" && isLoggedIn && userType === "Employer") {
              return (
                <Link to="/employerdashboard">
                  <li
                    key={link}
                    className="text-Neutral100_Base_Background text-xl font-medium hidden lg:block"
                  >
                    {link}
                  </li>
                </Link>
              );
            } else if (
              !isLoggedIn &&
              userType === "Employer" &&
              link === "Dashboard"
            ) {
              // Don't render anything for this case
              return null;
            }
            if (link === "Dashboard" && isLoggedIn && userType === "Student") {
              return (
                <Link to="/studentdashboard">
                  <li
                    key={link}
                    className={`${
                      isLoggedIn
                        ? `text-Neutral100_Base_Background text-xl font-medium hidden lg:block`
                        : `text-Neutral100_Base_Background text-xl font-medium hidden`
                    }`}
                  >
                    {link}
                  </li>
                </Link>
              );
            } else if (
              !isLoggedIn &&
              userType === "Student" &&
              link === "Dashboard"
            ) {
              // Don't render anything for this case
              return null;
            }

            if (link === "Profile" && isLoggedIn) {
              return (
                <li
                  key={link}
                  className={`${
                    isLoggedIn
                      ? `text-Neutral100_Base_Background text-xl font-medium hidden lg:block`
                      : `text-Neutral100_Base_Background text-xl font-medium hidden`
                  }`}
                >
                  <Popover>
                    <PopoverTrigger
                      className="flex gap-x-2 items-center"
                      onClick={handleProfileView}
                    >
                      {link}
                      {profileView === "hide" ? (
                        <FontAwesomeIcon
                          icon={faChevronUp}
                          style={{ color: "#fafafa" }}
                        />
                      ) : (
                        <FontAwesomeIcon
                          icon={faChevronDown}
                          style={{ color: "#fafafa" }}
                        />
                      )}
                    </PopoverTrigger>
                    <PopoverContent className="flex flex-col w-fit pr-4 pb-4 pl-4 gap-y-4">
                      <div className="userEmail font-medium">
                        {auth.currentUser?.email}
                      </div>
                      <div className="profileLinkContainer flex gap-x-2 items-center">
                        <FontAwesomeIcon icon={faUser} />
                        <p>View/Edit Profile</p>
                      </div>
                    </PopoverContent>
                  </Popover>
                </li>
              );
            }
            if (!isLoggedIn && link === "Login") {
              // Don't render anything for this case
              return (
                <Link to="/login">
                  <li
                    key={link}
                    className="text-Neutral100_Base_Background text-xl font-medium hidden lg:block"
                  >
                    {link}
                  </li>
                </Link>
              );
            } else if (isLoggedIn && link === "Login") {
              // Don't render anything for this case
              return null;
            } else if (!isLoggedIn && link === "Post A Job") {
              // Don't render anything for this case
              return (
                <Link to="/employerhomepage">
                  <li
                    key={link}
                    className={`${
                      isLoggedIn
                        ? `text-Neutral100_Base_Background text-xl font-medium hidden`
                        : `text-Neutral100_Base_Background text-xl font-medium hidden lg:block`
                    }`}
                  >
                    {link}
                  </li>
                </Link>
              );
            } else if (isLoggedIn && link === "Post A Job") {
              // Don't render anything for this case
              return null;
            } else {
              return null;
            }
          })}
        </ul>
        {isLoggedIn ? (
          <Link to="/">
            <Button
              className="bg-primaryColor sm:px-4 sm:py-2 md:px-6 md:py-4 lg:px-8 lg:py-3 sm:text-base md:text-base lg:text-lg font-normal hidden lg:block"
              onClick={doSignOut}
            >
              {logoutButtonText}
            </Button>
          </Link>
        ) : (
          <Link to="/signup">
            <Button className="bg-primaryColor sm:px-4 sm:py-2 md:px-6 md:py-4 lg:px-6 lg:py-3 sm:text-base md:text-base lg:text-lg font-medium hidden lg:block">
              {signUpHeroButtonText}
            </Button>
          </Link>
        )}

        <Popover>
          <PopoverTrigger>
            <FontAwesomeIcon
              icon={faBars}
              style={{ color: "#fafafa" }}
              className="size-6 md:size-8 block lg:hidden"
            />
          </PopoverTrigger>
          <PopoverContent className="flex flex-col">
            <Mobilenavbar
              mobileNavbarLink={["Dashboard", "Post A Job", "Login", "Profile"]}
              signUpHeroButtonText="Sign Up"
              logoutButtonText="Logout"
            />
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
}

export default Navbar;
