import {TaskDAO} from '../interface/TaskDAO';
import {Observable, of} from 'rxjs';
import {Category} from '../../../model/Category';
import {Priority} from '../../../model/Priority';
import {Task} from '../../../model/Task';
import {TestData} from '../../TestData';

export class TaskDAOArray implements TaskDAO {
  add(T): Observable<Task> {
    return undefined;
  }

  delete(id: number): Observable<Task> {
    return undefined;
  }

  get(id: number): Observable<Task> {
    return of(TestData.tasks.find(todo => todo.id === id));
  }

  getAll(): Observable<Task[]> {
    return of(TestData.tasks);
  }

  getCompletedCountCategory(category: Category): Observable<number> {
    return undefined;
  }

  getTotalCount(): Observable<number> {
    return undefined;
  }

  getTotalCountCategory(category: Category): Observable<number> {
    return undefined;
  }

  getUncompletedCountCategory(category: Category): Observable<number> {
    return undefined;
  }

  search(category: Category, searchText: string, status: boolean, priority: Priority): Observable<Task[]> {
    let allTasks = TestData.tasks;
    if (category != null) {
      allTasks = allTasks.filter(todo => todo.category === category);
    }
    return of(allTasks);
  }

  update(T): Observable<Task> {
    return undefined;
  }

}
