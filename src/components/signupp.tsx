import { useEffect } from "react";
import { getAuth } from "firebase/auth";
import { app } from "../firebase/firebase";
import firebase from "firebase/compat/app";
import * as firebaseui from "firebaseui";
import "firebaseui/dist/firebaseui.css";
import "../../firebaseui-styling.global.css";
const reDirectPage = "/home";

const Signupp: React.FC = () => {
  // const { userLoggedIn } = useAuth() as AuthContextType;
  useEffect(() => {
    const ui =
      firebaseui.auth.AuthUI.getInstance() ||
      new firebaseui.auth.AuthUI(getAuth(app));

    ui.start("#firebaseui-auth-container", {
      signInSuccessUrl: reDirectPage,
      signInOptions: [
        { provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID },
        {
          provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
          requireDisplayName: true,
        },
      ],
    });
  }, []);

  return (
    <div className="signupbackground bg-signup-login-background bg-cover h-screen flex flex-row pt-4 pr-12 pb-4 pl-12 lg:pt-8 lg:pr-32 lg:pb-8 lg:pl-32 md:pt-8 md:pr-16 md:pb-8 md:pl-16">
      <div className="login-and-heading-container w-full md:w-45 flex flex-col rounded-tl rounded-bl bg-Neutral100_Base_Background justify-center items-center gap-y-8">
        <div className="heading flex flex-col items-center gap-y-2">
          <h1 className="text-3xl font-bold text-primaryColor">
            Welcome to CampusTechHires
          </h1>
          <p className="text-Neutral900_Text_main">
            The best place to find your internship
          </p>
        </div>
        <div id="firebaseui-auth-container"></div>
      </div>

      <div className="bg-signup-image bg-cover w-55 h-full rounded-tr rounded-br hidden md:block"></div>
    </div>
  );
};

export default Signupp;
