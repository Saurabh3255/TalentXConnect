import './App.css';
import { useState } from 'react';
import Header from './componenets/Header';
import Login from './componenets/Login';
import SideBar from './componenets/Sidebar/SideBar';
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Register from './componenets/Register';
import Dashboard from './componenets/Sidebar/Dashboard';
import Profile from './componenets/Sidebar/Profile';
import Interview from './componenets/Sidebar/Interview';
import Analytics from './componenets/Sidebar/Analytics'
import AppliedJob from './componenets/Sidebar/AppliedJob';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleRegister = () => {
    setIsLoggedIn(true);
  };

  return (
    <Router>
      <div>
        <Routes>
          {!isLoggedIn ? (
            <>
              <Route path="/login" element={<Login onLogin={handleLogin} />} />
              <Route path="/register" element={<Register onRegister={handleRegister} />} />
              <Route path="*" element={<Navigate to="/login" />} />
            </>
          ) : (
            <Route
              path="/*" // This allows for matching nested routes
              element={
                <div className="flex h-screen">
                  <SideBar /> {/* Sidebar component, persistent */}
                  <div className="flex-grow">
                    <Header /> {/* Header component, persistent */}
                    <Routes>
                      <Route path="/" element={<Dashboard />} />
                      <Route path="/profile" element={<Profile />} />
                      <Route path="/appliedjob" element={<AppliedJob />} />
                      <Route path="/interview" element={<Interview />} />
                      <Route path="/analytics" element={<Analytics />} />
                    </Routes>
                  </div>
                </div>
              }
            />
          )}
        </Routes>
      </div>
    </Router>
  );
}
export default App;
