import {AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {Task} from '../../model/Task';
import {DataHanglerService} from '../../service/data-hangler.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  displayedColumns: string[] = ['color', 'id', 'title', 'date', 'priority', 'category'];
  @Output()
  selectTask = new EventEmitter<Task>();
  @ViewChild(MatPaginator, {static: false}) private paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) private sort: MatSort;
  private dataSource: MatTableDataSource<Task>;
  private tasks: Task[];

  constructor(private dataHangler: DataHanglerService) {

  }

  @Input('tasks')
  private set setTasks(tasks: Task[]) {
    this.tasks = tasks;
    this.fillTable();
  }

  ngOnInit() {
    // this.dataHangler.getAllTasks().subscribe(tasks => this.tasks = tasks);
    this.dataSource = new MatTableDataSource<Task>();
    this.fillTable();
  }

  getPriorityColor(task: Task) {
    if (task.priority && task.priority.color) {
      return task.priority.color;
    }
    return 'rgba(134,134,134,0.24)';
  }

  fillTable() {

    if (!this.dataSource) {
      return;
    }
    if (!this.tasks) {
      return;
    }
    this.dataSource.data = this.tasks;
    this.addTableObject();

    this.dataSource.sortingDataAccessor = (task, colName) => {
      switch (colName) {
        case 'title':
          return task.title;
        case 'date':
          return task.date != null ? task.date.toLocaleDateString : null;
        case 'priority':
          return task.priority != null ? task.priority.title : null;
        case 'category':
          return task.category != null ? task.category.title : null;
      }
    };
  }

  onClickTask(task: Task) {
    this.selectTask.emit(task);
  }

  private addTableObject() {
    this.dataSource.paginator = this.paginator;
  }
}
