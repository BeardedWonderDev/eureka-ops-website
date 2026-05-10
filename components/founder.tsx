import { ReactElement } from "react";

/**
 * Founder credibility section for the launch homepage.
 */
export default function Founder(): ReactElement {
  return (
    <section id="founder">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="border-t border-gray-800 py-12 md:py-20">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div className="rounded-3xl border border-indigo-500/20 bg-indigo-500/10 p-8">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-indigo-300">
                Founder
              </p>
              <h2 className="mt-4 font-nacelle text-3xl font-semibold text-gray-100 md:text-4xl">
                Built by an operator focused on how work actually gets done.
              </h2>
            </div>
            <div>
              <p className="text-lg leading-8 text-indigo-200/65">
                Eureka Ops was built by Brian as a practical response to a
                familiar problem: growing businesses do not just need more
                tools. They need more reliable execution.
              </p>
              <p className="mt-4 text-base leading-7 text-gray-400">
                His background is rooted in systems thinking, operations, and
                using technology to make real-world workflows work better. That
                same mindset shapes Eureka Ops — practical, custom, and grounded
                in how businesses actually run.
              </p>
              <blockquote className="mt-8 rounded-3xl border border-gray-800 bg-gray-900/60 p-6 font-nacelle text-2xl leading-9 text-gray-100">
                “Most service businesses do not need more software. They need
                more reliable execution. Eureka Ops exists to help build that
                capacity in a way that is practical, custom, and aligned to how
                the business actually runs.”
              </blockquote>
              <p className="mt-5 text-sm text-gray-400">
                Eureka Ops is run using the same principles it implements for
                clients.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
