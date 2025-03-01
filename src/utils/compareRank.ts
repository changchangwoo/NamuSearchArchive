import { IRankData } from "../models/data.model";

const compareRank = (oldData: IRankData[], newData: IRankData[]): IRankData[] => {

    if(oldData.length === 0) {
        return newData.map((data) => ({
            ...data,
            status: "new",
        }));
    }
    
    // 1-10 등수는 항상 정렬되어 있음
    const oldRankHash = new Map<string, number>(); // { title: index }
    const status: ("new" | "same" | "up" | "down")[] = [];

    for (let i = 0; i < 10; i++) {
        oldRankHash.set(oldData[i].title, i);
    }

    // newData를 순회하며 상태 추가
    const rankDataAddStatus = newData.map((data, index) => {
        const oldIndex = oldRankHash.get(data.title);

        if (oldIndex === undefined) {
            status.push("new"); // 이전 데이터에 없는 경우
        } else if (oldIndex === index) {
            status.push("same"); // 인덱스가 같은 경우
        } else if (oldIndex > index) {
            status.push("up"); // 새 데이터가 인덱스가 더 낮은 경우 (순위 상승)
        } else {
            status.push("down"); // 새 데이터가 인덱스가 더 높은 경우 (순위 하락)
        }

        return {
            ...data,
            status: status[index], // 현재 인덱스의 상태 추가
        };
    });

    return rankDataAddStatus;
};

export default compareRank;