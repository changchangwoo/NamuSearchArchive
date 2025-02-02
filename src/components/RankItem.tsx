import { FaCaretUp,FaCaretDown } from "react-icons/fa";
import { Link } from "react-router-dom";

interface RankItemProps {
  title: string;
  rank: number;
  status: 'new' | 'up' | 'down' | 'same';
}

const RankItem = ({ title, rank, status }: RankItemProps) => {
  return (
    <Link to={`/details/${title}`}>
    <div
      key={title}
      className="flex flex-col p-2 rounded-md border border-transparent hover:bg-light-grey group cursor-pointer duration-300 "
    >
      <div className="flex gap-5">
        <div className="w-9 h-9 rounded-md bg-light-grey text-lg text-light-black font-bold flex items-center justify-center group-hover:bg-hover-light-grey duration-300">
          {rank}
        </div>
        <div className="flex w-full justify-between">
          <div className="text-light-black font-semibold text-lg flex justify-center items-center">
            {title}
          </div>
          <div className="flex justify-center items-center">
            {status === 'new' && <span className="text-deep-grey text-sm">new</span>}
            {status === 'up' && (
              <div className="flex items-center text-primary">
                <FaCaretUp className="w-4 h-4" />
                <span className="ml-1"></span>
              </div>
            )}
            {status === 'down' && (
              <div className="flex items-center text-red-500">
                <FaCaretDown className="w-4 h-4" />
                <span className="ml-1"></span>
              </div>
            )}
            {status === 'same' && <span className="text-gray-500"></span>}
          </div>
        </div>
      </div>
    </div>
    </Link>
  );
};

export default RankItem;
