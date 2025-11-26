import React from "react";

// Single-file React component preview for the 3i Atlas meme token
// Uses Tailwind utility classes for styling (no imports required here)
// Images referenced from uploaded local paths (these will be transformed to URLs by the platform)

const IMAGES = {
  hero: "/images/hero.png",      // now hero uses logobadge
  logoBadge: "/images/logobadge.png",      // logo uses hero
};

export default function ThreeIAtlasSite() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-slate-900 antialiased">
      <header className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src={IMAGES.logoBadge} alt="3i Atlas logo" className="w-14 h-14 rounded-full ring-2 ring-yellow-400 object-cover" />
          <div>
            <h1 className="text-2xl font-extrabold tracking-tight">3i Atlas</h1>
            <p className="text-sm text-slate-500">Meme token • Born on Pump.fun • Powered by Community</p>
          </div>
        </div>
        <nav className="flex items-center gap-3">
          <a href="#tokenomics" className="text-sm font-medium hover:underline">Tokenomics</a>
          <a href="#roadmap" className="text-sm font-medium hover:underline">Roadmap</a>
          <a href="#mint" className="inline-flex items-center gap-2 bg-yellow-400 px-4 py-2 rounded-full text-sm font-semibold shadow">Create / Mint</a>
        </nav>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12 grid gap-12">
        {/* Hero */}
        <section className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">Meet <span className="text-yellow-500">3i Atlas</span></h2>
            <p className="mt-4 text-lg text-slate-600">A meme mascot for the next Solana cycle. Born on Pump.fun, fueled by memes, and built for community mayhem. Early supporters = forever remembered.</p>

            <div className="mt-6 flex gap-3">
              <a href="https://pump.fun" target="_blank" rel="noreferrer" className="inline-block px-5 py-3 rounded-full bg-slate-900 text-white font-semibold shadow hover:opacity-95">BUY</a>
              <a href="#tokenomics" className="inline-block px-5 py-3 rounded-full border border-slate-200 text-slate-800 font-medium hover:bg-slate-100">View Tokenomics</a>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
              <div className="p-3 bg-white rounded-lg shadow-sm text-center">
                <div className="text-sm text-slate-500">Ticker</div>
                <div className="text-lg font-bold mt-1">$3IATLAS</div>
              </div>
              <div className="p-3 bg-white rounded-lg shadow-sm text-center">
                <div className="text-sm text-slate-500">Chain</div>
                <div className="text-lg font-bold mt-1">Solana</div>
              </div>
              <div className="p-3 bg-white rounded-lg shadow-sm text-center">
                <div className="text-sm text-slate-500">Launchpad</div>
                <div className="text-lg font-bold mt-1">Pump.fun</div>
              </div>
              <div className="p-3 bg-white rounded-lg shadow-sm text-center">
                <div className="text-sm text-slate-500">Community</div>
                <div className="text-lg font-bold mt-1">DAO-First</div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-md bg-white rounded-2xl shadow-lg overflow-hidden ring-1 ring-slate-100">
              <img src={IMAGES.hero} alt="3i Atlas hero" className="w-full object-cover" />
              <div className="p-4">
                <div className="text-sm text-slate-500">Official 3i Atlas Mascot</div>
                <div className="mt-2 text-xs text-slate-400">Art variants available for socials & posts — download below.</div>
              </div>
            </div>
          </div>
        </section>

        {/* Tokenomics */}
        <section id="tokenomics" className="bg-white rounded-2xl p-8 shadow-sm">
          <h3 className="text-2xl font-bold">Tokenomics</h3>
          <p className="mt-2 text-slate-600">Simple, transparent, and community-first tokenomics designed to reward early holders and encourage long-term engagement.</p>

          <div className="mt-6 grid md:grid-cols-3 gap-4">
            <div className="p-6 border rounded-lg">
              <h4 className="font-semibold">Total Supply</h4>
              <div className="mt-2 text-2xl font-bold">1,000,000,000</div>
              <div className="mt-2 text-sm text-slate-500">Fixed supply — no hidden minting.</div>
            </div>

            <div className="p-6 border rounded-lg">
              <h4 className="font-semibold">Initial Liquidity</h4>
              <div className="mt-2 text-2xl font-bold">30% of supply</div>
              <div className="mt-2 text-sm text-slate-500">Seeded on Pump.fun / DEX pairing.</div>
            </div>

            <div className="p-6 border rounded-lg">
              <h4 className="font-semibold">Treasury & Rewards</h4>
              <div className="mt-2 text-2xl font-bold">20% of supply</div>
              <div className="mt-2 text-sm text-slate-500">Community chest for marketing, listings, and treasury ops.</div>
            </div>
          </div>

          <div className="mt-6 grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-slate-50 rounded-lg">
              <h5 className="font-semibold">Distribution breakdown</h5>
              <ul className="mt-3 text-sm space-y-2 text-slate-600">
                <li>• 30% Liquidity</li>
                <li>• 20% Treasury & Rewards</li>
                <li>• 20% Team & Development (vesting)</li>
                <li>• 20% Community Airdrops & Partnerships</li>
                <li>• 10% Marketing & Listings</li>
              </ul>
            </div>

            <div className="p-4 bg-slate-50 rounded-lg">
              <h5 className="font-semibold">Anti-dump measures</h5>
              <p className="mt-2 text-sm text-slate-600">Vesting for team tokens, time-locked treasury, and staged liquidity unlocks to reduce early selling pressure.</p>
            </div>
          </div>
        </section>

        

        {/* Roadmap */}
        <section id="roadmap" className="bg-white rounded-2xl p-8 shadow-sm">
          <h3 className="text-2xl font-bold">Roadmap</h3>
          <div className="mt-6 grid md:grid-cols-3 gap-4">
            <div className="p-4 rounded-lg border">
              <h5 className="font-semibold">Phase 1 — Launch</h5>
              <p className="mt-2 text-sm text-slate-600">Token creation on Pump.fun, community onboarding, and initial liquidity.</p>
            </div>
            <div className="p-4 rounded-lg border">
              <h5 className="font-semibold">Phase 2 — Growth</h5>
              <p className="mt-2 text-sm text-slate-600">Airdrops, partnerships, influencer pushes, and listings.</p>
            </div>
            <div className="p-4 rounded-lg border">
              <h5 className="font-semibold">Phase 3 — Utility</h5>
              <p className="mt-2 text-sm text-slate-600">DAO treasury, merch drops, and governance features.</p>
            </div>
          </div>
        </section>

        {/* Footer / CTAs */}
        <footer className="py-8 text-center">
          <div className="max-w-3xl mx-auto">
            <p className="text-sm text-slate-500">Got feedback or want additional assets (banner, X header, telegram promo)? Reply here and I’ll add them.</p>
            <div className="mt-4 flex items-center justify-center gap-3">
             
              <a href="#" className="px-4 py-2 rounded-lg border text-sm">Join Discord</a>
            </div>
            <p className="mt-6 text-xs text-slate-400">Images shown are the official 3i Atlas art variants. Use the download links above to save originals.</p>
          </div>
        </footer>
      </main>
    </div>
  );
}
