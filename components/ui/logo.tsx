import { ReactElement } from "react";
import Link from "next/link";

/**
 * Text-only launch logo treatment for Eureka Ops.
 */
export default function Logo(): ReactElement {
  return (
    <Link href="/" className="inline-flex items-center gap-3" aria-label="Eureka Ops home">
      <span className="inline-flex h-9 w-9 items-center justify-center rounded-2xl border border-indigo-500/20 bg-indigo-500/10 font-nacelle text-lg font-semibold text-indigo-300">
        E
      </span>
      <span className="font-nacelle text-lg font-semibold text-gray-100">
        Eureka Ops
      </span>
    </Link>
  );
}
