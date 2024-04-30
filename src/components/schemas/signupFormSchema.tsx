import * as yup from "yup";

const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

export const signUpFormSchema = yup.object().shape({
  email: yup
    .string()
    .email("Please Enter a Valid email")
    .required("Email cannot be empty"),
  userType: yup.string().required("Please select user type"),
  password: yup
    .string()
    .min(6, "Password must be at least 8 characters")
    .matches(
      passwordRegex,
      "Password must contain at least one uppercase letter, one lowercase letter, and one number"
    )
    .required("Password cannot be empty"),
});
