import Genealogy from "./genealogy";

const Section3 = ({ data }: { data: any }) => {
  return (
    <div className="section-3">
      <div className="container">
        <Genealogy data={data} />
      </div>
    </div>
  );
};

export default Section3;
