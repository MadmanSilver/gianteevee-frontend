import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";

function App() {
  const items = ["New York", "San Francisco", "Tokyo"];

  const [selectedItem, setSelectedItem] = useState("Error: No city selected!");
  const [alertVisible, setAlertVisibility] = useState(false);
  const [alertContent, setAlertContent] = useState("Hello World!");

  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>{alertContent}</Alert>
      )}
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={setSelectedItem}
      />
      <Button
        color="secondary"
        onClick={() => {
          setAlertContent(selectedItem);
          setAlertVisibility(true);
        }}
      >
        Submit
      </Button>
    </div>
  );
}

export default App;
