import React, { useState } from "react";


const Signup: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Add your signup logic here
  };

  return (
    <div className="signupbackground bg-signup-login-background bg-cover h-screen flex flex-row pt-4 pr-12 pb-4 pl-12 lg:pt-8 lg:pr-32 lg:pb-8 lg:pl-32 md:pt-8 md:pr-16 md:pb-8 md:pl-16">
      <form
        onSubmit={handleSubmit}
        className="bg-Neutral400 w-full md:w-55 flex flex-col space-y-4 rounded-tr rounded-br"
      >
        <div className="form-header bg-Neutral100_Base_Background flex flex-col pt-8 pr-8 pb-8 pl-8">
          <div className="image-subtitle flex flex-col items-center gap-y-2">
            <img
              src="src/assets/logos/CampusTechHires.svg"
              alt="campus tech hires logo"
              className=""
            />
            <p className="subtitle text-center">
              Learn from the best professionals and be a part of the largest
              online community for creatives
            </p>
          </div>
        </div>
        <div className="main-form bg-Neutral400 flex flex-col justify-between h-full pb-4 ">
          <div className="title-and-inputs-and-button flex flex-col pt-6 pr-8 pb-8 pl-8 gap-y-4">
            <p className="title flex flex-col">
              Sign Up for Free with your email
            </p>
            <div className="inputs flex flex-col gap-y-4">
              <input
                type="email"
                id="email"
                value={email}
                onChange={handleEmailChange}
                placeholder="Email"
                className="email-input h-12 w-full rounded border border-Neutral300_Border border-solid focus:outline text-Neutral300_Border pl-4"
              />
              <input
                type="password"
                id="password"
                value={password}
                onChange={handlePasswordChange}
                placeholder="Password"
                className="password-input h-12 w-full rounded border border-Neutral300_Border border-solid focus:outline text-Neutral300_Border pl-4"
              />
            </div>

            <button
              type="submit"
              className="bg-primaryColor w-fit text-Neutral100_Base_Background pt-4 pr-6 pb-4 pl-6 rounded"
            >
              Sign Up for free
            </button>
          </div>

          <div className="login-container flex gap-x-2 justify-center  ">
            <p className="login-text">Already have an account?</p>
            <p className="login-text-button">Log In</p>
          </div>
        </div>
      </form>
      <div className="bg-signup-image bg-cover w-45 h-full rounded-tl rounded-bl hidden md:block"></div>
    </div>
  );
};

export default Signup;
