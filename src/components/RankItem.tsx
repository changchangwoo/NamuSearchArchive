import { FaCaretUp, FaCaretDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IRankData } from "../models/data.model";

interface RankItemProps {
  data: IRankData
}

const RankItem = ({ data }: RankItemProps) => {
  return (
    <Link to={`/details/${data.title}`}>
      <div
        key={data.title}
        className="flex flex-col p-2 rounded-md border border-transparent hover:bg-light-gray group cursor-pointer duration-300 "
      >
        <div className="flex gap-5">
          <div className="w-9 h-9 rounded-md bg-light-gray text-lg text-light-black font-bold flex items-center justify-center group-hover:bg-hover-light-gray duration-300">
            {data.rank}
          </div>
          <div className="flex w-full justify-between">
            <div className="text-light-black font-semibold text-lg flex justify-center items-center">
              {data.title}
            </div>
            <div className="flex justify-center items-center">
              {data.status === "new" && (
                <span className="text-deep-gray text-sm">new</span>
              )}
              {data.status === "up" && (
                <div className="flex items-center text-primary">
                  <FaCaretUp className="w-4 h-4" />
                  <span className="ml-1"></span>
                </div>
              )}
              {data.status === "down" && (
                <div className="flex items-center text-red-500">
                  <FaCaretDown className="w-4 h-4" />
                  <span className="ml-1"></span>
                </div>
              )}
              {data.status === "same" && <span className="text-gray-500"></span>}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default RankItem;
