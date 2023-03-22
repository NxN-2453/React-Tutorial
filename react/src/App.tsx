import { Children } from "react";
import Button from "./components/Button";

const handleClick = () => {
  console.log("clicked");
};
function App() {
  return (
    <div>
      <Button color="secondary" onClick={handleClick}>Button</Button>
    </div>
  );
}
export default App;
