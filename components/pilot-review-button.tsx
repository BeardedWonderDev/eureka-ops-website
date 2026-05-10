"use client";

import { ReactElement } from "react";

interface PilotReviewButtonProps {
  label: string;
  variant?: "primary" | "secondary";
  className?: string;
}

/**
 * Opens the pilot review modal via a global browser event so CTAs can stay lightweight.
 */
export default function PilotReviewButton({
  label,
  variant = "primary",
  className = "",
}: PilotReviewButtonProps): ReactElement {
  const baseClassName =
    variant === "primary"
      ? "btn group bg-linear-to-t from-indigo-600 to-indigo-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-[inset_0px_1px_0px_0px_--theme(--color-white/.16)] hover:bg-[length:100%_150%]"
      : "btn relative bg-linear-to-b from-gray-800 to-gray-800/60 bg-[length:100%_100%] bg-[bottom] text-gray-300 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-[length:100%_150%]";

  return (
    <button
      type="button"
      className={`${baseClassName} ${className}`.trim()}
      onClick={() => {
        window.dispatchEvent(new CustomEvent("open-pilot-review-modal"));
      }}
    >
      <span className="relative inline-flex items-center">
        {label}
        {variant === "primary" ? (
          <span className="ml-1 tracking-normal text-white/50 transition-transform group-hover:translate-x-0.5">
            -&gt;
          </span>
        ) : null}
      </span>
    </button>
  );
}
