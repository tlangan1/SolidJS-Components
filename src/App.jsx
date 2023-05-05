import logo from "./logo.svg";
import styles from "./App.module.css";
import { createSignal } from "solid-js";

import { SwitchComponent } from "./SwitchComponent";

import "./tom.css";
import { ComponentGroup1 } from "./ComponentGroup1";

function App() {
  var [hideHeader, setHideHeader] = createSignal(true);
  var [codeGroups, setCodeGroups] = createSignal([
    "Component Group 1",
    "Component Group 2",
  ]);
  var [selectedCodeGroup, setSelectedCodeGroup] = createSignal(codeGroups()[0]);
  // document.getElementById("code_group").value;

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
        onChange={() =>
          setSelectedCodeGroup(document.getElementById("code_group").value)
        }
      >
        <For each={codeGroups()}>{(item) => <option>{item}</option>}</For>
      </select>
      <Switch fallback={<p>Oops! I must not have considered all the cases.</p>}>
        <Match when={selectedCodeGroup() == "Component Group 1"}>
          <ComponentGroup1 />
        </Match>
      </Switch>
    </div>
  );
}

export default App;
