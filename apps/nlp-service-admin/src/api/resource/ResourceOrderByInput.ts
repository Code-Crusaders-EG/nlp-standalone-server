import { SortOrder } from "../../util/SortOrder";

export type ResourceOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
