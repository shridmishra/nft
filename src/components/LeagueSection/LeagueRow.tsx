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
      className={`
        flex flex-col items-start gap-4 px-4 py-6 border-b-4 border-neonOrange mx-4
        lg:flex-row lg:items-center lg:justify-between lg:px-8 lg:py-9 lg:h-[144px] lg:gap-0 lg:mx-8
      `}
    >
      {/* Logo + Name */}
      <div className="flex items-center gap-4 min-w-0 lg:gap-6 lg:min-w-[200px]">
        <Image src={icon} alt={name} width={36} height={36} />
        <span className="font-voltec text-white text-xl tracking-wide lg:text-3xl">
          {name}
        </span>
      </div>

      {/* Score + Skull */}
      <div className="flex items-center gap-2 justify-start lg:gap-3 lg:justify-center lg:min-w-[80px]">
        <span className="text-textWhite font-['Press_Start_2P'] text-sm lg:text-lg">
          {score}
        </span>
        <Image
          src="/icons/skull.svg"
          alt="Skull"
          width={32}
          height={32}
          className="lg:w-10 lg:h-10"
        />
      </div>

      {/* SOL column */}
      <div className="flex items-center gap-1 justify-start lg:gap-2 lg:justify-end lg:min-w-[80px]">
        {sol !== undefined ? (
          <>
            <span className="text-textWhite font-['Press_Start_2P'] text-sm lg:text-lg">
              {sol}
            </span>
            <span className="text-textWhite font-['Press_Start_2P'] text-sm lg:text-lg">
              SOL
            </span>
          </>
        ) : (
          <div className="w-[40px] lg:w-[64px]" />
        )}
      </div>
    </div>
  );
}
