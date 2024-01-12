
import { Edit, ReferenceInput, SelectInput, SimpleForm, TextField, TextInput } from 'react-admin';

export const CategoriesEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput disabled source="id" />
            <TextInput source="description" />
            <ReferenceInput source="calendar_id" reference="calendars" >
                <SelectInput optionText="description" />
            </ReferenceInput>
        </SimpleForm>
    </Edit>
);