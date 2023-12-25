import { useState } from "react";
import TabButton from "./components/TabButton";
import CoreConcept from "./components/coreConcept/CoreConcepts";
import Header from "./components/header/Header";
import CoreConceptContainer from "./components/coreConcept/CoreConceptContainer";
import TabButtonContainer from "./components/TabButtonContainer";
function App() {
  return (
    <div>
      <Header />
      <main>
        <CoreConceptContainer />
        <TabButtonContainer />
      </main>
    </div>
  );
}

export default App;
