import { ReactElement } from "react";
import Image from "next/image";
import FeaturesImage from "@/public/images/features.png";
import BlurredShape from "@/public/images/blurred-shape.svg";
import PilotReviewButton from "@/components/pilot-review-button";

const steps = [
  {
    title: "Tell us about the business",
    description:
      "Share your company details and the operational bottleneck creating the most drag.",
  },
  {
    title: "Review the workflow issue",
    description:
      "We use the pilot review to understand where execution is breaking down and whether an AI-supported system is a fit.",
  },
  {
    title: "Get a focused recommendation",
    description:
      "If there is alignment, we define the most sensible pilot starting point instead of over-scoping the project.",
  },
  {
    title: "Book the next step",
    description:
      "Choose a time and move into the pilot path only if it makes sense for the business.",
  },
];

/**
 * Conversion bridge section explaining what happens after the CTA.
 */
export default function WhatToExpect(): ReactElement {
  return (
    <section id="what-to-expect" className="relative">
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -mb-80 -translate-x-[120%] opacity-50"
        aria-hidden="true"
      >
        <Image
          className="max-w-none"
          src={BlurredShape}
          width={760}
          height={668}
          alt="Blurred shape"
        />
      </div>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="border-t border-gray-800 py-12 md:py-20">
          <div className="grid gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-indigo-300">
                What To Expect
              </p>
              <h2 className="mt-4 font-nacelle text-3xl font-semibold text-gray-100 md:text-4xl">
                The landing page should lead clearly into the pilot review.
              </h2>
              <p className="mt-5 text-lg leading-8 text-indigo-200/65">
                Booking should feel concrete, low-friction, and useful. The goal
                of the pilot review is to diagnose the bottleneck, decide if a
                focused pilot makes sense, and define the best next step.
              </p>
              <div className="mt-8 grid gap-4">
                {steps.map((step, index) => (
                  <article
                    key={step.title}
                    className="rounded-2xl border border-gray-800 bg-gray-900/60 p-5"
                  >
                    <p className="text-sm font-medium text-indigo-300">0{index + 1}</p>
                    <h3 className="mt-2 font-nacelle text-2xl font-semibold text-gray-100">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-indigo-200/65">
                      {step.description}
                    </p>
                  </article>
                ))}
              </div>
              <div className="mt-8">
                <PilotReviewButton label="Request a Pilot Review" />
              </div>
            </div>
            <div>
              <div className="rounded-3xl border border-gray-800 bg-linear-to-br from-gray-900/80 via-gray-900/60 to-gray-950 p-5 md:p-6">
                <div className="border-b border-gray-800 pb-4">
                  <p className="text-sm font-medium text-gray-100">Pilot review journey</p>
                  <p className="mt-1 text-sm text-gray-400">
                    A more guided path from landing page to booked conversation.
                  </p>
                </div>
                <div className="pt-5">
                  <Image
                    className="w-full"
                    src={FeaturesImage}
                    width={1104}
                    height={384}
                    alt="Pilot review workflow illustration"
                  />
                </div>
                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  <ExpectationCard
                    title="Who it is for"
                    body="Founder-led service businesses with recurring operational friction and clear workflow bottlenecks."
                  />
                  <ExpectationCard
                    title="What you leave with"
                    body="A clearer diagnosis, a better sense of fit, and a practical recommendation for the first pilot."
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

interface ExpectationCardProps {
  title: string;
  body: string;
}

function ExpectationCard({ title, body }: ExpectationCardProps): ReactElement {
  return (
    <div className="rounded-2xl border border-gray-800 bg-gray-950/70 p-4">
      <p className="text-sm font-medium text-gray-100">{title}</p>
      <p className="mt-2 text-sm leading-6 text-indigo-200/65">{body}</p>
    </div>
  );
}
