import { Children, useState } from "react";
import Button from "./components/Button";
import DismissableAlert from "./components/Dismissable Alert";

const handleClick = () => {
  // SetDismissableAlertVisible(true);
};
function App() {
  const [DismissableAlertVisible, SetDismissableAlertVisible] = useState(false);
  return (
    <div>
      {DismissableAlertVisible && (
        <DismissableAlert onClose={() => SetDismissableAlertVisible(false)}>
          Alert
        </DismissableAlert>
      )}
      <Button
        color="secondary"
        onClick={() => SetDismissableAlertVisible(true)}
      >
        Button
      </Button>
    </div>
  );
}
export default App;
