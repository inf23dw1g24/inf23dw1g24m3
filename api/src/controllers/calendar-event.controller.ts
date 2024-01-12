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
  Calendar,
  Event,
} from '../models';
import {CalendarRepository} from '../repositories';

export class CalendarEventController {
  constructor(
    @repository(CalendarRepository) protected calendarRepository: CalendarRepository,
  ) { }

  @get('/calendars/{id}/events', {
    responses: {
      '200': {
        description: 'Array of Calendar has many Event',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Event)},
          },
        },
      },
    },
  })
  async find(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<Event>,
  ): Promise<Event[]> {
    return this.calendarRepository.events(id).find(filter);
  }

  @post('/calendars/{id}/events', {
    responses: {
      '200': {
        description: 'Calendar model instance',
        content: {'application/json': {schema: getModelSchemaRef(Event)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof Calendar.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Event, {
            title: 'NewEventInCalendar',
            exclude: ['id'],
            optional: ['calendar_id']
          }),
        },
      },
    }) event: Omit<Event, 'id'>,
  ): Promise<Event> {
    return this.calendarRepository.events(id).create(event);
  }

  @patch('/calendars/{id}/events', {
    responses: {
      '200': {
        description: 'Calendar.Event PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Event, {partial: true}),
        },
      },
    })
    event: Partial<Event>,
    @param.query.object('where', getWhereSchemaFor(Event)) where?: Where<Event>,
  ): Promise<Count> {
    return this.calendarRepository.events(id).patch(event, where);
  }

  @del('/calendars/{id}/events', {
    responses: {
      '200': {
        description: 'Calendar.Event DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(Event)) where?: Where<Event>,
  ): Promise<Count> {
    return this.calendarRepository.events(id).delete(where);
  }
}
