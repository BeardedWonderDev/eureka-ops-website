import { ReactElement } from "react";

const steps = [
  {
    title: "Pilot Review",
    description:
      "We identify the workflow creating the most drag in your business.",
  },
  {
    title: "Workforce Design",
    description:
      "We design the right AI-supported role, system, or micro-team around that workflow.",
  },
  {
    title: "Deployment",
    description:
      "We build and implement the pilot inside the real operating environment.",
  },
  {
    title: "Refinement",
    description:
      "We monitor, improve, and expand it if the pilot proves valuable.",
  },
];

/**
 * Explains the pilot engagement flow.
 */
export default function HowItWorks(): ReactElement {
  return (
    <section id="how-it-works">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="border-t border-gray-800 py-12 md:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-indigo-300">
              How It Works
            </p>
            <h2 className="mt-4 font-nacelle text-3xl font-semibold text-gray-100 md:text-4xl">
              Start with a focused pilot, not a giant overhaul.
            </h2>
            <p className="mt-5 text-lg leading-8 text-indigo-200/65">
              We do not begin by trying to redesign your whole business. We
              start with one workflow that is creating real drag, then build a
              focused pilot around it.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {steps.map((step, index) => (
              <article
                key={step.title}
                className="rounded-3xl border border-gray-800 bg-linear-to-br from-gray-900 via-gray-900/70 to-gray-950 p-6"
              >
                <p className="text-sm font-medium text-indigo-300">0{index + 1}</p>
                <h3 className="mt-4 font-nacelle text-2xl font-semibold text-gray-100">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-indigo-200/65">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-gray-400">
            The goal is to create measurable operational leverage quickly,
            without overbuilding.
          </p>
        </div>
      </div>
    </section>
  );
}
