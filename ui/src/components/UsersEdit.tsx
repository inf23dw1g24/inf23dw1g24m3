import { Edit, SimpleForm, TextInput } from 'react-admin';

export const UsersEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput disabled source="id" />
            <TextInput source="name" />
            <TextInput source="email" />
            <TextInput source="status" />
        </SimpleForm>
    </Edit>
);