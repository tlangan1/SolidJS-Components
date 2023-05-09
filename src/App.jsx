import logo from "./logo.svg";
import styles from "./App.module.css";
import { createMemo, createSignal } from "solid-js";

import "./tom.css";
import { ComponentGroup1 } from "./ComponentGroup1";
import { ComponentGroup2 } from "./ComponentGroup2";
import { ForCompWithIndex } from "./ForCompWithIndex";

function App() {
  var [hideHeader, setHideHeader] = createSignal(true);

  var [codeGroup] = createSignal(["Component Group 1", "Component Group 2"]);

  var [selectedIndex, setSelectedIndex] = createSignal(0);

  /*****************************************/
  /* *** The App component starts here *** */
  /*****************************************/

  return (
    <div class={styles.App}>
      <button class="spacing" onClick={() => setHideHeader(!hideHeader())}>
        {hideHeader() ? "Show Header" : "Hide Header"}
      </button>
      <header class={styles.header} classList={{ hideHeader: hideHeader() }}>
        <img src={logo} class={styles.logo} alt="logo" />
        <p>
          Edit <code>src/App.jsx</code> and save to reload.
        </p>
        <a
          class={styles.link}
          href="https://github.com/solidjs/solid"
          target="_blank"
          rel="noopener noreferrer"
        ></a>
        Learn Solid
      </header>
      <select
        id="code_group"
        onChange={() => {
          setSelectedIndex(document.getElementById("code_group").value);
        }}
      >
        <ForCompWithIndex list={codeGroup()} />
      </select>
      <Switch fallback={<p>Oops! I must not have considered all the cases.</p>}>
        {/* <Match when={testOption()}> */}
        <Match when={codeGroup()[selectedIndex()] == "Component Group 1"}>
          <ComponentGroup1 />
        </Match>
        <Match when={codeGroup()[selectedIndex()] == "Component Group 2"}>
          <ComponentGroup2 />
        </Match>
      </Switch>
    </div>
  );
}

export default App;
