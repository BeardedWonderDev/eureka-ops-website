import { ReactElement } from "react";
import Image from "next/image";
import BlurredShape from "@/public/images/blurred-shape.svg";
import PilotReviewButton from "@/components/pilot-review-button";

/**
 * Final CTA focused on getting the visitor into the booking flow.
 */
export default function Cta(): ReactElement {
  return (
    <section className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -mb-24 ml-20 -translate-x-1/2"
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
        <div className="border-t border-gray-800 bg-linear-to-r from-transparent via-gray-800/50 py-12 md:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <h2
              className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl"
              data-aos="fade-up"
            >
              Start with a pilot review, not a vague AI strategy conversation.
            </h2>
            <p
              className="mx-auto max-w-2xl text-lg leading-8 text-indigo-200/65"
              data-aos="fade-up"
              data-aos-delay={100}
            >
              Tell us about your business, share the workflow creating the most
              drag, and book a conversation that is designed to clarify fit and
              identify the right first pilot.
            </p>
            <div className="mt-8 flex justify-center" data-aos="fade-up" data-aos-delay={200}>
              <PilotReviewButton label="Request a Pilot Review" />
            </div>
            <p className="mt-4 text-sm text-gray-400" data-aos="fade-up" data-aos-delay={300}>
              Best fit: founder-led home service and trade businesses with clear operational bottlenecks.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
