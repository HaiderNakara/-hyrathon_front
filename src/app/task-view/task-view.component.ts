import { Component, OnInit } from '@angular/core';
import { Todo } from "../shared/models/task.model";
import { TaskStorageService } from "../task-storage.service";
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-task-view',
  templateUrl: './task-view.component.html',
  styleUrls: ['./task-view.component.css']
})
export class TaskViewComponent implements OnInit {

  task: Todo = new Todo();

  constructor(private storage: TaskStorageService, private route: ActivatedRoute, private router: Router) {
  }


  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.storage.get(params.get('id')).subscribe((data: Todo) => {
        this.task = data;
      });
    });
  }


  delete(id): void {
    this.storage.deleteTodo(this.task.id).subscribe(
      () => {
        this.router.navigate(['/tasks'])
      }
    )
  }
}
