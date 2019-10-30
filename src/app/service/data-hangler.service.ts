import {Injectable} from '@angular/core';
import {Category} from '../model/Category';
import {TestData} from '../data/TestData';
import {Task} from '../model/Task';
import {BehaviorSubject, Observable} from 'rxjs';
import {TaskDAOArray} from '../data/dao/impl/TaskDAOArray';
import {CategoryDAOArray} from '../data/dao/impl/CategoryDAOArray';
import {Priority} from '../model/Priority';

@Injectable({
  providedIn: 'root'
})
export class DataHanglerService {

  taskSubject = new BehaviorSubject(TestData.tasks);
  categoriesSubject = new BehaviorSubject(TestData.categories);
  private taskDAOArray = new TaskDAOArray();
  private categoryDAOArray = new CategoryDAOArray();

  constructor() {
  }

  fillTasks() {
    this.taskSubject.next(TestData.tasks);
  }

  fillTasksByCategory(category: Category) {
    const tasks = TestData.tasks.filter(task => task.category === category);
    this.taskSubject.next(tasks);
  }

  getAllCatigories(): Observable<Category[]> {
    return this.categoryDAOArray.getAll();
  }

  getAllTasks(): Observable<Task[]> {
    return this.taskDAOArray.getAll();
  }

  searchTasks(category: Category, searchText: string, status: boolean, priority: Priority): Observable<Task[]> {
    return this.taskDAOArray.search(category, searchText, status, priority);
  }
}
