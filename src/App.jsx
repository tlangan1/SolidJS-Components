import logo from "./logo.svg";
import styles from "./App.module.css";
import { createMemo, createSignal } from "solid-js";

import "./tom.css";
import { ComponentGroup1 } from "./ComponentGroup1";
import { ComponentGroup2 } from "./ComponentGroup2";
import { ComponentGroup3 } from "./ComponentGroup3";
import { ComponentGroup4 } from "./ComponentGroup4";
import { ForCompWithIndex } from "./ForCompWithIndex";

function App() {
  var [hideHeader, setHideHeader] = createSignal(true);

  var [codeGroup] = createSignal([
    "Header",
    "Component Group 1",
    "Component Group 2",
    "Component Group 3",
    "Component Group 4",
  ]);

  var [selectedIndex, setSelectedIndex] = createSignal(0);

  /*****************************************/
  /* *** The App component starts here *** */
  /*****************************************/

  return (
    <div class={styles.App}>
      <select
        class="spacing"
        id="code_group"
        onChange={() => {
          setSelectedIndex(document.getElementById("code_group").value);
        }}
      >
        <ForCompWithIndex list={codeGroup()} type="option" />
      </select>
      <Switch fallback={<p>Oops! I must not have considered all the cases.</p>}>
        <Match when={codeGroup()[selectedIndex()] == "Header"}>
          <header class="center-content">
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
        </Match>
        <Match when={codeGroup()[selectedIndex()] == "Component Group 1"}>
          <ComponentGroup1 />
        </Match>
        <Match when={codeGroup()[selectedIndex()] == "Component Group 2"}>
          <ComponentGroup2 />
        </Match>
        <Match when={codeGroup()[selectedIndex()] == "Component Group 3"}>
          <ComponentGroup3 />
        </Match>
        <Match when={codeGroup()[selectedIndex()] == "Component Group 4"}>
          <ComponentGroup4 />
        </Match>
      </Switch>
    </div>
  );
}

export default App;
