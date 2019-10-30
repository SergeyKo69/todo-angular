import {Component, OnInit} from '@angular/core';
import {DataHanglerService} from './service/data-hangler.service';
import {Task} from './model/Task';
import {Category} from './model/Category';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  title = 'todo';
  tasks: Task[];
  categories: Category[];
  selectedCategory: Category;

  constructor(private dataHandler: DataHanglerService
  ) {
  }

  ngOnInit(): void {
    this.dataHandler.getAllTasks().subscribe(tasks => this.tasks = tasks);
    this.dataHandler.getAllCatigories().subscribe(categories => this.categories = categories);
    this.onSelectCategory(null);
  }

  onSelectCategory(category: Category) {
    this.selectedCategory = category;
    this.dataHandler.searchTasks(
      category,
      null,
      null,
      null).subscribe(tasks => {
      this.tasks = tasks;
    });
  }

  onSelectTask(task: Task) {
    console.log(task);
  }
}
