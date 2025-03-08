import { useEffect, useRef } from "react";
import DetailHeader from "../components/DetailHeader";
import HistoryCard from "../components/HistoryCard";
import Loading from "../components/Loading";
import useGetDetail from "../hooks/queries/useGetDetail";
import useGetHistoryCard from "../hooks/queries/useGetHisotryCard";
import { CardSkeleton } from "../components/Skeleton";

const CARDS_PER_PAGE = 10;

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
    isFetching,
    hasNextPage,
  } = useGetHistoryCard({ id: 1, page: 1, limit: CARDS_PER_PAGE });
  const observerRef = useRef<HTMLDivElement | null>(null);

  // console.log(HistoryData, hasNextPage);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          console.log(entries, "감지됨");
        }
      },
      { threshold: 1.0 }
    );

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => {
      if (observerRef.current) {
        observer.unobserve(observerRef.current);
      }
    };
  }, [hasNextPage]);

  if (isDetailLoading || isHistoryLoading) return <Loading />;
  if (isDetailError || isHistoryError)
    return <div>에러 발생 컴포넌트 처리</div>;

  return (
    <>
      <DetailHeader data={detailData} />
      <div
        className="flex w-full h-auto flex-col gap-5 mt-5
    "
      >
        {HistoryData ? (
          HistoryData.pages.map((pageData, pageIndex) =>
            pageData.map((data, dataIndex) => {
              const cardIdx = pageIndex * pageData.length + dataIndex;
              return <HistoryCard key={data.id} data={data} idx={cardIdx} />;
            })
          )
        ) : (
          <div>비어있는 데이터 컴포넌트</div>
        )}
      </div>
      {
        true ? (<CardSkeleton/>)
        :
        (
          <div
          ref={observerRef}
          className="h-1"
        />
  
        )
      }
    </>
  );
};

export default Detailpage;
