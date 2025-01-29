import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { login } from "../../services/auth";
import styles from "../../styles/Login.module.css"; // Using CSS Modules

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async () => {
    setError(null); // Reset error
    if (!email || !password) {
      setError("All fields are required.");
      return;
    }

    try {
      setLoading(true);
      const user = await login(email, password); // Call API
      login(user.role); // Save role in AuthContext

      // Redirect based on role
      navigate(user.role === "admin" ? "/admin/dashboard" : "/vendor/dashboard");
    } catch (err) {
      setError(err.message);
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
