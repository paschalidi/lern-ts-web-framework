import { UserForm } from "./views/UserForm";
import { User } from "./models/User";

const user = User.buildUser({ name: "Christos", age: 27 });
const rootElement = document.getElementById("root");
if (rootElement) {
  const form = new UserForm(rootElement, user);
  form.render();
} else {
  throw new Error("Please add root element.");
}
