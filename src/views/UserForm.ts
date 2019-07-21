export class UserForm {
  constructor(public parent: Element) {}

  eventsMap(): { [key: string]: () => void } {
    return {
      "click:button": this.onButtonClick,
      "mouseenter:h1": this.onHeaderHover
    };
  }

  onHeaderHover(): void {
    console.log("Hooooover");
  }

  onButtonClick(): void {
    console.log("hello mister");
  }

  template(): string {
    return `
        <div>
            <h1>user</h1>
            <input type="text"/>
            <button>Click me!</button>
        </div>`;
  }

  bindEvents(fragment: DocumentFragment): void {
    const eventsMap = this.eventsMap();

    for (let eventKey in eventsMap) {
      const [eventName, selector] = eventKey.split(":");
      fragment
        .querySelectorAll(selector)
        .forEach(element =>
          element.addEventListener(eventName, eventsMap[eventKey])
        );
    }
  }

  render(): void {
    const templateElement = document.createElement("template");
    templateElement.innerHTML = this.template();

    this.bindEvents(templateElement.content);
    this.parent.append(templateElement.content);
  }
}
