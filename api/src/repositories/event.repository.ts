import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor, HasOneRepositoryFactory} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {Event, EventRelations, Calendar, Category} from '../models';
import {CalendarRepository} from './calendar.repository';
import {CategoryRepository} from './category.repository';

export class EventRepository extends DefaultCrudRepository<
  Event,
  typeof Event.prototype.id,
  EventRelations
> {

  public readonly calendar: BelongsToAccessor<Calendar, typeof Event.prototype.id>;

  public readonly category: BelongsToAccessor<Category, typeof Event.prototype.id>;

  constructor(
    @inject('datasources.db') dataSource: DbDataSource, @repository.getter('CalendarRepository') protected calendarRepositoryGetter: Getter<CalendarRepository>, @repository.getter('CategoryRepository') protected categoryRepositoryGetter: Getter<CategoryRepository>, 
  ) {
    super(Event, dataSource);
    this.category = this.createBelongsToAccessorFor('category', categoryRepositoryGetter,);
    this.registerInclusionResolver('category', this.category.inclusionResolver);
    this.calendar = this.createBelongsToAccessorFor('calendar', calendarRepositoryGetter,);
    this.registerInclusionResolver('calendar', this.calendar.inclusionResolver);
  }
}
