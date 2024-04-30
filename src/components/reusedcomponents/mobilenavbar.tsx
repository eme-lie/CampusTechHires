import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { doSignOut } from "@/firebase/auth";
import { onAuthStateChanged } from "firebase/auth";
import { login, logout } from "@/redux/userauthslice";
import { auth } from "@/firebase/firebase";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/firebase/firebase";

interface Props {
  mobileNavbarLink: string[];
  signUpHeroButtonText: string;
  logoutButtonText: string;
}

interface RootState {
  userAuth: {
    isLoggedIn: boolean;
  };
}

export const Mobilenavbar = ({
  mobileNavbarLink,
  signUpHeroButtonText,
  logoutButtonText,
}: Props) => {
  const isLoggedIn = useSelector(
    (state: RootState) => state.userAuth.isLoggedIn
  );
  const dispatch = useDispatch();

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
    <div className="list-holder">
      <div className="user-email text-Neutral900_Text_main sm:text-base md:text-base lg:text-lg w-full pb-2 pl-4 font-medium">
        {auth.currentUser?.email}
      </div>
      <ul className="navbar-links flex flex-col gap-y-2">
        {mobileNavbarLink.map((link) => {
          if (link === "Dashboard" && isLoggedIn && userType === "Employer") {
            return (
              <Link to="/employerdashboard">
                <li
                  key={link}
                  className="text-Neutral900_Text_main sm:text-base md:text-base lg:text-lg w-full border-b pb-2 pl-4 border-Neutral300_Border"
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
                  className="text-Neutral900_Text_main sm:text-base md:text-base lg:text-lg w-full border-b pb-2 pl-4 border-Neutral300_Border"
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
                className="text-Neutral900_Text_main sm:text-base md:text-base lg:text-lg w-full border-b pb-2 pl-4 border-Neutral300_Border"
              >
                {link}
              </li>
            );
          }

          if (!isLoggedIn && link === "Login") {
            // Don't render anything for this case
            return (
              <Link to="/login">
                <li
                  key={link}
                  className="text-Neutral900_Text_main sm:text-base md:text-base lg:text-lg w-full border-b pb-2 pl-4 border-Neutral300_Border"
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
                  className="text-Neutral900_Text_main sm:text-base md:text-base lg:text-lg w-full border-b pb-2 pl-4 border-Neutral300_Border"
                >
                  {link}
                </li>
              </Link>
            );
          } else if (isLoggedIn && link === "Post A Job") {
            // Don't render anything for this case
            return null;
          } else {
            return (
              <li className="text-Neutral100_Base_Background sm:text-base md:text-base lg:text-lg hidden lg:block">
                {link}
              </li>
            );
          }
        })}
        {isLoggedIn ? (
          <Link to="/studenthomepage">
            <div className="flex flex-col w-full pb-2 pl-4" onClick={doSignOut}>
              <p className="text-Neutral900_Text_main sm:text-base md:text-base lg:text-lg">
                {logoutButtonText}
              </p>
            </div>
          </Link>
        ) : (
          <Link to="/signup">
            <div className="flex flex-col w-full pb-2 pl-4">
              <p className="text-Neutral900_Text_main sm:text-base md:text-base lg:text-lg ">
                {signUpHeroButtonText}
              </p>
            </div>
          </Link>
        )}
      </ul>
    </div>
  );
};
