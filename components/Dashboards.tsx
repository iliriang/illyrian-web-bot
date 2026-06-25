"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { FadeIn, SectionHeading } from "./ui";

const tabs = [
  "Wallet Manager",
  "Mint Monitor",
  "NFT Transfer",
  "Bulk Funding",
  "Take Profit",
] as const;

type Tab = (typeof tabs)[number];

function PanelShell({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="glass-strong overflow-hidden rounded-2xl shadow-2xl shadow-black/50">
      <div className="flex items-center justify-between border-b border-white/5 bg-white/[0.02] px-5 py-3">
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-red-500/70" />
          <span className="h-3 w-3 rounded-full bg-yellow-500/70" />
          <span className="h-3 w-3 rounded-full bg-emerald-500/70" />
        </div>
        <span className="font-mono text-xs text-slate-400">
          Illyrian Minting Bot — {title}
        </span>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-eth/10 px-2.5 py-1 text-[10px] font-semibold text-eth-light">
          ETH · BASE
        </span>
      </div>
      <div className="bg-navy/80 p-5 sm:p-6">{children}</div>
    </div>
  );
}

function StatChip({ label, value, accent = "text-white" }: { label: string; value: string; accent?: string }) {
  return (
    <div className="rounded-xl bg-white/[0.03] p-4">
      <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-500">{label}</p>
      <p className={`mt-1 font-mono text-xl font-bold ${accent}`}>{value}</p>
    </div>
  );
}

function StatusPill({ label, tone }: { label: string; tone: "ok" | "warn" | "info" }) {
  const styles = {
    ok: "bg-emerald-500/10 text-emerald-400",
    warn: "bg-yellow-500/10 text-yellow-400",
    info: "bg-eth/10 text-eth-light",
  };
  return (
    <span className={`rounded-full px-2.5 py-0.5 text-[11px] font-semibold ${styles[tone]}`}>
      {label}
    </span>
  );
}

