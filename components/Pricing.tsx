"use client";

import { CheckIcon, FadeIn, SectionHeading } from "./ui";

const plans = [
  {
    name: "Starter",
    price: "Free",
    period: "to try",
    description: "Test the full workflow with a limited wallet set.",
    cta: "Download Free",
    highlighted: false,
    features: [
      "Up to 10 wallets",
      "Ethereum & Base support",
      "OpenSea drop minting",
      "Manual transfers",
      "Community support",
    ],
  },
  {
    name: "Professional",
    price: "$99",
    period: "/ month",
    description: "Full automation power for serious minters.",
    cta: "Get Professional",
    highlighted: true,
    features: [
      "Up to 500 wallets",
      "Everything in Starter",
      "Bulk funding & transfers",
      "Automated take profit",
      "Real-time monitoring",
      "Priority support",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "pricing",
    description: "Unlimited scale for teams and funds.",
    cta: "Contact Sales",
    highlighted: false,
    features: [
      "Unlimited wallets",
      "Everything in Professional",
      "Dedicated infrastructure",
      "Custom execution strategies",
      "White-glove onboarding",
      "24/7 dedicated support",
    ],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative overflow-x-clip py-24 sm:py-32">
      <div className="absolute right-0 top-1/3 -z-10 h-96 w-96 rounded-full bg-eth/8 blur-[140px]" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Pricing"
          title="Plans that scale with your operation"
          subtitle="Start free, upgrade when you're ready to run hundreds of wallets."
        />

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {plans.map((plan, i) => (
            <FadeIn key={plan.name} delay={i * 0.1}>
              <div
                className={`card-hover relative flex h-full flex-col rounded-2xl p-8 ${
                  plan.highlighted
                    ? "glass glow-ring border-eth/40"
                    : "glass"
                }`}
              >
                {plan.highlighted && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-eth px-4 py-1 text-xs font-bold text-white shadow-lg shadow-eth/40">
                    MOST POPULAR
                  </span>
                )}
                <h3 className="text-lg font-semibold text-white">{plan.name}</h3>
                <p className="mt-1 text-sm text-slate-400">{plan.description}</p>
                <p className="mt-6">
                  <span className="text-4xl font-extrabold text-white">{plan.price}</span>
                  <span className="ml-1.5 text-sm text-slate-400">{plan.period}</span>
                </p>
                <ul className="mt-7 flex-1 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5 text-sm text-slate-300">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-eth/15 text-eth-light">
                        <CheckIcon className="h-3 w-3" />
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href="#download"
                  className={`mt-8 block rounded-xl px-5 py-3 text-center text-sm font-semibold transition-all ${
                    plan.highlighted
                      ? "bg-eth text-white shadow-lg shadow-eth/30 hover:bg-eth-light"
                      : "border border-white/10 bg-white/[0.04] text-slate-200 hover:border-eth/40 hover:text-white"
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
