export class Recipe {
  public done: boolean = false;
  constructor(public name: string, public ingredients: string[], public instructions: string[]) { }
}
