import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  Calendar,
  User,
} from '../models';
import {CalendarRepository} from '../repositories';

export class CalendarUserController {
  constructor(
    @repository(CalendarRepository)
    public calendarRepository: CalendarRepository,
  ) { }

  @get('/calendars/{id}/user', {
    responses: {
      '200': {
        description: 'User belonging to Calendar',
        content: {
          'application/json': {
            schema: getModelSchemaRef(User),
          },
        },
      },
    },
  })
  async getUser(
    @param.path.number('id') id: typeof Calendar.prototype.id,
  ): Promise<User> {
    return this.calendarRepository.user(id);
  }
}
