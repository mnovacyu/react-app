// App.tsx is consuming the Alert.tsx component, allowing it to be reusable
import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);

  let items = ["San Francisco", "Tokyo"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>Hello World</Alert> // set visibilty prop to false on click
      )}
      <ListGroup
        items={items}
        heading={"Cities"}
        onSelectItem={handleSelectItem}
      />
      {/* sets visibilty to true when button is clicked and rerenders component and all its children */}
      <Button color="primary" onClick={() => setAlertVisibility(true)}>
        Click Here
      </Button>
    </div>
  );
}

export default App;
