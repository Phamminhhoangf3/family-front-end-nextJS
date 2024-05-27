import { ChildrenDto } from "@/types/member";
import { useForm, SubmitHandler } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { useEffect } from "react";
import { Button, ButtonBase, CircularProgress } from "@mui/material";

const ContentMenu = ({
  memberSelected,
  onSubmit,
  isLoading,
}: {
  memberSelected: ChildrenDto | null;
  onSubmit: (data: ChildrenDto) => void;
  isLoading: boolean;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<ChildrenDto>();

  useEffect(() => {
    if (!!memberSelected) {
      setValue("name", memberSelected?.name);
      setValue("date", memberSelected?.date);
      setValue("image", memberSelected?.image);
      setValue("id", memberSelected?.id);
    }
  }, [memberSelected]);

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
        <Button type="submit" disabled={isLoading} variant="contained">
          {isLoading && <CircularProgress size={12} sx={{ marginRight: 1, color: "white"}} />}
          cập nhật
        </Button>
      </form>
    </div>
  );
};

export default ContentMenu;
