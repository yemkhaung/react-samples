import { RestDataSource } from "./RestDataSource";
import { ActionTypes } from "./Types";

const dataSource = new RestDataSource();

export const loadData = (dataType, params) => ({
    type: ActionTypes.DATA_LOAD,
    payload: dataSource.GetData(dataType, params).then(resp => ({
        dataType,
        data: resp.data,
        total: Number(resp.headers["x-total-count"]),
        params
    }))
});

export const setPageSize = pageSize => ({
    type: ActionTypes.DATA_SET_PAGESIZE,
    payload: pageSize
});

export const setSortProperty = sortProp => ({
    type: ActionTypes.DATA_SET_SORT_PROPERTY,
    payload: sortProp
});
