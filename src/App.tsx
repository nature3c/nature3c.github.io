import React, { useState, useEffect } from "react";
import profilePic from "./assets/IMG_9463.jpg";

const CONFIG = {
  name: "Andrew Bae",
  tagline: "Columbia University · Network measurement",
  location: "Illinois, USA",
  email: "abae@imsa.edu",
  links: {
    scholar: "https://scholar.google.com/citations?user=YOUR_ID",
    github: "https://github.com/nature3c",
    linkedin: "https://www.linkedin.com/in/andrew-bae-b456362a8/",
  },
  profileImg: profilePic,
  about:
    "I'm Andrew Bae, a high school senior (Class of 2026) passionate about computer engineering, cybersecurity, and network research. My current work focuses on IPv6 privacy, entropy analysis, and secure Internet measurement. Beyond research, I enjoy history, golf, and football.",
  publications: [
    {
      title: "Coming Soon!",
      authors: "A. Bae",
      venue: "Venue",
      year: "2026",
      link: "#",
      notes:
        "Dotting the i's and crossing the t's.",
    },
    {
      title: "Un-Distillable LLMs via Entropy-Perturbed Logits",
      authors: "A. Bae, L. Patel, M. Shah",
      venue: "NeurIPS",
      year: "2025",
      link: "https://openreview.net/pdf?id=dM9EgKwtrc",
      notes:
        "We prove that adding carefully designed entropy-based noise to large language models’ outputs makes them provably un-distillable, mathematically limiting any student model from copying their knowledge.",
    },
    {
      title: "Network Dynamics Reasoning: A Novel Benchmark for Evaluating Multi-Step Inference in Large Language Models",
      authors: "A. Bae, L. Patel, S. Bhojanam",
      venue: "NeurIPS",
      year: "2025",
      link: "https://openreview.net/pdf?id=hM2rkFHbXI",
      notes:
        "We introduce a synthetic benchmark that tests large language models on predicting the outcomes of threshold-based network dynamics, revealing scaling-dependent reasoning abilities.",
    },
  ],
};

