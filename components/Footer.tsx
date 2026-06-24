import Image from "next/image";
import { EthIcon, BaseIcon } from "./ui";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 sm:px-6 lg:flex-row lg:px-8">
        <div className="flex items-center gap-2.5">
          <Image
            src="/icon.png"
            alt="Illyrian Minting Bot logo"
            width={32}
            height={32}
            className="h-8 w-8 rounded-lg"
          />
          <span className="text-sm font-semibold text-slate-300">
            Illyrian Minting Bot
          </span>
        </div>

        <p className="text-xs text-slate-500">
          Copyright © 2026 Illyrian Minting Bot. All rights reserved.
        </p>

        <div className="flex items-center gap-3 text-xs text-slate-500">
          <span className="inline-flex items-center gap-1.5">
            <span className="text-eth-light"><EthIcon className="h-4 w-4" /></span>
            Ethereum
          </span>
          <span className="text-white/10">|</span>
          <span className="inline-flex items-center gap-1.5">
            <span className="text-base-blue"><BaseIcon className="h-4 w-4" /></span>
            Base
          </span>
        </div>
      </div>
    </footer>
  );
}
