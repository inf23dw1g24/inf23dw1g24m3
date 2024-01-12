import {Entity, model, property, belongsTo, hasMany} from '@loopback/repository';
import {Calendar} from './calendar.model';
import {Event} from './event.model';

@model({
  name: 'categories'
})
export class Category extends Entity {
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

  @belongsTo(() => Calendar, {name: 'calendar'})
  calendar_id: number;

  @hasMany(() => Event, {keyTo: 'category_id'})
  events: Event[];

  constructor(data?: Partial<Category>) {
    super(data);
  }
}

export interface CategoryRelations {
  // describe navigational properties here
}

export type CategoryWithRelations = Category & CategoryRelations;
