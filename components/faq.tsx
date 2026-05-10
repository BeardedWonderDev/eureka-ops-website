"use client";

import { Fragment, ReactElement, useState } from "react";

const leftFaqs = [
  {
    question: "Is this just a chatbot or automation setup?",
    answer:
      "No. Eureka Ops designs custom AI workforce systems around real workflows inside the business. The goal is operational capacity, not a generic bot.",
  },
  {
    question: "What kinds of businesses are the best fit?",
    answer:
      "Founder-led home service and trade businesses with recurring operational friction, inconsistent follow-up, and obvious execution bottlenecks.",
  },
  {
    question: "How do you decide what to build first?",
    answer:
      "We start with the workflow creating the most drag, missed opportunity, or owner dependency in the business.",
  },
  {
    question: "What does a pilot include?",
    answer:
      "A pilot starts with review and diagnosis, then moves into design, implementation, and early refinement around one bounded workflow.",
  },
];

const rightFaqs = [
  {
    question: "What happens when I request a pilot review?",
    answer:
      "You share your business details and the current bottleneck first, then move into booking. The conversation is meant to diagnose fit and define the most sensible pilot starting point.",
  },
  {
    question: "Do I need to replace my team?",
    answer:
      "No. The goal is to add capacity, consistency, and leverage — not blindly replace people.",
  },
  {
    question: "Why not just hire someone?",
    answer:
      "Sometimes hiring is the right move. But when the bottleneck is fragmented, repetitive, and operational, a focused AI-supported system can often be deployed faster and more cost-effectively.",
  },
  {
    question: "Do you only work with home service and trade businesses?",
    answer:
      "That is the primary focus for the launch version because the workflow patterns are clear and the value is easy to identify.",
  },
];

/**
 * Two-column accordion FAQ for a cleaner lower-page conversion section.
 */
export default function Faq(): ReactElement {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({
    [leftFaqs[0].question]: true,
    [rightFaqs[0].question]: true,
  });

  function toggle(question: string): void {
    setOpenItems((current) => ({
      ...current,
      [question]: !current[question],
    }));
  }

  return (
    <section id="faq">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="border-t border-gray-800 py-12 md:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-indigo-300">
              FAQ
            </p>
            <h2 className="mt-4 font-nacelle text-3xl font-semibold text-gray-100 md:text-4xl">
              Questions owners usually ask before they book
            </h2>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <FaqColumn faqs={leftFaqs} openItems={openItems} toggle={toggle} />
            <FaqColumn faqs={rightFaqs} openItems={openItems} toggle={toggle} />
          </div>
        </div>
      </div>
    </section>
  );
}

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqColumnProps {
  faqs: FaqItem[];
  openItems: Record<string, boolean>;
  toggle: (question: string) => void;
}

function FaqColumn({ faqs, openItems, toggle }: FaqColumnProps): ReactElement {
  return (
    <div className="space-y-4">
      {faqs.map((faq) => {
        const isOpen = Boolean(openItems[faq.question]);

        return (
          <article
            key={faq.question}
            className="overflow-hidden rounded-3xl border border-gray-800 bg-gray-900/50"
          >
            <button
              type="button"
              onClick={() => toggle(faq.question)}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
              aria-expanded={isOpen}
            >
              <span className="font-nacelle text-xl font-semibold text-gray-100">
                {faq.question}
              </span>
              <span className="text-2xl leading-none text-indigo-300">
                {isOpen ? "−" : "+"}
              </span>
            </button>
            {isOpen ? (
              <Fragment>
                <div className="border-t border-gray-800 px-6 py-5 text-sm leading-7 text-indigo-200/65">
                  {faq.answer}
                </div>
              </Fragment>
            ) : null}
          </article>
        );
      })}
    </div>
  );
}
