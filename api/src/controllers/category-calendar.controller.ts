import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  Category,
  Calendar,
} from '../models';
import {CategoryRepository} from '../repositories';

export class CategoryCalendarController {
  constructor(
    @repository(CategoryRepository)
    public categoryRepository: CategoryRepository,
  ) { }

  @get('/categories/{id}/calendar', {
    responses: {
      '200': {
        description: 'Calendar belonging to Category',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Calendar),
          },
        },
      },
    },
  })
  async getCalendar(
    @param.path.number('id') id: typeof Category.prototype.id,
  ): Promise<Calendar> {
    return this.categoryRepository.calendar(id);
  }
}
