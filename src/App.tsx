
import { type JSX } from "react";
// import "./App.css";

import TestingGround from "./components/testing-ground";
import StageCPU from "./components/stage/stage";
import ResponsiveStage from "./components/stage/stage";


function App(): JSX.Element {

  return (
    <article>
      <section>
        <TestingGround />
      </section>
      <section>
        <ResponsiveStage />
      </section>

    </article>
  );
}

export default App;
