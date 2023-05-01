import { Store } from "./store.model";

export interface StorePagination {
    hasNextPage: boolean;
    hasPreviousPage: boolean;
    pageIndex: number;
    pageSize: number;
    registers: Store[];
    total: number;
    totalPages: number;
}