import React, { useState } from "react";

function ImagesPresentation({ images = [] }) {
  const [selectedImage, setSelectedImage] = useState(images[0] || "");

  return (
    <div className="flex flex-col gap-2 lg:flex-row border-b border-gray-300 lg:mt-14  w-[90%] mx-auto">
      <div className="h-60 lg:w-[70%] lg:h-[350px] flex items-center justify-center">
        <img
          src={selectedImage}
          alt="Selected"
          className="object-cover  rounded"
        />
      </div>

      <div className="lg:max-h-[400px] lg:w-[30%] overflow-x-auto lg:overflow-y-auto scrollbar-transparent">
        <div className="flex lg:grid lg:grid-cols-1 gap-2">
          {images.map((img, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(img)}
              className={`border-1 ${
                selectedImage === img ? "border-red-500" : "border-transparent"
              } rounded overflow-hidden flex items-center justify-center min-w-[120px] lg:min-w-0`}
            >
              <img
                src={img}
                alt={`Thumbnail ${index + 1}`}
                className="object-cover lg:h-32"
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ImagesPresentation;
