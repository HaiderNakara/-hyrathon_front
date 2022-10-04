import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TaskStorageService } from "../task-storage.service";
import { Router } from '@angular/router';
import { Category } from '../shared/models/product.model';

@Component({
  selector: 'app-task-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {
  categoriesList: Category[]
  name = new FormControl('');
  description = new FormControl('');
  price = new FormControl(0);
  category = new FormControl('');

  constructor(private storage: TaskStorageService, private router: Router) {
  }
  ngOnInit() {
    return this.storage.getCategory().subscribe((data: Category[]) => {
      this.categoriesList = data;
    });
  }
  createTask() {
    this.storage.createProduct(
      this.name.value,
      this.description.value,
      this.price.value,
      this.category.value

    );
    this.router.navigate(['/']);
  }

}
