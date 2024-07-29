import { ChildrenDto } from "@/types/member";
import { useEffect, useState } from "react";
import Family from "../family";

const Genealogy = ({ data }: { data: ChildrenDto[] }) => {
  const [state, setState] = useState<ChildrenDto[]>([]);

  const handleAppendFamily = (data: any) => {
    if (!state?.length || !data) return;
    const indexSameFather = state?.findIndex((item) => item?.dad === data?.dad);

    if (indexSameFather >= 0) {
      setState([...state.slice(0, indexSameFather), data]);
    } else {
      setState((prev) => [...prev, data]);
    }
  };

  useEffect(() => {
    if (!data?.length) return;
    setState(data);
  }, [data]);

  return (
    <div>
      <ul className="tree">
        {!!state?.length &&
          state.map((item, index) => (
            <Family
              data={item}
              key={index}
              handleChildren={handleAppendFamily}
              index={index}
            />
          ))}
      </ul>
    </div>
  );
};

export default Genealogy;
