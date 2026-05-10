import { ReactElement } from "react";
import Image from "next/image";
import WorflowImg01 from "@/public/images/workflow-01.png";
import WorflowImg02 from "@/public/images/workflow-02.png";
import WorflowImg03 from "@/public/images/workflow-03.png";
import Spotlight from "@/components/spotlight";

const cards = [
  {
    image: WorflowImg01,
    title: "Diagnose the bottleneck",
    badge: "Step 01",
    description:
      "We identify the workflow creating the most drag in the business, instead of guessing at broad AI opportunities.",
  },
  {
    image: WorflowImg02,
    title: "Design the workforce",
    badge: "Step 02",
    description:
      "We map the right AI-supported role, system, or micro-team around that specific operational problem.",
  },
  {
    image: WorflowImg03,
    title: "Deploy a focused pilot",
    badge: "Step 03",
    description:
      "We turn the strategy into a practical pilot instead of handing over a vague recommendation deck.",
  },
];

/**
 * Visual solution section that restores richer section composition.
 */
export default function WhatWeDo(): ReactElement {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="border-t border-gray-800 py-12 md:py-20">
          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-16">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-indigo-300">
              What Eureka Ops Builds
            </p>
            <h2 className="mt-4 font-nacelle text-3xl font-semibold text-gray-100 md:text-4xl">
              Custom AI workforce systems for the work that keeps falling
              through the cracks.
            </h2>
            <p className="mt-5 text-lg leading-8 text-indigo-200/65">
              This is not a generic chatbot install and it is not another
              software subscription with no operational ownership. Eureka Ops is
              built to create practical execution capacity around the workflow
              that is already limiting growth.
            </p>
          </div>

          <Spotlight className="group mx-auto grid max-w-sm items-start gap-6 lg:max-w-none lg:grid-cols-3">
            {cards.map((card) => (
              <article
                key={card.title}
                className="group/card relative h-full overflow-hidden rounded-2xl bg-gray-800 p-px before:pointer-events-none before:absolute before:-left-40 before:-top-40 before:z-10 before:h-80 before:w-80 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:rounded-full before:bg-indigo-500/80 before:opacity-0 before:blur-3xl before:transition-opacity before:duration-500 after:pointer-events-none after:absolute after:-left-48 after:-top-48 after:z-30 after:h-64 after:w-64 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:rounded-full after:bg-indigo-500 after:opacity-0 after:blur-3xl after:transition-opacity after:duration-500 hover:after:opacity-20 group-hover:before:opacity-100"
              >
                <div className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-gray-950 after:absolute after:inset-0 after:bg-linear-to-br after:from-gray-900/50 after:via-gray-800/25 after:to-gray-900/50">
                  <Image
                    className="inline-flex w-full"
                    src={card.image}
                    width={350}
                    height={288}
                    alt={card.title}
                  />
                  <div className="p-6">
                    <div className="mb-3">
                      <span className="btn-sm relative rounded-full bg-gray-800/40 px-2.5 py-0.5 text-xs font-normal before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_bottom,--theme(--color-gray-700/.15),--theme(--color-gray-700/.5))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-gray-800/60">
                        <span className="bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
                          {card.badge}
                        </span>
                      </span>
                    </div>
                    <h3 className="font-nacelle text-2xl font-semibold text-gray-100">
                      {card.title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-indigo-200/65">
                      {card.description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </Spotlight>
        </div>
      </div>
    </section>
  );
}
