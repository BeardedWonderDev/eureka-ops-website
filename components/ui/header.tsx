"use client";

import { ReactElement } from "react";
import Logo from "./logo";
import PilotReviewButton from "@/components/pilot-review-button";

/**
 * Launch-site header with minimal navigation and a single conversion CTA.
 */
export default function Header(): ReactElement {
  return (
    <header className="z-30 mt-2 w-full md:mt-5">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative flex min-h-14 items-center justify-between gap-3 rounded-2xl bg-gray-900/90 px-3 py-2 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] after:absolute after:inset-0 after:-z-10 after:backdrop-blur-xs">
          <div className="flex flex-1 items-center">
            <Logo />
          </div>

          <nav className="hidden items-center gap-6 md:flex">
            <a className="text-sm text-gray-300 transition hover:text-white" href="#how-it-works">
              How It Works
            </a>
            <a className="text-sm text-gray-300 transition hover:text-white" href="#why-eureka-ops">
              Why Eureka Ops
            </a>
            <a className="text-sm text-gray-300 transition hover:text-white" href="#faq">
              FAQ
            </a>
          </nav>

          <div className="flex flex-1 justify-end">
            <PilotReviewButton
              label="Request a Pilot Review"
              className="px-4 py-[9px] text-sm"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
