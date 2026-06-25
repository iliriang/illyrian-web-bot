"use client";

import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";

export function FadeIn({
  children,
  delay = 0,
  className,
  y = 24,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  y?: number;
}) {
  return (
    <div
      className={`reveal ${className ?? ""}`}
      style={
        {
          "--reveal-delay": `${delay}s`,
          "--reveal-y": `${y}px`,
        } as CSSProperties
      }
    >
      {children}
    </div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <FadeIn className="mx-auto max-w-2xl text-center">
      <span className="inline-block rounded-full border border-eth/30 bg-eth/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-eth-light">
        {eyebrow}
      </span>
      <h2 className="mt-5 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base leading-relaxed text-slate-400 sm:text-lg">
          {subtitle}
        </p>
      )}
    </FadeIn>
  );
}

export function CountUp({
  value,
  suffix = "",
  prefix = "",
}: {
  value: number;
  suffix?: string;
  prefix?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // Respect reduced motion: show the final value immediately.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.textContent = `${prefix}${value.toLocaleString()}${suffix}`;
      return;
    }
    let raf = 0;
    const duration = 1600;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      el.textContent = `${prefix}${Math.round(eased * value).toLocaleString()}${suffix}`;
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [value, prefix, suffix]);

  // Render the final value so SSR / no-JS still shows the real number.
  return <span ref={ref}>{`${prefix}${value.toLocaleString()}${suffix}`}</span>;
}

export const EthIcon = ({ className = "h-5 w-5" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
    <path d="M12 2v7.5l6 2.7L12 2z" fill="currentColor" opacity="0.6" />
    <path d="M12 2L6 12.2l6-2.7V2z" fill="currentColor" />
    <path d="M12 16.6V22l6-8.4-6 3z" fill="currentColor" opacity="0.6" />
    <path d="M12 22v-5.4l-6-3L12 22z" fill="currentColor" />
    <path d="M12 15.4l6-3.2-6-2.7v5.9z" fill="currentColor" opacity="0.35" />
    <path d="M6 12.2l6 3.2V9.5l-6 2.7z" fill="currentColor" opacity="0.8" />
  </svg>
);

export const BaseIcon = ({ className = "h-5 w-5" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
    <circle cx="12" cy="12" r="10" fill="currentColor" />
    <path
      d="M12 20a8 8 0 1 0-7.94-9h10.6v2H4.06A8 8 0 0 0 12 20z"
      fill="#04060c"
    />
  </svg>
);

export const CheckIcon = ({ className = "h-4 w-4" }: { className?: string }) => (
  <svg viewBox="0 0 20 20" fill="currentColor" className={className} aria-hidden>
    <path
      fillRule="evenodd"
      d="M16.7 5.3a1 1 0 0 1 0 1.4l-7.5 7.5a1 1 0 0 1-1.4 0l-3.5-3.5a1 1 0 1 1 1.4-1.4l2.8 2.79 6.8-6.8a1 1 0 0 1 1.4 0z"
      clipRule="evenodd"
    />
  </svg>
);

export const WindowsIcon = ({ className = "h-5 w-5" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
    <path d="M3 5.5L10.5 4.4v7.1H3V5.5zM3 18.5l7.5 1.1v-7H3v5.9zM11.5 4.25L21 3v8.5h-9.5v-7.25zM21 21l-9.5-1.35V12.5H21V21z" />
  </svg>
);
