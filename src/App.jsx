import styles from "./App.module.css";
import { createSignal } from "solid-js";

import "./tom.css";
import { ForCompWithIndex } from "./ForCompWithIndex";

import { Introduction } from "./Introduction";
import { ComponentGroup1 } from "./ComponentGroup1";
import { ComponentGroup2 } from "./ComponentGroup2";
import { MergeAndSplitProps } from "./MergeAndSplitProps";
import { Children } from "./Children";
import { LifeCycle } from "./LifeCycle";
import { CreateResourceComp } from "./CreateResourceComp";

function App() {
  var [hideHeader, setHideHeader] = createSignal(true);

  var [codeGroup] = createSignal([
    "Introduction",
    "Component Group 1",
    "Component Group 2",
    "Merge And Split Props",
    "Children",
    "Life Cycle",
    "Create Resource",
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
        <Match when={codeGroup()[selectedIndex()] == "Introduction"}>
          <Introduction />
        </Match>
        <Match when={codeGroup()[selectedIndex()] == "Component Group 1"}>
          <ComponentGroup1 />
        </Match>
        <Match when={codeGroup()[selectedIndex()] == "Component Group 2"}>
          <ComponentGroup2 />
        </Match>
        <Match when={codeGroup()[selectedIndex()] == "Merge And Split Props"}>
          <MergeAndSplitProps />
        </Match>
        <Match when={codeGroup()[selectedIndex()] == "Children"}>
          <Children />
        </Match>
        <Match when={codeGroup()[selectedIndex()] == "Life Cycle"}>
          <LifeCycle />
        </Match>
        <Match when={codeGroup()[selectedIndex()] == "Create Resource"}>
          <CreateResourceComp />
        </Match>
      </Switch>
    </div>
  );
}

export default App;
