import { useFormik } from "formik";
import { signupFormSchema } from "./schemas/signupFormSchema";
import { FormikHelpers } from "formik";
// import { Navigate } from "react-router-dom";
// import { doCreateUserWithEmailAndPassword } from "@/firebase/auth";
// import { useAuth } from "src/contexts/authContext/index.tsx";

interface MyFormValues {
  // Define your form fields here
  // For example:
  email: string;
  password: string;
}

// interface AuthContextType {
//   userLoggedIn: boolean;
//   // include other properties as needed
// }

const onSubmit = async (
  values: MyFormValues,
  actions: FormikHelpers<MyFormValues>
) => {
  console.log(values);
  // You can use setSubmitting to indicate that the form is no longer submitting
  // await new Promise((r) => setTimeout(r, 3000));
  // await doCreateUserWithEmailAndPassword(values.email, values.password);
  actions.setSubmitting(false);
  // You can use resetForm to reset the form to its initial state
  actions.resetForm();
};

const Signup: React.FC = () => {
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
    },
    validationSchema: signupFormSchema,
    onSubmit,
  });
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
              <div className="input-and-error">
                <input
                  type="email"
                  id="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Email"
                  className={`email-input h-12 w-full rounded border border-Neutral300_Border border-solid focus:outline text-Neutral300_Border pl-4 ${
                    errors.email && touched.email
                      ? "error-class border-destructive"
                      : ""
                  }`}
                />
                {errors.email && touched.email && (
                  <p className="error-response ">{errors.email}</p>
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
                  className={`password-input h-12 w-full rounded border border-Neutral300_Border border-solid focus:outline text-Neutral300_Border pl-4 ${
                    errors.password && touched.password
                      ? "error-class border-destructive"
                      : ""
                  }`}
                />
                {errors.password && touched.password && (
                  <p className="error-response ">{errors.password}</p>
                )}
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={
                isSubmitting
                  ? "bg-muted w-fit text-Neutral100_Base_Background pt-4 pr-6 pb-4 pl-6 rounded"
                  : "bg-primaryColor w-fit text-Neutral100_Base_Background pt-4 pr-6 pb-4 pl-6 rounded"
              }
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
