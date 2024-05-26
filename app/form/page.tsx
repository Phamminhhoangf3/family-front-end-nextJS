"use client";
import ContentMenu from "@/components/content-menu";
import MenuForm from "@/components/menu-form";
import { ChildrenDto } from "@/types/member";
import * as React from "react";

export default function FormPage() {
  const [data, setData] = React.useState<ChildrenDto[]>([]);
  const [member, setMember] = React.useState<{
    memberSelect: ChildrenDto | null;
    rootId: number | null;
  }>({ memberSelect: null, rootId: null });

  const handleSelectMember = (member: ChildrenDto) => {
    if (!member) return;
    setMember((prev) => ({ ...prev, memberSelect: member }));
  };

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
    <div className="form-page">
      <div className="title">
        <div className="family">Family Tree</div>
        <div className="member">MemberMember Form</div>
      </div>
      <div className="container">
        <div className="menu">
          <MenuForm data={data} onSelectMember={handleSelectMember} setMember={setMember}/>
        </div>
        <div className="content">
          <ContentMenu data={member} memberRoot={data?.[0]}  />
        </div>
      </div>
    </div>
  );
}
