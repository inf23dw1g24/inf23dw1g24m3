import {
  Admin,
  EditGuesser,
  ListGuesser,
  Resource,
} from "react-admin";
import lb4Provider from 'react-admin-lb4';

import UsersList from './components/UsersList';
import { CalendarsList } from "./components/CalendarsList";
import { CategoriesList } from "./components/CategoriesList";
import { EventsList } from "./components/EventsList";
import { UsersEdit } from "./components/UsersEdit";
import { CalendarsEdit } from "./components/CalendarsEdit";
import { EventsEdit } from "./components/EventsEdit";
import { CategoriesEdit } from "./components/CategoriesEdit";

const dataProvider = lb4Provider('http://api:4000');

export const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="users" list={UsersList} edit={UsersEdit} />
    <Resource name="calendars" list={CalendarsList} edit={CalendarsEdit} />
    <Resource name="categories" list={CategoriesList} edit={CategoriesEdit}/>
    <Resource name="events" list={EventsList} edit={EventsEdit}/>
  </Admin>
);
