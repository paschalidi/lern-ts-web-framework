import { Eventing } from "./Eventing";
import axios, { AxiosResponse } from "axios";

export class Collection<T, K> {
  models: T[] = [];
  events: Eventing = new Eventing();

  constructor(public rootUrl: string, public deserialize: (json: K) => T) {}

  get trigger() {
    return this.events.trigger;
  }

  get on() {
    return this.events.on;
  }

  fetch(): void {
    axios.get(this.rootUrl).then((response: AxiosResponse) => {
      response.data.forEach((value: K) => {
        this.models.push(this.deserialize(value));
      });
    });

    this.trigger("change");
  }
}
