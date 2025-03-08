import { FaGithub, FaTree } from "react-icons/fa6";
import { SiNotion } from "react-icons/si";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="mt-5 h-20 bg-white border-t-1 border-grey flex items-center justify-center">
      <div className="flex items-center justify-center h-full text-3xl flex-col">
        <Link to={"/"}>
          {/* <FaTree className="text-primary " /> */}
        </Link>
        {/* <div className="right-1 my-2 text-sm font-medium text-deep-gray">나무위키 실검 아카이브</div> */}
        <div className="flex text-deep-gray text-2xl gap-3">
          <Link to={"/https://github.com/changchangwoo/NamuSearchArchive"}>
            <FaGithub />
          </Link>
          <Link to={"/https://github.com/changchangwoo/NamuSearchArchive"}>
            {" "}
            <SiNotion />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
