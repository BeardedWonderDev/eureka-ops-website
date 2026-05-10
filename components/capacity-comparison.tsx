import { ReactElement } from "react";

/**
 * Compares targeted AI-supported capacity with traditional hiring-first approaches.
 */
export default function CapacityComparison(): ReactElement {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="border-t border-gray-800 py-12 md:py-20">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-indigo-300">
                Cost vs. Capacity
              </p>
              <h2 className="mt-4 font-nacelle text-3xl font-semibold text-gray-100 md:text-4xl">
                You may need the function before you can justify the hires.
              </h2>
              <p className="mt-5 text-lg leading-8 text-indigo-200/65">
                Many service businesses know they need better follow-up,
                stronger coordination, or more operational support. But hiring a
                full department is expensive, slow, and often too blunt an
                answer to a fragmented problem.
              </p>
              <p className="mt-4 text-base leading-7 text-gray-400">
                A focused AI workforce pilot can help create targeted execution
                capacity around the exact workflow that is currently limiting
                growth.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <ComparisonCard
                title="Traditional path"
                items={[
                  "Hire for one or more support roles",
                  "Absorb salary, taxes, training, and management overhead",
                  "Wait for ramp-up",
                  "Try to fit people around fragmented workflow gaps",
                ]}
              />
              <ComparisonCard
                title="Eureka Ops path"
                items={[
                  "Identify the exact bottleneck first",
                  "Build targeted AI-supported capacity around that workflow",
                  "Deploy faster than staffing a full function",
                  "Improve performance over time as the system learns the workflow",
                ]}
                highlight
              />
            </div>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <SupportBlock>
              For many businesses, even one additional full-time hire can cost
              far more annually than a focused pilot and ongoing management.
            </SupportBlock>
            <SupportBlock>
              The goal is not to replace every employee. The goal is to create
              targeted execution capacity where the business is currently
              constrained.
            </SupportBlock>
          </div>
        </div>
      </div>
    </section>
  );
}

interface ComparisonCardProps {
  title: string;
  items: string[];
  highlight?: boolean;
}

function ComparisonCard({
  title,
  items,
  highlight = false,
}: ComparisonCardProps): ReactElement {
  return (
    <article
      className={`rounded-3xl border p-6 ${
        highlight
          ? "border-indigo-500/20 bg-indigo-500/10"
          : "border-gray-800 bg-gray-900/50"
      }`}
    >
      <h3 className="font-nacelle text-2xl font-semibold text-gray-100">
        {title}
      </h3>
      <ul className="mt-4 space-y-3 text-sm leading-6 text-indigo-200/65">
        {items.map((item) => (
          <li key={item}>• {item}</li>
        ))}
      </ul>
    </article>
  );
}

interface SupportBlockProps {
  children: string;
}

function SupportBlock({ children }: SupportBlockProps): ReactElement {
  return (
    <div className="rounded-3xl border border-gray-800 bg-gray-900/60 p-6 text-sm leading-7 text-gray-300">
      {children}
    </div>
  );
}
