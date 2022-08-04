import { useForm } from "react-hook-form";
import Header from "./ui/Header/Header";

let renderedCount = 0;
export const App = () => {

  renderedCount++;

  return (
    <>
      <Header renderedCount={renderedCount}/>
      <h1>Login</h1>
      <form>
        <input name='firstName' placeholder="First name" />
        <input name='hobbies' placeholder="i.e. coding every day 🤩" />
        <input name='favourite series' placeholder="Breaking bad" />
        <input type="submit" />
      </form>
    </>
  );
}