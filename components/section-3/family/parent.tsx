import { ChildrenDto, FamilyDto } from "@/types/member";
import MemberCard from "../../member";

const Parent = ({
  data,
  handleChildren,
}: {
  data: ChildrenDto;
  handleChildren: (data: any) => void;
}) => {
  const renderClass = (family: FamilyDto) => {
    let result = ["sticky"];
    if (family?.husband && family?.wife) result.push("line");
    if (!!family?.children?.length) result.push("parent");
    return result.join(" ");
  };

  return (
    <div className="row">
      <div className={renderClass(data?.family)}>
        <MemberCard
          data={data?.family}
          title={!!data?.family?.husband ? "husband" : "wife"}
          handleChildren={handleChildren}
          selected
        />
      </div>
      {!!data?.family?.wife && !!data?.family?.husband && (
        <div className="sticky">
          <MemberCard
            data={data?.family}
            title="wife"
            handleChildren={handleChildren}
          />
        </div>
      )}
      {!!data?.family?.exWife && (
        <div className="sticky">
          <MemberCard
            data={data?.family}
            title="exWife"
            handleChildren={handleChildren}
          />
        </div>
      )}
    </div>
  );
};

export default Parent;
