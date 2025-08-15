export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen bg-navy overflow-hidden">
      {/* Neon grid overlay */}
     
      <h1 className="text-5xl font-[var(--font-display)] text-textWhite mb-4">
        EXPLORE NFT COLLECTION
      </h1>
      <p className="max-w-xl text-lg text-[var(--color-textWhite)] opacity-80 text-center mb-8">
        A collection of 525 highly-fashionable NFTs on the ETH Blockchain, unique, metaverse-ready, and designed to benefit their holders.
      </p>
      <button className="px-6 py-3 border-2 border-textWhite hover:bg-neonOrange transition font-[var(--font-body)]">
        START GAME
      </button>
    </section>
  );
}
