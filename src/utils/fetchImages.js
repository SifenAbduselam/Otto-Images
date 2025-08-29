const isLocal = window.location.hostname === "localhost";

export async function fetchImagesByCategory(folder) {
  const baseUrl = isLocal
    ? "http://localhost:5000" // your local backend
    : ""; // empty string means same origin on Vercel (/api/...)

  try {
    const res = await fetch(`${baseUrl}/images/${folder}`);
    if (!res.ok) throw new Error(`Backend list failed (${res.status})`);
    const data = await res.json();
    return data || [];
  } catch (e) {
    console.error("fetchImagesByCategory error:", e);
    return [];
  }
}
