import { useQuery } from "@tanstack/react-query";
import Genealogy from "./genealogy";
import { getDetailFamily } from "@/apis";
import data from "../../data-mock/family.json";

const Section3 = () => {
  return (
    <div className="section-3">
      <div className="container">
        <Genealogy />
      </div>
    </div>
  );
};

export default Section3;
