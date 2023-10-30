import { JsonValue } from "type-fest";

export type Resource = {
  createdAt: Date;
  id: string;
  metadata: JsonValue;
  updatedAt: Date;
};
