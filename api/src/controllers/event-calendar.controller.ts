import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  Event,
  Calendar,
} from '../models';
import {EventRepository} from '../repositories';

export class EventCalendarController {
  constructor(
    @repository(EventRepository)
    public eventRepository: EventRepository,
  ) { }

  @get('/events/{id}/calendar', {
    responses: {
      '200': {
        description: 'Calendar belonging to Event',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Calendar),
          },
        },
      },
    },
  })
  async getCalendar(
    @param.path.number('id') id: typeof Event.prototype.id,
  ): Promise<Calendar> {
    return this.eventRepository.calendar(id);
  }
}
