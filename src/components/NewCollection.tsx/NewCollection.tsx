import React from "react";
import NewCollectionScroll from "../ui/NewCollectionScroll";
import Image from "next/image";

const images = [
  "/images/image-placeholder.png",
  "/images/image-placeholder.png",
  "/images/image-placeholder.png",
  "/images/image-placeholder.png",
  "/images/image-placeholder.png",
  "/images/image-placeholder.png",
  "/images/image-placeholder.png",
  "/images/image-placeholder.png",
];

const NewCollection = () => {
  return (
    <div className="py-8">
      {/* Infinite scroll banner */}
      <NewCollectionScroll />

      <div className="px-6 py-4  space-y-8">
        {Array.from({ length: Math.ceil(images.length / 4) }, (_, rowIndex) => {
          const rowImages = images.slice(rowIndex * 4, rowIndex * 4 + 4);

          return (
            <div key={rowIndex} className="space-y-6">
              {/* Fixed 4-column layout */}
              <div className="grid grid-cols-4 gap-6">
                {rowImages.map((src, idx) => (
                  <Image
                    key={idx}
                    src={src}
                    width={312}
                    height={466}
                    alt="image-placeholder"
                    className=" object-cover"
                  />
                ))}
              </div>

              {/* Separator */}
              <div className="border-t border-gray-300" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default NewCollection;
