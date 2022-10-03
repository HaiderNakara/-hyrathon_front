import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Todo as Task } from "../app/shared/models/task.model";
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class TaskStorageService {
  tasks: Task[] = [];
  initialized: boolean = false;
  constructor(
    private http: HttpClient
  ) { }
  createTodo(title: string, note: string) {
    return this.http.post(`${environment.backendUrl}`, {
      title,
      note
    }).subscribe(res => {
      console.log('Created');
    }
    );
  }
  getToDos(): Observable<Task[]> {
    return this.http.get<Task[]>(environment.backendUrl);
  }
  get(id: string): Observable<Task> {
    return this.http.get<Task>(`${environment.backendUrl}/${id}`);
  }

  editTodo(id: string, title: string, note: string) {
    console.log(id);

    let editUrl = `${environment.backendUrl}/${id}`
    return this.http.patch(editUrl, {
      title,
      note
    })
  }
  deleteTodo(id: string): Observable<any> {
    let deleteUrl = `${environment.backendUrl}/${id}`
    return this.http.delete(deleteUrl);
  }
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}
