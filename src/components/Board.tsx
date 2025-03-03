import RankItem from "./RankItem";
import useGetCurRank from "../hooks/queries/useGetRank";

const Board = () => {
  const { data: rankData, isLoading, error } = useGetCurRank();

  if (isLoading)
    return (
      <div className="w-full h-auto bg-white rounded-2xl my-5 p-3 border-1 border-grey animate-pulse">
        {Array.from({ length: 10 }).map((_, index) => (
          <div
            key={index}
            className="h-10 w-full bg-gray-200 rounded-lg my-3"
          ></div>
        ))}
      </div>
    );

  return (
    <>
      <div className="w-full h-auto bg-white rounded-2xl my-5 p-3 border-1 border-grey">
        {rankData ? (
          rankData.map((element) => (
            <RankItem key={element.id} data={element} />
          ))
        ) : (
          <div>비어있는 데이터 컴포넌트</div>
        )}
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
