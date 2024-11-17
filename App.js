import React from "react";
import ContactForm from "./components/ContactForm";
import ContactTable from "./components/ContactTable";

function App() {
  return (
    <div>
      <h1>Contact Management</h1>
      <ContactForm onSave={() => window.location.reload()} />
      <ContactTable />
    </div>
  );
}

export default App;
