import { Link, useLocation } from "react-router-dom";
import { supabase } from "../lib/supabaseClient";

export default function AdminLayout({ children }) {
  const location = useLocation();
  const handleLogout = async () => {
  await supabase.auth.signOut();
  window.location.href = "/admin/login";
};

  return (
    <div style={styles.container}>
      
      {/* SIDEBAR */}
      <div style={styles.sidebar}>
        <h2 style={styles.logo}>Otto Studio</h2>


     

        <Link style={link(location.pathname === "/admin")} to="/admin">
          Dashboard
        </Link>
      <button
  onClick={handleLogout}
  style={{
    marginTop: "auto",
    background: "#ef4444",
    color: "white",
    border: "none",
    borderRadius: "8px",
    padding: "8px 12px",
    cursor: "pointer",
    fontSize: "14px",
  }}
>
  Logout
</button>

       

        
      </div>

      {/* MAIN */}
      <div style={styles.main}>
        {children}
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    minHeight: "100vh",
    background: "#0b1220",
    color: "white",
    fontFamily: "Inter, sans-serif",
  },

  sidebar: {
    width: "220px",
    background: "#0f172a",
    padding: "20px",
    borderRight: "1px solid #1f2937",
    display: "flex",
    flexDirection: "column",
   
  },

  logo: {
    marginBottom: "20px",
    fontSize: "20px",
  },

  main: {
    flex: 1,
    padding: "25px",
  },
};

const link = (active) => ({
  color: active ? "#3b82f6" : "#cbd5e1",
  textDecoration: "none",
  padding: "8px",
  borderRadius: "8px",
  background: active ? "#1e293b" : "transparent",
});