import { IRankData } from "../models/data.model";

const compareRank = (
  oldData: IRankData[],
  newData: IRankData[]
): IRankData[] => {
  if (oldData.length === 0) {
    return newData.map((data) => ({
      ...data,
      status: "new",
    }));
  }

  const oldRankHash = new Map<string, number>();
  const status: ("new" | "same" | "up" | "down")[] = [];

  for (let i = 0; i < 10; i++) {
    oldRankHash.set(oldData[i].title, i);
  }

  const rankDataAddStatus = newData.map((data, index) => {
    const oldIndex = oldRankHash.get(data.title);

    if (oldIndex === undefined) {
      status.push("new");
    } else if (oldIndex === index) {
      status.push("same");
    } else if (oldIndex > index) {
      status.push("up");
    } else {
      status.push("down");
    }

    return {
      ...data,
      status: status[index],
    };
  });

  return rankDataAddStatus;
};

export default compareRank;
