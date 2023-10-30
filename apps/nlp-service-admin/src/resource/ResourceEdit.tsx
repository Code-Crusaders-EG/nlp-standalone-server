import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const ResourceEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Description" multiline source="description" />
        <NumberInput step={1} label="Size" source="size" />
        <TextInput label="Title" source="title" />
        <TextInput label="Value" multiline source="value" />
      </SimpleForm>
    </Edit>
  );
};
