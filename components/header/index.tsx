import Image from "next/image";

const Header = ({
  data,
}: {
  data: { name: string; path: string; active: boolean }[];
}) => {
  return (
    <div className="header">
      <a href="#default" className="logo">
        <div>
          <Image
            src="/assets/header/the_lewis_family_logo.png"
            alt="logo"
            fill
            style={{
              objectFit: "cover",
            }}
          />
        </div>
      </a>
      <div className="header-right">
        {data.map((item) => (
          <a
            className={item.active ? "active" : ""}
            href={item.path}
            key={item.name}
          >
            {item.name}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Header;