export default function App() {
  const [tab, setTab] = useState("about");
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const prefersDark =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initial = stored || (prefersDark ? "dark" : "light");
    setTheme(initial);
    document.documentElement.classList.toggle("dark", initial === "dark");
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className={theme === "dark" ? "dark" : ""}>
      <div
        className={`h-screen w-screen overflow-auto ${
          theme === "dark"
            ? "text-neutral-100 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(255,255,255,0.06),transparent),linear-gradient(to_bottom_right,#0b0b0c,#121214)]"
            : "text-gray-900 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(255,255,255,0.6),transparent),linear-gradient(to_bottom_right,#f6f7fb,#eef1f6)]"
        }`}
      >
        <div
          className={`${
            theme === "dark"
              ? "[background-image:linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)]"
              : "[background-image:linear-gradient(to_right,rgba(0,0,0,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.04)_1px,transparent_1px)]"
          } pointer-events-none fixed inset-0 [background-size:36px_36px]`}
        />

        <header className="relative">
          <div className="mx-auto max-w-4xl px-6 pt-16 pb-8">
            <button
              onClick={() =>
                setTheme(theme === "dark" ? "light" : "dark")
              }
              aria-label="Toggle dark mode"
              className="absolute top-6 right-6 rounded-full border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/10 backdrop-blur px-3 py-1.5 text-xs font-medium hover:bg-white/90 dark:hover:bg-white/20 transition"
            >
              {theme === "dark" ? "☀︎ Light" : "🌙 Dark"}
            </button>
            <div className="flex items-center gap-4">
              <img
                src={CONFIG.profileImg}
                alt="Profile"
                className="h-16 w-16 rounded-2xl object-cover ring-1 ring-black/10"
              />
              <div>
                <h1 className="text-2xl font-semibold tracking-tight">
                  {CONFIG.name}
                </h1>
                <p
                  className={`text-sm ${
                    theme === "dark" ? "text-neutral-400" : "text-gray-600"
                  }`}
                >
                  {CONFIG.tagline}
                </p>
              </div>
            </div>

            <div className="mt-4 flex flex-wrap items-center gap-2 text-sm">
              <a
                href={`mailto:${CONFIG.email}`}
                className="underline underline-offset-4 hover:no-underline"
              >
                {CONFIG.email}
              </a>
              <span className="opacity-40">•</span>
              <a
                href={CONFIG.links.scholar}
                target="_blank"
                rel="noreferrer"
                className="underline underline-offset-4 hover:no-underline"
              >
                Google Scholar
              </a>
              <span className="opacity-40">•</span>
              <a
                href={CONFIG.links.github}
                target="_blank"
                rel="noreferrer"
                className="underline underline-offset-4 hover:no-underline"
              >
                GitHub
              </a>
              <span className="opacity-40">•</span>
              <a
                href={CONFIG.links.linkedin}
                target="_blank"
                rel="noreferrer"
                className="underline underline-offset-4 hover:no-underline"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </header>

        <div className="mx-auto max-w-4xl px-6">
          <div
            className={`inline-flex rounded-full border ${
              theme === "dark"
                ? "border-white/10 bg-white/5"
                : "border-black/10 bg-white/60"
            } backdrop-blur supports-[backdrop-filter]:bg-white/40 p-1`}
          >
            {[
              { id: "about", label: "About" },
              { id: "publications", label: "Publications" },
            ].map(({ id, label }) => (
              <button
                key={id}
                onClick={() => setTab(id)}
                className={
                  "px-4 py-2 text-sm rounded-full transition-all " +
                  (tab === id
                    ? "bg-black text-white dark:bg-white dark:text-black shadow"
                    : theme === "dark"
                    ? "text-neutral-300 hover:bg-white/10"
                    : "text-gray-700 hover:bg-black/5")
                }
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        <main className="mx-auto max-w-4xl px-6 py-8">
          {tab === "about" && <AboutPanel theme={theme} />}
          {tab === "publications" && (
            <PublicationsPanel pubs={CONFIG.publications} theme={theme} />
          )}
        </main>

        <footer
          className={`mx-auto max-w-4xl px-6 pb-12 text-xs ${
            theme === "dark" ? "text-neutral-400" : "text-gray-600"
          }`}
        >
          © {new Date().getFullYear()} {CONFIG.name}
        </footer>
      </div>
    </div>
  );
}

function AboutPanel({ theme }: { theme: string }) {
  return (
    <article
      className={`prose max-w-none ${
        theme === "dark" ? "prose-invert" : ""
      }`}
    >
      <h2 className="text-xl font-semibold tracking-tight">About</h2>
      <p>{CONFIG.about}</p>
      <h3>Focus</h3>
      <ul>
        <li>Network measurement (IPv6 privacy, scanner safety)</li>
        <li>Trustworthy ML research & open-source tooling</li>
        <li>Mentorship and community building</li>
      </ul>
    </article>
  );
}

function PublicationsPanel({
  pubs,
  theme,
}: {
  pubs: any[];
  theme: string;
}) {
  if (!pubs?.length) {
    return (
      <div
        className={`text-sm ${
          theme === "dark" ? "text-neutral-400" : "text-gray-600"
        }`}
      >
        No publications yet. Add items in <code>CONFIG.publications</code>.
      </div>
    );
  }

  return (
    <div
      className={`divide-y ${
        theme === "dark" ? "divide-white/10" : "divide-black/10"
      }`}
    >
      {pubs.map((p, i) => (
        <a
          key={i}
          href={p.link || "#"}
          target={p.link ? "_blank" : undefined}
          rel={p.link ? "noreferrer" : undefined}
          className="block py-5 group"
        >
          <div className="flex items-start justify-between gap-6">
            <div>
              <h3 className="text-base font-medium leading-snug group-hover:underline underline-offset-4">
                {p.title}
              </h3>
              <p
                className={`mt-1 text-sm ${
                  theme === "dark" ? "text-neutral-300" : "text-gray-700"
                }`}
              >
                {p.authors}
              </p>
              <p
                className={`text-sm ${
                  theme === "dark" ? "text-neutral-400" : "text-gray-600"
                }`}
              >
                {p.venue} · {p.year}
              </p>
              {p.notes && (
                <p
                  className={`mt-2 text-sm ${
                    theme === "dark" ? "text-neutral-400" : "text-gray-600"
                  }`}
                >
                  {p.notes}
                </p>
              )}
            </div>
            <span className="shrink-0 text-[11px] rounded-full px-2 py-1 border border-black/10 dark:border-white/15">
              {p.year}
            </span>
          </div>
        </a>
      ))}
    </div>
  );
}
