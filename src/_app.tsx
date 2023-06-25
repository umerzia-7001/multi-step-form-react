import React from "react";
import Form from "./views/form";
import FormProvider from "./context";
import styles from "./app.module.scss";

function App() {
  return (
    <FormProvider>
      <Form />;
    </FormProvider>
  );
}

export default App;
