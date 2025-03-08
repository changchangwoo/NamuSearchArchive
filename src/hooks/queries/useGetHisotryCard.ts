import { useInfiniteQuery} from "@tanstack/react-query";
import { getHistoryData } from "../../api/dataAPI";


const useGetHistoryCard = ({id, page, limit} : {id : number, page : number, limit : number}) => {
  return useInfiniteQuery({
    queryKey: [`getHistoryData`, id],
    queryFn: () => getHistoryData({id, page, limit}),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages, lastPageParam) => {
      if (lastPage.length === 0) {
        return undefined;
      }
      return lastPageParam + 1;
    },

    });
};

export default useGetHistoryCard;
