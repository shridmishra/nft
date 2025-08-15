import DualColorText from "../ui/DualColorText";
import GameButton from './HeroButton';

export default function Hero() {
  return (<div className="px-[146px] py-[177px] bg-hero">
     <section className="relative flex items-center justify-center bg-hero min-h-screen w-full overflow-hidden px-8 ">
      {/* === CORNER BRACKETS === */}
      {/* top-left */}
      <div className="absolute top-0 left-0 w-6 h-6">
        <div className="absolute top-0 left-0 w-6 h-[1px] bg-white"></div>
        <div className="absolute top-0 left-0 h-6 w-[1px] bg-white"></div>
      </div>
      {/* top-right */}
      <div className="absolute top-0 right-0 w-6 h-6">
        <div className="absolute top-0 right-0 w-6 h-[1px] bg-white"></div>
        <div className="absolute top-0 right-0 h-6 w-[1px] bg-white"></div>
      </div>
      {/* bottom-left */}
      <div className="absolute bottom-0 left-0 w-6 h-6">
        <div className="absolute bottom-0 left-0 w-6 h-[1px] bg-white"></div>
        <div className="absolute bottom-0 left-0 h-6 w-[1px] bg-white"></div>
      </div>
      {/* bottom-right */}
      <div className="absolute bottom-0 right-0 w-6 h-6">
        <div className="absolute bottom-0 right-0 w-6 h-[1px] bg-white"></div>
        <div className="absolute bottom-0 right-0 h-6 w-[1px] bg-white"></div>
      </div>

      {/* === DUAL TEXT LABELS === */}
      {/* Top-left */}
      <div className="absolute top-4 left-4 text-sm space-y-1 flex flex-col">
        <DualColorText firstText="DSP:" secondText="1707 x 979" />
        <DualColorText firstText="FPS:" secondText="67.90" />
      </div>

      {/* Top-right */}
      <div className="absolute top-4 right-4 text-sm space-y-1 text-right flex flex-col">
        <DualColorText firstText="10-08-2025" secondText=":DATE" whiteFirst={false} />
        <DualColorText firstText="2:56:20" secondText=":TIME" whiteFirst={false} />
      </div>

      {/* Bottom-left */}
      <div className="absolute bottom-4 left-4 text-sm space-y-1 flex flex-col">
        <DualColorText firstText="EVO:" secondText=" Alpha" />
        <DualColorText firstText="VERS:" secondText=" 01.08.84" />
      </div>

      {/* Bottom-right */}
      <div className="absolute bottom-4 right-4 text-sm space-y-1 text-right flex flex-col">
        <DualColorText firstText="74.906 " secondText=":LOG" whiteFirst={false} />
        <DualColorText firstText="WIN Chrome/138.0.0.0" secondText=":SYS" whiteFirst={false} />
      </div>

      {/* Mid-left */}
      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-sm">
        <DualColorText firstText="/// " secondText=" 0.002" />
      </div>

      {/* Mid-right */}
      <div className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-right">
        <DualColorText firstText="0.49 " secondText="\\\" whiteFirst={false} />
      </div>

      {/* === CENTER CONTENT === */}
      <div className="max-w-4xl text-center">
        <h1 className="text-[84px] leading-[80px] font-atomos outline-text font-medium capitalize mb-6">
          EXPLORE NFT COLLECTION
        </h1>
        <p className="text-2xl text-white font-voltec mb-10">
          A collection of 2525 highly-fashionable NFTs on the ETH Blockchain.
          Unique, metaverse-ready, and designed to benefit their holders.
        </p>
       <GameButton text="Start game"/>
      </div>
    </section>
  </div>
   
  );
}
