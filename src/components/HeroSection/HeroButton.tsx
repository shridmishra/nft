interface GameButtonProps {
  text: string;
  onClick?: () => void;
}

export default function GameButton({ text, onClick }: GameButtonProps) {
  return (
    <button
      onClick={onClick}
      className="relative px-12 py-4 text-[#E8FF00] hover:text-white font-orbitron tracking-wider border-4 border-white bg-transparent uppercase font-extrabold text-xs cursor-pointer"
      style={{
        clipPath:
          "polygon(30px 0, calc(100% - 0px) 0, 100% 0px, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%, 0 20px)"
      }}
    >
      {/* Inner slanted lines */}
      <span
        className="absolute block w-10 h-1 bg-white top-0"
        style={{
          top: "4px",
          left: "-6px",
          transform: "rotate(145deg)"
        }}
      ></span>
      <span
        className="absolute block w-6 h-1 bg-white top-0"
        style={{
          top: "12px",
          left: "6px",
          transform: "rotate(145deg)"
        }}
      ></span>
      <span
        className="absolute block w-8 h-1 bg-white"
        style={{
          bottom: "4px",
          right: "-7px",
          transform: "rotate(135deg)"
        }}
      ></span>
      <span
        className="absolute block w-6 h-1 bg-white"
        style={{
          bottom: "10px",
          right: "4px",
          transform: "rotate(135deg)"
        }}
      ></span>

      {text}
    </button>
  );
}
