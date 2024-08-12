import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="p-4 container mx-auto">
      <Link to={"/"}>
        <h1 className="text-3xl font-icon text-center md:text-4xl xl:text-5xl">
          WALL -&nbsp;
          <span className="inline-block scale-x-[-1] text-secondary">3</span>
        </h1>
      </Link>
    </header>
  );
};

export default Header;
