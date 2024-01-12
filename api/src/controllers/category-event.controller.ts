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
  Category,
  Event,
} from '../models';
import {CategoryRepository} from '../repositories';

export class CategoryEventController {
  constructor(
    @repository(CategoryRepository) protected categoryRepository: CategoryRepository,
  ) { }

  @get('/categories/{id}/events', {
    responses: {
      '200': {
        description: 'Array of Category has many Event',
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
    return this.categoryRepository.events(id).find(filter);
  }

  @post('/categories/{id}/events', {
    responses: {
      '200': {
        description: 'Category model instance',
        content: {'application/json': {schema: getModelSchemaRef(Event)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof Category.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Event, {
            title: 'NewEventInCategory',
            exclude: ['id'],
            optional: ['category_id']
          }),
        },
      },
    }) event: Omit<Event, 'id'>,
  ): Promise<Event> {
    return this.categoryRepository.events(id).create(event);
  }

  @patch('/categories/{id}/events', {
    responses: {
      '200': {
        description: 'Category.Event PATCH success count',
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
    return this.categoryRepository.events(id).patch(event, where);
  }

  @del('/categories/{id}/events', {
    responses: {
      '200': {
        description: 'Category.Event DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(Event)) where?: Where<Event>,
  ): Promise<Count> {
    return this.categoryRepository.events(id).delete(where);
  }
}
