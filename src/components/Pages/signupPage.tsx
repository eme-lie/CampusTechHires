import { useFormik } from "formik";
import { signUpFormSchema } from "./../schemas/signUpFormSchema";
import { FormikHelpers } from "formik";
import { doCreateUserWithEmailAndPassword } from "@/firebase/auth";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { db } from "@/firebase/firebase";
import { doc, setDoc } from "firebase/firestore";
import signupImage from "./../../assets/images/signupImage.png";

interface MyFormValues {
  // Define your form fields here
  // For example:
  email: string;
  password: string;
  userType: string;
}

const userTypes = [
  "Student",
  "Employer",
  // Add more countries as needed
];
// interface AuthContextType {
//   userLoggedIn: boolean;
//   // include other properties as needed
// }

const Signup: React.FC = () => {
  const navigate = useNavigate();
  const onSubmit = async (
    values: MyFormValues,
    actions: FormikHelpers<MyFormValues>
  ) => {
    console.log(values);
    // You can use setSubmitting to indicate that the form is no longer submitting
    // await new Promise((r) => setTimeout(r, 3000));

    const user = await doCreateUserWithEmailAndPassword(
      values.email,
      values.password
    );

    await setDoc(doc(db, "users", user.user.uid), {
      userType: values.userType,
    });
    console.log(user);
    navigate("/home");
    actions.setSubmitting(false);
    // You can use resetForm to reset the form to its initial state
    actions.resetForm();
  };
  // const { userLoggedIn } = useAuth() as AuthContextType;
  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: {
      email: "",
      password: "",
      userType: "",
    },
    validationSchema: signUpFormSchema,
    onSubmit,
  });
  return (
    <div className="signupbackground bg-signup-login-background bg-cover h-screen flex flex-row pt-4 pr-8 pb-4 pl-8 lg:pt-8 lg:pr-32 lg:pb-8 lg:pl-32 md:pt-8 md:pr-16 md:pb-8 md:pl-16">
      <form
        onSubmit={handleSubmit}
        className="bg-Neutral400 w-full md:w-55 flex flex-col rounded-tl rounded-bl"
      >
        <div className="form-header bg-Neutral100_Base_Background flex flex-col pt-4 pr-4 pb-4 pl-4 lg:pt-6 lg:pr-8 lg:pb-6 lg:pl-8 ">
          <div className="image-subtitle flex flex-col items-center gap-y-2">
            <Link to="/">
              <img
                src="src/assets/logos/CampusTechHires.svg"
                alt="campus tech hires logo"
                className="w-56 md:w-72 lg:w-96"
              />
            </Link>
            <p className="subtitle text-center text-lg md:text-xl">
              Welcome to the largest platform for part time jobs for tech
              oriented university students
            </p>
          </div>
        </div>
        <div className="main-form bg-Neutral400 flex flex-col justify-between h-full">
          <div className="title-and-inputs-and-button flex flex-col pr-6 pb-8 pl-6 gap-y-4 md:pt-3 md:pr-8 md:pb-8 md:pl-8 md:gap-y-4">
            <p className="title text-sm font-medium md:text-lg lg:text-xl">
              Sign Up for Free with your email
            </p>
            <div className="inputs flex flex-col gap-y-4">
              <div className="email-input-and-error">
                <input
                  type="email"
                  id="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Email"
                  className={`email-input h-12 w-full rounded border border-Neutral300_Border border-solid focus:outline text-Neutral900_Text_main pl-4 ${
                    errors.email && touched.email
                      ? "error-class border-destructive"
                      : ""
                  }`}
                />
                {errors.email && touched.email && (
                  <p className="error-response text-destructive text-sm md:text-lg">
                    {errors.email}
                  </p>
                )}
              </div>
              <div className="userTypeanddropdown">
                <select
                  id="userType"
                  value={values.userType}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`title-input h-12 w-full rounded border border-Neutral300_Border border-solid focus:outline text-Neutral300_Border pr-4 pl-4 ${
                    errors.userType && touched.userType
                      ? "error-class border-destructive"
                      : ""
                  }`}
                >
                  <option value="">Select userType</option>
                  {userTypes.map((userType) => (
                    <option key={userType} value={userType}>
                      {userType}
                    </option>
                  ))}
                </select>

                {errors.userType && touched.userType && (
                  <p className="error-response ">{errors.userType}</p>
                )}
              </div>

              <div className="input-and-error">
                <input
                  type="password"
                  id="password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Password"
                  className={`password-input h-12 w-full rounded border border-Neutral300_Border border-solid focus:outline text-Neutral900_Text_main pl-4 ${
                    errors.password && touched.password
                      ? "error-class border-destructive"
                      : ""
                  }`}
                />
                {errors.password && touched.password && (
                  <p className="error-response text-destructive text-sm md:text-lg">
                    {errors.password}
                  </p>
                )}
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={
                isSubmitting
                  ? "bg-muted w-fit text-Neutral100_Base_Background pt-4 pr-6 pb-4 pl-6 rounded text-lg cursor-not-allowed font-medium"
                  : "bg-primaryColor w-fit text-Neutral100_Base_Background pt-3 pr-4 pb-3 pl-4 md:pt-4 md:pr-6 md:pb-4 md:pl-6 rounded font-medium text-sm md:text-lg"
              }
            >
              Sign Up for free
            </button>
          </div>

          <div className="login-container flex items-center gap-x-2 justify-center border-t border-Neutral900_Text_main h-6 md:h-12">
            <p className="login-text text-sm md:text-lg">
              Already have an account?
            </p>
            <Link to="/login">
              <p className="login-text-button underline text-sm md:text-lg font-medium">
                Log In
              </p>
            </Link>
          </div>
        </div>
      </form>
      <div className="flex w-55 h-full rounded-tr rounded-br hidden md:block">
        <img
          src={signupImage}
          alt="a girl with a laptop"
          className="w-full h-full object-cover rounded-tr rounded-br"
        />
      </div>
    </div>
  );
};

export default Signup;
