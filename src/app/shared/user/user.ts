export class User {
  public email: string;
  public password: string;

  constructor(model?: any) {
    for (let key in model) {
      this[key] = model[key];
    }
  }
}