"use client";

import { CountUp, FadeIn } from "./ui";

export default function Stats() {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="glass relative overflow-hidden rounded-3xl px-6 py-12 sm:px-12">
            <div className="absolute -top-24 left-1/2 -z-0 h-48 w-[40rem] -translate-x-1/2 rounded-full bg-eth/15 blur-[100px]" />
            <div className="relative grid grid-cols-2 gap-10 text-center lg:grid-cols-4">
              <div>
                <p className="text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
                  <CountUp value={1000} suffix="+" />
                </p>
                <p className="mt-2 text-sm font-medium text-slate-400">
                  Wallets Managed
                </p>
              </div>
              <div>
                <p className="text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
                  <span className="text-gradient">Millions</span>
                </p>
                <p className="mt-2 text-sm font-medium text-slate-400">
                  In Volume Processed
                </p>
              </div>
              <div>
                <p className="text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
                  <CountUp value={2} />
                </p>
                <p className="mt-2 text-sm font-medium text-slate-400">
                  Chains — Ethereum &amp; Base
                </p>
              </div>
              <div>
                <p className="text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
                  24/7
                </p>
                <p className="mt-2 text-sm font-medium text-slate-400">
                  Automation
                </p>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
