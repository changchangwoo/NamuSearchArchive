import DetailHeader from "../components/DetailHeader";
import HistoryCard from "../components/HistoryCard";
import Loading from "../components/Loading";
import useGetDetail from "../hooks/queries/useGetDetail";
import useGetHistoryCard from "../hooks/queries/useGetHisotryCard";

const Detailpage = () => {
  const {
    data: detailData,
    isLoading: isDetailLoading,
    error: isDetailError,
  } = useGetDetail(1);
  const {
    data: HistoryData,
    isLoading: isHistoryLoading,
    error: isHistoryError,
  } = useGetHistoryCard(1);

  if(isDetailLoading || isHistoryLoading) return <Loading />

  return (
    <>
      <DetailHeader data={detailData} />
      <div
        className="flex w-full h-auto flex-col gap-5 mt-5
    "
      >
        {HistoryData ? (
          HistoryData.map((data, idx) => (
            <HistoryCard
              key={data.id}
              data={data}
              idx={idx}
            />
          ))
        ) : (
          <div>비어있는 데이터 컴포넌트</div>
        )}
      </div>
    </>
  );
};

export default Detailpage;
