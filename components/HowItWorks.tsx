"use client";

import { FadeIn, SectionHeading } from "./ui";

const steps = [
  {
    step: "01",
    title: "Import Wallets",
    description:
      "Bulk import wallets from keys or files and organize them into named groups.",
  },
  {
    step: "02",
    title: "Fund Wallets",
    description:
      "Distribute ETH from your master wallet to hundreds of wallets in one operation.",
  },
  {
    step: "03",
    title: "Mint NFTs",
    description:
      "Point the bot at an OpenSea drop and execute mints across all wallet groups instantly.",
  },
  {
    step: "04",
    title: "Transfer Assets & Take Profit",
    description:
      "Consolidate NFTs to vault wallets and automatically secure profits after the mint.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-24 sm:py-32">
      <div className="absolute right-0 top-1/4 -z-10 h-96 w-96 rounded-full bg-base-blue/8 blur-[140px]" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="How It Works"
          title="From setup to profit in four steps"
          subtitle="A streamlined workflow designed so you spend seconds configuring — and zero time babysitting."
        />

        <div className="relative mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {/* Connector line (desktop) */}
          <div className="absolute left-[12.5%] right-[12.5%] top-9 hidden h-px bg-gradient-to-r from-eth/10 via-eth/50 to-eth/10 lg:block" />

          {steps.map((item, i) => (
            <FadeIn key={item.step} delay={i * 0.12}>
              <div className="relative flex h-full flex-col items-center text-center lg:items-start lg:text-left">
                <div className="glass glow-ring relative z-10 flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-2xl bg-navy font-mono text-xl font-bold text-eth-light">
                  {item.step}
                </div>
                <h3 className="mt-6 text-lg font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">
                  {item.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
