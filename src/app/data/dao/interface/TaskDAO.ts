import {CommonDAO} from './CommonDAO';
import {Task} from '../../../model/Task';
import {Category} from '../../../model/Category';
import {Priority} from '../../../model/Priority';
import {Observable} from 'rxjs';

export interface TaskDAO extends CommonDAO<Task> {

  search(category: Category, searchText: string, status: boolean, priority: Priority): Observable<Task[]>;

  getCompletedCountCategory(category: Category): Observable<number>;

  getUncompletedCountCategory(category: Category): Observable<number>;

  getTotalCountCategory(category: Category): Observable<number>;

  getTotalCount(): Observable<number>;

}
