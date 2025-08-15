"use client"
import Image from "next/image";

interface LeagueRowProps {
  icon: string;
  name: string;
  score: number;
  sol?: number;
  isLast?: boolean;
}

export default function LeagueRow({ icon, name, score, sol, isLast }: LeagueRowProps) {
  return (
    <div
      className={`flex items-center justify-between px-6 py-4 ${
        !isLast ? "border-b border-neonOrange" : ""
      }`}
    >
      {/* Logo + Name */}
      <div className="flex items-center gap-4">
        <Image src={icon} alt={name} width={36} height={36} />
        <span className="font-voltec text-textWhite text-sm">{name}</span>
      </div>

      {/* Score + Skull */}
      <div className="flex items-center gap-2 justify-center ">
        <span className="text-textWhite font-['Press_Start_2P'] text-sm">{score}</span>
        <Image src="/icons/skull.svg" alt="Skull" width={20} height={20} />
      </div>

      {/* SOL column */}
      {sol !== undefined ? (
        <div className="flex items-center gap-2">
          <span className="text-white font-['Press_Start_2P'] text-sm">{sol}</span>
          <span className="text-textWhite font-['Press_Start_2P'] text-sm">SOL</span>
        </div>
      ) : (
        <div className="w-[64px]" /> 
      )}
    </div>
  );
}
