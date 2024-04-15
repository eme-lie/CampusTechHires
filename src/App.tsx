import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import StudentHomepage from "./components/studenthomepage";
import EmployerHomepage from "./components/employerhomepage";
import Signupp from "./components/signupp";
import Home from "./components/home";
import { PostJobPage } from "./components/postjobpage";
import { Job } from "./components/jobdetails";
import { Employerpage } from "./components/employerpage";
// import { AuthUserProvider } from "src/contexts/authContext/index.tsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/studenthomepage" element={<StudentHomepage />} />
        <Route path="/employerhomepage" element={<EmployerHomepage />} />
        <Route path="/signupp" element={<Signupp />} />
        <Route path="/home" element={<Home />} />
        <Route path="/postjob" element={<PostJobPage />} />
        <Route path="/jobdetails/:id" element={<Job />} />
        <Route path="/employerpage" element={<Employerpage />} />
      </Routes>
    </Router>
  );
}

export default App;
