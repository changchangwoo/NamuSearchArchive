import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { IDetailData } from "../../models/data.model";
import { getDetailData } from "../../api/dataAPI";


const useGetDetail = (id: number): UseQueryResult<IDetailData> => {
  return useQuery<IDetailData>({
    queryKey: [`detailData`, id],
    queryFn: () => getDetailData(id),
    });
};

export default useGetDetail;
