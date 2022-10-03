import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoComponent } from './todo/todo.component';
import { TaskAddComponent } from "./task-add/task-add.component";
import { TaskViewComponent } from "./task-view/task-view.component";
import { TaskEditComponent } from "./task-edit/task-edit.component";

const routes: Routes = [
  {
    path: 'tasks',
    component: TodoComponent
  },
  {
    path: 'tasks/add',
    component: TaskAddComponent,
    data: { title: 'Add new task' }
  },
  {
    path: 'tasks/:id',
    component: TaskViewComponent,
    data: { title: 'Task to do' }
  },
  {
    path: 'tasks/:id/edit',
    component: TaskEditComponent,
    data: { title: 'Task edition' }
  },
  {
    path: '',
    redirectTo: '/tasks',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
