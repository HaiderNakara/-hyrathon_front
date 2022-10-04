import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Category, Product } from "../shared/models/product.model";
import { TaskStorageService } from "../task-storage.service";
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-task-edit',
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.css']
})
export class CategoryEditComponent implements OnInit {

  task: Category = new Category(
  );
  id;

  name = new FormControl('');
  description = new FormControl('');





  constructor(private storage: TaskStorageService, private route: ActivatedRoute, private router: Router) {
  }


  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.storage.getCat(params.get('id')).subscribe((data: Category) => {
        this.task = data;
        this.name.setValue(this.task.name);
        this.description.setValue(this.task.description);
        this.id = this.task.id;
      });
    });
  }


  updateTask() {
    this.storage.editCategory(this.id, this.name.value,
      this.description.value,).subscribe(res => {

        this.router.navigate(['/category']);
      });
  }
}
