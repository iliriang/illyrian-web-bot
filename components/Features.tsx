"use client";

import { FadeIn, SectionHeading } from "./ui";

const features = [
  {
    title: "NFT Minting",
    description:
      "Automate OpenSea drop participation with configurable wallet groups and optimized execution.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-6 w-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 2L4.5 13.5h6L11 22l8.5-11.5h-6L13 2z" />
      </svg>
    ),
  },
  {
    title: "NFT Transfer",
    description:
      "Transfer NFTs across wallets with a single click using bulk automation tools.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-6 w-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 8h12m0 0l-3.5-3.5M19 8l-3.5 3.5M17 16H5m0 0l3.5-3.5M5 16l3.5 3.5" />
      </svg>
    ),
  },
  {
    title: "Bulk Funds",
    description:
      "Fund hundreds of wallets simultaneously from a master wallet.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-6 w-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M5 6h14a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2zm11 8h2" />
      </svg>
    ),
  },
  {
    title: "Take Profit",
    description:
      "Automatically sell and secure profits after successful mints.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-6 w-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 17l5.5-5.5 4 4L21 7m0 0h-5m5 0v5" />
      </svg>
    ),
  },
  {
    title: "Wallet Management",
    description:
      "Organize, import, export, and manage large wallet collections.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-6 w-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7zm0 3h16m-5 4h3" />
      </svg>
    ),
  },
  {
    title: "Real-Time Monitoring",
    description:
      "Track mint status, transactions, gas usage, and wallet performance.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-6 w-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12h4l2.5-7 4 14 2.5-7h5" />
      </svg>
    ),
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-24 sm:py-32">
      <div className="absolute left-0 top-1/3 -z-10 h-96 w-96 rounded-full bg-eth/8 blur-[140px]" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Features"
          title="Everything you need to dominate drops"
          subtitle="A complete automation suite engineered for speed, scale, and security across every step of your NFT workflow."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <FadeIn key={feature.title} delay={i * 0.08}>
              <div className="glass card-hover group h-full rounded-2xl p-7">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-eth/25 to-eth/5 text-eth-light transition-colors group-hover:from-eth/40">
                  {feature.icon}
                </div>
                <h3 className="mt-5 text-lg font-semibold text-white">
                  {feature.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-slate-400">
                  {feature.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
