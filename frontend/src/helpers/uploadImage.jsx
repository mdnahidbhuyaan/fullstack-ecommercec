const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
const uploadPreset = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET;

const UploadImage = async (image) => {
  const formData = new FormData();

  formData.append("file", image);
  formData.append("upload_preset", uploadPreset);

  const dataResponse = await fetch(
    `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
    {
      method: "POST",
      body: formData,
    },
  );

  const result = await dataResponse.json();

  if (!dataResponse.ok) {
    console.log("Cloudinary Error:", result);
    throw new Error(result.error?.message || "Image upload failed");
  }

  return result;
};

export default UploadImage;
