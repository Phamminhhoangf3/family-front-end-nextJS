"use client";

import * as React from "react";
import Layout from "@/components/layouts";
import Section1 from "@/components/section-1";
import Section2 from "@/components/section-2";
import TransitionHooks from "@/components/collapse";
import Section3 from "@/components/section-3";
import { ChildrenDto } from "@/types/member";

export default function Home() {
  const [data, setData] = React.useState<ChildrenDto[]>([]);

  const fetchFamily = async (url: string, options: RequestInit) => {
    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error(`Lỗi fetch API: ${response.status}`);
      }
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.error(error);
      return null;
    }
  };

  React.useEffect(() => {
    fetchFamily("http://localhost:3000/members", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
  }, []);

  return (
    <Layout>
      <Section1 />
      <TransitionHooks>
        <Section2 />
      </TransitionHooks>
      <Section3 data={data} />
    </Layout>
  );
}
