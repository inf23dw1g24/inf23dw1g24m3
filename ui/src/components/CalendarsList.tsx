import { Datagrid, EditButton, List, ReferenceField, TextField } from 'react-admin';

export const CalendarsList = () => (
    <List>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="description" />
            <ReferenceField source="user_id" reference="users" >
                <TextField source="name" />
            </ReferenceField>
            <EditButton />
        </Datagrid>
    </List>
);