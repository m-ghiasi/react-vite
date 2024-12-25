import { useState } from "react";
import "./assets/global.css";
import Button from "./component/Button";
import Modal from "./component/Modal";

function App() {
  const [cmodal, setCmodal] = useState(false);
  const handelClick = () => {
    setCmodal(true);
  };
  const handelClose = () => {
    setCmodal(false);
  };


  return (
    <div>
      <Button onClick={handelClick} title="click me" />

      {cmodal ? (
        <Modal>
          {" "}
          <Button onClick={handelClose} title="close me" />
        </Modal>
      ) : (
        null
      )}
    </div>
  );
}

export default App;
