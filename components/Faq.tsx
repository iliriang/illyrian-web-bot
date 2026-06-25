"use client";

import { useState } from "react";
import { FadeIn, SectionHeading } from "./ui";

const faqs = [
  {
    question: "What blockchains are supported?",
    answer:
      "Currently Ethereum and Base. Both networks are fully supported across minting, transfers, bulk funding, and take-profit automation.",
  },
  {
    question: "Does it support OpenSea drops?",
    answer:
      "Yes. Illyrian Minting Bot is purpose-built for OpenSea Drops, with optimized execution to participate the moment a drop opens.",
  },
  {
    question: "Can I manage multiple wallets?",
    answer:
      "Yes. Import, generate, and organize wallets into named groups, then run mints and transfers across hundreds of wallets at once.",
  },
  {
    question: "Is bulk funding available?",
    answer:
      "Yes. Fund hundreds of wallets simultaneously from a single master wallet with configurable amounts per group.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="FAQ"
          title="Frequently asked questions"
        />

        <div className="mt-12 space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <FadeIn key={faq.question} delay={i * 0.06}>
                <div className={`glass rounded-2xl transition-colors ${isOpen ? "border-eth/35" : ""}`}>
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <span className="text-sm font-semibold text-white sm:text-base">
                      {faq.question}
                    </span>
                    <span
                      className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-eth/15 text-eth-light transition-transform duration-200 ${
                        isOpen ? "rotate-45" : ""
                      }`}
                    >
                      <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
                        <path d="M10 4a1 1 0 0 1 1 1v4h4a1 1 0 1 1 0 2h-4v4a1 1 0 1 1-2 0v-4H5a1 1 0 1 1 0-2h4V5a1 1 0 0 1 1-1z" />
                      </svg>
                    </span>
                  </button>
                  {/* CSS grid-rows transition — no JS animation dependency */}
                  <div
                    className={`grid overflow-hidden transition-all duration-300 ease-out ${
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="min-h-0 overflow-hidden">
                      <p className="px-6 pb-5 text-sm leading-relaxed text-slate-400">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
