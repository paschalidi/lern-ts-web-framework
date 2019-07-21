import { View } from "./View";
import { User, UserProps } from "../models/User";

export class UserShow extends View<User, UserProps> {
  template(): string {
    return `
        <div>
            <h1>user</h1>
            <div>name: ${this.model.get("name")}</div>
            <div>age: ${this.model.get("age")}</div>
        </div>`;
  }
}
