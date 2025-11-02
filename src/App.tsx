
import { type JSX } from "react";
// import "./App.css";
import TestingGround from "./components/testing-ground";
import ResponsiveStage from "./components/stage/stage";
import Refresh from "./hooks/refresh-state";
import computer from "cpu8-simulator";


function App(): JSX.Element {
  const [refreshState] = Refresh();

  const handleTick = () => {
    computer.tick(2);
    refreshState();
  }

  return (
    <article>
      <section>
        <button
          style={{ color: 'white', borderColor: 'white', margin: 12 }}
          onClick={handleTick}
        >
          TICK
        </button>
      </section>

      <section>
        <ResponsiveStage />
      </section>
      <section>
        <TestingGround />
      </section>

    </article>
  );
}

export default App;
