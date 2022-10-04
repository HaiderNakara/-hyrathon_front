import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Category, Product } from "./shared/models/product.model";
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class TaskStorageService {
  products: Product[] = [];
  productUrl = environment.backendUrl + '/products';
  categories: Category[] = [];
  categoryUrl = environment.backendUrl + '/categories';

  initialized: boolean = false;
  constructor(
    private http: HttpClient
  ) { }

  createProduct(name: string,
    description: string,
    price: number,
    category: string) {
    return this.http.post(this.productUrl, {
      name,
      description,
      price,
      category

    }).subscribe(res => {
      console.log('Created');
    }
    );
  }
  getProduct(page: number): Observable<Product[]> {
    //  add page in query param
    return this.http.get<Product[]>(this.productUrl + '?page=' + page);
  }
  get(id: string): Observable<Product> {
    return this.http.get<Product>(`${this.productUrl}/${id}`);
  }

  editProduct(id: string, name: string,
    description: string,
    price: number,
    category: string) {

    let editUrl = `${this.productUrl}/${id}`
    return this.http.patch(editUrl, {
      name,
      description,
      price,
      category
    })
  }
  deleteProduct(id: string): Observable<any> {
    let deleteUrl = `${this.productUrl}/${id}`
    return this.http.delete(deleteUrl);
  }

  createCategory(name: string,
    description: string) {
    return this.http.post(this.categoryUrl, {
      name,
      description
    }).subscribe(res => {
      console.log('Created');
    }
    );
  }
  getCategory(): Observable<Category[]> {
    return this.http.get<Category[]>(this.categoryUrl);
  }
  getCat(id: string): Observable<Category> {
    return this.http.get<Category>(`${this.categoryUrl}/${id}`);
  }
  editCategory(id: string, name: string,
    description: string) {

    let editUrl = `${this.categoryUrl}/${id}`
    return this.http.patch(editUrl, {
      name,
      description
    })
  }
  deleteCategory(id: string): Observable<any> {
    let deleteUrl = `${this.categoryUrl}/${id}`
    return this.http.delete(deleteUrl);
  }

}
