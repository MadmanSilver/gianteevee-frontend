import { useState } from "react";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const pages = ["Home", "Features", "Docs"];

  const [alertVisible, setAlertVisibility] = useState(false);
  const [alertContent, setAlertContent] = useState("Hello World!");

  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>{alertContent}</Alert>
      )}

      <Navbar pages={pages} activePage={pages[0]} />
    </div>
  );
}

export default App;
