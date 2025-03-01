import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { IRankData } from "../../models/data.model";
import { getCurRank } from "../../api/dataAPI";


const useGetCurRank = (): UseQueryResult<IRankData[]> => {
  return useQuery<IRankData[]>({
    queryKey: ['curRankData'],
    queryFn: () => getCurRank(),
    });
};

export default useGetCurRank;
