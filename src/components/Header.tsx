import { FaTree } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="w-full h-15 bg-primary">
      <div className="flex items-center justify-center h-full text-3xl text-white">
        <Link to={"/"}>
        <FaTree />
        </Link>
      </div>
    </div>
  );
};

export default Header;
