import { Component, OnInit } from '@angular/core';
import { TaskStorageService } from "../task-storage.service";
import { Todo } from "../shared/models/task.model";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  tasks: Todo[];

  constructor(private storage: TaskStorageService) { }

  ngOnInit(): void {
    this.storage.getToDos().subscribe((data: Todo[]) => {
      this.tasks = data;
    });
  }
  delete(id): void {
    this.storage.deleteTodo(id).subscribe(
      () => {
        this.ngOnInit();
      }
    )
  }
}
