interface rankItemProps {
  title: string;
  rank: number;
}
const RankItem = ({ title, rank }: rankItemProps) => {
  return (
    <div
      key={title}
      className="tflex flex-col p-2 rounded-md border border-transparent hover:bg-light-grey group cursor-pointer"
    >
      <div className="flex gap-5">
        <div className="w-9 h-9 rounded-md bg-light-grey text-lg text-light-black font-bold flex items-center justify-center group-hover:bg-hover-light-grey">
          {rank}
        </div>
        <div className="text-light-black font-semibold text-lg flex justify-center items-center">
          {title}
        </div>
      </div>
    </div>
  );
};

export default RankItem;
