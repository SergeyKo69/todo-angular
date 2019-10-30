import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {DataHanglerService} from '../../service/data-hangler.service';
import {Category} from '../../model/Category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  @Output()
  selectCategory = new EventEmitter<Category>();
  selectedCategory: Category;
  @Input()
  private categories: Category[];

  constructor(private dataHandler: DataHanglerService) {
  }

  ngOnInit() {
    // this.dataHandler.getAllCatigories().subscribe(categories => this.categories = categories);
  }

  showTasksByCategory(category: Category) {

    if (this.selectedCategory === category) {
      return;
    }

    this.selectedCategory = category;
    this.selectCategory.emit(this.selectedCategory);
  }
}
