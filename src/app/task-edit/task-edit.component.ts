import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Todo } from "../shared/models/task.model";
import { TaskStorageService } from "../task-storage.service";
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-task-edit',
  templateUrl: './task-edit.component.html',
  styleUrls: ['./task-edit.component.css']
})
export class TaskEditComponent implements OnInit {

  task: Todo = new Todo();
  id;

  title = new FormControl('');
  note = new FormControl('');


  constructor(private storage: TaskStorageService, private route: ActivatedRoute, private router: Router) {
  }


  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.storage.get(params.get('id')).subscribe((data: Todo) => {
        this.task = data;
        this.title.setValue(this.task.title);
        this.note.setValue(this.task.note);
        this.id = this.task.id;
      });
    });
  }


  updateTask() {
    this.storage.editTodo(this.id, this.title.value, this.note.value).subscribe(res => {

      this.router.navigate(['/tasks'])
    });
  }
}
