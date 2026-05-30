import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const portfolioUrl =
  "https://drive.google.com/drive/folders/1oAGQLI7zmJxR9KcBwcg4E8tfSSTH73U6?usp=drive_link";
const linkedinUrl = "https://www.linkedin.com/in/vicky-arman-224524274/";
const email = "vickyarman1247@gmail.com";
const phoneDisplay = "9267998824";
const phoneHref = "+919267998824";

const skills = [
  "Adobe Premiere Pro",
  "Adobe After Effects",
  "Adobe Photoshop",
  "Runway ML",
  "Pika Labs",
  "Midjourney",
  "ElevenLabs",
  "ChatGPT",
  "Sora",
  "Veo 3",
  "Synthesia",
  "Kaiber",
];

const services = [
  {
    title: "Video Editing",
    desc: "Clean, cinematic edits for reels, promos, explainers, and branded content.",
  },
  {
    title: "Motion Graphics",
    desc: "Animated text, title sequences, transitions, and visual storytelling.",
  },
  {
    title: "AI Video Creation",
    desc: "AI-assisted workflows for fast turnaround, visual variation, and modern content.",
  },
  {
    title: "Short Form Reels",
    desc: "High-retention Instagram, YouTube Shorts, and social media edits.",
  },
  {
    title: "Commercial Ads",
    desc: "Premium product and brand ads designed to feel polished and persuasive.",
  },
  {
    title: "Creative Direction",
    desc: "Concept development, visual flow, pacing, and aesthetic direction.",
  },
];

const projects = [
  {
    title: "AI Commercial Ad",
    type: "Brand Film",
    color: "from-violet-500/30 to-fuchsia-500/10",
  },
  {
    title: "Motion Graphics Reel",
    type: "Social Content",
    color: "from-cyan-500/25 to-violet-500/10",
  },
  {
    title: "Ayurveda Promo Video",
    type: "Hospital Campaign",
    color: "from-emerald-500/25 to-violet-500/10",
  },
  {
    title: "Short-Form Reel Series",
    type: "Engagement Content",
    color: "from-amber-500/20 to-fuchsia-500/10",
  },
];

const aiTools = [
  "Runway",
  "Sora",
  "Veo 3",
  "Pika",
  "Midjourney",
  "ElevenLabs",
  "Synthesia",
  "Kaiber",
  "ChatGPT",
];

const stats = [
  { value: "1+", label: "Years Experience" },
  { value: "100+", label: "Videos Edited" },
  { value: "10+", label: "AI Tools Used" },
  { value: "24h", label: "Fast Response" },
];

const testimonials = [
  {
    quote:
      "Reliable, creative, and fast. Great for modern content that needs both style and clarity.",
    name: "Marketing Team",
    role: "Client Feedback Style",
  },
  {
    quote:
      "Strong visual sense, good storytelling, and very comfortable with AI-based workflows.",
    name: "Creative Lead",
    role: "Client Feedback Style",
  },
];

function Icon({ children, className = "h-4 w-4" }) {
  return (
    <span className={`inline-flex items-center justify-center ${className}`} aria-hidden="true">
      {children}
    </span>
  );
}

function MailIcon({ className = "h-4 w-4" }) {
  return (
    <Icon className={className}>
      <svg viewBox="0 0 24 24" fill="none" className="h-full w-full" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </svg>
    </Icon>
  );
}

function ArrowIcon({ className = "h-4 w-4" }) {
  return (
    <Icon className={className}>
      <svg viewBox="0 0 24 24" fill="none" className="h-full w-full" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 12h14" />
        <path d="m12 5 7 7-7 7" />
      </svg>
    </Icon>
  );
}

function LinkIcon({ className = "h-4 w-4" }) {
  return (
    <Icon className={className}>
      <svg viewBox="0 0 24 24" fill="none" className="h-full w-full" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 13a5 5 0 0 1 0-7l1-1a5 5 0 0 1 7 7l-1 1" />
        <path d="M14 11a5 5 0 0 1 0 7l-1 1a5 5 0 0 1-7-7l1-1" />
      </svg>
    </Icon>
  );
}

function BriefcaseIcon({ className = "h-4 w-4" }) {
  return (
    <Icon className={className}>
      <svg viewBox="0 0 24 24" fill="none" className="h-full w-full" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 6V5a2 2 0 0 1 2-2h0a2 2 0 0 1 2 2v1" />
        <rect x="3" y="6" width="18" height="14" rx="2" />
        <path d="M3 12h18" />
      </svg>
    </Icon>
  );
}

