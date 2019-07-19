import { User } from "./models/User";

const user = User.buildUser({ id: 1, name: "newer name", age: 0 });

user.on("change", () => {
  console.log("Event Change triggered");
});

console.log(user.fetch());
