import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

/* Green Papaya palette */
const PAPAYA = "#E4D076";
const PAPAYA_INK = "#0A2A5E"; // dark navy text that stays readable on papaya

/* ------------------------------------------------------------------
   EDIT THIS: your questions and answers.
   The answers are general placeholder text. Replace them with your
   branch's real details (links, fees, social handles, etc.).
------------------------------------------------------------------- */
const FAQS = [
  {
    q: "What benefits do I get as a student member of IEEE?",
    a: "Technical communities, workshops and competitions, plus networking, learning resources and career-building opportunities.",
  },
  {
    q: "How can I stay updated on upcoming IEEE events?",
    a: "Follow our social media handles, check the Events section of this website, and join the branch community groups.",
  },
  {
    q: "Are IEEE events free for members?",
    a: "Many branch events are free or discounted for members. Larger conferences may charge a registration fee, and each event page lists the details.",
  },
  {
    q: "What types of conferences and events does IEEE host?",
    a: "Conferences, hackathons, workshops, webinars, expert talks and competitions across engineering and computing.",
  },
  {
    q: "How can I obtain IEEE research papers and publications?",
    a: "Through IEEE Xplore, via your IEEE membership or your institution's library subscription.",
  },
];

function ChipIcon() {
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="6" y="6" width="12" height="12" rx="2" />
      <rect x="9.5" y="9.5" width="5" height="5" rx="0.5" />
      <path d="M9 3v3M15 3v3M9 18v3M15 18v3M3 9h3M3 15h3M18 9h3M18 15h3" />
    </svg>
  );
}

function FlipCard({ item, index, reduce }) {
  const [flipped, setFlipped] = useState(false);

  const face = {
    backfaceVisibility: "hidden",
    WebkitBackfaceVisibility: "hidden",
  };

  return (
    <div
      className="w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]"
      style={{ perspective: 900 }}
    >
      <button
        type="button"
        onClick={() => setFlipped((f) => !f)}
        aria-pressed={flipped}
        aria-label={item.q}
        className="relative block h-60 w-full rounded-xl text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4"
        style={{ outlineColor: "var(--fg)" }}
      >
        <motion.span
          className="absolute inset-0 block"
          style={{ transformStyle: "preserve-3d" }}
          animate={{ rotateY: flipped ? 180 : 0 }}
          transition={
            reduce
              ? { duration: 0 }
              : { type: "spring", stiffness: 140, damping: 18 }
          }
        >
          {/* FRONT: the question */}
          <span
  aria-hidden={flipped}
  className="absolute inset-0 flex flex-col items-center justify-center rounded-xl border p-5 text-center"
  style={{
    ...face,
    background: "color-mix(in srgb, var(--bg) 60%, transparent)",
    borderColor: "var(--border)",
    color: "var(--fg)",
    boxShadow: "var(--card-shadow)",
  }}
>
  {/* Icon and number badge at the top */}
  <span className="absolute left-5 right-5 top-5 flex items-center justify-between">
    <ChipIcon />
    <span
      className="rounded-full px-3.5 py-1 text-xs font-bold tracking-[0.2em]"
      style={{ background: PAPAYA, color: PAPAYA_INK }}
    >
      {String(index + 1).padStart(2, "0")}
    </span>
  </span>

  {/* Question centered horizontally and vertically */}
  <span className="block w-full text-lg font-semibold leading-snug tracking-[-0.03em] sm:text-xl">
    {item.q}
  </span>

  {/* Flip instruction at the bottom */}
  <span
    className="absolute bottom-5 border-b-4 pb-1 text-left text-[11px] font-bold tracking-[0.2em]"
    style={{ color: "var(--fg)", borderColor: PAPAYA }}
  >
    FLIP FOR THE ANSWER
  </span>
</span>

          {/* BACK: the answer (Green Papaya) */}
          <span
            aria-hidden={!flipped}
            className="absolute inset-0 flex flex-col rounded-xl border p-5"
            style={{
              ...face,
              background: "var(--surface)",
              borderColor: "var(--border)",
              color: "var(--fg)",
              transform: "rotateY(180deg)",
              boxShadow: "var(--card-shadow)",
            }}
          >
            <span
              className="mb-3 block text-[11px] font-bold tracking-[0.2em]"
              style={{ color: PAPAYA_INK, opacity: 0.7 }}
            >
              ANSWER
            </span>
            <span className="block text-sm font-medium leading-relaxed sm:text-base">
              {item.a}
            </span>
          </span>
        </motion.span>
      </button>
    </div>
  );
}

export default function FAQ() {
  const reduce = useReducedMotion();

  return (
    <section
      id="faq"
      className="relative isolate overflow-hidden bg-bg text-fg"
    >
      {/* Soft background gradient (same idea as the Hero, but lighter) */}
      <div
        className="pointer-events-none absolute inset-0 -z-30"
        style={{
          background: `
            radial-gradient(
              ellipse at 82% 30%,
              color-mix(in srgb, var(--palette-queen-blue) 38%, var(--bg)) 0%,
              color-mix(in srgb, var(--palette-queen-blue) 14%, var(--bg)) 40%,
              var(--bg) 75%
            )
          `,
        }}
      />

      {/* Decorative grid (same as Hero) */}
      <div
        className="pointer-events-none absolute inset-0 -z-20 opacity-[0.16]"
        style={{
          backgroundImage: `
            linear-gradient(to right, var(--palette-sage) 1px, transparent 1px),
            linear-gradient(to bottom, var(--palette-sage) 1px, transparent 1px)
          `,
          backgroundSize: "72px 72px",
          maskImage:
            "linear-gradient(to right, transparent, black 35%, black 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 35%, black 100%)",
        }}
      />

      {/* Ambient Green Papaya glow */}
      <div
        className="pointer-events-none absolute right-0 top-1/4 -z-10 h-[420px] w-[420px] rounded-full opacity-30 blur-[100px]"
        style={{ backgroundColor: PAPAYA }}
      />

      <div className="mx-auto max-w-[1800px] px-6 py-20 sm:px-10 sm:py-24 lg:px-16 lg:py-28">
        {/* ── Section header (same layout as THE PEOPLE) ── */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-8">
          {/* Label */}
          <div className="lg:col-span-3">
            <p
              className="pt-2 text-xs font-semibold tracking-[0.2em]"
              style={{ color: "var(--fg-muted)" }}
            >
              <span className="text-blue-nude dark:text-highlight">05&nbsp;</span>
              FAQ
            </p>
          </div>

          {/* Main heading — same type as the other section titles */}
          <div className="lg:col-span-6">
            <h2 className="text-[clamp(3.5rem,8vw,7.5rem)] font-semibold leading-[0.88] tracking-[-0.075em]">
              Got
              <span className="block">questions?</span>
              
            </h2>
          </div>

          {/* Description */}
          
        </div>

        {/* ── Cards ── */}
        <div
          className="mt-16 border-t pt-10 sm:mt-20"
          style={{ borderColor: "var(--border)" }}
        >
          <div className="flex flex-wrap justify-center gap-6">
            {FAQS.map((item, i) => (
              <FlipCard key={item.q} item={item} index={i} reduce={reduce} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}