import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntFilter } from "../../util/IntFilter";

export type ResourceWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  size?: IntFilter;
  title?: StringFilter;
  value?: StringFilter;
};
