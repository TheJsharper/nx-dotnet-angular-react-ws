export class Todo {
  public id: number;
  public content: string;
  public completion: boolean;

  constructor(content: string) {
    this.id = Math.random();
    this.content = `${content.charAt(0).toLowerCase()}${content.slice(1)}`;
    this.completion = false;
  }
}
