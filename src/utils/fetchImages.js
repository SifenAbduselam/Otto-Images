// src/utils/fetchImages.js
export async function fetchImagesByCategory(folder) {
  try {
    const res = await fetch(`http://localhost:5000/images/${folder}`);
    if (!res.ok) throw new Error(`Backend list failed (${res.status})`);
    const data = await res.json();
    return data.images || [];
  } catch (e) {
    console.error("fetchImagesByCategory error:", e);
    return [];
  }
}
