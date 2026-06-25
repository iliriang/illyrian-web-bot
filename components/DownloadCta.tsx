import Image from "next/image";
import { FadeIn, WindowsIcon } from "./ui";

export default function DownloadCta() {
  return (
    <section id="download" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="glass glow-ring relative overflow-hidden rounded-3xl px-6 py-16 text-center sm:px-12 sm:py-20">
            <div className="bg-grid absolute inset-0 -z-0 opacity-60" />
            <div className="absolute -top-32 left-1/2 h-64 w-[36rem] -translate-x-1/2 rounded-full bg-eth/20 blur-[110px]" />

            <div className="relative">
              <Image
                src="/icon.png"
                alt="Illyrian Minting Bot icon"
                width={80}
                height={80}
                className="mx-auto mb-8 h-20 w-20 rounded-2xl shadow-2xl shadow-eth/30"
              />
              <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
                Start Minting <span className="text-gradient">Smarter</span>
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-base text-slate-300 sm:text-lg">
                Download Illyrian Minting Bot and automate your NFT workflow.
              </p>

              <a
                href="/IllyrianMintBot-Setup.exe"
                download
                className="mt-10 inline-flex items-center gap-3 rounded-2xl bg-eth px-10 py-5 text-lg font-bold text-white shadow-2xl shadow-eth/40 transition-all hover:bg-eth-light hover:scale-[1.03] active:scale-[0.98]"
              >
                <WindowsIcon className="h-6 w-6" />
                Download for Windows
              </a>

              <p className="mt-5 text-xs text-slate-500">
                IllyrianMintBot-Setup.exe · ~55 MB · Windows 10 / 11 (64-bit)
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
