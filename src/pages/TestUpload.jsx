// src/pages/TestUpload.jsx
import { useState } from "react";

export default function TestUpload() {
  const [image, setImage] = useState(null);

  const handleFileChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!image) return alert("Select an image first!");

    const formData = new FormData();
    formData.append("file", image);
    formData.append("upload_preset", "client_upload"); // your preset
    formData.append("cloud_name", "dax6ac5zh");       // your cloud name

    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dax6ac5zh/image/upload",
      {
        method: "POST",
        body: formData,
      }
    );

    const data = await res.json();
    alert("Uploaded! URL: " + data.secure_url);
  };

  return (
    <div className="p-6 bg-black min-h-screen text-white flex flex-col items-center justify-center gap-4">
      <h1 className="text-3xl font-bold text-[#C8A35F]">Test Upload</h1>
      <input type="file" onChange={handleFileChange} />
      <button
        onClick={handleUpload}
        className="px-6 py-2 bg-[#C8A35F] text-black font-bold rounded"
      >
        Upload Image
      </button>
    </div>
  );
}
