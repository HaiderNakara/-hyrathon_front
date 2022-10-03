export class Todo {
  id: string;
  title: string;
  note: string;

  constructor(title: string = '', note: string = '', id = '') {
    this.title = title;
    this.note = note;
    this.id = id;
  }
}
