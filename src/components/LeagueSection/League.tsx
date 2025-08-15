import InfiniteSvgScroll from "./InfiniteSvgScroll";
import LeagueRow from "./LeagueRow";

export default function League() {
  const teams = [
    { icon: "/images/realtech.png", name: "REALTECH", score: 17 },
    { icon: "/images/psycho.png", name: "PSYCHO AZOV", score: 15, sol: 30 },
    { icon: "/images/ssts.png", name: "SS7S", score: 8, sol: 25 },
    { icon: "/images/38th.png", name: "38TH ARMA", score: 11, sol: 25 },
  ];

  return (
    <section className="w-full bg-navy py-16">
      <h2 className="font-atomos text-3xl text-center text-textWhite mb-8">
        THE LEAGUE
      </h2>

      {/* Table container */}
      <div className="mx-auto max-w-[1179.34px] rounded-[11px] border border-neonOrange bg-darkGreen">
        {teams.map((team, i) => (
          <LeagueRow
            key={i}
            {...team}
            isLast={i === teams.length - 1}
          />
        ))}
      </div>

      {/* Infinite strip */}
      <div className="mt-12">
        <InfiniteSvgScroll />
      </div>
    </section>
  );
}
