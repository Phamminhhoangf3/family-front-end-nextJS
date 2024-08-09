import { ChildrenDto, FamilyDto } from "@/types/member";
import Parent from "./parent";
import Childrens from "./childrens";

type FamilyType = {
  data: FamilyDto;
  handleChildren: (data: any) => void;
  index: number;
};

const Family = ({ data, handleChildren, index }: FamilyType) => {
  return (
    <li
      className={
        "tree-item" +
        (index % 2 === 0 ? " odd" : " even") +
        (index !== 0 ? " tree-next" : "")
      }
    >
      <div className="container">
        <Parent data={data} handleChildren={handleChildren} />
        <Childrens data={data} handleChildren={handleChildren} />
      </div>
    </li>
  );
};

export default Family;
