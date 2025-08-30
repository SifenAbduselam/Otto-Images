// utils/fetchImages.js

const BASE_URL =
  window.location.hostname === "localhost"
    ? "http://localhost:5000"
    : "https://otto-images-render.vercel.app";

export async function fetchImagesByCategory(folder) {
  try {
    const res = await fetch(`${BASE_URL}/images/${folder}`);
    if (!res.ok) throw new Error(`Failed to fetch ${folder}`);
    const data = await res.json();
    return data || [];
  } catch (e) {
    console.error("fetchImagesByCategory error:", e);
    return [];
  }
}
