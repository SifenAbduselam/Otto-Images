import { useEffect, useState } from "react";
import { supabase } from "../lib/supabaseClient";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  const { data } = supabase.auth.onAuthStateChange((event) => {
    if (event === "SIGNED_OUT") {
      setSession(null);
    }
  });

  return () => data.subscription.unsubscribe();
}, []);

  useEffect(() => {
    let mounted = true;

    const getSession = async () => {
      const { data } = await supabase.auth.getSession();

      if (mounted) {
        setSession(data.session);
        setLoading(false);
      }
    };

    getSession();

    const { data: listener } = supabase.auth.onAuthStateChange(
      (_, session) => {
        setSession(session);
      }
    );

    return () => {
      mounted = false;
      listener.subscription.unsubscribe();
    };
  }, []);

  if (loading) return <p>Loading...</p>;

  if (!session) {
    return <Navigate to="/admin/login" replace />;
  }

  return children;
}