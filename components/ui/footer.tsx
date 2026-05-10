import { ReactElement } from "react";
import Image from "next/image";
import FooterIllustration from "@/public/images/footer-illustration.svg";
import Logo from "./logo";

/**
 * Minimal footer for the Eureka Ops launch site.
 */
export default function Footer(): ReactElement {
  return (
    <footer>
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div
          className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -translate-x-1/2"
          aria-hidden="true"
        >
          <Image
            className="max-w-none"
            src={FooterIllustration}
            width={1076}
            height={378}
            alt="Footer illustration"
          />
        </div>
        <div className="grid gap-10 border-t border-gray-800 py-10 md:grid-cols-[1.2fr_0.8fr_0.8fr] md:py-12">
          <div>
            <div className="mb-4">
              <Logo />
            </div>
            <p className="max-w-md text-sm leading-7 text-indigo-200/65">
              Eureka Ops builds custom AI workforce systems for founder-led home
              service and trade businesses that need more reliable execution
              capacity.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-medium text-gray-200">Navigate</h3>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <a className="text-indigo-200/65 transition hover:text-indigo-400" href="#how-it-works">
                  How It Works
                </a>
              </li>
              <li>
                <a className="text-indigo-200/65 transition hover:text-indigo-400" href="#why-eureka-ops">
                  Why Eureka Ops
                </a>
              </li>
              <li>
                <a className="text-indigo-200/65 transition hover:text-indigo-400" href="#founder">
                  Founder
                </a>
              </li>
              <li>
                <a className="text-indigo-200/65 transition hover:text-indigo-400" href="#faq">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-medium text-gray-200">Legal</h3>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <a className="text-indigo-200/65 transition hover:text-indigo-400" href="#0">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a className="text-indigo-200/65 transition hover:text-indigo-400" href="#0">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="pb-8 text-sm text-gray-500 md:pb-12">© Eureka Ops</div>
      </div>
    </footer>
  );
}
