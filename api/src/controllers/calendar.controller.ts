import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {Calendar} from '../models';
import {CalendarRepository} from '../repositories';

export class CalendarController {
  constructor(
    @repository(CalendarRepository)
    public calendarRepository : CalendarRepository,
  ) {}

  @post('/calendars')
  @response(200, {
    description: 'Calendar model instance',
    content: {'application/json': {schema: getModelSchemaRef(Calendar)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Calendar, {
            title: 'NewCalendar',
            exclude: ['id'],
          }),
        },
      },
    })
    calendar: Omit<Calendar, 'id'>,
  ): Promise<Calendar> {
    return this.calendarRepository.create(calendar);
  }

  @get('/calendars/count')
  @response(200, {
    description: 'Calendar model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Calendar) where?: Where<Calendar>,
  ): Promise<Count> {
    return this.calendarRepository.count(where);
  }

  @get('/calendars')
  @response(200, {
    description: 'Array of Calendar model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Calendar, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Calendar) filter?: Filter<Calendar>,
  ): Promise<Calendar[]> {
    return this.calendarRepository.find(filter);
  }

  @patch('/calendars')
  @response(200, {
    description: 'Calendar PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Calendar, {partial: true}),
        },
      },
    })
    calendar: Calendar,
    @param.where(Calendar) where?: Where<Calendar>,
  ): Promise<Count> {
    return this.calendarRepository.updateAll(calendar, where);
  }

  @get('/calendars/{id}')
  @response(200, {
    description: 'Calendar model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Calendar, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Calendar, {exclude: 'where'}) filter?: FilterExcludingWhere<Calendar>
  ): Promise<Calendar> {
    return this.calendarRepository.findById(id, filter);
  }

  @patch('/calendars/{id}')
  @response(204, {
    description: 'Calendar PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Calendar, {partial: true}),
        },
      },
    })
    calendar: Calendar,
  ): Promise<void> {
    await this.calendarRepository.updateById(id, calendar);
  }

  @put('/calendars/{id}')
  @response(204, {
    description: 'Calendar PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() calendar: Calendar,
  ): Promise<void> {
    await this.calendarRepository.replaceById(id, calendar);
  }

  @del('/calendars/{id}')
  @response(204, {
    description: 'Calendar DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.calendarRepository.deleteById(id);
  }
}
