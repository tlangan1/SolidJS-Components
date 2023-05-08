import logo from "./logo.svg";
import styles from "./App.module.css";
import { createMemo, createSignal } from "solid-js";

import "./tom.css";
import { ComponentGroup1 } from "./ComponentGroup1";
import { ComponentGroup2 } from "./ComponentGroup2";

function App() {
  var [hideHeader, setHideHeader] = createSignal(true);

  var [codeGroups, setCurrentGroups] = createSignal([
    ["Component Group 1", "Component Group 2"],
    ["cat", "dog"],
  ]);
  var [codeGroupIndex, setCodeGroupIndex] = createSignal(0);

  var [indexList, setIndexList] = createSignal(
    ["item A 1", "item A 2", "item A 3"],
    ["item B 1", "item B 2", "item B 3"]
  );

  var [buttonFunctions, setButtonFunctions] = createSignal([
    {
      reverseFunction: reverseCodeGroups,
      changeFunction: changeCodeGroups,
      addFunction: addCodeGroup,
    },
    {
      reverseFunction: reverseIndexItems,
      changeFunction: changeCodeGroups,
      addFunction: addIndexItem,
    },
  ]);

  var currentCodeGroup = createMemo(() => codeGroups()[codeGroupIndex()]);
  var currentButtonFunctions = createMemo(
    () => buttonFunctions()[codeGroupIndex()]
  );

  var [selectedIndex, setSelectedIndex] = createSignal(0);

  function reverseCodeGroups() {
    setCurrentGroups(codeGroups().map(mapCodeGroup(codeGroupIndex())));
    setSelectedIndex(document.getElementById("code_group").selectedIndex);

    function mapCodeGroup(currentIndex) {
      return function (item, index) {
        if (index == currentIndex) {
          var reversedItemsArray = currentCodeGroup().toReversed();
          return reversedItemsArray;
        } else {
          return item;
        }
      };
    }
  }

  function reverseIndexItems() {
    setIndexList(indexList().toReversed);
  }

  function changeCodeGroups() {
    setCodeGroupIndex((codeGroupIndex() + 1) % currentCodeGroup().length);
  }

  function changeIndexItems() {
    setIndexList((indexList() + 1) % indexList().length);
  }

  function addCodeGroup() {
    setCurrentGroups([
      ["Component Group 1", "Component Group 1.5", "Component Group 2"],
      ["cat", "frog", "dog"],
    ]);
  }

  function addIndexItem() {
    setIndexList(
      ["item A 1", "item A 1.5", "item A 2", "item A 3"],
      ["item B 1", "item B 1.5", "item B 2", "item B 3"]
    );
  }

  var ForCompWithIndex = createMemo(() => (
    <For each={currentCodeGroup()}>{createOptions}</For>
  ));

  function createOptions(item, index) {
    return <option value={index()}>{item}</option>;
  }

  /*****************************************/
  console.log(codeGroups()[0][0]);
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
      <div class="drawBorderWithPaddingAndMargin">
        <p>
          When using these buttons view the select element in the Elements tab
          and watch what happens to understand what SolidJS is doing. It is very
          efficient!
        </p>
        <button
          class="spacing"
          onclick={() => currentButtonFunctions().reverseFunction()}
        >
          Reverse List
        </button>
        <button
          class="spacing"
          onclick={() => currentButtonFunctions().changeFunction()}
        >
          Change List
        </button>
        <button
          class="spacing"
          onclick={() => currentButtonFunctions().addFunction()}
        >
          Add Item
        </button>
      </div>
      <select
        id="code_group"
        onChange={() => {
          setSelectedIndex(document.getElementById("code_group").value);
        }}
      >
        <ForCompWithIndex />
      </select>
      <Switch fallback={<p>Oops! I must not have considered all the cases.</p>}>
        {/* <Match when={testOption()}> */}
        <Match
          when={currentCodeGroup()[selectedIndex()] == "Component Group 1"}
        >
          <ComponentGroup1 />
        </Match>
        <Match
          when={currentCodeGroup()[selectedIndex()] == "Component Group 2"}
        >
          <ComponentGroup2 list={indexList} />
        </Match>
      </Switch>
    </div>
  );
}

export default App;
