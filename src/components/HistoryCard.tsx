import { useState, useRef, useEffect } from "react";
import { IHistoryData } from "../models/data.model";
import { Link } from "react-router-dom";
import { FaTree } from "react-icons/fa6";
import {
  MdExpandMore,
  MdMinimize,
  MdOutlineExpand,
  MdOutlineExpandLess,
  MdOutlineExpandMore,
  MdOutlineMinimize,
} from "react-icons/md";

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
    <div className="w-full h-auto border-grey bg-white rounded-xl flex-col p-5 border group hover:brightness-90 duration-300">
      <button
        className="w-full flex gap-4 cursor-pointer duration-300"
        onClick={toggleExpand}
      >
        <div className="w-10 h-10 bg-primary rounded-lg font-bold flex justify-center items-center text-white text-2xl flex-[0.1]">
          {idx + 1}
        </div>
        <div className="flex flex-col gap-0 flex-[0.8]">
          <div className="text-xl font-bold text-black flex justify-start">
            {data.date}
          </div>
          <div className="text-sm font-medium text-deep-grey relative top-[-5px] flex justify-start">
            {data.time}
          </div>
        </div>
        <div className="flex-[0.1] flex justify-center items-center duration-300 transition">
          {isExpanded ? (
            <MdOutlineExpandLess className="text-2xl flex relative top-[-5px] text-deep-grey" />
          ) : (
            <MdOutlineExpandMore className="text-2xl flex relative top-[-5px] text-deep-grey " />
          )}
        </div>
      </button>

      <div
        ref={contentRef}
        className="overflow-hidden duration-300 ease-in-out"
        style={{ height }}
      >
        {data.imageURL ? (
          <img
            src={data.imageURL}
            className="w-full h-50 object-cover rounded-lg mt-2"
            alt="이미지"
          />
        ) : (
          <div className="w-full h-50 bg-grey rounded-lg mt-2 flex justify-center items-center">
            <FaTree className="w-8 h-8 text-deep-grey" />
          </div>
        )}

        <div className="w-full my-2 h-7 flex gap-2">
          {["안녕하세요", "임시", "키워드", "최대 sssss다asdasd섯as자"].map(
            (text, index) => (
              <div
                key={index}
                className="w-auto h-full bg-primary text-white text-sm px-2 flex justify-center items-center 
                rounded-md font-semibold cursor-pointer hover:brightness-90 transition duration-300 text-ellipsis whitespace-nowrap"
              >
                {text}
              </div>
            )
          )}
        </div>

        <div className="w-full my-10 text-light-black">{data.description}</div>
        <div className="font-bold mb-2">참고 자료</div>
        {/* 내부 출처 카드 */}
        <Link
          to={data.sourceURL}
          className="duration-300 hover:brightness-90 w-full h-25 bg-white rounded-lg flex p-3 border border-grey gap-5 internal-source-card"
        >
          {data.sourceImageURL ? (
            <img
              src={data.sourceImageURL}
              className="w-25 h-full object-cover rounded-md"
              alt="이미지"
            />
          ) : (
            <div className="w-25 h-full bg-grey rounded-md flex justify-around items-center">
              <FaTree className="w-5 h-5 text-deep-grey " />
            </div>
          )}

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
