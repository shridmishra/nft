"use client";
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
      className={'flex items-center justify-between px-8 py-9 h-[144px] border-b-4 border-neonOrange mx-8'}
    >
      {/* Logo + Name */}
      <div className="flex items-center gap-6 min-w-[200px]">
        <Image src={icon} alt={name} width={36} height={36} />
        <span className="font-voltec text-white  text-3xl tracking-wide">
          {name}
        </span>
      </div>

      {/* Score + Skull */}
      <div className="flex items-center gap-3 min-w-[80px] justify-center">
        <span className="text-textWhite font-['Press_Start_2P'] text-lg">
          {score}
        </span>
        <Image src="/icons/skull.svg" alt="Skull" width={40} height={40} />
      </div>

      {/* SOL column */}
      <div className="flex items-center gap-2 min-w-[80px] justify-end">
        {sol !== undefined ? (
          <>
            <span className="text-textWhite font-['Press_Start_2P'] text-lg">
              {sol}
            </span>
            <span className="text-textWhite font-['Press_Start_2P'] text-lg">
              SOL
            </span>
          </>
        ) : (
          <div className="w-[64px]" />
        )}
      </div>
    </div>
  );
}
