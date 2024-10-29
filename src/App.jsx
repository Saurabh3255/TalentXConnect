import './App.css';
import { useState } from 'react';
import Header from './componenets/Header';
import Login from './componenets/Login';
import Body from './componenets/Body';
import SideBar from './componenets/SideBAr';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Register from './componenets/Register';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true); 
  };

const handleRegister =()=>{
    setIsLoggedIn(true);
}

  return (
    <div>
     <BrowserRouter>
        <Routes>
          {!isLoggedIn ? (
            <>
              
              <Route path="/login" element={<Login onLogin={handleLogin} />} />
             
              <Route path="/register" element={<Register onRegister={handleRegister} />} />
              
              <Route path="*" element={<Navigate to="/login" />} />
            </>
          ) : (
            <>
              {/* Authenticated routes with Sidebar and Header */}
              <Route
                path="/"
                element={
                  <div className="flex h-screen">
                    <SideBar /> {/* Sidebar component */}
                    <div className="flex-grow">
                      <Header /> {/* Header component */}
                      <Body /> {/* Main content */}
                    </div>
                  </div>
                }
              />
              
              {/* Redirect to Dashboard (/) if the user tries to access login/register when already logged in */}
              <Route path="*" element={<Navigate to="/" />} />
            </>
          )}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