function PlayIcon({ className = "h-4 w-4" }) {
  return (
    <Icon className={className}>
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-full w-full">
        <path d="M8 5v14l11-7z" />
      </svg>
    </Icon>
  );
}

function StarIcon({ className = "h-3.5 w-3.5" }) {
  return (
    <Icon className={className}>
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-full w-full">
        <path d="m12 2 2.9 6.2L22 9l-5 4.8L18.2 21 12 17.8 5.8 21 7 13.8 2 9l7.1-.8z" />
      </svg>
    </Icon>
  );
}

function BadgeIcon({ className = "h-4 w-4" }) {
  return (
    <Icon className={className}>
      <svg viewBox="0 0 24 24" fill="none" className="h-full w-full" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l2.4 5.1L20 8l-4 3.9.9 5.9L12 15.9 7.1 17.8 8 11.9 4 8l5.6-.9z" />
      </svg>
    </Icon>
  );
}

function ClockIcon({ className = "h-4 w-4" }) {
  return (
    <Icon className={className}>
      <svg viewBox="0 0 24 24" fill="none" className="h-full w-full" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </svg>
    </Icon>
  );
}

function PhoneIcon({ className = "h-4 w-4" }) {
  return (
    <Icon className={className}>
      <svg viewBox="0 0 24 24" fill="none" className="h-full w-full" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.9v3a2 2 0 0 1-2.2 2A19.8 19.8 0 0 1 3 7.2 2 2 0 0 1 5 5h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.6a2 2 0 0 1-.5 2.1l-1.3 1.3a16 16 0 0 0 6.4 6.4l1.3-1.3a2 2 0 0 1 2.1-.5c.8.3 1.7.5 2.6.6A2 2 0 0 1 22 16.9Z" />
      </svg>
    </Icon>
  );
}

function ExternalIcon({ className = "h-4 w-4" }) {
  return (
    <Icon className={className}>
      <svg viewBox="0 0 24 24" fill="none" className="h-full w-full" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 3h7v7" />
        <path d="M10 14 21 3" />
        <path d="M21 14v7h-7" />
        <path d="M21 21 3 3" />
      </svg>
    </Icon>
  );
}

function LinkedInIcon({ className = "h-4 w-4" }) {
  return (
    <Icon className={className}>
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-full w-full">
        <path d="M6.94 6.5A1.94 1.94 0 1 1 3.06 6.5a1.94 1.94 0 0 1 3.88 0ZM3.5 21h3v-10h-3v10ZM10 11h2.87v1.37h.04c.4-.75 1.38-1.54 2.83-1.54 3.03 0 3.59 1.99 3.59 4.57V21h-3v-4.45c0-1.06-.02-2.43-1.48-2.43-1.49 0-1.72 1.16-1.72 2.35V21h-3v-10Z" />
      </svg>
    </Icon>
  );
}

function SectionTitle({ eyebrow, title, subtitle }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium tracking-[0.2em] text-violet-200 uppercase">
        <StarIcon />
        {eyebrow}
      </p>
      <h2 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">{title}</h2>
      <p className="mt-4 text-sm leading-7 text-slate-300 md:text-base">{subtitle}</p>
    </div>
  );
}

function AnimatedBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden">
      <motion.div
        aria-hidden="true"
        className="absolute -left-24 -top-24 h-96 w-96 rounded-full bg-violet-600/20 blur-3xl"
        animate={{ x: [0, 40, 0], y: [0, 25, 0], scale: [1, 1.12, 1] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden="true"
        className="absolute right-[-8rem] top-1/4 h-[28rem] w-[28rem] rounded-full bg-fuchsia-600/15 blur-3xl"
        animate={{ x: [0, -35, 0], y: [0, -20, 0], scale: [1, 1.08, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden="true"
        className="absolute bottom-[-8rem] left-[28%] h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl"
        animate={{ x: [0, 30, 0], y: [0, -18, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden="true"
        className="absolute inset-0 opacity-40"
        style={{
          background:
            "linear-gradient(120deg, rgba(139,92,246,0.18), rgba(168,85,247,0.06), rgba(34,211,238,0.14), rgba(139,92,246,0.18))",
          backgroundSize: "300% 300%",
        }}
        animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(139,92,246,0.12),transparent_30%),radial-gradient(circle_at_bottom,rgba(14,165,233,0.08),transparent_30%)]" />
    </div>
  );
}

function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-black/30 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <div>
          <p className="text-sm uppercase tracking-[0.35em] text-violet-200/80">Vicky Arman</p>
          <p className="text-xs text-slate-400">AI Video Editor • Motion Graphics</p>
        </div>
        <div className="hidden items-center gap-3 md:flex">
          <a href="#work" className="text-sm text-slate-300 transition hover:text-white">
            Work
          </a>
          <a href="#services" className="text-sm text-slate-300 transition hover:text-white">
            Services
          </a>
          <a href="#contact" className="text-sm text-slate-300 transition hover:text-white">
            Contact
          </a>
          <Button asChild className="ml-2 rounded-full bg-violet-600 px-5 text-white hover:bg-violet-500">
            <a href={portfolioUrl} target="_blank" rel="noopener noreferrer">
              Portfolio <ExternalIcon className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="mx-auto max-w-7xl px-4 pb-20 pt-12 sm:px-6 lg:px-8 lg:pt-20">
      <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 shadow-[0_0_40px_rgba(139,92,246,0.15)]">
            <BadgeIcon className="h-4 w-4 text-emerald-400" />
            Available for freelance and full-time work
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl text-5xl font-semibold leading-tight tracking-tight md:text-7xl"
          >
            Crafting{' '}
            <span className="bg-gradient-to-r from-violet-300 via-fuchsia-300 to-cyan-300 bg-clip-text text-transparent">
              cinematic stories
            </span>{' '}
            with AI and smart editing.
          </motion.h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
            I am Vicky Arman, an AI Video Editor with experience in promotional videos, reels,
            motion graphics, and brand-focused visual content. I blend creativity with AI workflows
            to deliver polished results faster.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Button asChild className="rounded-full bg-violet-600 px-6 py-6 text-white hover:bg-violet-500">
              <a href="#work">
                View Work <ArrowIcon className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="rounded-full border-white/15 bg-white/5 px-6 py-6 text-white hover:bg-white/10 hover:text-white"
            >
              <a href={`mailto:${email}`}>
                Hire Me <MailIcon className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="rounded-full border-white/15 bg-white/5 px-6 py-6 text-white hover:bg-white/10 hover:text-white"
            >
              <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
                LinkedIn <LinkedInIcon className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                whileHover={{ y: -4 }}
                className="rounded-2xl border border-white/10 bg-white/5 p-4 shadow-xl shadow-violet-900/10 backdrop-blur"
              >
                <div className="text-2xl font-semibold text-white">{stat.value}</div>
                <div className="mt-1 text-xs uppercase tracking-[0.2em] text-slate-400">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-violet-500/20 via-fuchsia-500/10 to-cyan-500/10 blur-2xl" />
          <Card className="relative overflow-hidden rounded-[2rem] border-white/10 bg-white/5 backdrop-blur-xl">
            <CardContent className="p-0">
              <div className="relative aspect-[4/5] w-full overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(139,92,246,0.18),rgba(255,255,255,0.03),rgba(34,211,238,0.12))]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.14),transparent_30%),radial-gradient(circle_at_80%_30%,rgba(139,92,246,0.22),transparent_20%),radial-gradient(circle_at_50%_80%,rgba(34,211,238,0.12),transparent_25%)]" />
                <div className="absolute inset-0 flex flex-col justify-between p-6">
                  <div className="flex items-center justify-between">
                    <div className="rounded-full border border-white/10 bg-black/25 px-3 py-1 text-xs text-slate-200">
                      Premium Portfolio
                    </div>
                    <div className="flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs text-emerald-200">
                      <div className="h-2 w-2 rounded-full bg-emerald-400" />
                      Online
                    </div>
                  </div>

                  <div className="space-y-5">
                    <div>
                      <p className="text-sm uppercase tracking-[0.3em] text-violet-200/80">Profile</p>
                      <h3 className="mt-2 text-3xl font-semibold">Vicky Arman</h3>
                      <p className="mt-2 max-w-sm text-sm leading-7 text-slate-200/90">
                        AI Video Editor at Maharishi Ayurveda Hospital, focused on engaging,
                        brand-aligned content and modern AI workflows.
                      </p>
                    </div>

                    <div className="grid gap-3">
                      <div className="rounded-2xl border border-white/10 bg-black/20 p-4 backdrop-blur-sm">
                        <div className="flex items-center gap-3 text-sm text-slate-200">
                          <BriefcaseIcon className="h-4 w-4 text-violet-300" />
                          Current Role
                        </div>
                        <p className="mt-2 text-sm text-slate-300">
                          AI Video Editor • Maharishi Ayurveda Hospital
                        </p>
                      </div>
                      <div className="rounded-2xl border border-white/10 bg-black/20 p-4 backdrop-blur-sm">
                        <div className="flex items-center gap-3 text-sm text-slate-200">
                          <ClockIcon className="h-4 w-4 text-cyan-300" />
                          Response Time
                        </div>
                        <p className="mt-2 text-sm text-slate-300">
                          Fast communication and reliable turnaround
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <Button asChild size="sm" className="rounded-full bg-white px-4 text-black hover:bg-slate-200">
                        <a href={portfolioUrl} target="_blank" rel="noopener noreferrer">
                          <PlayIcon className="mr-2 h-4 w-4" /> Watch Portfolio
                        </a>
                      </Button>
                      <Button
                        asChild
                        size="sm"
                        variant="ghost"
                        className="rounded-full border border-white/10 bg-white/5 text-white hover:bg-white/10"
                      >
                        <a href="#contact">
                          <MailIcon className="mr-2 h-4 w-4" /> Contact
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionTitle
        eyebrow="About"
        title="Creative editing with a modern AI edge"
        subtitle="From educational content to promotional visuals, my work focuses on strong storytelling, visual rhythm, and polished delivery."
      />
      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        <Card className="border-white/10 bg-white/5 backdrop-blur-xl">
          <CardContent className="p-6 md:p-8">
            <div className="flex items-center gap-3">
              <div className="rounded-2xl border border-white/10 bg-violet-500/10 p-3 text-violet-200">
                <BriefcaseIcon className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">Professional Summary</h3>
                <p className="text-sm text-slate-400">Based on your CV</p>
              </div>
            </div>
            <p className="mt-5 text-sm leading-8 text-slate-300 md:text-base">
              Creative and detail-oriented AI Video Editor with nearly 1 year of professional
              experience at Maharishi Ayurveda Hospital. Skilled in blending AI tools and
              traditional editing techniques to create engaging, high-quality visual content.
              Passionate about motion graphics, cinematic storytelling, and new-age AI video
              workflows.
            </p>
          </CardContent>
        </Card>

        <Card className="border-white/10 bg-white/5 backdrop-blur-xl">
          <CardContent className="p-6 md:p-8">
            <div className="flex items-center gap-3">
              <div className="rounded-2xl border border-white/10 bg-cyan-500/10 p-3 text-cyan-200">
                <StarIcon className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">Education & Growth</h3>
                <p className="text-sm text-slate-400">Continuous learning</p>
              </div>
            </div>
            <div className="mt-5 space-y-4 text-sm leading-7 text-slate-300 md:text-base">
              <p>B.A. Programme, SOL, Delhi University — currently in 2nd year (2025).</p>
              <p>AI Video Editing & Motion Graphics Course — MAAC Institute, completed 2024.</p>
              <p>Focused on storytelling, aesthetic sense, pacing, and creative direction.</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionTitle
        eyebrow="Services"
        title="What I create"
        subtitle="A focused set of services built for brands, creators, agencies, and businesses that need polished visual content."
      />
      <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {services.map((service) => (
          <motion.div key={service.title} whileHover={{ y: -6 }}>
            <Card className="h-full border-white/10 bg-white/5 backdrop-blur-xl transition hover:border-violet-400/30 hover:bg-white/[0.07]">
              <CardContent className="p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-violet-500/10 text-violet-200">
                  <StarIcon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-xl font-semibold">{service.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{service.desc}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function Work() {
  return (
    <section id="work" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionTitle
        eyebrow="Portfolio"
        title="Selected work style"
        subtitle="Replace these cards with your actual project thumbnails or video embeds when you are ready."
      />
      <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {projects.map((project) => (
          <motion.div key={project.title} whileHover={{ y: -8 }}>
            <Card className="group h-full overflow-hidden border-white/10 bg-white/5 backdrop-blur-xl">
              <CardContent className="p-0">
                <div className={`relative flex aspect-[4/5] items-end overflow-hidden bg-gradient-to-br ${project.color}`}>
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(255,255,255,0.16),transparent_24%),linear-gradient(to_top,rgba(7,7,11,0.95),transparent_55%)]" />
                  <div className="relative p-5">
                    <p className="text-xs uppercase tracking-[0.25em] text-slate-300">{project.type}</p>
                    <h3 className="mt-2 text-2xl font-semibold text-white">{project.title}</h3>
                    <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/25 px-3 py-1 text-xs text-slate-200 transition group-hover:bg-black/35">
                      Preview style <ExternalIcon className="h-3.5 w-3.5" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionTitle
        eyebrow="Skills"
        title="Tools and capabilities"
        subtitle="A clean overview of the editing software and AI tools you already use in your work."
      />
      <div className="mt-12 flex flex-wrap justify-center gap-3">
        {skills.map((skill) => (
          <span
            key={skill}
            className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 shadow-lg shadow-violet-950/10 backdrop-blur"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}

function AITools() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionTitle
        eyebrow="AI Tools"
        title="Tool stack"
        subtitle="A modern workflow combining creative software and AI-powered production tools."
      />
      <div className="mt-12 flex flex-wrap justify-center gap-3">
        {aiTools.map((tool) => (
          <span
            key={tool}
            className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 shadow-lg shadow-violet-950/10 backdrop-blur"
          >
            {tool}
          </span>
        ))}
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionTitle
        eyebrow="Testimonials"
        title="Client-style feedback"
        subtitle="These can be replaced later with real testimonials from clients, managers, or collaborators."
      />
      <div className="mt-12 grid gap-5 lg:grid-cols-2">
        {testimonials.map((item) => (
          <Card key={item.name} className="border-white/10 bg-white/5 backdrop-blur-xl">
            <CardContent className="p-6 md:p-8">
              <p className="text-base leading-8 text-slate-300 md:text-lg">“{item.quote}”</p>
              <div className="mt-6">
                <div className="font-semibold text-white">{item.name}</div>
                <div className="text-sm text-slate-400">{item.role}</div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <Card className="border-white/10 bg-white/5 backdrop-blur-xl">
          <CardContent className="p-6 md:p-8">
            <SectionTitle
              eyebrow="Contact"
              title="Let’s build something premium"
              subtitle="Available for collaborations, freelance projects, and editing partnerships."
            />
            <div className="mt-8 space-y-4 text-sm text-slate-300">
              <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/20 p-4">
                <MailIcon className="h-4 w-4 text-violet-300" />
                <a href={`mailto:${email}`} className="break-all hover:text-white">
                  {email}
                </a>
              </div>
              <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/20 p-4">
                <PhoneIcon className="h-4 w-4 text-cyan-300" />
                <a href={`tel:${phoneHref}`} className="hover:text-white">
                  {phoneDisplay}
                </a>
              </div>
              <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/20 p-4">
                <ExternalIcon className="h-4 w-4 text-emerald-300" />
                <a href={portfolioUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                  Open Google Drive Portfolio
                </a>
              </div>
              <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/20 p-4">
                <LinkedInIcon className="h-4 w-4 text-blue-300" />
                <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                  LinkedIn Profile
                </a>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-white/10 bg-gradient-to-br from-violet-600/15 via-white/5 to-cyan-500/10 backdrop-blur-xl">
          <CardContent className="p-6 md:p-8">
            <h3 className="text-2xl font-semibold text-white">Quick CTA</h3>
            <p className="mt-3 max-w-2xl text-sm leading-8 text-white md:text-base">
              Need reels, ads, motion graphics, or AI-driven video content? This portfolio is
              designed to show your creative direction, technical skill, and premium brand style.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild className="rounded-full bg-violet-600 px-6 py-6 text-white hover:bg-violet-500">
                <a href={`mailto:${email}`}>Email Me</a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="rounded-full border-white/15 bg-white/5 px-6 py-6 text-white hover:bg-white/10 hover:text-white"
              >
                <a href={portfolioUrl} target="_blank" rel="noopener noreferrer">
                  Portfolio Link <ExternalIcon className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="rounded-full border-white/15 bg-white/5 px-6 py-6 text-white hover:bg-white/10 hover:text-white"
              >
                <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
                  LinkedIn <LinkedInIcon className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 py-8 text-center text-sm text-slate-400">
      © 2026 Vicky Arman • AI Video Editor • Built with premium portfolio style
    </footer>
  );
}

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-[#07070b] text-white">
      <AnimatedBackground />
      <div className="relative">
        <Navbar />
        <Hero />
        <About />
        <Services />
        <Work />
        <Skills />
        <AITools />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
