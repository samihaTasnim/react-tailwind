import "./App.css";
import Classes from "./pages/Classes";
import Courses from "./pages/Courses";
import Dashboard from "./pages/Dashboard";
import Calendar  from "./pages/Calendar";
import Layout from './pages/Layout'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/classes" element={<Classes />} />
          <Route path="/calendar" element={<Calendar />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
