// src/components/UploadImage.jsx
import { useState } from "react";

export default function UploadImage() {
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const cloudName = "dax6ac5zh";       // Your Cloudinary cloud name
  const uploadPreset = "client_upload"; // Your unsigned preset

  const handleUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setLoading(true);

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", uploadPreset);

    try {
      const res = await fetch(
        `https://api.cloudinary.com/v1_1/${cloudName}/upload`,
        {
          method: "POST",
          body: formData,
        }
      );
      const data = await res.json();
      setImageUrl(data.secure_url); // This is the uploaded image URL
      alert("Upload successful!");
    } catch (err) {
      console.error("Upload error:", err);
      alert("Upload failed!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 bg-gray-900 text-white rounded-lg max-w-md mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-4">Upload an Image</h2>
      <input
        type="file"
        onChange={handleUpload}
        className="mb-4"
        accept="image/*"
      />
      {loading && <p>Uploading...</p>}
      {imageUrl && (
        <div>
          <p className="mb-2">Uploaded Image:</p>
          <img src={imageUrl} alt="Uploaded" className="w-full rounded-lg" />
          <p className="mt-2 text-sm text-gray-300 break-all">{imageUrl}</p>
        </div>
      )}
    </div>
  );
}
