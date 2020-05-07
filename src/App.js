import React, { Suspense } from "react";
import "./App.css";
import ErrorBoundary from "./ErrorBoundary";
import TestWidget from "./TestWidget";
import FancyButton from "./FancyButton";
import Glossary from "./Glossary";
import Chosen from "./Chosen";
const Home = React.lazy(() => import("./Home"));

function App() {
  const ref = React.createRef();
  return (
    <div className="App-header">
      <Suspense fallback={<div>Loading...</div>}>
        <Home />
        <ErrorBoundary>
          <TestWidget />
        </ErrorBoundary>
        <FancyButton ref={ref} />
        <Glossary />
      </Suspense>
      <Chosen onChange={(value) => console.log(value)}>
        <option>vanilla</option>
        <option>chocolate</option>
        <option>strawberry</option>
      </Chosen>
    </div>
  );
}

export default App;
