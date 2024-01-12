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
  Category,
} from '../models';
import {CalendarRepository} from '../repositories';

export class CalendarCategoryController {
  constructor(
    @repository(CalendarRepository) protected calendarRepository: CalendarRepository,
  ) { }

  @get('/calendars/{id}/categories', {
    responses: {
      '200': {
        description: 'Array of Calendar has many Category',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Category)},
          },
        },
      },
    },
  })
  async find(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<Category>,
  ): Promise<Category[]> {
    return this.calendarRepository.categories(id).find(filter);
  }

  @post('/calendars/{id}/categories', {
    responses: {
      '200': {
        description: 'Calendar model instance',
        content: {'application/json': {schema: getModelSchemaRef(Category)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof Calendar.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Category, {
            title: 'NewCategoryInCalendar',
            exclude: ['id'],
            optional: ['calendar_id']
          }),
        },
      },
    }) category: Omit<Category, 'id'>,
  ): Promise<Category> {
    return this.calendarRepository.categories(id).create(category);
  }

  @patch('/calendars/{id}/categories', {
    responses: {
      '200': {
        description: 'Calendar.Category PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Category, {partial: true}),
        },
      },
    })
    category: Partial<Category>,
    @param.query.object('where', getWhereSchemaFor(Category)) where?: Where<Category>,
  ): Promise<Count> {
    return this.calendarRepository.categories(id).patch(category, where);
  }

  @del('/calendars/{id}/categories', {
    responses: {
      '200': {
        description: 'Calendar.Category DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(Category)) where?: Where<Category>,
  ): Promise<Count> {
    return this.calendarRepository.categories(id).delete(where);
  }
}
