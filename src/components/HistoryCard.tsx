import { useState, useRef, useEffect } from "react";
import { IHistoryData } from "../models/data.model";
import { Link } from "react-router-dom";
import { FaTree } from "react-icons/fa6";

interface HistoryCardProps {
  data: IHistoryData;
  idx: number;
  state: boolean;
}

const HistoryCard = ({ data, idx, state }: HistoryCardProps) => {
  const [isExpanded, setIsExpanded] = useState(state);
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState("0px");

  useEffect(() => {
    if (contentRef.current) {
      setHeight(isExpanded ? `${contentRef.current.scrollHeight}px` : "0px");
    }
  }, [isExpanded]);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      className="w-full h-auto border-grey bg-white rounded-xl flex-col p-5 border hover:brightness-90 transition duration-300 cursor-pointer"
      onClick={toggleExpand}
    >
      <div className="flex gap-4">
        <div className="w-10 h-10 bg-primary rounded-lg font-bold flex justify-center items-center text-white text-2xl">
          {idx + 1}
        </div>
        <div className="flex flex-col gap-0">
          <div className="text-xl font-bold text-black">{data.date}</div>
          <div className="text-sm font-medium text-deep-grey relative top-[-5px]">
            {data.time}
          </div>
        </div>
      </div>

      <div
        ref={contentRef}
        className="overflow-hidden duration-300 ease-in-out"
        style={{ height }}
      >
        {/* {data.imageURL ? (
          <img
            src={data.imageURL}
            className="w-full h-50 object-cover rounded-lg mt-2"
            alt="이미지"
          />
        ) : ( */}
        <div className="w-full h-50 bg-grey rounded-lg mt-2 flex justify-center items-center">
          <FaTree className="w-8 h-8 text-deep-grey" />
        </div>
        {/* )} */}
        <div className="w-full my-5 text-light-black">{data.description}</div>
        <div className="font-bold mb-2">참고 자료</div>
        {/* 내부 출처 카드 */}
        <Link
          to={data.sourceURL}
          className="duration-300 hover:brightness-90 w-full h-25 bg-white rounded-lg flex p-3 border border-grey gap-5 internal-source-card"
        >
          {/* {data.sourceImageURL ? (
            <img
              src={data.sourceImageURL}
              className="w-25 h-full object-cover rounded-md"
              alt="이미지"
            />
          ) : ( */}
            <div className="w-25 h-full bg-grey rounded-md flex justify-around items-center">
              <FaTree className="w-5 h-5 text-deep-grey " />
            </div>
          {/* )} */}

          <div className="w-full">
            <div className="font-bold text-base">{data.sourceTitle}</div>
            <div className="font-bold text-xs text-light-black mt-6">
              {data.source}
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default HistoryCard;
