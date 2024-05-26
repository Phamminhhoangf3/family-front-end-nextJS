import { ChildrenDto } from "@/types/member";
import { useForm, SubmitHandler } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { useEffect } from "react";

const ContentMenu = ({
  data,
  memberRoot,
}: {
  data: {
    memberSelect: ChildrenDto | null;
    rootId: number | null;
  };
  memberRoot: ChildrenDto;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<ChildrenDto>();

  // const handleDataUpdate = (value: ChildrenDto) => {
  //   if (!memberRoot) return null;
  //   if (memberRoot?.id === data.memberSelect?.id) {
  //     return {
  //       ...memberRoot,
  //       name: value?.name,
  //       date: value?.date,
  //       image: value?.image,
  //     };
  //   } else {
  //     return {
  //       ...memberRoot,
  //       family: {
  //         children: memberRoot?.family?.children?.map((item) => {
  //           if (item?.id === data.memberSelect?.id) {
  //             return {
  //               ...item,
  //               name: data.memberSelect?.name,
  //               date: data.memberSelect?.date,
  //               image: data.memberSelect?.image,
  //             };
  //           } else {}
  //         }),
  //       },
  //     };
  //   }
  // };

  const onSubmit: SubmitHandler<ChildrenDto> = async (values) => {
    // try {
    // const dataUpdate: any = handleDataUpdate(values);
    // if (!dataUpdate) return;
    // console.log({ data, listMembers });
    // console.log({ dataUpdate });
    //   const response = await fetch("http://localhost:3000/members/1", {
    //     method: "PUT",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(dataUpdate),
    //   });
    //   if (response.ok) {
    //     const updatedData = await response.json();
    //     console.log("Cập nhật dữ liệu thành công:", updatedData);
    //   } else {
    //     console.error("Lỗi khi cập nhật dữ liệu:", response.status);
    //   }
    // } catch (error) {
    //   console.log(error);
    // }
  };

  useEffect(() => {
    if (!!data?.memberSelect) {
      setValue("name", data?.memberSelect?.name);
      setValue("date", data?.memberSelect?.date);
      setValue("image", data?.memberSelect?.image);
      setValue("id", data?.memberSelect?.id);
    }
  }, [data?.memberSelect]);

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          className="input-hidden"
          {...register("id", { required: true })}
        />
        <label htmlFor="name">Họ và tên</label>
        <input
          type="text"
          id="name"
          placeholder="Nhập họ và tên"
          {...register("name", { required: "Bạn chưa nhập họ và tên" })}
        />
        <div className="error-message">
          <ErrorMessage errors={errors} name="name" />
        </div>
        <label htmlFor="date">Năm sinh, năm mất (nếu có)</label>
        <input
          type="text"
          id="date"
          placeholder="Nhập năm sinh, năm mất"
          {...register("date", { required: "Bạn chưa nhập năm sinh, năm mất" })}
        />
        <div className="error-message">
          <ErrorMessage errors={errors} name="date" />
        </div>
        <label htmlFor="image">Hình ảnh (nếu có)</label>
        <input
          type="text"
          id="image"
          placeholder="Nhập hình ảnh"
          {...register("image", { required: "Bạn chưa nhập hình ảnh" })}
        />
        <div className="error-message">
          <ErrorMessage errors={errors} name="image" />
        </div>
        <input type="submit" />
      </form>
    </div>
  );
};

export default ContentMenu;
