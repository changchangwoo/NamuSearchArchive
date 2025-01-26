import React from "react";
import RankItem from "./RankItem";

type RankStatus = "up" | "down" | "same" | "new";

type RankData = {
  title: string;
  rank: number;
  status: RankStatus;
};

const tempData: RankData[] = [
  {
    title: "이순재",
    rank: 1,
    status: "up"
  },
  {
    title: "나도형",
    rank: 2,
    status: "down"
  },
  {
    title: "송혜교",
    rank: 3,
    status: "same"
  },
  {
    title: "신종철",
    rank: 4,
    status: "new"
  },
  {
    title: "기가차드",
    rank: 5,
    status: "up"
  },
  {
    title: "허은아",
    rank: 6,
    status: "down"
  },
  {
    title: "LA산불",
    rank: 7,
    status: "same"
  },
  {
    title: "나훈아",
    rank: 8,
    status: "new"
  },
  {
    title: "랄랄",
    rank: 9,
    status: "up"
  },
  {
    title: "이렐리아",
    rank: 10,
    status: "down"
  },
];

const Board = () => {
  return (
    <>
      <div className="w-full h-auto bg-white rounded-2xl my-5 p-3 border-1 border-grey">
        {tempData.map((element) => (
          <RankItem
            key={element.title}
            title={element.title}
            rank={element.rank}
            status={element.status}
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