function WalletManagerPanel() {
  const wallets = [
    { addr: "0x7aF3…9c21", group: "Alpha Group", balance: "0.482 ETH", nfts: 12, status: "Active" },
    { addr: "0x91bD…44eA", group: "Alpha Group", balance: "0.317 ETH", nfts: 8, status: "Active" },
    { addr: "0x3C58…b07f", group: "Sniper Set", balance: "0.205 ETH", nfts: 4, status: "Active" },
    { addr: "0xE24a…118c", group: "Sniper Set", balance: "0.158 ETH", nfts: 6, status: "Idle" },
    { addr: "0x5fB9…d6A3", group: "Vault", balance: "2.940 ETH", nfts: 67, status: "Vault" },
  ];
  return (
    <PanelShell title="Wallet Manager">
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        <StatChip label="Total wallets" value="1,048" />
        <StatChip label="Groups" value="14" />
        <StatChip label="Total balance" value="38.6 ETH" accent="text-eth-light" />
        <StatChip label="NFTs held" value="2,317" />
      </div>
      <div className="mt-4 flex flex-wrap items-center gap-2">
        {["Import", "Export", "New Group", "Generate"].map((action) => (
          <span key={action} className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs font-medium text-slate-300">
            {action}
          </span>
        ))}
      </div>
      <div className="mock-scroll mt-4 overflow-x-auto">
        <table className="w-full min-w-[540px] text-left text-xs">
          <thead>
            <tr className="border-b border-white/5 text-[10px] uppercase tracking-wider text-slate-500">
              <th className="pb-2 pr-4 font-semibold">Wallet</th>
              <th className="pb-2 pr-4 font-semibold">Group</th>
              <th className="pb-2 pr-4 font-semibold">Balance</th>
              <th className="pb-2 pr-4 font-semibold">NFTs</th>
              <th className="pb-2 font-semibold">Status</th>
            </tr>
          </thead>
          <tbody>
            {wallets.map((w) => (
              <tr key={w.addr} className="border-b border-white/5 last:border-0">
                <td className="py-2.5 pr-4 font-mono text-slate-200">{w.addr}</td>
                <td className="py-2.5 pr-4 text-slate-400">{w.group}</td>
                <td className="py-2.5 pr-4 font-mono text-slate-200">{w.balance}</td>
                <td className="py-2.5 pr-4 font-mono text-slate-400">{w.nfts}</td>
                <td className="py-2.5">
                  <StatusPill label={w.status} tone={w.status === "Active" ? "ok" : w.status === "Vault" ? "info" : "warn"} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </PanelShell>
  );
}

function MintMonitorPanel() {
  const logs = [
    { time: "14:02:11.204", msg: "Drop detected — opensea.io/collection/genesis-apes", tone: "info" as const },
    { time: "14:02:11.391", msg: "Dispatching 248 wallets · Alpha Group + Sniper Set", tone: "info" as const },
    { time: "14:02:11.844", msg: "0x7aF3…9c21 minted 2 · gas 0.0031 ETH · 0.41s", tone: "ok" as const },
    { time: "14:02:11.902", msg: "0x91bD…44eA minted 1 · gas 0.0029 ETH · 0.38s", tone: "ok" as const },
    { time: "14:02:12.117", msg: "0x3C58…b07f pending — awaiting confirmation", tone: "warn" as const },
    { time: "14:02:12.339", msg: "0xE24a…118c minted 2 · gas 0.0034 ETH · 0.52s", tone: "ok" as const },
  ];
  const toneColor = { ok: "text-emerald-400", warn: "text-yellow-400", info: "text-eth-light" };
  return (
    <PanelShell title="Mint Monitor">
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        <StatChip label="Minted" value="417" accent="text-emerald-400" />
        <StatChip label="Pending" value="12" accent="text-yellow-400" />
        <StatChip label="Success rate" value="98.2%" />
        <StatChip label="Gas spent" value="1.31 ETH" />
      </div>
      <div className="mt-4 rounded-xl bg-black/40 p-4 font-mono text-[11px] leading-6">
        {logs.map((log) => (
          <p key={log.time} className="flex gap-3">
            <span className="shrink-0 text-slate-600">{log.time}</span>
            <span className={toneColor[log.tone]}>{log.msg}</span>
          </p>
        ))}
        <p className="flex gap-3">
          <span className="text-slate-600">14:02:12.480</span>
          <span className="text-slate-300">
            <span className="animate-pulse">▌</span>
          </span>
        </p>
      </div>
    </PanelShell>
  );
}

function TransferPanel() {
  const transfers = [
    { from: "0x7aF3…9c21", to: "Vault · 0x5fB9…d6A3", item: "Genesis Ape #4471", status: "Sent" },
    { from: "0x91bD…44eA", to: "Vault · 0x5fB9…d6A3", item: "Genesis Ape #4502", status: "Sent" },
    { from: "0x3C58…b07f", to: "Vault · 0x5fB9…d6A3", item: "Genesis Ape #4519", status: "Queued" },
    { from: "0xE24a…118c", to: "Vault · 0x5fB9…d6A3", item: "Genesis Ape #4533", status: "Sent" },
  ];
  return (
    <PanelShell title="NFT Transfer">
      <div className="grid gap-4 sm:grid-cols-3">
        <div className="rounded-xl bg-white/[0.03] p-4 sm:col-span-2">
          <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-500">Bulk transfer</p>
          <div className="mt-3 flex flex-col gap-2 text-xs">
            <div className="rounded-lg border border-white/10 bg-black/30 px-3 py-2.5 text-slate-300">
              Source: <span className="font-mono text-white">Alpha Group (96 wallets)</span>
            </div>
            <div className="rounded-lg border border-white/10 bg-black/30 px-3 py-2.5 text-slate-300">
              Destination: <span className="font-mono text-white">Vault · 0x5fB9…d6A3</span>
            </div>
            <div className="mt-1 rounded-lg bg-eth px-3 py-2.5 text-center font-semibold text-white shadow-lg shadow-eth/25">
              Transfer All NFTs
            </div>
          </div>
        </div>
        <div className="rounded-xl bg-white/[0.03] p-4">
          <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-500">Progress</p>
          <p className="mt-2 font-mono text-2xl font-bold text-white">87<span className="text-sm text-slate-500">/96</span></p>
          <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/5">
            <div className="h-full w-[90%] rounded-full bg-gradient-to-r from-eth to-eth-light" />
          </div>
          <p className="mt-2 text-[11px] text-slate-500">~14s remaining</p>
        </div>
      </div>
      <div className="mt-4 space-y-2">
        {transfers.map((t) => (
          <div key={t.item} className="flex flex-wrap items-center justify-between gap-2 rounded-lg bg-white/[0.03] px-3 py-2.5 text-xs">
            <span className="text-slate-200">{t.item}</span>
            <span className="font-mono text-slate-500">{t.from} → {t.to}</span>
            <StatusPill label={t.status} tone={t.status === "Sent" ? "ok" : "warn"} />
          </div>
        ))}
      </div>
    </PanelShell>
  );
}

function FundingPanel() {
  const rows = [
    { group: "Alpha Group", wallets: 96, each: "0.05 ETH", total: "4.80 ETH", status: "Funded" },
    { group: "Sniper Set", wallets: 152, each: "0.04 ETH", total: "6.08 ETH", status: "Funded" },
    { group: "Reserve", wallets: 300, each: "0.02 ETH", total: "6.00 ETH", status: "In progress" },
  ];
  return (
    <PanelShell title="Bulk Funding">
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        <StatChip label="Master wallet" value="42.7 ETH" accent="text-eth-light" />
        <StatChip label="Wallets funded" value="548" />
        <StatChip label="Distributed" value="16.9 ETH" />
        <StatChip label="Est. gas" value="0.094 ETH" />
      </div>
      <div className="mock-scroll mt-4 overflow-x-auto">
        <table className="w-full min-w-[520px] text-left text-xs">
          <thead>
            <tr className="border-b border-white/5 text-[10px] uppercase tracking-wider text-slate-500">
              <th className="pb-2 pr-4 font-semibold">Group</th>
              <th className="pb-2 pr-4 font-semibold">Wallets</th>
              <th className="pb-2 pr-4 font-semibold">Per wallet</th>
              <th className="pb-2 pr-4 font-semibold">Total</th>
              <th className="pb-2 font-semibold">Status</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.group} className="border-b border-white/5 last:border-0">
                <td className="py-2.5 pr-4 text-slate-200">{r.group}</td>
                <td className="py-2.5 pr-4 font-mono text-slate-400">{r.wallets}</td>
                <td className="py-2.5 pr-4 font-mono text-slate-200">{r.each}</td>
                <td className="py-2.5 pr-4 font-mono text-slate-200">{r.total}</td>
                <td className="py-2.5">
                  <StatusPill label={r.status} tone={r.status === "Funded" ? "ok" : "warn"} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-4 rounded-lg bg-eth/10 px-4 py-3 text-xs text-eth-light">
        ⚡ One transaction batch funds all 548 wallets — no manual transfers.
      </div>
    </PanelShell>
  );
}

function ProfitPanel() {
  const points = "0,72 40,66 80,58 120,60 160,46 200,40 240,28 280,30 320,16 360,10 400,4";
  return (
    <PanelShell title="Take Profit">
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        <StatChip label="Realized profit" value="+9.42 ETH" accent="text-emerald-400" />
        <StatChip label="Sold today" value="61 NFTs" />
        <StatChip label="Avg. sale" value="0.21 ETH" />
        <StatChip label="Floor delta" value="+184%" accent="text-emerald-400" />
      </div>
      <div className="mt-4 rounded-xl bg-white/[0.03] p-4">
        <div className="flex items-center justify-between">
          <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-500">Cumulative profit — 7d</p>
          <StatusPill label="Auto-sell ON" tone="ok" />
        </div>
        <svg viewBox="0 0 400 80" className="mt-3 h-28 w-full" preserveAspectRatio="none" aria-hidden>
          <defs>
            <linearGradient id="profitFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#627eea" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#627eea" stopOpacity="0" />
            </linearGradient>
          </defs>
          <polygon points={`0,80 ${points} 400,80`} fill="url(#profitFill)" />
          <polyline points={points} fill="none" stroke="#8ba2f5" strokeWidth="2.5" strokeLinejoin="round" strokeLinecap="round" />
        </svg>
      </div>
      <div className="mt-4 grid gap-2 text-xs sm:grid-cols-2">
        <div className="flex items-center justify-between rounded-lg bg-white/[0.03] px-3 py-2.5">
          <span className="text-slate-300">Genesis Ape #4471 → sold 0.24 ETH</span>
          <span className="font-mono text-emerald-400">+0.19</span>
        </div>
        <div className="flex items-center justify-between rounded-lg bg-white/[0.03] px-3 py-2.5">
          <span className="text-slate-300">Genesis Ape #4502 → sold 0.22 ETH</span>
          <span className="font-mono text-emerald-400">+0.17</span>
        </div>
      </div>
    </PanelShell>
  );
}

const panels: Record<Tab, () => React.ReactNode> = {
  "Wallet Manager": WalletManagerPanel,
  "Mint Monitor": MintMonitorPanel,
  "NFT Transfer": TransferPanel,
  "Bulk Funding": FundingPanel,
  "Take Profit": ProfitPanel,
};

export default function Dashboards() {
  const [active, setActive] = useState<Tab>("Wallet Manager");
  const Panel = panels[active];

  return (
    <section id="dashboards" className="relative overflow-x-clip py-24 sm:py-32">
      <div className="absolute left-1/2 top-0 -z-10 h-96 w-[50rem] -translate-x-1/2 rounded-full bg-eth/8 blur-[160px]" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Inside the App"
          title="A command center for your entire operation"
          subtitle="Every module — wallets, mints, transfers, funding, and profits — in one professional desktop dashboard."
        />

        <FadeIn className="mt-12">
          <div className="flex flex-wrap justify-center gap-2">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActive(tab)}
                className={`relative rounded-xl px-4 py-2.5 text-sm font-medium transition-colors ${
                  active === tab
                    ? "text-white"
                    : "text-slate-400 hover:text-slate-200"
                }`}
              >
                {active === tab && (
                  <motion.span
                    layoutId="dashboard-tab"
                    className="absolute inset-0 rounded-xl bg-eth shadow-lg shadow-eth/30"
                    transition={{ type: "spring", duration: 0.5, bounce: 0.2 }}
                  />
                )}
                <span className="relative">{tab}</span>
              </button>
            ))}
          </div>
        </FadeIn>

        <div className="relative mt-8">
          <div className="absolute -inset-4 -z-10 rounded-3xl bg-eth/5 blur-2xl" />
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.3 }}
            >
              <Panel />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
