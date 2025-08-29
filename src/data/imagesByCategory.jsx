export async function fetchImagesByCategory(folder) {
  try {
    const res = await fetch(`/api/images/${folder}`);
    if (!res.ok) throw new Error(`Failed to fetch ${folder}`);
    const data = await res.json();
    return data || [];
  } catch (e) {
    console.error("fetchImagesByCategory error:", e);
    return [];
  }
}
