import React from "react";

interface DualColorTextProps {
  firstText: string;
  secondText: string;
  whiteFirst?: boolean; // if true => first is white, second is green; else reversed
}

const DualColorText: React.FC<DualColorTextProps> = ({
  firstText,
  secondText,
  whiteFirst = true,
}) => {
  return (
    <span className="  lg:text-xs  font-orbitron">
      <span
        className={whiteFirst ? "text-white" : "text-[#21E786]"}
      >
        {firstText}
      </span>{" "}
      <span
        className={whiteFirst ? "text-[#21E786]" : "text-white"}
      >
        {secondText}
      </span>
    </span>
  );
};

export default DualColorText;
