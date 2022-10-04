import { Component, OnInit } from '@angular/core';
import { TaskStorageService } from "../task-storage.service";
import { Category, Product } from "../shared/models/product.model";

@Component({
  selector: 'app-todo',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  tasks: Category[];

  constructor(private storage: TaskStorageService) { }

  ngOnInit(): void {
    this.storage.getCategory().subscribe((data: Category[]) => {
      console.log(data);

      this.tasks = data;
    });
  }
  delete(id: string): void {
    this.storage.deleteCategory(id).subscribe(
      () => {
        this.ngOnInit();
      }
    )
  }
}
