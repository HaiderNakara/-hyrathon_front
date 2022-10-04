import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Category, Product } from "../shared/models/product.model";
import { TaskStorageService } from "../task-storage.service";
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-task-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  task: Product = new Product(
    '', '', 0, {
    id: '',
    _id: '',
    name: '',
    description: ''

  }
  );
  id;
  categoriesList: Category[]
  name = new FormControl('');
  description = new FormControl('');
  price = new FormControl(0);
  category = new FormControl('');


  constructor(private storage: TaskStorageService, private route: ActivatedRoute, private router: Router) {
  }


  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.storage.getCategory().subscribe((data: Category[]) => {
        this.categoriesList = data;
      });
      this.storage.get(params.get('id')).subscribe((data: Product) => {
        this.task = data;
        this.name.setValue(data.name);
        this.description.setValue(data.description);
        this.price.setValue(data.price);
        this.category.setValue(data.category._id);

        this.id = this.task.id;
      });
    });
  }


  updateTask() {
    this.storage.editProduct(this.id, this.name.value, this.description.value, this.price.value, this.category.value).subscribe(res => {

      this.router.navigate(['/product/1'])
    });
  }
}
