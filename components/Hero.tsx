"use client";

import { motion } from "framer-motion";
import { EthIcon, BaseIcon, CheckIcon, WindowsIcon } from "./ui";

const badges = [
  "OpenSea Compatible",
  "Multi-Wallet Automation",
  "Fast Execution",
  "Secure Operations",
];

const feedRows = [
  { wallet: "0x7aF3…9c21", status: "Minted", qty: "2", time: "0.41s", ok: true },
  { wallet: "0x91bD…44eA", status: "Minted", qty: "1", time: "0.38s", ok: true },
  { wallet: "0x3C58…b07f", status: "Pending", qty: "3", time: "—", ok: false },
  { wallet: "0xE24a…118c", status: "Minted", qty: "2", time: "0.52s", ok: true },
  { wallet: "0x5fB9…d6A3", status: "Minted", qty: "1", time: "0.45s", ok: true },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      {/* Background layers */}
      <div className="bg-grid absolute inset-0 -z-10" />
      <div className="absolute -top-40 left-1/2 -z-10 h-[34rem] w-[60rem] -translate-x-1/2 rounded-full bg-eth/15 blur-[140px]" />
      <div className="absolute top-40 -right-40 -z-10 h-80 w-80 rounded-full bg-base-blue/10 blur-[120px]" />

      <div className="mx-auto grid max-w-7xl items-center gap-16 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-eth/30 bg-eth/10 px-4 py-1.5 text-xs font-semibold text-eth-light"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-eth opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-eth" />
            </span>
            NFT Automation for OpenSea Drops
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl"
          >
            <span className="text-white">Mint Faster.</span>
            <br />
            <span className="text-gradient">Scale Smarter.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 text-lg font-medium text-slate-200 sm:text-xl"
          >
            The ultimate NFT minting automation platform for OpenSea Drops on
            Ethereum and Base.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.28 }}
            className="mt-4 max-w-xl text-base leading-relaxed text-slate-400"
          >
            Automate NFT mints, transfers, wallet funding, and profit management
            with institutional-grade speed and reliability.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.36 }}
            className="mt-8 flex flex-col gap-4 sm:flex-row"
          >
            <a
              href="#download"
              className="group inline-flex items-center justify-center gap-2.5 rounded-xl bg-eth px-7 py-3.5 text-base font-semibold text-white shadow-xl shadow-eth/30 transition-all hover:bg-eth-light hover:shadow-eth/50 hover:-translate-y-0.5"
            >
              <WindowsIcon />
              Download Now
            </a>
            <a
              href="#features"
              className="glass inline-flex items-center justify-center gap-2 rounded-xl px-7 py-3.5 text-base font-semibold text-slate-200 transition-all hover:border-eth/40 hover:text-white"
            >
              View Features
              <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4 transition-transform group-hover:translate-y-0.5">
                <path fillRule="evenodd" d="M10 3a1 1 0 0 1 1 1v9.6l3.3-3.3a1 1 0 1 1 1.4 1.4l-5 5a1 1 0 0 1-1.4 0l-5-5a1 1 0 1 1 1.4-1.4L9 13.6V4a1 1 0 0 1 1-1z" clipRule="evenodd" />
              </svg>
            </a>
          </motion.div>

          {/* Supported chains */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-10 flex flex-wrap items-center gap-3"
          >
            <span className="text-xs font-semibold uppercase tracking-widest text-slate-500">
              Supported chains
            </span>
            <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-slate-200">
              <span className="text-eth-light"><EthIcon /></span>
              Ethereum
            </span>
            <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-slate-200">
              <span className="text-base-blue"><BaseIcon /></span>
              Base
            </span>
          </motion.div>

          {/* Badges */}
          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="mt-6 grid grid-cols-1 gap-x-6 gap-y-2.5 sm:grid-cols-2"
          >
            {badges.map((badge) => (
              <li key={badge} className="flex items-center gap-2 text-sm text-slate-300">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-400">
                  <CheckIcon className="h-3 w-3" />
                </span>
                {badge}
              </li>
            ))}
          </motion.ul>
        </div>

        {/* Hero mockup — live mint feed */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.35, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="relative"
        >
          <div className="absolute -inset-6 -z-10 rounded-3xl bg-eth/10 blur-3xl" />
          <div className="glass-strong animate-float rounded-2xl p-1 shadow-2xl shadow-black/60">
            <div className="rounded-xl bg-navy/90 p-5">
              <div className="flex items-center justify-between border-b border-white/5 pb-4">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-500/70" />
                  <span className="h-3 w-3 rounded-full bg-yellow-500/70" />
                  <span className="h-3 w-3 rounded-full bg-emerald-500/70" />
                </div>
                <span className="font-mono text-xs text-slate-400">mint-monitor — live</span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-2.5 py-1 text-[10px] font-semibold text-emerald-400">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                  RUNNING
                </span>
              </div>

              <div className="mt-4 grid grid-cols-3 gap-3">
                {[
                  { label: "Wallets active", value: "248" },
                  { label: "Minted", value: "417" },
                  { label: "Avg. exec", value: "0.44s" },
                ].map((stat) => (
                  <div key={stat.label} className="rounded-lg bg-white/[0.03] p-3">
                    <p className="text-[10px] uppercase tracking-wider text-slate-500">{stat.label}</p>
                    <p className="mt-1 font-mono text-lg font-bold text-white">{stat.value}</p>
                  </div>
                ))}
              </div>

              <div className="mt-4 space-y-2">
                {feedRows.map((row, i) => (
                  <motion.div
                    key={row.wallet}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.9 + i * 0.15 }}
                    className="flex items-center justify-between rounded-lg bg-white/[0.03] px-3 py-2.5 text-xs"
                  >
                    <span className="font-mono text-slate-300">{row.wallet}</span>
                    <span className="font-mono text-slate-500">×{row.qty}</span>
                    <span className="font-mono text-slate-500">{row.time}</span>
                    <span
                      className={`rounded-full px-2 py-0.5 font-semibold ${
                        row.ok
                          ? "bg-emerald-500/10 text-emerald-400"
                          : "bg-yellow-500/10 text-yellow-400"
                      }`}
                    >
                      {row.status}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
