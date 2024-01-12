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
  Category,
} from '../models';
import {EventRepository} from '../repositories';

export class EventCategoryController {
  constructor(
    @repository(EventRepository)
    public eventRepository: EventRepository,
  ) { }

  @get('/events/{id}/category', {
    responses: {
      '200': {
        description: 'Category belonging to Event',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Category),
          },
        },
      },
    },
  })
  async getCategory(
    @param.path.number('id') id: typeof Event.prototype.id,
  ): Promise<Category> {
    return this.eventRepository.category(id);
  }
}
