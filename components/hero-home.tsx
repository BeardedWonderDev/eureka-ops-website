import { ReactElement } from "react";
import PilotReviewButton from "@/components/pilot-review-button";

/**
 * Conversion-focused hero for the Eureka Ops homepage.
 */
export default function HeroHome(): ReactElement {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          <div className="mx-auto max-w-4xl pb-12 text-center md:pb-16">
            <p
              className="inline-flex rounded-full border border-indigo-500/20 bg-indigo-500/10 px-4 py-1.5 text-sm font-medium text-indigo-300"
              data-aos="fade-up"
            >
              AI workforce design for founder-led home service businesses
            </p>
            <h1
              className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-6 pt-5 font-nacelle text-4xl font-semibold text-transparent md:text-6xl md:leading-tight"
              data-aos="fade-up"
            >
              Build execution capacity where your business is breaking down.
            </h1>
            <p
              className="mx-auto max-w-3xl text-lg leading-8 text-indigo-200/65 md:text-xl"
              data-aos="fade-up"
              data-aos-delay={120}
            >
              Eureka Ops helps growing service businesses identify the workflow
              creating the most drag, then design a focused AI workforce pilot
              around it — so follow-up, coordination, and customer operations do
              not keep stalling growth.
            </p>
            <div
              className="mx-auto mt-10 flex max-w-xs flex-col gap-4 sm:max-w-none sm:flex-row sm:justify-center"
              data-aos="fade-up"
              data-aos-delay={220}
            >
              <PilotReviewButton label="Request a Pilot Review" />
              <a
                href="#what-to-expect"
                className="btn relative bg-linear-to-b from-gray-800 to-gray-800/60 text-gray-300 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]"
              >
                What Happens Next
              </a>
            </div>
            <div
              className="mx-auto mt-6 grid max-w-3xl gap-4 text-left sm:grid-cols-3"
              data-aos="fade-up"
              data-aos-delay={320}
            >
              <ProofPill>Start with one bottleneck, not a giant overhaul</ProofPill>
              <ProofPill>Designed around real workflows, not generic AI hype</ProofPill>
              <ProofPill>Built to lead into a clear pilot review and booking path</ProofPill>
            </div>
          </div>

          <div className="relative" data-aos="fade-up" data-aos-delay={420}>
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.3),transparent_60%)]" />
            <div className="overflow-hidden rounded-3xl border border-gray-800 bg-linear-to-br from-gray-900 via-gray-900 to-gray-950 p-3 shadow-2xl md:p-6">
              <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
                <div className="rounded-[1.5rem] border border-gray-800 bg-gray-950/90 p-5 md:p-6">
                  <div className="flex items-center justify-between border-b border-gray-800 pb-4">
                    <div>
                      <p className="text-xs font-medium uppercase tracking-[0.2em] text-indigo-300">
                        Operational Review Snapshot
                      </p>
                      <p className="mt-2 text-sm text-gray-400">
                        What owners usually discover before they book a pilot review.
                      </p>
                    </div>
                    <div className="rounded-full border border-amber-500/20 bg-amber-500/10 px-3 py-1 text-xs font-medium text-amber-200">
                      Bottlenecks active
                    </div>
                  </div>

                  <div className="mt-5 grid gap-4 md:grid-cols-2">
                    <WorkflowPanel
                      title="Lead follow-up"
                      status="Inconsistent"
                      detail="New inquiries go cold when the office gets busy."
                    />
                    <WorkflowPanel
                      title="Estimate follow-through"
                      status="Delayed"
                      detail="Open quotes sit too long without structured re-contact."
                    />
                    <WorkflowPanel
                      title="Customer updates"
                      status="Reactive"
                      detail="Communication depends on manual effort and memory."
                    />
                    <WorkflowPanel
                      title="Owner dependency"
                      status="High"
                      detail="Too much operational coordination still routes through the founder."
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="rounded-[1.5rem] border border-indigo-500/20 bg-indigo-500/10 p-6">
                    <p className="text-xs font-medium uppercase tracking-[0.2em] text-indigo-300">
                      What the first call is for
                    </p>
                    <h2 className="mt-4 font-nacelle text-2xl font-semibold text-gray-100 md:text-3xl">
                      Diagnose the drag. Identify the pilot. Decide whether to move.
                    </h2>
                    <p className="mt-4 text-base leading-7 text-indigo-200/65">
                      The pilot review is designed to clarify where your business
                      is losing execution capacity, whether an AI-supported
                      workflow can help, and what a focused first implementation
                      should look like.
                    </p>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-3">
                    <MetricCard label="Review" value="Clarify the bottleneck" />
                    <MetricCard label="Recommendation" value="Focused pilot scope" />
                    <MetricCard label="Next step" value="Book if it makes sense" />
                  </div>
                  <div className="rounded-[1.5rem] border border-gray-800 bg-gray-900/70 p-5">
                    <p className="text-sm font-medium text-gray-100">Expected flow</p>
                    <ol className="mt-3 space-y-3 text-sm leading-6 text-indigo-200/65">
                      <li>1. Tell us about your business and current bottleneck</li>
                      <li>2. Review fit and discuss the workflow creating the most drag</li>
                      <li>3. Book a time and move into pilot planning if there’s alignment</li>
                    </ol>
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

interface ProofPillProps {
  children: string;
}

function ProofPill({ children }: ProofPillProps): ReactElement {
  return (
    <div className="rounded-2xl border border-gray-800 bg-gray-900/60 px-4 py-4 text-sm text-gray-300">
      {children}
    </div>
  );
}

interface WorkflowPanelProps {
  title: string;
  status: string;
  detail: string;
}

function WorkflowPanel({
  title,
  status,
  detail,
}: WorkflowPanelProps): ReactElement {
  return (
    <div className="rounded-2xl border border-gray-800 bg-gray-900/75 p-4">
      <div className="flex items-center justify-between gap-4">
        <p className="text-sm font-medium text-gray-100">{title}</p>
        <span className="rounded-full border border-amber-500/20 bg-amber-500/10 px-2.5 py-1 text-xs font-medium text-amber-200">
          {status}
        </span>
      </div>
      <p className="mt-2 text-sm leading-6 text-indigo-200/65">{detail}</p>
    </div>
  );
}

interface MetricCardProps {
  label: string;
  value: string;
}

function MetricCard({ label, value }: MetricCardProps): ReactElement {
  return (
    <div className="rounded-2xl border border-gray-800 bg-gray-950/85 px-4 py-4">
      <p className="text-xs uppercase tracking-[0.2em] text-gray-500">{label}</p>
      <p className="mt-2 text-sm font-medium text-gray-100">{value}</p>
    </div>
  );
}
