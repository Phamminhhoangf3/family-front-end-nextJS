"use client";

import * as React from "react";
import Layout from "@/components/layouts";
import Section1 from "@/components/section-1";
import Section2 from "@/components/section-2";
import TransitionHooks from "@/components/collapse";
import Section3 from "@/components/section-3";
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

export default function Home() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <Section1 />
        <TransitionHooks>
          <Section2 />
        </TransitionHooks>
        <Section3 />
      </Layout>
    </QueryClientProvider>
  );
}
