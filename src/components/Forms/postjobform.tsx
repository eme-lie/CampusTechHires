import { useFormik } from "formik";
import { postJobFormSchema } from "./../schemas/postJobFormSchema";
import { FormikHelpers } from "formik";
import { addDoc, collection } from "firebase/firestore";
import { db, auth } from "@/firebase/firebase";

const locations = [
  "London",
  "Edinburgh",
  "Manchester",
  "Birmingham",
  "Liverpool",
  "Glasgow",
];

const hoursPerWeek = [
  "16-20hrs",
  "16-24hrs",
  "25-30hrs",
  "31-35hrs",
  "35-40hrs ",
];

const salaryRanges = ["10-12pph", "13-15pph", "16-20pph"];

interface MyFormValues {
  // Define your form fields here
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
  const currentUser = auth.currentUser;
  const colRef = collection(db, "jobs");
  if (currentUser) {
    try {
      await addDoc(colRef, {
        title: values.title,
        location: values.location,
        description: values.description,
        requirement: values.requirement,
        hourPerWeek: values.hourPerWeek,
        salaryRange: values.salaryRange,
        companyName: values.companyName,
        employerId: currentUser.uid,
      });
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  } else {
    console.log("No user is signed in.");
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
    validationSchema: postJobFormSchema,
    onSubmit,
  });
  return (
    <div>
      <div className="form-holder flex flex-col">
        <form
          id="post-job-form"
          onSubmit={handleSubmit}
          className="bg-Neutral400 w-full flex flex-col gap-y-4 rounded-tr rounded-br"
        >
          <div className="main-form bg-Neutral400 flex flex-col justify-between h-full lg:pb-4 lg:w-3/4 md:pb-4 md:w-3/4 md:pt-8 md:pr-4 md:pb-4 md:pl-16 lg:pt-8 lg:pr-4 lg:pb-4 lg:pl-24 pl-4">
            <div className="title-and-inputs-and-button flex flex-col pt-6 pr-8 pb-8 pl-8 gap-y-4">
              <p className="title text-lg md:text-xl lg:text-2xl font-medium">
                Create a new Job Post
              </p>
              <div className="first-section flex flex-col gap-y-6">
                <div className="inputs flex flex-col gap-y-8">
                  <div className="companyNameandinput flex flex-col gap-y-1 md:gap-y-3">
                    <label
                      htmlFor="companyName"
                      className="text-sm lg:text-lg font-medium"
                    >
                      Write your company name
                    </label>
                    <input
                      type="text"
                      id="companyName"
                      value={values.companyName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Company Name"
                      className={`title-input h-12 w-full rounded border border-Neutral300_Border border-solid focus:outline text-Neutral900_Text_main pl-4 text-sm lg:text-lg ${
                        errors.companyName && touched.companyName
                          ? "error-class border-destructive"
                          : ""
                      }`}
                    />
                    {errors.companyName && touched.companyName && (
                      <p className="error-response text-sm lg:text-lg text-destructive">
                        {errors.companyName}
                      </p>
                    )}
                  </div>
                  <div className="titleandinput">
                    <label
                      htmlFor="title"
                      className="text-sm lg:text-lg font-medium"
                    >
                      Write a title for your job ad
                    </label>
                    <input
                      type="text"
                      id="title"
                      value={values.title}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Title"
                      className={`title-input h-12 w-full rounded border border-Neutral300_Border border-solid focus:outline text-Neutral900_Text_main pl-4 text-sm lg:text-lg  ${
                        errors.title && touched.title
                          ? "error-class border-destructive"
                          : ""
                      }`}
                    />
                    {errors.title && touched.title && (
                      <p className="error-response text-sm lg:text-lg text-destructive">
                        {errors.title}
                      </p>
                    )}
                  </div>
                  <div className="locationandinput">
                    <label
                      htmlFor="location"
                      className="text-sm lg:text-lg font-medium"
                    >
                      Location
                    </label>
                    <select
                      id="location"
                      value={values.location}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`title-input h-12 w-full rounded border border-Neutral300_Border border-solid focus:outline text-Neutral900_Text_main pl-4 text-sm lg:text-lg ${
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
                      <p className="error-response text-sm lg:text-lg text-destructive">
                        {errors.location}
                      </p>
                    )}
                  </div>
                  <div className="hoursPerWeekandinput">
                    <label
                      htmlFor="hourPerWeek"
                      className="text-sm lg:text-lg font-medium"
                    >
                      Hours Per Week
                    </label>
                    <select
                      id="hourPerWeek"
                      value={values.hourPerWeek}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`hourPerWeek-input h-12 w-full rounded border border-Neutral300_Border border-solid focus:outline text-Neutral900_Text_main pl-4 text-sm lg:text-lg ${
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
                      <p className="error-response text-sm lg:text-lg text-destructive">
                        {errors.hourPerWeek}
                      </p>
                    )}
                  </div>
                  <div className="salaryRangesandinput">
                    <label
                      htmlFor="salaryRange"
                      className="text-sm lg:text-lg font-medium"
                    >
                      Salary Ranges
                    </label>
                    <select
                      id="salaryRange"
                      value={values.salaryRange}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`salaryRange-input h-12 w-full rounded border border-Neutral300_Border border-solid focus:outline text-Neutral900_Text_main pl-4 text-sm lg:text-lg ${
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
                      <p className="error-response text-sm lg:text-lg text-destructive">
                        {errors.salaryRange}
                      </p>
                    )}
                  </div>
                  <div className="descriptionandinput">
                    <label
                      htmlFor="description"
                      className="text-sm lg:text-lg font-medium"
                    >
                      Write a description for your job
                    </label>
                    <textarea
                      id="description"
                      value={values.description}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`description-input h-48 w-full rounded border border-Neutral300_Border border-solid focus:outline text-Neutral900_Text_main pt-2 pl-2 pr-2 md:pt-4 md:pl-4 md:pr-4 text-sm lg:text-lg ${
                        errors.description && touched.description
                          ? "error-class border-destructive"
                          : ""
                      }`}
                    />
                    {errors.description && touched.description && (
                      <p className="error-response text-sm lg:text-lg text-destructive">
                        {errors.description}
                      </p>
                    )}
                  </div>
                  <div className="requirementandinput">
                    <label
                      htmlFor="requirement"
                      className="text-sm lg:text-lg font-medium"
                    >
                      Write a requirement for your job
                    </label>
                    <textarea
                      id="requirement"
                      value={values.requirement}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`requirement-input h-48 w-full rounded border border-Neutral300_Border border-solid focus:outline text-Neutral900_Text_main pt-2 pl-2 pr-2 md:pt-4 md:pl-4 md:pr-4 text-sm lg:text-lg ${
                        errors.requirement && touched.requirement
                          ? "error-class border-destructive"
                          : ""
                      }`}
                    />
                    {errors.requirement && touched.requirement && (
                      <p className="error-response text-sm lg:text-lg text-destructive">
                        {errors.requirement}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={
                  isSubmitting
                    ? "bg-Neutral900_Text_main bg-opacity-50 pt-2 pr-3 pb-3 pl-3 md:pt-3 md:pr-4 md:pb-3 md:pl-4 rounded text-Neutral100_Base_Background"
                    : "bg-primaryColor text-Neutral100_Base_Background pt-2 pr-3 pb-3 pl-3 md:pt-3 md:pr-4 md:pb-3 md:pl-4 rounded font-medium text-sm md:text-lg"
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
