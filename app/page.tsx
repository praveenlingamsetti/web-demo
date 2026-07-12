export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 px-6 py-12 text-white">
      <main className="mx-auto flex w-full max-w-5xl flex-col gap-8 rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur md:p-12">
        <div className="inline-flex w-fit rounded-full border border-blue-300/30 bg-blue-400/10 px-4 py-1 text-sm tracking-wide text-blue-100">
          Welcome Dashboard
        </div>

        <section className="space-y-4">
          <h1 className="text-4xl font-bold leading-tight md:text-6xl">
            We are coming soon.
          </h1>
          <p className="max-w-2xl text-base text-slate-200 md:text-lg">
            Our team is building something awesome for you. Stay tuned for the
            official launch of this new dashboard experience.
          </p>
        </section>

        <section className="grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <p className="text-sm text-slate-300">Status</p>
            <p className="mt-2 text-xl font-semibold text-emerald-300">
              In Progress
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <p className="text-sm text-slate-300">Expected Release</p>
            <p className="mt-2 text-xl font-semibold text-cyan-300">
              Very Soon
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <p className="text-sm text-slate-300">Thank You</p>
            <p className="mt-2 text-xl font-semibold text-violet-300">
              For Your Patience
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
