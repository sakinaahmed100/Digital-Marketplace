import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { login as loginUser } from "../../services/auth";
import styles from "../../styles/Login.module.css"; // Using CSS Modules

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const { login } = useAuth(); // Auth context function
  const navigate = useNavigate();

  const handleLogin = async () => {
    setError(null);
    if (!email || !password) {
      setError("All fields are required.");
      return;
    }

    try {
      setLoading(true);
      const user = await loginUser(email, password); // Fetch from API

      if (!user || !user.role) {
        throw new Error("Invalid response from server.");
      }

      // Save role in context
      login(user.role);

      // Store tokens securely
      localStorage.setItem("accessToken", user.access);
      localStorage.setItem("refreshToken", user.refresh);

      // Redirect based on role
      navigate(user.role === "admin" ? "/admin/dashboard" : "/vendor/dashboard");
    } catch (err: any) {
      setError(err.message || "Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.loginContainer}>
      <h2>Login</h2>
      {error && <p className={styles.error}>{error}</p>}
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
      <button onClick={handleLogin} disabled={loading}>{loading ? "Logging in..." : "Login"}</button>
    </div>
  );
};

export default Login;
