import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/imprint")({
  component: Imprint,
})

function Imprint() {
  return (
    <div className="min-h-screen bg-white text-slate-900 antialiased">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-3xl font-semibold mb-8">Imprint</h1>

        <div className="space-y-4 text-slate-700">
          <div>
            <strong>Name:</strong> Leander Timon Riefel
          </div>
          <div>
            <strong>Email:</strong>{" "}
            <a
              href="mailto:riefel.leander@gmail.com"
              className="text-slate-900 hover:text-slate-700 underline"
            >
              riefel.leander@gmail.com
            </a>
          </div>
          <div>
            <strong>Hosted on:</strong>{" "}
            <a
              href="https://vercel.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-900 hover:text-slate-700 underline"
            >
              Vercel
            </a>
          </div>
          <div>
            <strong>Source code:</strong>{" "}
            <a
              href="https://github.com/leanderriefel"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-900 hover:text-slate-700 underline"
            >
              github.com/leanderriefel
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
