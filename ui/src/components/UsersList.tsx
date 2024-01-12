
import React from 'react';
import { Datagrid, EditButton, EmailField, List, TextField } from 'react-admin';

export const UsersList = () => (
    <List>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="name" />
            <EmailField source="email" />
            <TextField source="status" />
            <EditButton />
        </Datagrid>
    </List>
);

export default UsersList;
  
  