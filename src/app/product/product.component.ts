import { Component, OnInit } from '@angular/core';
import { TaskStorageService } from "../task-storage.service";
import { Product } from "../shared/models/product.model";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-todo',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  page: number
  tasks: Product[] = [];
  nextPage: string;
  prevPage: string;


  constructor(private storage: TaskStorageService,
    private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.page = +params.get('id');
      this.nextPage = "/product/" + (this.page + 1).toString();
      this.prevPage = "/product/" + (this.page - 1).toString();
      this.storage.getProduct(this.page).subscribe((data: Product[]) => {
        this.tasks = data;
      });
    });
  }
  deleteTask(id): void {
    this.storage.deleteProduct(id).subscribe(
      () => {
        this.ngOnInit();
      }
    )
  }


}
