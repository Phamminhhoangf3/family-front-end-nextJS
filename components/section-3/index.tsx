import { ChildrenDto } from "@/types/member";
import TreeComponent from "./tree";

const Section3 = ({ data }: { data: ChildrenDto[] }) => {
  
  return (
    <div className="section-3">
      <div className="container">
        <TreeComponent data={data} />
      </div>
    </div>
  );
};

export default Section3;
