import { Edit, ReferenceInput, SelectInput, SimpleForm, TextInput } from 'react-admin';

export const CalendarsEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput disabled source="id" />
            <TextInput source="description" />
            <ReferenceInput source="user_id" reference="users" >
                <SelectInput optionText="name" />
            </ReferenceInput>

        </SimpleForm>
    </Edit>
);