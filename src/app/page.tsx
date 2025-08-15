import Grid from "@/components/Grid";
import Hero from "@/components/HeroSection/Hero";
import League from "@/components/LeagueSection/League";
import NewCollection from "@/components/NewCollection.tsx/NewCollection";

export default function Home() {
  return (
    <div className="bg-background">
      <Hero />
      <Grid/>
      <NewCollection/>
      <League />
    </div>
  );
}
