import { View } from "./View";
import { User, UserProps } from "../models/User";

export class UserForm extends View<User, UserProps> {
  eventsMap(): { [key: string]: () => void } {
    return {
      "click:#set-name": this.onSetName,
      "click:#set-age": this.onSetRandomAge
    };
  }

  onSetName = (): void => {
    const input = <HTMLInputElement>(
      this.parent.querySelector("#input-with-name")
    );

    if (input) {
      const name = input.value;
      if (name.length === 0) {
        this._addErrorForm();
      } else {
        this._clearErrorForm();
        this.model.set({ name });
      }
    }
  };
  onSetRandomAge = (): void => {
    this.model.setRandomAge();
  };

  template(): string {
    return `
        <div>
            <h1>user</h1>
            <div>name: ${this.model.get("name")}</div>
            <div>age: ${this.model.get("age")}</div>
            <input id="input-with-name" type="text" value="" placeholder="${this.model.get(
              "name"
            )}"/>
            <button id="set-name">Change Name</button>
            <button id="set-age">Set Random Age</button>
            <div class="error"></div>
        </div>`;
  }

  _addErrorForm = (): void => {
    const errorNode = this.parent.querySelector(".error");
    if (errorNode) {
      errorNode.innerHTML = "";
      errorNode.append(`Please add some text ;)`);
    }
  };

  _clearErrorForm = (): void => {
    const errorNode = this.parent.querySelector(".error");
    if (errorNode) {
      errorNode.innerHTML = "";
    }
  };
}
