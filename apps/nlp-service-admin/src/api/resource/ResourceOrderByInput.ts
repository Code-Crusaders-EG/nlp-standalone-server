import { SortOrder } from "../../util/SortOrder";

export type ResourceOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  size?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
  value?: SortOrder;
};
