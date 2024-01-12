import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor, HasManyRepositoryFactory} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {Calendar, CalendarRelations, User, Event, Category} from '../models';
import {UserRepository} from './user.repository';
import {EventRepository} from './event.repository';
import {CategoryRepository} from './category.repository';

export class CalendarRepository extends DefaultCrudRepository<
  Calendar,
  typeof Calendar.prototype.id,
  CalendarRelations
> {

  public readonly user: BelongsToAccessor<User, typeof Calendar.prototype.id>;

  public readonly events: HasManyRepositoryFactory<Event, typeof Calendar.prototype.id>;

  public readonly categories: HasManyRepositoryFactory<Category, typeof Calendar.prototype.id>;

  constructor(
    @inject('datasources.db') dataSource: DbDataSource, @repository.getter('UserRepository') protected userRepositoryGetter: Getter<UserRepository>, @repository.getter('EventRepository') protected eventRepositoryGetter: Getter<EventRepository>, @repository.getter('CategoryRepository') protected categoryRepositoryGetter: Getter<CategoryRepository>,) {
    super(Calendar, dataSource);
    this.categories = this.createHasManyRepositoryFactoryFor('categories', categoryRepositoryGetter,);
    this.registerInclusionResolver('categories', this.categories.inclusionResolver);
    this.events = this.createHasManyRepositoryFactoryFor('events', eventRepositoryGetter,);
    this.registerInclusionResolver('events', this.events.inclusionResolver);
    this.user = this.createBelongsToAccessorFor('user', userRepositoryGetter,);
    this.registerInclusionResolver('user', this.user.inclusionResolver);
  }
}
