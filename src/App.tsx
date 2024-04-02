import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import StudentHomepage from "./components/studenthomepage";
import EmployerHomepage from "./components/employerhomepage";
import Signup from "./components/signup";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<StudentHomepage />} />
        <Route path="/employerhomepage" element={<EmployerHomepage />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;
