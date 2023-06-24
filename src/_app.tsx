import React from "react";
import Form from "./views/form";
import styles from "./app.module.scss";

function App() {
  return (
    <div className={styles.app}>
      <h1>Multi-Step Form</h1>
      <Form />
    </div>
  );
}

export default App;
