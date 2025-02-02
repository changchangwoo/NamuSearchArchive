import { useState, useRef, useEffect } from "react";

interface HistoryCardProps {
  data: {
    date: string;
    time: string;
    imageURL: string;
    description: string;
  };
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
      <div className="flex gap-2">
        <div className="w-10 h-10 bg-primary rounded-lg font-bold flex justify-center items-center text-white text-2xl">
          {idx + 1}
        </div>
        <div className="flex flex-col gap-0">
          <div className="text-xl font-bold text-black">{data.date}</div>
          <div className="text-sm font-medium text-deep-grey">{data.time}</div>
        </div>
      </div>

      {/* height 애니메이션 적용 부분 */}
      <div
        ref={contentRef}
        className="overflow-hidden transition-[height] duration-300 ease-in-out"
        style={{ height }}
      >
        <img
          src={data.imageURL}
          className="w-full h-46 object-cover rounded-lg"
          alt="이미지"
        />
        <div className="mt-5 text-light-black">{data.description}</div>
      </div>
    </div>
  );
};

export default HistoryCard;
