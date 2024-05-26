import Image from "next/image";
import AccountTreeIcon from "@mui/icons-material/AccountTree";

const MemberCard = ({
  data,
  handleChildren,
  title,
  selected = false,
}: {
  title?: "husband" | "wife" | "exWife";
  data: any;
  handleChildren: (data: any) => void;
  selected?: boolean;
}) => {
  return (
    <div className="member-card">
      {((!!title && data?.[title]?.tag) || data?.tag) && (
        <div className="tag">
          {data?.type === "family" && !!title ? data?.[title]?.tag : data?.tag}
        </div>
      )}
      <div className="avatar">
        <Image
          src={
            data?.type === "family" && title
              ? data?.[title]?.image
              : data?.image
          }
          alt={
            data?.type === "family" && title ? data?.[title]?.name : data?.name
          }
          fill
        />
      </div>
      <div className={"information" + (selected ? " selected" : "")}>
        <div className="full-name">
          <strong>
            {data?.type === "family" && title
              ? data?.[title]?.name
              : data?.name}
          </strong>
        </div>
        <div className="date">
          {data?.type === "family" && title ? data?.[title]?.date : data?.date}
        </div>
      </div>
      <button
        className="btn-add"
        onClick={() => {          
          handleChildren(
            data?.type === "children" && Boolean(data) ? data : null
          );
        }}
      >
        <AccountTreeIcon sx={{ color: "rgb(171, 35, 17)" }} />
      </button>
    </div>
  );
};

export default MemberCard;
