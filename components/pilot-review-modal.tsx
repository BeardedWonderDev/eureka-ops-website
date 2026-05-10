"use client";

import { ChangeEvent, FormEvent, ReactElement, useEffect, useMemo, useState } from "react";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";

interface FormState {
  fullName: string;
  businessName: string;
  email: string;
  phone: string;
  businessType: string;
  bottleneck: string;
}

const initialFormState: FormState = {
  fullName: "",
  businessName: "",
  email: "",
  phone: "",
  businessType: "",
  bottleneck: "",
};

/**
 * Provides the launch-version pilot review wizard modal.
 * Step one collects lead details. Step two reserves space for a server-backed
 * Go High Level calendar integration once credentials and endpoint wiring are ready.
 */
export default function PilotReviewModal(): ReactElement {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [step, setStep] = useState<1 | 2>(1);
  const [formState, setFormState] = useState<FormState>(initialFormState);

  useEffect(() => {
    const handleOpen = (): void => {
      setIsOpen(true);
    };

    window.addEventListener("open-pilot-review-modal", handleOpen);

    return () => {
      window.removeEventListener("open-pilot-review-modal", handleOpen);
    };
  }, []);

  const isStepOneValid = useMemo((): boolean => {
    return (
      formState.fullName.trim().length > 1 &&
      formState.businessName.trim().length > 1 &&
      formState.email.trim().length > 3 &&
      formState.phone.trim().length > 6 &&
      formState.businessType.trim().length > 1 &&
      formState.bottleneck.trim().length > 10
    );
  }, [formState]);

  const closeModal = (): void => {
    setIsOpen(false);
  };

  const resetModal = (): void => {
    setStep(1);
    setFormState(initialFormState);
    setIsOpen(false);
  };

  const updateField =
    (field: keyof FormState) =>
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
      setFormState((currentState) => ({
        ...currentState,
        [field]: event.target.value,
      }));
    };

  const handleContinue = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    if (!isStepOneValid) {
      return;
    }

    setStep(2);
  };

  return (
    <Dialog open={isOpen} onClose={closeModal} className="relative z-50">
      <DialogBackdrop className="fixed inset-0 bg-black/70 backdrop-blur-sm" />
      <div className="fixed inset-0 overflow-y-auto px-4 py-6 sm:px-6">
        <div className="flex min-h-full items-center justify-center">
          <DialogPanel className="w-full max-w-3xl overflow-hidden rounded-3xl border border-gray-800 bg-gray-950 shadow-2xl">
            <div className="border-b border-gray-800 px-6 py-5 sm:px-8">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-medium text-indigo-300">
                    Request a Pilot Review
                  </p>
                  <h2 className="mt-1 font-nacelle text-2xl font-semibold text-gray-100">
                    {step === 1
                      ? "Tell us about your business"
                      : "Book your pilot review"}
                  </h2>
                  <p className="mt-2 max-w-2xl text-sm text-indigo-200/65">
                    {step === 1
                      ? "Share your contact details and a little context so we can route your pilot review correctly."
                      : "Choose a time to review the workflow creating the most drag in your business. This launch version includes a booking placeholder until the Go High Level calendar endpoint is wired in."}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={closeModal}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gray-800 bg-gray-900 text-gray-400 transition hover:text-gray-200"
                  aria-label="Close pilot review modal"
                >
                  ×
                </button>
              </div>
              <div className="mt-5 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.2em] text-gray-500">
                <span className={step === 1 ? "text-indigo-300" : "text-gray-500"}>
                  Step 1 · Contact
                </span>
                <span>—</span>
                <span className={step === 2 ? "text-indigo-300" : "text-gray-500"}>
                  Step 2 · Schedule
                </span>
              </div>
            </div>

            {step === 1 ? (
              <form onSubmit={handleContinue} className="px-6 py-6 sm:px-8 sm:py-8">
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Full name">
                    <input
                      value={formState.fullName}
                      onChange={updateField("fullName")}
                      className="w-full rounded-2xl border border-gray-800 bg-gray-900 px-4 py-3 text-gray-100 outline-hidden transition focus:border-indigo-500"
                      placeholder="Brian Pistone"
                    />
                  </Field>
                  <Field label="Business name">
                    <input
                      value={formState.businessName}
                      onChange={updateField("businessName")}
                      className="w-full rounded-2xl border border-gray-800 bg-gray-900 px-4 py-3 text-gray-100 outline-hidden transition focus:border-indigo-500"
                      placeholder="Eureka Ops"
                    />
                  </Field>
                  <Field label="Email address">
                    <input
                      type="email"
                      value={formState.email}
                      onChange={updateField("email")}
                      className="w-full rounded-2xl border border-gray-800 bg-gray-900 px-4 py-3 text-gray-100 outline-hidden transition focus:border-indigo-500"
                      placeholder="you@company.com"
                    />
                  </Field>
                  <Field label="Phone number">
                    <input
                      value={formState.phone}
                      onChange={updateField("phone")}
                      className="w-full rounded-2xl border border-gray-800 bg-gray-900 px-4 py-3 text-gray-100 outline-hidden transition focus:border-indigo-500"
                      placeholder="(555) 555-5555"
                    />
                  </Field>
                  <Field label="Business type" className="sm:col-span-2">
                    <input
                      value={formState.businessType}
                      onChange={updateField("businessType")}
                      className="w-full rounded-2xl border border-gray-800 bg-gray-900 px-4 py-3 text-gray-100 outline-hidden transition focus:border-indigo-500"
                      placeholder="Plumbing, HVAC, painting, electrical, roofing, landscaping..."
                    />
                  </Field>
                  <Field label="What workflow is creating the most drag right now?" className="sm:col-span-2">
                    <textarea
                      value={formState.bottleneck}
                      onChange={updateField("bottleneck")}
                      className="min-h-32 w-full rounded-2xl border border-gray-800 bg-gray-900 px-4 py-3 text-gray-100 outline-hidden transition focus:border-indigo-500"
                      placeholder="Tell us where follow-up, coordination, admin work, or customer communication is breaking down."
                    />
                  </Field>
                </div>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-sm text-indigo-200/65">
                    We’ll use this to route your pilot review and prepare the booking step.
                  </p>
                  <button
                    type="submit"
                    disabled={!isStepOneValid}
                    className="btn group bg-linear-to-t from-indigo-600 to-indigo-500 text-white disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    Continue to Scheduling
                    <span className="ml-1 tracking-normal text-white/50 transition-transform group-hover:translate-x-0.5">
                      -&gt;
                    </span>
                  </button>
                </div>
              </form>
            ) : (
              <div className="px-6 py-6 sm:px-8 sm:py-8">
                <div className="rounded-3xl border border-indigo-500/20 bg-linear-to-br from-indigo-500/10 via-gray-900 to-gray-950 p-6">
                  <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
                    <div>
                      <p className="text-sm font-medium text-indigo-300">
                        Booking Integration Placeholder
                      </p>
                      <h3 className="mt-2 font-nacelle text-2xl font-semibold text-gray-100">
                        Go High Level calendar will render here
                      </h3>
                      <p className="mt-3 text-sm leading-6 text-indigo-200/65">
                        The next production step is wiring this modal to a server-side Go High Level integration so submitted lead details can flow into the booking experience without exposing credentials in the browser.
                      </p>
                      <ul className="mt-5 space-y-3 text-sm text-gray-300">
                        <li>• Contact data from step one is now captured in local state for the launch prototype.</li>
                        <li>• The live integration should submit these fields to a trusted server endpoint.</li>
                        <li>• That endpoint should return the correct calendar session or embed details for booking.</li>
                      </ul>
                    </div>
                    <div className="rounded-2xl border border-gray-800 bg-gray-900/80 p-5">
                      <p className="text-xs font-medium uppercase tracking-[0.2em] text-gray-500">
                        Lead snapshot
                      </p>
                      <dl className="mt-4 space-y-3 text-sm">
                        <SummaryRow label="Name" value={formState.fullName} />
                        <SummaryRow label="Business" value={formState.businessName} />
                        <SummaryRow label="Email" value={formState.email} />
                        <SummaryRow label="Phone" value={formState.phone} />
                        <SummaryRow label="Type" value={formState.businessType} />
                      </dl>
                    </div>
                  </div>
                </div>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-between">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="btn relative bg-linear-to-b from-gray-800 to-gray-800/60 text-gray-300"
                  >
                    Back
                  </button>
                  <button
                    type="button"
                    onClick={resetModal}
                    className="btn group bg-linear-to-t from-indigo-600 to-indigo-500 text-white"
                  >
                    Done
                    <span className="ml-1 tracking-normal text-white/50 transition-transform group-hover:translate-x-0.5">
                      -&gt;
                    </span>
                  </button>
                </div>
              </div>
            )}
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}

interface FieldProps {
  label: string;
  className?: string;
  children: ReactElement;
}

function Field({ label, className = "", children }: FieldProps): ReactElement {
  return (
    <label className={`block ${className}`.trim()}>
      <span className="mb-2 block text-sm font-medium text-gray-200">{label}</span>
      {children}
    </label>
  );
}

interface SummaryRowProps {
  label: string;
  value: string;
}

function SummaryRow({ label, value }: SummaryRowProps): ReactElement {
  return (
    <div>
      <dt className="text-gray-500">{label}</dt>
      <dd className="mt-1 text-gray-200">{value || "—"}</dd>
    </div>
  );
}
