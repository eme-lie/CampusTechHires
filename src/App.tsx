import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import StudentHomepage from "@/components/Pages/studenthomepage";
import EmployerHomepage from "@/components/Pages/employerhomepage";
import Signup from "@/components/Pages/signupPage";
import Home from "@/components/Pages/home";
import { PostJobPage } from "@/components/Forms/postjobform";
import { Job } from "@/components/Pages/jobdetailspage";
import { EmployerDashboard } from "@/components/employerdashboard";
import Login from "@/components/Pages/loginPage";
import { StudentDashboard } from "@/components/studentdashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<StudentHomepage />} />
        <Route path="/employerhomepage" element={<EmployerHomepage />} />
        <Route path="/studentdashboard" element={<StudentDashboard />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/postjob" element={<PostJobPage />} />
        <Route path="/jobdetails/:id" element={<Job />} />
        <Route path="/employerdashboard" element={<EmployerDashboard />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
