export type RankStatus = "up" | "down" | "same" | "new";

export interface IHistoryData {
  date: string;
  time: string;
  imageURL: string;
  description: string;
  id: number;
}

export interface ISourceData {
  title: string;
  imageURL: string;
  source: string;
  sourceURL: string;
  date: string;
  id: number;
}

export interface IRankData {
  title: string;
  rank: number;
  status: RankStatus;
  id: number;
}

export interface IDetailData {
  title: string;
  status: string;
  firstListedData: string;
}
