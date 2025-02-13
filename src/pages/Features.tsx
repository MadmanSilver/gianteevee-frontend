import { useState } from "react";
import Alert from "../components/Alert";
import LandingNavbar from "../components/LandingNavbar";

function Features() {
  const pages = ["Home", "Features", "Docs"];

  const [alertVisible, setAlertVisibility] = useState(false);
  const [alertContent, setAlertContent] = useState("Hello World!");

  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>{alertContent}</Alert>
      )}

      <LandingNavbar pages={pages} activePage={pages[1]} />
    </div>
  );
}

export default Features;
