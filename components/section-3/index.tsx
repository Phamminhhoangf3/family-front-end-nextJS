import TreeComponent from "./tree";

const Section3 = ({ data }: { data: any }) => {
  return (
    <div className="section-3">
      <div className="container">
        <TreeComponent data={data} />
      </div>
    </div>
  );
};

export default Section3;
