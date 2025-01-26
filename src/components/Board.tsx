import React from "react";
import RankItem from "./RankItem";

const tempData = [
  {
    title: "이순재",
    rank: 1,
  },
  {
    title: "나도형",
    rank: 2,
  },
  {
    title: "송혜교",
    rank: 3,
  },
  {
    title: "신종철",
    rank: 4,
  },
  {
    title: "기가차드",
    rank: 5,
  },
  {
    title: "허은아",
    rank: 6,
  },
  {
    title: "LA산불",
    rank: 7,
  },
  {
    title: "나훈아",
    rank: 8,
  },
  {
    title: "랄랄",
    rank: 9,
  },
  {
    title: "이렐리아",
    rank: 10,
  },
];

const Board = () => {
  return (
    <>
      <div className="w-full h-auto bg-white rounded-xl my-5 p-3">
        {tempData.map((element) => (
          <RankItem title={element.title} rank={element.rank} />
        ))}
      </div>
      <div className="text-lg font-bold text-black flex justify-center items-center">
        클릭을 통해 무슨일이 벌어졌는지 확인해보세요!👀
      </div>
      <div className="text-sm font-medium text-deep-grey flex justify-center items-center">
        데이터 갱신일 : 2025.01.12.16:44
      </div>
    </>
  );
};

export default Board;
