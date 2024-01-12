import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {User, UserRelations, Calendar} from '../models';
import {CalendarRepository} from './calendar.repository';

export class UserRepository extends DefaultCrudRepository<
  User,
  typeof User.prototype.id,
  UserRelations
> {

  public readonly calendars: HasManyRepositoryFactory<Calendar, typeof User.prototype.id>;

  constructor(
    @inject('datasources.db') dataSource: DbDataSource, @repository.getter('CalendarRepository') protected calendarRepositoryGetter: Getter<CalendarRepository>,
  ) {
    super(User, dataSource);
    this.calendars = this.createHasManyRepositoryFactoryFor('calendars', calendarRepositoryGetter,);
    this.registerInclusionResolver('calendars', this.calendars.inclusionResolver);
  }
}
