import { createFileRoute, Link } from "@tanstack/react-router"
import { useMemo } from "react"
import { motion, useScroll, useTransform } from "motion/react"
import { easeOut } from "motion"
import { Signature } from "../components/Signature"

export const Route = createFileRoute("/")({
  component: Home,
})

function Home() {
  const skills = ["TypeScript", "React/Next.js", "SolidJS", "Java/Kotlin"]
  const project = {
    name: "Ignita",
    description:
      "Open-source note-taking app with an AI assistant — a calm Notion alternative.",
    url: "https://ignita.app",
  }

  const { scrollYProgress } = useScroll()
  const yBlob = useTransform(scrollYProgress, [0, 1], [0, 40])

  const viewport = useMemo(() => ({ once: true, margin: "-15%" }), [])

  const heroContainer = useMemo(
    () => ({
      hidden: {},
      visible: { transition: { staggerChildren: 0.07 } },
    }),
    []
  )
  const heroItem = useMemo(
    () => ({
      hidden: { opacity: 0, y: 20 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.55, ease: easeOut },
      },
    }),
    []
  )

  const blockContainer = useMemo(
    () => ({
      hidden: {},
      visible: { transition: { staggerChildren: 0.08 } },
    }),
    []
  )
  const blockItem = useMemo(
    () => ({
      hidden: { opacity: 0, y: 20 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: easeOut },
      },
    }),
    []
  )

  return (
    <div className="relative min-h-screen bg-white text-slate-900 antialiased">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <motion.div
          style={{ y: yBlob }}
          className="absolute -top-24 -left-24 w-[40rem] h-[40rem] rounded-full blur-3xl opacity-45 bg-gradient-to-br from-sky-200 to-indigo-100"
        />
        <motion.div
          style={{ y: yBlob }}
          className="absolute top-56 -right-20 w-[36rem] h-[36rem] rounded-full blur-3xl opacity-25 bg-gradient-to-br from-fuchsia-200 to-rose-100"
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <header className="pt-28 pb-16 md:pt-36 md:pb-24">
          <motion.div
            variants={heroContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="flex flex-col md:flex-row md:justify-between gap-6 md:gap-8"
          >
            <div className="flex-1 md:max-w-2xl">
              <motion.p
                variants={heroItem}
                className="text-sm tracking-widest uppercase text-slate-400"
              >
                Software Engineer
              </motion.p>
              <motion.h1
                variants={heroItem}
                className="mt-3 text-5xl md:text-7xl font-semibold leading-[1.05]"
              >
                Leander Riefel
              </motion.h1>
              <motion.p
                variants={heroItem}
                className="mt-5 max-w-2xl text-lg text-slate-600"
              >
                Building clean, scalable software. Currently working on Ignita.
              </motion.p>
            </div>
            <motion.div
              variants={heroItem}
              className="flex-shrink-0 w-auto mt-8 md:mt-12 max-md:flex max-md:justify-center"
            >
              <Signature className="h-auto opacity-90 max-w-none w-64 md:w-80 lg:w-[400px] xl:w-[500px]" />
            </motion.div>
          </motion.div>
          <motion.div
            variants={heroItem}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="mt-6 flex flex-wrap gap-4"
          >
            <a
              href="https://ignita.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full bg-slate-900 text-white px-6 py-3 text-sm font-medium hover:bg-slate-800 transition-colors"
            >
              Visit Ignita
            </a>
            <a
              href="mailto:riefel.leander@gmail.com"
              className="inline-flex items-center rounded-full border border-slate-300 text-slate-700 px-6 py-3 text-sm font-medium hover:border-slate-400 hover:text-slate-900 transition-colors"
            >
              Contact
            </a>
          </motion.div>
          <motion.ul
            variants={heroContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="mt-6 flex flex-wrap gap-2"
          >
            {skills.map((s) => (
              <motion.li
                key={s}
                variants={heroItem}
                className="px-3 py-1 rounded-full border border-slate-200 bg-white/60 text-slate-700 text-sm hover:border-slate-300 transition-colors"
              >
                {s}
              </motion.li>
            ))}
          </motion.ul>
        </header>

        <section className="mt-4 md:mt-0">
          <div className="grid md:grid-cols-[1.35fr,1fr] gap-10 items-center">
            <div className="relative">
              <div className="relative aspect-[16/9] rounded-2xl bg-white shadow-sm ring-1 ring-slate-200 overflow-hidden">
                <motion.div
                  variants={blockContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewport}
                  className="absolute inset-0"
                >
                  <motion.div
                    variants={blockItem}
                    className="absolute inset-0 bg-gradient-to-br from-slate-50 via-sky-50 to-indigo-50"
                  ></motion.div>
                </motion.div>
                <div className="absolute inset-0 flex items-center justify-center p-2 md:p-4">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <motion.img
                      variants={blockItem}
                      initial="hidden"
                      whileInView="visible"
                      viewport={viewport}
                      src="/ignita.webp"
                      alt="Ignita — open-source note-taking app"
                      loading="lazy"
                      className="size-full rounded-xl shadow-sm ring-1 ring-slate-200/70 object-cover"
                    />
                  </a>
                </div>
              </div>
            </div>
            <motion.div
              variants={blockContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
            >
              <motion.h2
                variants={blockItem}
                className="text-2xl md:text-3xl font-semibold"
              >
                {project.name}
              </motion.h2>
              <motion.p variants={blockItem} className="mt-4 text-slate-600">
                {project.description}
              </motion.p>
              <motion.div variants={blockItem} className="mt-8 flex gap-4">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-full bg-slate-900 text-white px-5 py-2.5 text-sm font-medium hover:bg-slate-800 transition-colors"
                >
                  ignita.app
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <section className="mt-24 md:mt-32">
          <motion.h3
            variants={blockItem}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="text-xl md:text-2xl font-semibold"
          >
            Skills & Background
          </motion.h3>
          <div className="mt-4 grid md:grid-cols-3 gap-8">
            <motion.div
              variants={blockContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              className="md:col-span-2 space-y-4 text-slate-700 leading-relaxed"
            >
              <motion.p variants={blockItem}>
                I focus primarily on software engineering, building fast,
                minimal web applications in TypeScript, mostly with React and
                SolidJS. I also design and implement backends, and have built
                systems in Java and Kotlin.
              </motion.p>
              <motion.p variants={blockItem}>
                I've worked on Minecraft server infrastructure: cloud proxy
                systems, plugins, custom server software, and modding. These
                projects taught me performance, networking, and reliability
                under load.
              </motion.p>
              <motion.p variants={blockItem}>
                I can do visual work like graphic design and editing in
                Photoshop and Illustrator, 3D graphics with Blender and Cinema
                4D, plus VFX and cutting in After Effects and Premiere Pro, but
                my primary focus is shipping thoughtful, robust software.
              </motion.p>
            </motion.div>
            <motion.div
              variants={blockContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              className="space-y-3"
            >
              <motion.div
                variants={blockItem}
                className="rounded-lg border border-slate-200 bg-white p-4"
              >
                <div className="text-xs uppercase tracking-wide text-slate-500">
                  Stack
                </div>
                <div className="mt-2 text-slate-800 text-sm">
                  TypeScript, React, SolidJS
                </div>
                <div className="text-slate-800 text-sm">
                  Node.js, Java, Kotlin
                </div>
              </motion.div>
              <motion.div
                variants={blockItem}
                className="rounded-lg border border-slate-200 bg-white p-4"
              >
                <div className="text-xs uppercase tracking-wide text-slate-500">
                  Also
                </div>
                <div className="mt-2 text-slate-800 text-sm">
                  Photoshop, Illustrator
                </div>
                <div className="text-slate-800 text-sm">Blender, Cinema 4D</div>
                <div className="text-slate-800 text-sm">
                  After Effects, Premiere Pro
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <footer className="mt-28 mb-16 text-center text-slate-500 space-y-4">
          <div>© {new Date().getFullYear()} Leander Riefel</div>
          <div>
            <Link
              to="/imprint"
              className="hover:text-slate-700 underline transition-colors"
            >
              Imprint
            </Link>
          </div>
        </footer>
      </div>
    </div>
  )
}
