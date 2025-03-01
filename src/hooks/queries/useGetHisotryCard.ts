import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { IHistoryData } from "../../models/data.model";
import { getHistoryData } from "../../api/dataAPI";


const useGetHistoryCard = (id : number): UseQueryResult<IHistoryData[]> => {
  return useQuery<IHistoryData[]>({
    queryKey: [`getHistoryData`, id],
    queryFn: () => getHistoryData(id),
    });
};

export default useGetHistoryCard;
