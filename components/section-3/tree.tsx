import { ChildrenDto, FamilyDto } from "@/types/member";
import MemberCard from "./member";
import { groupByThree } from "@/utils";
import { useEffect, useState } from "react";

const TreeItem = ({
  data,
  handleChildren,
  index,
}: {
  data: ChildrenDto;
  handleChildren: (data: any) => void;
  index: number;
}) => {
  const groupChildren = !!data?.family?.children?.length
    ? groupByThree(data?.family?.children)
    : [];

  const renderClass = (family: FamilyDto) => {
    if (family?.husband && family?.wife) {
      if (!!family?.children?.length) {
        return "sticky line parent";
      } else {
        return "sticky line";
      }
    } else {
      return "sticky";
    }
  };

  return (
    <li
      className={
        "tree-item" +
        (index % 2 === 0 ? " odd" : " even") +
        (index !== 0 ? " tree-next" : "")
      }
    >
      <div className="container">
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
        {groupChildren.map((listChildren, index) => (
          <ul className={index !== 0 ? "row-three" : ""} key={index}>
            <div className="row">
              {!!listChildren?.length &&
                listChildren.map((child, i) => (
                  <li
                    className={i === 0 ? "first" : "not-first"}
                    key={child?.id}
                  >
                    <div
                      className={"sticky children" + (i == 0 ? " next" : "")}
                    >
                      <MemberCard
                        data={child}
                        handleChildren={handleChildren}
                      />
                    </div>
                  </li>
                ))}
            </div>
          </ul>
        ))}
      </div>
    </li>
  );
};

const TreeComponent = ({ data }: { data: ChildrenDto[] }) => {
  const [state, setState] = useState<ChildrenDto[]>([]);

  const handleAppendTree = (data: any) => {
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
            <TreeItem
              data={item}
              key={index}
              handleChildren={handleAppendTree}
              index={index}
            />
          ))}
      </ul>
    </div>
  );
};

export default TreeComponent;
