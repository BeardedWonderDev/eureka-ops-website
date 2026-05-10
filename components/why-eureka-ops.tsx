import { ReactElement } from "react";
import PilotReviewButton from "@/components/pilot-review-button";

const differentiators = [
  "Custom by design, not a canned package.",
  "Workflow-first instead of technology-first.",
  "Focused pilots instead of oversized transformation promises.",
  "Practical implementation in the real business environment.",
  "Managed refinement as the system proves value.",
];

/**
 * Combined trust section for founder credibility and differentiation.
 */
export default function WhyEurekaOps(): ReactElement {
  return (
    <section id="why-eureka-ops">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="border-t border-gray-800 py-12 md:py-20">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
            <div className="rounded-3xl border border-indigo-500/20 bg-indigo-500/10 p-8 md:p-10">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-indigo-300">
                Why Eureka Ops
              </p>
              <h2 className="mt-4 font-nacelle text-3xl font-semibold text-gray-100 md:text-4xl">
                Built by an operator focused on how work actually gets done.
              </h2>
              <p className="mt-5 text-lg leading-8 text-indigo-200/65">
                Eureka Ops is designed for businesses that need practical
                leverage, not AI theater. The approach starts with the broken
                workflow, builds around the way the business actually runs, and
                keeps the first engagement tight enough to prove real value.
              </p>
              <blockquote className="mt-8 border-l-2 border-indigo-400 pl-5 font-nacelle text-2xl leading-9 text-gray-100">
                “Most service businesses do not need more software. They need
                more reliable execution. Eureka Ops exists to help build that
                capacity in a way that is practical, custom, and aligned to how
                the business actually runs.”
              </blockquote>
              <p className="mt-4 text-sm text-gray-300">— Brian Pistone</p>
            </div>
            <div>
              <div className="rounded-3xl border border-gray-800 bg-linear-to-br from-gray-900/80 via-gray-900/60 to-gray-950 p-8">
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-indigo-300">
                  How this is different
                </p>
                <ul className="mt-5 space-y-4 text-sm leading-7 text-indigo-200/65">
                  {differentiators.map((item) => (
                    <li
                      key={item}
                      className="rounded-2xl border border-gray-800 bg-gray-950/70 px-4 py-4"
                    >
                      <span className="mr-2 text-indigo-300">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-8 rounded-2xl border border-gray-800 bg-gray-900/60 p-5">
                  <p className="text-sm font-medium text-gray-100">Best next step</p>
                  <p className="mt-2 text-sm leading-6 text-indigo-200/65">
                    If the business already feels the drag of broken follow-up,
                    owner dependency, or recurring workflow friction, the pilot
                    review is the right place to start.
                  </p>
                  <div className="mt-5">
                    <PilotReviewButton label="Request a Pilot Review" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
