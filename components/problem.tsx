import { ReactElement } from "react";
import Image from "next/image";
import BlurredShapeGray from "@/public/images/blurred-shape-gray.svg";

const problems = [
  "Leads do not get followed up consistently.",
  "Open estimates stall without structured re-contact.",
  "Customer communication becomes reactive.",
  "Scheduling and coordination get messy.",
  "Admin work piles up when everyone gets busy.",
  "Too much still depends on the owner remembering everything.",
];

/**
 * Problem framing section that restores visual structure and narrative focus.
 */
export default function Problem(): ReactElement {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="border-t border-gray-800 py-12 md:py-20">
          <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-indigo-300">
                The Real Problem
              </p>
              <h2 className="mt-4 font-nacelle text-3xl font-semibold text-gray-100 md:text-4xl">
                Most service businesses do not have a lead problem. They have an
                execution problem.
              </h2>
              <p className="mt-5 text-lg leading-8 text-indigo-200/65">
                Demand is not the only issue. Growth starts to stall when the
                business cannot execute reliably enough to keep up.
              </p>
              <p className="mt-4 text-base leading-7 text-gray-400">
                When the team gets busy, the important work starts slipping.
                That is where revenue leaks, customer experience suffers, and
                the owner gets pulled back into the middle of everything.
              </p>
            </div>
            <div className="relative overflow-hidden rounded-3xl border border-gray-800 bg-linear-to-br from-gray-900/90 via-gray-900/60 to-gray-950 p-6 md:p-8">
              <div
                className="pointer-events-none absolute right-0 top-0 -z-10 translate-x-1/3 -translate-y-1/3"
                aria-hidden="true"
              >
                <Image
                  className="max-w-none opacity-50"
                  src={BlurredShapeGray}
                  width={760}
                  height={668}
                  alt="Blurred shape"
                />
              </div>
              <div className="flex items-center justify-between border-b border-gray-800 pb-4">
                <div>
                  <p className="text-sm font-medium text-gray-100">
                    Typical breakdown pattern
                  </p>
                  <p className="mt-1 text-sm text-gray-400">
                    What starts happening before the business feels the drag.
                  </p>
                </div>
                <span className="rounded-full border border-indigo-500/20 bg-indigo-500/10 px-3 py-1 text-xs font-medium text-indigo-300">
                  Common bottlenecks
                </span>
              </div>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {problems.map((problem) => (
                  <div
                    key={problem}
                    className="rounded-2xl border border-gray-800 bg-gray-950/70 px-4 py-4 text-sm leading-6 text-indigo-200/65"
                  >
                    <span className="mr-2 text-indigo-300">•</span>
                    {problem}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
