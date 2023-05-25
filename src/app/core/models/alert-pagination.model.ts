import { Alert } from "./alert.model";

export interface AlertPagination {
  search:          string;
  pageIndex:       number;
  pageSize:        number;
  total:           number;
  registers:       Alert[];
  totalPages:      number;
  hasPreviousPage: boolean;
  hasNextPage:     boolean;
}
