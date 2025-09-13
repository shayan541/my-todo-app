import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-gold-100">
      <div className="max-w-[1440px] h-12 mx-auto flex items-center px-4">
        <nav>
          <Link to="/" className="hover:text-gold-200 text-black mr-2">
            Home
          </Link>
          |
          <Link to="/about" className="hover:text-gold-200 text-black ml-2">
            About
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
