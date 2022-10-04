export class Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: Category
  constructor(name: string = '', description: string = '', price: number = 0, category: Category = new Category()) {
    this.name = name;
    this.description = description;
    this.price = price;
    this.category = category;
  }
}

export class Category {
  _id: string;
  id: string;
  name: string;
  description: string;
  constructor(name: string = '', description: string = '', id: string = '', _id: string = '') {
    this.name = name;
    this.description = description;
    this.id = id;
    this._id = _id;
  }
}