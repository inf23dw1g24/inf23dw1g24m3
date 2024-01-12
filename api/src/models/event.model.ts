import {Entity, model, property, hasOne, belongsTo} from '@loopback/repository';
import {Category} from './category.model';
import {Calendar} from './calendar.model';

@model({
  name: 'events'
})
export class Event extends Entity {
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

  @property({
    type: 'string',
    required: true,
  })
  start_date: string;

  @property({
    type: 'string',
    required: true,
  })
  end_date: string;

  @belongsTo(() => Calendar, {name: 'calendar'})
  calendar_id: number;

  @belongsTo(() => Category, {name: 'category'})
  category_id: number;

  constructor(data?: Partial<Event>) {
    super(data);
  }
}

export interface EventRelations {
  // describe navigational properties here
}

export type EventWithRelations = Event & EventRelations;
