import { useEffect, useMemo, useState } from "react";
import { supabase } from "../lib/supabaseClient";
import AdminLayout from "../components/AdminLayout";
export default function AdminDashboard() {
  const [bookings, setBookings] = useState([]);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    const { data } = await supabase
      .from("bookings")
      .select("*")
      .order("id", { ascending: false });

    setBookings(data || []);
  };

  const updateStatus = async (id, status) => {
    await supabase.from("bookings").update({ status }).eq("id", id);
    fetchBookings();
  };

  const deleteBooking = async (id) => {
    await supabase.from("bookings").delete().eq("id", id);
    fetchBookings();
  };

  const filtered = useMemo(() => {
    if (filter === "all") return bookings;
    return bookings.filter((b) => b.status === filter);
  }, [bookings, filter]);

  const stats = useMemo(() => {
    return {
      total: bookings.length,
      pending: bookings.filter((b) => b.status === "pending").length,
      confirmed: bookings.filter((b) => b.status === "confirmed").length,
      completed: bookings.filter((b) => b.status === "completed").length,
    };
  }, [bookings]);

  const getBadge = (status) => {
    const map = {
      pending: "#f59e0b",
      confirmed: "#3b82f6",
      completed: "#10b981",
    };
    return map[status] || "#64748b";
  };

  return (
    <AdminLayout>
    <div style={styles.page}>
      
      {/* HEADER */}
      <div style={styles.header}>
        <h1 style={styles.title}>Otto Studio Admin</h1>
        <p style={styles.subtitle}>Photography booking management system</p>
      </div>

      {/* STATS */}
      <div style={styles.statsGrid}>
        <div style={styles.statCard}>
          <p>Total</p>
          <h2>{stats.total}</h2>
        </div>
        <div style={styles.statCard}>
          <p>Pending</p>
          <h2>{stats.pending}</h2>
        </div>
        <div style={styles.statCard}>
          <p>Confirmed</p>
          <h2>{stats.confirmed}</h2>
        </div>
        <div style={styles.statCard}>
          <p>Completed</p>
          <h2>{stats.completed}</h2>
        </div>
      </div>

      {/* FILTERS */}
      <div style={styles.filterBar}>
        {["all", "pending", "confirmed", "completed"].map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            style={{
              ...styles.filterBtn,
              background: filter === f ? "#3b82f6" : "#1f2937",
            }}
          >
            {f.toUpperCase()}
          </button>
        ))}
      </div>

      {/* BOOKINGS GRID */}
      <div style={styles.grid}>
        {filtered.map((b) => (
          <div key={b.id} style={styles.card}>
            
            <div style={styles.cardTop}>
              <div>
                <h3 style={styles.name}>
                  {b.first_name} {b.last_name}
                </h3>
                <p style={styles.smallText}>{b.service}</p>
              </div>

              <span
                style={{
                  ...styles.badge,
                  background: getBadge(b.status),
                }}
              >
                {b.status || "pending"}
              </span>
            </div>

            <div style={styles.info}>
              <p>📞 {b.phone}</p>
              <p>📍 {b.location}</p>
            </div>

            <div style={styles.actions}>
              <button
                style={styles.btnBlue}
                onClick={() => updateStatus(b.id, "confirmed")}
              >
                Confirm
              </button>

              <button
                style={styles.btnGreen}
                onClick={() => updateStatus(b.id, "completed")}
              >
                Complete
              </button>

              <button
                style={styles.btnRed}
                onClick={() => deleteBooking(b.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
    </AdminLayout>
  );
}

/* ================= UI STYLES ================= */

const styles = {
  page: {
    padding: "30px",
    background: "#0b1220",
    minHeight: "100vh",
    color: "#e5e7eb",
    fontFamily: "Inter, sans-serif",
  },

  header: {
    marginBottom: "20px",
  },

  title: {
    fontSize: "28px",
    fontWeight: "700",
  },

  subtitle: {
    color: "#94a3b8",
    marginTop: "4px",
  },

  statsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
    gap: "15px",
    marginTop: "20px",
  },

  statCard: {
    background: "#111827",
    padding: "15px",
    borderRadius: "12px",
    border: "1px solid #1f2937",
  },

  filterBar: {
    marginTop: "20px",
    display: "flex",
    gap: "10px",
    flexWrap: "wrap",
  },

  filterBtn: {
    padding: "8px 14px",
    borderRadius: "8px",
    border: "none",
    color: "white",
    cursor: "pointer",
  },

  grid: {
    marginTop: "25px",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "20px",
  },

  card: {
    background: "#111827",
    border: "1px solid #1f2937",
    borderRadius: "16px",
    padding: "16px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.3)",
  },

  cardTop: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "start",
  },

  name: {
    margin: 0,
    fontSize: "18px",
  },

  smallText: {
    fontSize: "13px",
    color: "#94a3b8",
  },

  badge: {
    padding: "4px 10px",
    borderRadius: "999px",
    fontSize: "12px",
    color: "white",
    textTransform: "capitalize",
  },

  info: {
    marginTop: "10px",
    fontSize: "14px",
    color: "#cbd5e1",
    lineHeight: "1.6",
  },

  actions: {
    marginTop: "12px",
    display: "flex",
    gap: "8px",
    flexWrap: "wrap",
  },

  btnBlue: {
    background: "#3b82f6",
    border: "none",
    padding: "6px 10px",
    borderRadius: "8px",
    color: "white",
    cursor: "pointer",
  },

  btnGreen: {
    background: "#10b981",
    border: "none",
    padding: "6px 10px",
    borderRadius: "8px",
    color: "white",
    cursor: "pointer",
  },

  btnRed: {
    background: "#ef4444",
    border: "none",
    padding: "6px 10px",
    borderRadius: "8px",
    color: "white",
    cursor: "pointer",
  },
};