# CampusTechHires

CampusTechHires is a job advert and application platform for university students studying IT courses and seeking part time-entry level job roles in software
development. Employers post job adverts and students can apply for these jobs on the platform

# CampusTechHires currently comprises of a

1. Student and Employer Landing page
2. Sign Up and Login Page
3. A Home page home page where the available jobs are displayed
   can only be accessed when a user is logged in
4. A job details page which shows the complete details of each
   specific job
5. A job application form as well
6. An employer page with 3 views; Post Job view/form, Active jobs &
   Applications

# Development of CampusTechHires

CampusTechHires was built using the react library. It is a JavaScript library for building user interfaces, developed by Facebook. React provides a component-based and reusable approach to building user interfaces. One of the key features of React is its flexibility and unopinionated nature. It leaves many design decisions, such as state management, routing, and styling, up to developers to choose and implement based on their preferences and project requirements.

Due to react’s unopinionated nature;
**For the frontend of CampusTechHires:**
• I used the shadcn/ui component library to create my components and also I leveraged tailwind CSS to ensure a robust styling framework for CampusTechHires. It is important to note that tailwind css and shadcn/ui are compatible and this made the development of the user interface pretty easy.

**For Best Practices and Clean Code:**
• I utilized Typescript for enhanced type safety and code clarity. TypeScript is a strongly typed programming language that builds on JavaScript, and it gives developers better tooling at any scale. It helps developers to describe the shape of objects and functions in their code.

**For Global State Management**
• For global state management, I used the redux tool kit (RTK) and react-redux library. The redux toolkit is way easier to use compared to redux for global state management due to the following reasons:

- It is simple: Includes utilities to simplify common use cases like store setup, creating reducers, immutable update logic, and more.

- It is opinionated: Provides good defaults for store setup out of the box, and includes the most commonly used Redux addons built-in.

- It is powerful:It takes inspiration from libraries like Immer and Autodux to let you write "mutative" immutable update logic, and even create entire "slices" of state automatically.

- Effective: It lets you focus on the core logic your app needs, so you can do more work with less code.

**Form Validation:**
I employed Formik to streamline and to make form validation processes robust. It helps with the three most annoying parts:

- Getting values in and out of form state

- Validation and error messages

- Handling form submission

**Backend Implementation**
• Finally I used Firebase (a backend as a service that provides a lot of
software development kits) as a reliable solution for authentication
and database management tasks

# Deployment of CampusTechHires

CampusTechHires was deployed using Netlify. The live deployment URL of the CampusTechHires is https://campustechhires.netlify.app/
