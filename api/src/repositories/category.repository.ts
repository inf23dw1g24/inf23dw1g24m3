import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor, HasManyRepositoryFactory} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {Category, CategoryRelations, Calendar, Event} from '../models';
import {CalendarRepository} from './calendar.repository';
import {EventRepository} from './event.repository';

export class CategoryRepository extends DefaultCrudRepository<
  Category,
  typeof Category.prototype.id,
  CategoryRelations
> {

  public readonly calendar: BelongsToAccessor<Calendar, typeof Category.prototype.id>;

  public readonly events: HasManyRepositoryFactory<Event, typeof Category.prototype.id>;

  constructor(
    @inject('datasources.db') dataSource: DbDataSource, @repository.getter('CalendarRepository') protected calendarRepositoryGetter: Getter<CalendarRepository>, @repository.getter('EventRepository') protected eventRepositoryGetter: Getter<EventRepository>,
  ) {
    super(Category, dataSource);
    this.events = this.createHasManyRepositoryFactoryFor('events', eventRepositoryGetter,);
    this.registerInclusionResolver('events', this.events.inclusionResolver);
    this.calendar = this.createBelongsToAccessorFor('calendar', calendarRepositoryGetter,);
    this.registerInclusionResolver('calendar', this.calendar.inclusionResolver);
  }
}
