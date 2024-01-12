
import { Datagrid, EditButton, List, ReferenceField, TextField } from 'react-admin';

export const CategoriesList = () => (
    <List>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="description" />
            <ReferenceField source="calendar_id" reference="calendars" >
                 <TextField source="description" />
            </ReferenceField>
            <EditButton />
        </Datagrid>
    </List>
);