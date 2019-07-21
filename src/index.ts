import { UserEdit } from "./views/UserEdit";
import { User } from "./models/User";

const user = User.buildUser({ name: "Christos", age: 27 });
const rootElement = document.getElementById("root");
if (rootElement) {
  const userEdit = new UserEdit(rootElement, user);
  userEdit.render();
  console.log(userEdit)
} else {
  throw new Error("Please add root element.");
}
