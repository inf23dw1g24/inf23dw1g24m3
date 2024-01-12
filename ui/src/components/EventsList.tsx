import { Datagrid, DateField, EditButton, List, ReferenceField, TextField } from 'react-admin';

export const EventsList = () => (
    <List>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="description" />
            <DateField source="start_date" />
            <DateField source="end_date" />
            <ReferenceField source="calendar_id" reference="calendars" >
                 <TextField source="description" />
            </ReferenceField>
            <ReferenceField source="category_id" reference="categories" >
                <TextField source="description" />
            </ReferenceField>
            <EditButton />
        </Datagrid>
    </List>
);