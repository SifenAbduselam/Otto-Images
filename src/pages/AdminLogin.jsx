import { useState } from "react";
import { supabase } from "../lib/supabaseClient";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const login = async () => {
    setLoading(true);
    setError("");

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    setLoading(false);

    if (error) {
      setError(error.message);
      return;
    }

    window.location.href = "/admin";
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h1 style={styles.title}>Admin Access</h1>
        <p style={styles.subtitle}>Photography booking system</p>

        {error && <div style={styles.error}>{error}</div>}

        <input
          style={styles.input}
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          style={styles.input}
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={login}
          disabled={loading}
          style={{
            ...styles.button,
            opacity: loading ? 0.6 : 1,
            cursor: loading ? "not-allowed" : "pointer",
          }}
        >
          {loading ? "Signing in..." : "Login"}
        </button>
      </div>
    </div>
  );
}

/* ================= STYLES ================= */

const styles = {
  page: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#0b1220",
    fontFamily: "Inter, sans-serif",
  },

  card: {
    width: "100%",
    maxWidth: "360px",
    padding: "30px",
    background: "#111827",
    border: "1px solid #1f2937",
    borderRadius: "16px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
    color: "#e5e7eb",
  },

  title: {
    margin: 0,
    fontSize: "24px",
  },

  subtitle: {
    marginTop: "5px",
    marginBottom: "20px",
    fontSize: "13px",
    color: "#94a3b8",
  },

  input: {
    width: "100%",
    padding: "10px",
    marginBottom: "12px",
    borderRadius: "8px",
    border: "1px solid #1f2937",
    background: "#0f172a",
    color: "white",
    outline: "none",
  },

  button: {
    width: "100%",
    padding: "10px",
    borderRadius: "8px",
    border: "none",
    background: "#3b82f6",
    color: "white",
    fontWeight: "bold",
  },

  error: {
    background: "#7f1d1d",
    color: "#fecaca",
    padding: "8px",
    borderRadius: "8px",
    marginBottom: "10px",
    fontSize: "12px",
  },
};