import { useFormik } from "formik";
import { FormikHelpers } from "formik";
import { useNavigate } from "react-router-dom";
import { doSignInWithEmailAndPassword } from "@/firebase/auth";
import { loginFormSchema } from "./../schemas/loginFormSchema";
import { Link } from "react-router-dom";
import loginImage from "./../../assets/images/student-group.png";

interface MyFormValues {
  // Define your form fields here
  // For example:
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const navigate = useNavigate();
  const onSubmit = async (
    values: MyFormValues,
    actions: FormikHelpers<MyFormValues>
  ) => {
    console.log(values);
    await doSignInWithEmailAndPassword(values.email, values.password);
    navigate("/home");
    actions.setSubmitting(false);
    actions.resetForm();
  };

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
    validationSchema: loginFormSchema,
    onSubmit,
  });

  return (
    <div className="signupbackground bg-signup-login-background bg-cover h-screen flex flex-row pt-4 pr-12 pb-4 pl-12 lg:pt-8 lg:pr-32 lg:pb-8 lg:pl-32 md:pt-8 md:pr-16 md:pb-8 md:pl-16">
      <form
        onSubmit={handleSubmit}
        className="bg-Neutral400 w-full md:w-55 flex flex-col space-y-4 rounded-tl rounded-bl"
      >
        <div className="form-header bg-Neutral100_Base_Background flex flex-col pt-8 pr-8 pb-8 pl-8">
          <div className="image-subtitle flex flex-col items-center gap-y-2">
            <Link to="/">
              <img
                src="src/assets/logos/CampusTechHires.svg"
                alt="campus tech hires logo"
                className=""
              />
            </Link>

            <p className="subtitle text-center">
              Welcome back to the largest platform for part time jobs for tech
              oriented university students
            </p>
          </div>
        </div>
        <div className="main-form bg-Neutral400 flex flex-col justify-between h-full pb-4 ">
          <div className="title-and-inputs-and-button flex flex-col pt-6 pr-8 pb-8 pl-8 gap-y-4">
            <p className="title flex flex-col">Login with your email</p>
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
              Login
            </button>
          </div>

          <div className="signup-container flex items-center gap-x-2 justify-center border-t border-Neutral900_Text_main h-6 md:h-12">
            <p className="signup-text text-sm md:text-lg">
              Don't have an account?
            </p>
            <Link to="/signup">
              <p className="signup-text-button underline text-sm md:text-lg font-medium">
                Sign Up
              </p>
            </Link>
          </div>
        </div>
      </form>
      <div className="flex w-45 rounded-tr h-full rounded-br hidden md:block">
        <img
          src={loginImage}
          alt="a group of students"
          className="w-full h-full object-cover rounded-tr rounded-br"
        />
      </div>
    </div>
  );
};

export default Login;
