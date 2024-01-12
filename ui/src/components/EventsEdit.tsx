import { DateTimeInput, Edit, ReferenceInput, SelectInput, SimpleForm, TextInput } from 'react-admin';

export const EventsEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput disabled source="id" />
            <TextInput source="description" />
            <DateTimeInput source="start_date" />
            <DateTimeInput source="end_date" />
            <ReferenceInput source="calendar_id" reference="calendars" >
                <SelectInput optionText="description" />
            </ReferenceInput>
            <ReferenceInput source="category_id" reference="categories" >
                <SelectInput optionText="description" />
            </ReferenceInput>
        </SimpleForm>
    </Edit>
);