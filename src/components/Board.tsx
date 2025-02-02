import { IRankData } from "../models/data.model";
import RankItem from "./RankItem";




const tempData: IRankData[] = [
  {
    title: "이순재",
    rank: 1,
    status: "up",
    id : 1,
  },
  {
    title: "나도형",
    rank: 2,
    status: "down",
    id : 2,
  },
  {
    title: "송혜교",
    rank: 3,
    status: "same",
    id : 3,
  },
  {
    title: "신종철",
    rank: 4,
    status: "new",
    id : 4,
  },
  {
    title: "기가차드",
    rank: 5,
    status: "up",
    id : 5,
  },
  {
    title: "허은아",
    rank: 6,
    status: "down",
    id : 6,
  },
  {
    title: "LA산불",
    rank: 7,
    status: "same",
    id : 7,
  },
  {
    title: "나훈아",
    rank: 8,
    status: "new",
    id : 8,
  },
  {
    title: "랄랄",
    rank: 9,
    status: "up",
    id : 9,
  },
  {
    title: "이렐리아",
    rank: 10,
    status: "down",
    id : 10,
  },
];

const Board = () => {
  return (
    <>
      <div className="w-full h-auto bg-white rounded-2xl my-5 p-3 border-1 border-grey">
        {tempData.map((element) => (
          <RankItem
            data= {element}
          />
        ))}
      </div>
      <div className="text-lg font-bold text-black flex justify-center items-center">
        클릭을 통해 실시간 등재 이유 확인하기 👀
      </div>
      <div className="text-sm font-medium text-deep-grey flex justify-center items-center">
        마지막 데이터 갱신 : 2025.01.12.16:44
      </div>
    </>
  );
};

export default Board;
