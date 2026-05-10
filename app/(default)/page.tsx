import { ReactElement } from "react";

import PageIllustration from "@/components/page-illustration";
import Hero from "@/components/hero-home";
import Problem from "@/components/problem";
import WhatWeDo from "@/components/what-we-do";
import WhatToExpect from "@/components/what-to-expect";
import UseCases from "@/components/use-cases";
import WhyEurekaOps from "@/components/why-eureka-ops";
import Faq from "@/components/faq";
import Cta from "@/components/cta";

export const metadata = {
  title: "Eureka Ops | AI Workforce Design for Service Businesses",
  description:
    "Custom AI workforce systems for founder-led home service and trade businesses that need more execution capacity.",
};

/**
 * Launch homepage for Eureka Ops.
 */
export default function Home(): ReactElement {
  return (
    <>
      <PageIllustration />
      <Hero />
      <Problem />
      <WhatWeDo />
      <WhatToExpect />
      <UseCases />
      <WhyEurekaOps />
      <Faq />
      <Cta />
    </>
  );
}
