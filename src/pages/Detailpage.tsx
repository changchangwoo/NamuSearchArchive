import HistoryCard from "../components/HistoryCard"
import SourceCard from "../components/SourceCard"


const HistoryData : {
  date : string,
  time : string,
  imageURL : string,
  description : string,
  id : number,
}[] = [
  {
    id : 1,
    date : "2025-01-12",
    time : "16:35",
    imageURL : "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
    description : "원로 배우 이순재님이 2024년 KBS 연기대상에서 대상을 수상하였습니다!"
  },
  {
    id : 2,
    date : "2025-01-13",
    time : "16:40",
    imageURL : "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
    description:"2024년 KBS 연기대상에서 이순재 배우가 연기 대상을 수상하였고 이에 대해 “행복합니다”라고 대답해 화제가 되어짐"
  },
  {
    id : 3,
    date : "2025-01-14",
    time : "16:45",
    imageURL : "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
    description:"이순재 배우가 2024년 KBS 연기대상에서 대상을 수상하였습니다."
  }
]


const sourceData: {
  title: string,
  imageURL: string,
  source: string,
  sourceURL : string,
  date: string,
  id: number,
}[] = [
  {
    title: "“오래 살다보니 이런일도” 이순재 감탄의 연속",
    imageURL: "",
    source: "연합뉴스",
    date: "2025-01-12",
    sourceURL : "https://news.naver.com/main/read.naver?mode=LSD&mid=sec&sid1=106&oid=001&aid=0013123123",
    id: 1,
  },
  {
    title: "이순재, KBS 연기대상 대상 수상",
    imageURL: "",
    source: "네이버뉴스",
    date: "2025-01-12",
    sourceURL : "https://news.naver.com/main/read.naver?mode=LSD&mid=sec&sid1=106&oid=001&aid=0013123123",
    id: 2
  },
]



const Detailpage = () => {
  return (
    <>
    <DetailHeader/>
    <div className="flex w-full h-auto flex-col gap-5 mt-5
    ">
    {
      HistoryData.map((data, idx) => 
        <HistoryCard key={data.id} data={data} idx={idx} state={idx+1 === HistoryData.length ? true : false}/>
      )
    }
    <div className="text-xl font-bold text-black">관련 자료</div>
    {
      sourceData.map((data) => 
        <SourceCard key={data.id} data={data}/>
    )
    }
    </div>
    </>
  )
}

const DetailHeader = () => {
  return (
    <div className="w-full flex-col">
      <div className="w-auto flex gap-2">
        <div className="text-3xl font-bold">이순재</div>
        <div className="font-bold text-sm text-light-black relative top-4">실시간 3위🔥</div>
      </div>
      <div className="mt-2 text-deep-grey font-light">최초 등재 : 2025-01-12 16:35 </div>
    </div>
  )
}

export default Detailpage