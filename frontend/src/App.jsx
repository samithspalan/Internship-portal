import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import Login from "./pages/auth/login";
import Register from "./pages/auth/register";
import StudentDashboard from "./pages/students/dashboard";
import CompanyDashboard from "./pages/company/dashboard";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userType, setUserType] = useState(null); // 'student' or 'company'

  // Protected Route component
  const ProtectedRoute = ({ children, allowedUserType }) => {
    if (!isAuthenticated) {
      return <Navigate to="/login" replace />;
    }
    if (allowedUserType && userType !== allowedUserType) {
      return <Navigate to="/" replace />;
    }
    return children;
  };

  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route 
          path="/login" 
          element={
            <Login 
              setIsAuthenticated={setIsAuthenticated} 
              setUserType={setUserType} 
            />
          } 
        />
        <Route 
          path="/register" 
          element={
            <Register 
              setIsAuthenticated={setIsAuthenticated} 
              setUserType={setUserType} 
            />
          } 
        />

        {/* Protected Routes */}
        <Route
          path="/student"
          element={
            <ProtectedRoute allowedUserType="student">
              <StudentDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/company"
          element={
            <ProtectedRoute allowedUserType="company">
              <CompanyDashboard />
            </ProtectedRoute>
          }
        />

        {/* Default Route */}
        <Route
          path="/"
          element={
            isAuthenticated ? (
              <Navigate
                to={userType === "student" ? "/student" : "/company"}
                replace
              />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />

        {/* 404 Route */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
