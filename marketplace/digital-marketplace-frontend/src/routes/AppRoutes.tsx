import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import VendorDashboard from "../pages/Vendor/Dashboard";
import AdminDashboard from "../pages/Admin/Dashboard";
import Login from "../pages/Auth/Login";
import HomePage from "../pages/HomePage";// Import your HomePage component
import Navbar from "../components/Navbar";
import Signup from "../pages/Auth/SignUp";

const AppRoutes = () => {
  const isAuthenticated = false; // Replace with actual auth state
  const role = ""; // Replace with actual user role
  return (
    <>
    <Navbar isAuthenticated={isAuthenticated} role={role} ></Navbar>
    <Routes>
      <Route path="/" element={<HomePage />} /> {/* Add this line */}
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup/>} />

      {/* Role-based Protected Routes */}
      <Route 
        path="/admin/dashboard" 
        element={
          <ProtectedRoute requiredRole="admin">
            <AdminDashboard />
          </ProtectedRoute>
        } 
      />
      <Route 
        path="/vendor/dashboard" 
        element={
          <ProtectedRoute requiredRole="vendor">
            <VendorDashboard />
          </ProtectedRoute>
        } 
      />
    </Routes>
    </>
  );
};

export default AppRoutes;