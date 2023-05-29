import { Product } from "./stock.model";
import { Store } from "./store.model";

export interface Alert {
  storeId:     string;
  store:       Store;
  productId:   string;
  product:     Product;
  createdDate: Date;
  id:          string;
}
