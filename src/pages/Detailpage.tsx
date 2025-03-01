import DetailHeader from "../components/DetailHeader";
import HistoryCard from "../components/HistoryCard";
import SourceCard from "../components/SourceCard";
import useGetDetail from "../hooks/queries/useGetDetail";
import useGetHistoryCard from "../hooks/queries/useGetHisotryCard";
import { ISourceData } from "../models/data.model";

const sourceData: ISourceData[] = [
  {
    title: "“오래 살다보니 이런일도” 이순재 감탄의 연속",
    imageURL: "",
    source: "연합뉴스",
    date: "2025-01-12",
    sourceURL:
      "https://news.naver.com/main/read.naver?mode=LSD&mid=sec&sid1=106&oid=001&aid=0013123123",
    id: 1,
  },
  {
    title: "이순재, KBS 연기대상 대상 수상",
    imageURL: "",
    source: "네이버뉴스",
    date: "2025-01-12",
    sourceURL:
      "https://news.naver.com/main/read.naver?mode=LSD&mid=sec&sid1=106&oid=001&aid=0013123123",
    id: 2,
  },
];

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

  return (
    <>
      <DetailHeader data={detailData} />
      <div
        className="flex w-full h-auto flex-col gap-5 mt-5
    "
      >
        {/* isLoading인 경우 (= 스켈레톤 UI) 와 데이터가 빈 경우 따로 컴포넌트 구현. */}
        {HistoryData ? (
          HistoryData.map((data, idx) => (
            <HistoryCard
              key={data.id}
              data={data}
              idx={idx}
              state={idx + 1 === HistoryData.length ? true : false}
            />
          ))
        ) : (
          <div>데이터 없다는 컴포넌트 구현 예정</div>
        )}
        <div className="text-xl font-bold text-black">관련 자료</div>
        {sourceData.map((data) => (
          <SourceCard key={data.id} data={data} />
        ))}
      </div>
    </>
  );
};

export default Detailpage;
