import { useEffect, useState } from "react";
import { supabase } from "../lib/supabaseClient";

export default function AdminDashboard() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    const { data, error } = await supabase
      .from("bookings")
      .select("*")
      .order("id", { ascending: false });

    if (error) {
      console.log(error);
    } else {
      setBookings(data);
    }
  };

  const logout = async () => {
    await supabase.auth.signOut();
    window.location.href = "/admin/login";
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Admin Dashboard</h1>

      <button onClick={logout}>Logout</button>

      <hr />

      {bookings?.map((b) => (
        <div key={b.id} style={{ border: "1px solid #ccc", margin: 10, padding: 10 }}>
          <p><b>Name:</b> {b.first_name} {b.last_name}</p>
          <p><b>Phone:</b> {b.phone}</p>
          <p><b>Location:</b> {b.location}</p>
          <p><b>Service:</b> {b.service}</p>
          <p><b>Status:</b> {b.status}</p>
        </div>
      ))}
    </div>
  );
}