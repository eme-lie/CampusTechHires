import { useFormik } from "formik";
import { signupFormSchema } from "./schemas/signupFormSchema";
import { FormikHelpers } from "formik";
// import { Navigate } from "react-router-dom";
import { addDoc, collection } from "firebase/firestore";
import { db } from "@/firebase/firebase";

// const db = getFirestore();
const locations = [
  "London",
  "Edinburgh",
  "Manchester",
  "Birmingham",
  "Liverpool",
  "Glasgow",
  // Add more countries as needed
];

const hoursPerWeek = [
  "16-20hrs",
  "16-24hrs",
  "25-30hrs",
  "31-35hrs",
  "35-40hrs ",
  // Add more countries as needed
];

const salaryRanges = [
  "10-12pph",
  "13-15pph",
  "16-20pph",
  // Add more countries as needed
];

interface MyFormValues {
  // Define your form fields here
  // For example:
  title: string;
  location: string;
  description: string;
  requirement: string;
  hourPerWeek: string;
  salaryRange: string;
  companyName: string;
}

const onSubmit = async (
  values: MyFormValues,
  actions: FormikHelpers<MyFormValues>
) => {
  console.log(values);
  const colRef = collection(db, "jobs");
  try {
    await addDoc(colRef, {
      title: values.title,
      location: values.location,
      description: values.description,
      requirement: values.requirement,
      hourPerWeek: values.hourPerWeek,
      salaryRange: values.salaryRange,
      companyName: values.companyName,
    });
  } catch (error) {
    console.error("Error adding document: ", error);
    // Handle the error appropriately in your app
  }

  actions.setSubmitting(false);
  actions.resetForm();
};

export const PostJobPage = () => {
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
      companyName: "",
      title: "",
      location: "",
      description: "",
      requirement: "",
      hourPerWeek: "",
      salaryRange: "",
    },
    validationSchema: signupFormSchema,
    onSubmit,
  });
  return (
    <div>
      <div className="form-holder flex flex-col">
        <form
          id="post-job-form"
          onSubmit={handleSubmit}
          className="bg-Neutral400 w-full flex flex-col space-y-4 rounded-tr rounded-br"
        >
          <div className="main-form bg-Neutral400 flex flex-col justify-between h-full pb-4 w-3/4 pt-8 pr-4 pb-4 pl-24">
            <div className="title-and-inputs-and-button flex flex-col pt-6 pr-8 pb-8 pl-8 gap-y-4">
              <p className="title text-2xl font-medium">
                Create a new Job Post
              </p>
              <div className="first-section flex flex-col gap-y-6">
                {/* <div className="title">
                  <h1 className="main-title">
                    1. Let's start with a strong title
                  </h1>
                  <p className="sub-title">
                    This helps your job post to stand out to the right
                    applicants
                  </p>
                </div> */}
                <div className="inputs flex flex-col gap-y-8">
                  <div className="companyNameandinput">
                    <label htmlFor="companyName">Write your company name</label>
                    <input
                      type="text"
                      id="companyName"
                      value={values.companyName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Company Name"
                      className={`title-input h-12 w-full rounded border border-Neutral300_Border border-solid focus:outline text-Neutral300_Border pr-4 pl-4 ${
                        errors.companyName && touched.companyName
                          ? "error-class border-destructive"
                          : ""
                      }`}
                    />
                    {errors.companyName && touched.companyName && (
                      <p className="error-response">{errors.companyName}</p>
                    )}
                  </div>
                  <div className="titleandinput">
                    <label htmlFor="title">Write a title for your job ad</label>
                    <input
                      type="text"
                      id="title"
                      value={values.title}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Title"
                      className={`title-input h-12 w-full rounded border border-Neutral300_Border border-solid focus:outline text-Neutral300_Border pr-4 pl-4 ${
                        errors.title && touched.title
                          ? "error-class border-destructive"
                          : ""
                      }`}
                    />
                    {errors.title && touched.title && (
                      <p className="error-response">{errors.title}</p>
                    )}
                  </div>
                  <div className="locationandinput">
                    <label htmlFor="location">Location</label>
                    <select
                      id="location"
                      value={values.location}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`title-input h-12 w-full rounded border border-Neutral300_Border border-solid focus:outline text-Neutral300_Border pr-4 pl-4 ${
                        errors.location && touched.location
                          ? "error-class border-destructive"
                          : ""
                      }`}
                    >
                      <option value="">Select location</option>
                      {locations.map((location) => (
                        <option key={location} value={location}>
                          {location}
                        </option>
                      ))}
                    </select>

                    {errors.location && touched.location && (
                      <p className="error-response ">{errors.location}</p>
                    )}
                  </div>
                  <div className="hoursPerWeekandinput">
                    <label htmlFor="hourPerWeek">Hours Per Week</label>
                    <select
                      id="hourPerWeek"
                      value={values.hourPerWeek}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`title-input h-12 w-full rounded border border-Neutral300_Border border-solid focus:outline text-Neutral300_Border pr-4 pl-4 ${
                        errors.hourPerWeek && touched.hourPerWeek
                          ? "error-class border-destructive"
                          : ""
                      }`}
                    >
                      <option value="">Select Hours per Week</option>
                      {hoursPerWeek.map((hourPerWeek) => (
                        <option key={hourPerWeek} value={hourPerWeek}>
                          {hourPerWeek}
                        </option>
                      ))}
                    </select>

                    {errors.hourPerWeek && touched.hourPerWeek && (
                      <p className="error-response ">{errors.hourPerWeek}</p>
                    )}
                  </div>
                  <div className="salaryRangesandinput">
                    <label htmlFor="salaryRange">Salary Ranges</label>
                    <select
                      id="salaryRange"
                      value={values.salaryRange}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`title-input h-12 w-full rounded border border-Neutral300_Border border-solid focus:outline text-Neutral300_Border pl-4 ${
                        errors.salaryRange && touched.salaryRange
                          ? "error-class border-destructive"
                          : ""
                      }`}
                    >
                      <option value="">Select Salary Range</option>
                      {salaryRanges.map((salaryRange) => (
                        <option key={salaryRange} value={salaryRange}>
                          {salaryRange}
                        </option>
                      ))}
                    </select>

                    {errors.salaryRange && touched.salaryRange && (
                      <p className="error-response ">{errors.salaryRange}</p>
                    )}
                  </div>
                  <div className="descriptionandinput">
                    <label htmlFor="description">
                      Write a description for your job
                    </label>
                    <textarea
                      id="description"
                      value={values.description}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`description-input h-48 w-full rounded border border-Neutral300_Border border-solid focus:outline text-Neutral300_Border pl-4 ${
                        errors.description && touched.description
                          ? "error-class border-destructive"
                          : ""
                      }`}
                    />
                    {errors.description && touched.description && (
                      <p className="error-response ">{errors.description}</p>
                    )}
                  </div>
                  <div className="requirementandinput">
                    <label htmlFor="requirement">
                      Write a requirement for your job
                    </label>
                    <textarea
                      id="requirement"
                      value={values.requirement}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`requirement-input h-48 w-full rounded border border-Neutral300_Border border-solid focus:outline text-Neutral300_Border pl-4 ${
                        errors.requirement && touched.requirement
                          ? "error-class border-destructive"
                          : ""
                      }`}
                    />
                    {errors.requirement && touched.requirement && (
                      <p className="error-response ">{errors.requirement}</p>
                    )}
                  </div>
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
                Post Job
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
