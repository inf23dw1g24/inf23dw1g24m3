import {Entity, model, property, hasMany, belongsTo} from '@loopback/repository';
import {Category} from './category.model';
import {Event} from './event.model';
import {User} from './user.model';

@model({
  name: 'calendars'
})
export class Calendar extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  description: string;

  @belongsTo(() => User, {name: 'user'})
  user_id: number;

  @hasMany(() => Event, {keyTo: 'calendar_id'})
  events: Event[];

  @hasMany(() => Category, {keyTo: 'calendar_id'})
  categories: Category[];

  constructor(data?: Partial<Calendar>) {
    super(data);
  }
}

export interface CalendarRelations {
  // describe navigational properties here
}

export type CalendarWithRelations = Calendar & CalendarRelations;
