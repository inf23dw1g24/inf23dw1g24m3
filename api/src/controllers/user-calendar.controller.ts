import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  del,
  get,
  getModelSchemaRef,
  getWhereSchemaFor,
  param,
  patch,
  post,
  requestBody,
} from '@loopback/rest';
import {
  User,
  Calendar,
} from '../models';
import {UserRepository} from '../repositories';

export class UserCalendarController {
  constructor(
    @repository(UserRepository) protected userRepository: UserRepository,
  ) { }

  @get('/users/{id}/calendars', {
    responses: {
      '200': {
        description: 'Array of User has many Calendar',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Calendar)},
          },
        },
      },
    },
  })
  async find(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<Calendar>,
  ): Promise<Calendar[]> {
    return this.userRepository.calendars(id).find(filter);
  }

  @post('/users/{id}/calendars', {
    responses: {
      '200': {
        description: 'User model instance',
        content: {'application/json': {schema: getModelSchemaRef(Calendar)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof User.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Calendar, {
            title: 'NewCalendarInUser',
            exclude: ['id'],
            optional: ['user_id']
          }),
        },
      },
    }) calendar: Omit<Calendar, 'id'>,
  ): Promise<Calendar> {
    return this.userRepository.calendars(id).create(calendar);
  }

  @patch('/users/{id}/calendars', {
    responses: {
      '200': {
        description: 'User.Calendar PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Calendar, {partial: true}),
        },
      },
    })
    calendar: Partial<Calendar>,
    @param.query.object('where', getWhereSchemaFor(Calendar)) where?: Where<Calendar>,
  ): Promise<Count> {
    return this.userRepository.calendars(id).patch(calendar, where);
  }

  @del('/users/{id}/calendars', {
    responses: {
      '200': {
        description: 'User.Calendar DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(Calendar)) where?: Where<Calendar>,
  ): Promise<Count> {
    return this.userRepository.calendars(id).delete(where);
  }
}
