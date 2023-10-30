import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type ResourceWhereInput = {
  id?: StringFilter;
  metadata?: JsonFilter;
};
