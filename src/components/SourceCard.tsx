interface SourceCardProps {
  data: {
    title: string;
    imageURL: string;
    source: string;
    date: string;
    id: number;
  };
}

const SourceCard = ({ data }: SourceCardProps) => {
  return (
    <div className="w-full h-35 bg-white rounded-lg border-1 border-grey flex p-5 gap-5 cursor-pointer hover:brightness-90 transition duration-300">
      <div className=" w-25 h-full bg-grey rounded-lg"></div>
      <div className=" flex flex-col h-full">
        <div className="w-85 text-xl font-bold text-black truncate">
          {data.title}
        </div>
        <div className="text-md text-deep-grey">{data.date}</div>
        <div className="relative font-bold text-base text-light-black mt-5">
          {data.source}
        </div>
      </div>
    </div>
  );
};

export default SourceCard;
