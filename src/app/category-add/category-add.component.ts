import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TaskStorageService } from "../task-storage.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-task-add',
  templateUrl: './category-add.component.html',
  styleUrls: ['./category-add.component.css']
})
export class CategoryAddComponent {
  name = new FormControl('');
  description = new FormControl('');

  constructor(private storage: TaskStorageService, private router: Router) {
  }
  createTask() {
    this.storage.createCategory(
      this.name.value, this.description.value,
    );
    this.router.navigate(['/category']);
  }
}
