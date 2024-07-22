import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Profile from './components/Profile';
import Experience from './components/Experience';
import Competences from './components/Competences';
import Sidebar from './components/Sidebar';
function App() {
  return (
    <Router>
    <div className="App">
      <Sidebar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Profile />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/competences" element={<Competences />} />
        </Routes>
      </div>
    </div>
  </Router>
  );
}

export default App;
