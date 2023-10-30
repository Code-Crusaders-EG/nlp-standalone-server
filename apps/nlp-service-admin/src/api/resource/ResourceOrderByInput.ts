import { SortOrder } from "../../util/SortOrder";

export type ResourceOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  metadata?: SortOrder;
  updatedAt?: SortOrder;
};
