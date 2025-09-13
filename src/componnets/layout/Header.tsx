import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-gold-100">
      <div className="max-w-[1440px] h-12 mx-auto flex items-center px-4">
        <nav>
          <Link to="/">Home</Link> | <Link to="/about">about</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
