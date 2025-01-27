
interface HistoryCardProps {
  data: {
    date: string;
    time: string;
    imageURL: string;
    description: string;
  };
  idx: number;
}

const HistoryCard = ({data, idx} : HistoryCardProps) => {
  return (
    <div 
    className="w-full h-auto border-grey bg-white rounded-xl flex-col p-5 border-1
    hover:brightness-90 transition duration-300 cursor-pointer">
      <div className="flex gap-2">
        <div className="w-10 h-10 bg-primary rounded-lg
        font-bold justify-center items-center text-white flex text-2xl">{idx+1}</div>
                  <div className="flex flex-col gap-0">
        <div className="text-xl font-bold text-black relative top-[-2px]">{data.date}</div>
        <div className="text-sm font-medium top-[-5px] relative text-deep-grey">{data.time}</div>
        </div>
        <div className='justify-end '></div>

      </div>
      <div className="w-full h-52 mt-2">
        <img src={data.imageURL} className="w-full h-full object-cover rounded-lg" alt="이미지"/>
      </div>
      <div className="mt-5 text-light-black">{data.description}</div>
    </div>  )
}

export default HistoryCard