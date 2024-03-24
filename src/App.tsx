import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import StudentHomepage from "./components/studenthomepage";
import EmployerHomepage from "./components/employerhomepage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<StudentHomepage />} />
        <Route path="/EmployerHomepage" element={<EmployerHomepage />} />
      </Routes>
    </Router>
  );
}

export default App;
