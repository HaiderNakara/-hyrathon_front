import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { ProductAddComponent } from "./product-add/product-add.component";
import { ProductEditComponent } from "./product-edit/product-edit.component";
import { CategoryComponent } from './category/category.component';
import { CategoryEditComponent } from './category-edit/category-edit.component';
import { CategoryAddComponent } from './category-add/category-add.component';

const routes: Routes = [
  {
    path: 'category',
    component: CategoryComponent
  },
  {
    path: 'categoryAdd',
    component: CategoryAddComponent,
    data: { title: 'Add new task' }
  },

  {
    path: 'category/:id/edit',
    component: CategoryEditComponent,
    data: { title: 'Task edition' }
  },
  {
    path: 'product/:id',
    component: ProductComponent
  },
  {
    path: 'productAdd',
    component: ProductAddComponent,
    data: { title: 'Add new task' }
  },

  {
    path: 'product/:id/edit',
    component: ProductEditComponent,
    data: { title: 'Task edition' }
  },
  {
    path: '',
    redirectTo: '/product/1',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
