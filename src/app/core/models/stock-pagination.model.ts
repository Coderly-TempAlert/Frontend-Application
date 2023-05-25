import { Product } from "./stock.model";
import { Store } from "./store.model";

export interface StockPagination {
  search:          string;
  pageIndex:       number;
  pageSize:        number;
  total:           number;
  registers:       Register[];
  totalPages:      number;
  hasPreviousPage: boolean;
  hasNextPage:     boolean;
}

export interface Register {
  storeId:   string;
  store:     Store;
  productId: string;
  product:   Product;
}
