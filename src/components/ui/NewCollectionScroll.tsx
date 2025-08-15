import React from "react";

const NewCollectionScroll = () => {
  return (
    <div className="overflow-hidden whitespace-nowrap bg-background py-4 border-y-2 ">
      <div className="animate-marquee inline-block">
        {Array(20)
          .fill("NEW COLLECTION")
          .map((text, i) => (
            <span
              key={i}
              className="mx-8 text-2xl font-megaton tracking-wider text-white font-extralight"
            >
              {text}
            </span>
          ))}
      </div>
    </div>
  );
};

export default NewCollectionScroll;
