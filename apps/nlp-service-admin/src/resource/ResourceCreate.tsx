import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const ResourceCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Description" multiline source="description" />
        <NumberInput step={1} label="Size" source="size" />
        <TextInput label="Title" source="title" />
        <TextInput label="Value" multiline source="value" />
      </SimpleForm>
    </Create>
  );
};
