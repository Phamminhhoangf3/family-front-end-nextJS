import { ChildrenDto, FamilyDto } from "@/types/member";
import { useEffect, useState } from "react";
import Family from "../family";
import { useMutation, useQuery } from "@tanstack/react-query";
import { getDetailFamily } from "@/apis";

type GenealogyType = {
  data: FamilyDto[];
  handleAppendFamily: (data: ChildrenDto) => void;
};

const Genealogy = () => {
  const [state, setState] = useState<FamilyDto[]>([]);
  const [request, setRequest] = useState({ id: "66b49cc1d254d4c584172330" });

  const { mutate } = useMutation({
    mutationFn: async (params: any) => await getDetailFamily(params),
    onSuccess: (data) => {
      if (data) setState((prev) => [...prev, data]);
    },
  });

  const handleAppendFamily = (data: any) => {
  };

  useEffect(() => {
    if (request?.id) mutate(request);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [request]);

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
