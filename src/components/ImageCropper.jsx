import React, { useRef, useState } from "react";
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";

export default function ImageCropper({ onCropComplete }) {
  const cropperRef = useRef(null);
  const [image, setImage] = useState(null);

  const onFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setImage(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleCrop = () => {
    const cropper = cropperRef.current?.cropper;
    if (cropper) {
      const canvas = cropper.getCroppedCanvas({
        width: 300,
        height: 300,
      });
      canvas.toBlob((blob) => {
        onCropComplete(blob);
      }, "image/jpeg");
    }
  };

  return (
    <div className="space-y-4">
      {!image && (
        <input
          type="file"
          accept="image/*"
          onChange={onFileChange}
          className="text-sm text-gray-300"
        />
      )}

      {image && (
        <>
          <Cropper
            ref={cropperRef}
            src={image}
            aspectRatio={1}
            guides={false}
            className="w-full h-64 rounded-lg"
            viewMode={1}
          />
          <div className="flex gap-3">
            <button
              onClick={handleCrop}
              className="px-4 py-2 bg-indigo-600 rounded-lg text-white hover:bg-indigo-700"
            >
              Crop & Upload
            </button>
            <button
              onClick={() => setImage(null)}
              className="px-4 py-2 bg-gray-700 rounded-lg text-white hover:bg-gray-600"
            >
              Cancel
            </button>
          </div>
        </>
      )}
    </div>
  );
}
