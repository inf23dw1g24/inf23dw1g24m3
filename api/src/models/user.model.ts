import {Entity, model, property, hasMany} from '@loopback/repository';
import {Calendar} from './calendar.model';

@model({
  name: 'users'
})
export class User extends Entity {

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
  name: string;

  @property({
    type: 'string',
    required: true,
  })
  email: string;

  @property({
    type: 'string',
    required: true,
  })
  status: string;

  @hasMany(() => Calendar, {keyTo: 'user_id'})
  calendars: Calendar[];

  constructor(data?: Partial<User>) {
    super(data);
  }
}

export interface UserRelations {
  // describe navigational properties here
}

export type UserWithRelations = User & UserRelations;
