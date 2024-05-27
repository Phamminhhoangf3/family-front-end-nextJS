"use client";
import ContentMenu from "@/components/content-menu";
import MenuForm from "@/components/menu-form";
import { ChildrenDto, FamilyDto } from "@/types/member";
import { Snackbar } from "@mui/material";
import { useRouter } from "next/navigation";
import * as React from "react";
import { SubmitHandler } from "react-hook-form";

export default function FormPage() {
  const [data, setData] = React.useState<ChildrenDto[]>([]);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [refetch, setRefetch] = React.useState<boolean>(false);
  const [memberSelected, setMemberSelected] = React.useState<{
    selected: ChildrenDto | null;
    idRoot: string | null;
  }>({ selected: null, idRoot: null });
  const router = useRouter();

  const handleSelectMember = (member: ChildrenDto) => {
    if (!member) return;
    setMemberSelected((prev) => ({
      ...prev,
      selected: member,
    }));
  };

  const fetchFamily = async (url: string, options: RequestInit) => {
    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error(`Lỗi fetch API: ${response.status}`);
      }
      const data = await response.json();
      if (!data?.length) return;
      setData(data);
    } catch (error) {
      console.error(error);
      return null;
    }
  };

  const handleUpdateData = (
    data: ChildrenDto,
    list: ChildrenDto[]
  ): ChildrenDto[] => {
    return list?.map((item: ChildrenDto) => {
      if (item?.id === data?.id) {
        const family: FamilyDto =
          item?.title === "husband"
            ? {
                ...item?.family,
                husband: {
                  ...item?.family?.husband,
                  name: data?.name,
                  date: data?.date,
                  image: data?.image,
                },
              }
            : item?.title === "wife"
            ? {
                ...item?.family,
                wife: {
                  ...item?.family?.wife,
                  name: data?.name,
                  date: data?.date,
                  image: data?.image,
                },
              }
            : item?.family;
        return {
          ...item,
          name: data?.name,
          date: data?.date,
          image: data?.image,
          family,
        };
      } else {
        return {
          ...item,
          family: {
            ...item?.family,
            children: handleUpdateData(data, item?.family?.children),
          },
        };
      }
    });
  };

  const handleSubmit: SubmitHandler<ChildrenDto> = async (values) => {
    if (!values || !data?.length || !memberSelected?.idRoot) return;
    setLoading(true);
    try {
      const listMemberUpdate = handleUpdateData(values, data);
      const memberUpdate = listMemberUpdate?.find(
        (item: ChildrenDto) => item?.id === memberSelected?.idRoot
      );

      if (!memberUpdate) {
        console.error("Không có dữ liệu cập nhật thành viên được cung cấp."); // Informative error message
        return;
      }
      const response = await fetch(
        `http://localhost:3000/members/${memberSelected?.idRoot}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(memberUpdate),
        }
      );
      if (response.ok) {
        setLoading(false);
        const updatedData = await response.json();
        setRefetch(!refetch);
        handleClick();
        console.log("Cập nhật dữ liệu thành công:", updatedData);
      } else {
        setLoading(false);
        console.error("Lỗi khi cập nhật dữ liệu:", response.status);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  React.useEffect(() => {
    fetchFamily("http://localhost:3000/members", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
  }, [refetch]);

  return (
    <>
      <div className="form-page">
        <div className="title">
          <div className="family">Family Tree</div>
          <div className="member">MemberMember Form</div>
        </div>
        <div className="container">
          <div className="menu">
            <MenuForm
              data={data}
              onSelectMember={handleSelectMember}
              setMemberSelected={setMemberSelected}
            />
          </div>
          <div className="content">
            <ContentMenu
              memberSelected={memberSelected?.selected}
              onSubmit={handleSubmit}
              isLoading={loading}
            />
          </div>
        </div>
      </div>
      <Snackbar
        open={open}
        autoHideDuration={1000}
        message="Cập nhật thành công!"
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      />
    </>
  );
}
