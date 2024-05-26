import Image from "next/image";

const Section2 = () => {
  return (
    <div className="section-2">
      <div className="container">
        <div className="wrap">
          <div className="place-1">
            <span className="title">PLACE OF BIRTH</span>
            <span className="address">New York, US</span>
          </div>
          <div className="place-2">
            <span className="title">PLACE OF DEATH</span>
            <span className="address">New York, US</span>
          </div>
        </div>
        <div className="place-3">
          <span className="title">BURIAL BIRTH</span>
          <span className="address">Bayside Cemetery, New York</span>
        </div>
        <div className="description">
          <div className="list-image">
            <div className="image-1">
              <Image
                src="/assets/section-2/portrait_01.jpg"
                alt="image-1"
                fill
              />
            </div>
            <div className="image-1">
              <Image
                src="/assets/section-2/portrait_02.jpg"
                alt="image-1"
                fill
              />
            </div>
            <div className="image-1">
              <Image
                src="/assets/section-2/portrait_03.jpg"
                alt="image-1"
                fill
              />
            </div>
            <div className="image-1">
              <Image
                src="/assets/section-2/portrait_04.jpg"
                alt="image-1"
                fill
              />
            </div>
          </div>
          <div className="content">
            <p>
              Elder son of John Lewis, who owned the John Lewis department
              store, London, Spedan joined joined the business at 19 and in 1914
              assumed control of Peter Jones in Sloane Square, London.
            </p>
            <p>
              On his father&apos;s death he formed the John Lewis Partnership and
              began distributing profits among its employees in 1929. He
              transferred control of the company to the employees in 1950 and
              resigned as chairman in 1955
            </p>
          </div>
        </div>
      </div>
      <div className="line"/>
    </div>
  );
};

export default Section2;
