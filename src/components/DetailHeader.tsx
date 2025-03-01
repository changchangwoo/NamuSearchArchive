import { IDetailData } from '../models/data.model'

interface DetailHeaderProps {
    data : IDetailData | undefined
}

const DetailHeader = ( {data} : DetailHeaderProps ) => {
  if(!data) return null
    return (
        <div className="w-full flex-col">
          <div className="w-auto flex gap-2">
            <div className="text-3xl font-bold">{data.title}</div>
            <div className="font-bold text-sm text-light-black relative top-4">{data.status}</div>
          </div>
          <div className="mt-2 text-deep-grey font-light">최초 등재 : {data.firstListedData}</div>
        </div>
      )
}

export default DetailHeader