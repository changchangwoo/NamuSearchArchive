import { Link } from "react-router-dom";
import { ISourceData } from "../models/data.model";

interface SourceCardProps {
  data: ISourceData;
}

const SourceCard = ({ data }: SourceCardProps) => {
  
  return (
    <>
    <Link to={data.sourceURL} className="w-full h-35 bg-white rounded-lg border-1 border-grey flex p-5 gap-5 cursor-pointer hover:brightness-90 transition duration-300">
      <div className=" w-25 h-full bg-grey rounded-lg"></div>
      <div className=" flex flex-col h-full">
        <div className="w-85 text-lg font-bold text-black truncate">
          {data.title}
        </div>
        <div className="text-sm text-deep-gray">{data.date}</div>
        <div className="relative font-bold text-xs text-light-black mt-7">
          {data.source}
        </div>
      </div>
    </Link>
    </>
  );
};

export default SourceCard;
