import React from "react";

const tempData = [
  {
    title: "title1",
    rank: "1",
  },
  {
    title: "title2",
    rank: "2",
  },
  {
    title: "title3",
    rank: "3",
  },
  {
    title: "title4",
    rank: "4",
  },
  {
    title: "title5",
    rank: "5",
  },
  {
    title: "title6",
    rank: "6",
  },
  {
    title: "title7",
    rank: "7",
  },
  {
    title: "title8",
    rank: "8",
  },
  {
    title: "title9",
    rank: "9",
  },
  {
    title: "title10",
    rank: "10",
  },
];

const Board = () => {
  return (
    <div className="w-full h-auto bg-white rounded-xl my-5 p-3">
      {tempData.map((element, index) => (
        <div key={index} className="flex flex-col my-2 hover:bg-[#D9D9D9]">
          <div className="flex gap-2">
            <div className="w-8 h-8 rounded-md bg-[#F5F6F8] text-lg text-black font-bold flex items-center justify-center">
              {element.rank}
            </div>
            <div className="text-black font-semibold text-xl ">
              {element.title}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Board;
