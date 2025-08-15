import Image from "next/image";

export default function InfiniteSvgScroll() {
  return (
    <div className="w-full overflow-hidden bg-navy h-[125px] relative mt-24">
      <div className="flex animate-scroll">
        {/* First copy */}
        <div className="relative h-[125px] w-[1440px] flex-shrink-0">
          <Image
            
            src="/icons/neon-strip.svg"
            alt="Neon Strip"
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* Second copy for seamless loop */}
        <div className="relative h-[125px] w-[1440px] flex-shrink-0">
          <Image
            src="/icons/neon-strip.svg"
            alt="Neon Strip"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>
    </div>
  );
}
