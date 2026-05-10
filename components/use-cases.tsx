import { ReactElement } from "react";

const useCases = [
  {
    title: "Lead Follow-Up",
    description:
      "Make sure new inquiries do not go cold when the team gets busy.",
  },
  {
    title: "Estimate Follow-Up",
    description:
      "Stay on top of open quotes and improve close rates without relying on memory.",
  },
  {
    title: "Customer Communication",
    description:
      "Keep customers informed with more consistent reminders, updates, and post-job follow-through.",
  },
  {
    title: "Scheduling & Coordination",
    description:
      "Reduce communication breakdowns between the office, the field, and the customer.",
  },
  {
    title: "Review & Reputation Follow-Up",
    description:
      "Turn completed work into more reviews and stronger local trust.",
  },
  {
    title: "Post-Job Reactivation",
    description:
      "Re-engage past customers for follow-up services, seasonal work, or maintenance reminders.",
  },
];

/**
 * Example pilot starting points with a lighter card density than v1.
 */
export default function UseCases(): ReactElement {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="border-t border-gray-800 py-12 md:py-20">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-indigo-300">
                Example Pilot Starting Points
              </p>
              <h2 className="mt-4 font-nacelle text-3xl font-semibold text-gray-100 md:text-4xl">
                Start with the workflow that is already costing the business.
              </h2>
              <p className="mt-5 text-lg leading-8 text-indigo-200/65">
                The strongest pilots begin with one recurring workflow that is
                already creating missed revenue, poor follow-through, owner
                dependency, or operational inconsistency.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {useCases.map((useCase) => (
                <article
                  key={useCase.title}
                  className="rounded-3xl border border-gray-800 bg-gray-900/50 p-5"
                >
                  <h3 className="font-nacelle text-xl font-semibold text-gray-100">
                    {useCase.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-indigo-200/65">
                    {useCase.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
