import { IDetailData, IHistoryData, IRankData } from "../models/data.model"
import api from "./api"

export const getCurRank = async () => {
    const response = await api.get<IRankData[]>("/rank/cur")
    return response.data
}

export const getDetailData = async (id : number) => {
    const response = await api.get<IDetailData>(`/${id}/detail`)
    return response.data
}

export const getHistoryData = async ({id, page, limit } : {id : number, page : number, limit: number}) => {
    const response = await api.get<IHistoryData[]>(`/${id}/history?page=${page}&limit=${limit}`)
    return response.data
}