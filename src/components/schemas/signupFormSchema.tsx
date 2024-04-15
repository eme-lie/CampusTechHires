import * as yup from "yup";

// const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

export const signupFormSchema = yup.object().shape({
  // email: yup
  //   .string()
  //   .email("Please Enter a Valid email")
  //   .required("Email cannot be empty"),
  // password: yup
  //   .string()
  //   .min(8, "Password must be at least 8 characters")
  //   .matches(
  //     passwordRegex,
  //     "Password must contain at least one uppercase letter, one lowercase letter, and one number"
  //   )
  //   .required("Required"),
  title: yup.string().required("Please Input the title"),
  location: yup.string().required("Please Select a Location"),
  description: yup
    .string()
    .max(1500, "your description cant be more than 500 characters")
    .required("Please Enter the Job Description"),
  requirement: yup
    .string()
    .max(1500, "your requirement cant be more than 500 characters")
    .required("Please Enter the Job Requirements"),
  hourPerWeek: yup.string().required("Please Enter the Hours Per Week"),
  salaryRange: yup.string().required("Please Enter the Salary Range"),
  companyName: yup
    .string()
    .max(50, "your company name cant be more than 50 characters")
    .required("Please your company name"),
});
