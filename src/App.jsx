import logo from "./logo.svg";
import styles from "./App.module.css";
import {
  createMemo,
  createSignal,
  ErrorBoundary,
  Match,
  Show,
  Switch,
} from "solid-js";
import { Dynamic } from "solid-js/web";

import "./tom.css";

function App() {
  var [condition, setCondition] = createSignal(false);
  var toggle = () => setCondition(!condition());
  var [keyedValue, setKeyedValue] = createSignal("Tom");

  var [hideHeader, setHideHeader] = createSignal(true);

  function changeName() {
    if (keyedValue() == "Tom") setKeyedValue("Jim");
    else setKeyedValue("Tom");
  }

  var calculatedStatement = createMemo(() => (
    <span>
      {" "}
      condition is <span>{condition().toString()}</span> and keyedValue is{" "}
      <span>{keyedValue()}</span>{" "}
    </span>
  ));

  function createStatementForDynamic(loopy) {
    return (
      <span>
        condition is <span>{condition().toString()}</span> and keyedValue is{" "}
        <span>{keyedValue()}</span> {loopy.x}
      </span>
    );
  }

  var Broken = () => {
    throw new Error("Oh No!");
    return "Never getting here";
  };

  var MemoComp = () => (
    <p class="SwitchLabel">
      Created with use of memo in a Memo Component: {calculatedStatement}
    </p>
  );

  var SwitchComp = () => (
    <p>
      Created using a Switch Component:&nbsp
      <Switch
        fallback={
          <span class="SwitchLabel">
            condition is <span>false</span> and keyedValue is <span>Jim</span>
          </span>
        }
      >
        <Match when={condition() && keyedValue() == "Tom"}>
          <span>
            condition is <span>true</span> and keyedValue is <span>Tom</span>
          </span>
        </Match>
        <Match when={condition() && keyedValue() == "Jim"}>
          <span class="SwitchLabel">
            condition is <span>true</span> and keyedValue is <span>Jim</span>
          </span>
        </Match>
        <Match when={!condition() && keyedValue() == "Tom"}>
          <span>
            condition is <span>false</span> and keyedValue is <span>Tom</span>
          </span>
        </Match>
      </Switch>
    </p>
  );

  var DynamicComp = () => (
    <p>
      Created using the Dynamic component:&nbsp
      <Dynamic
        component={createStatementForDynamic}
        x="Langan"
        children={"Hello!"}
      ></Dynamic>
    </p>
  );

  var ShowComp1 = (props) => (
    <>
      {" "}
      <p>
        A Show Component that is {props.keyed}: &nbsp
        <Show
          when={props.test_value()}
          fallback={
            <span>
              The {props.value_name} is <span>{props.show_value}</span>
            </span>
          }
        >
          <span>
            The {props.value_name} is <span>{props.show_value}</span>
          </span>
        </Show>
      </p>
      <button onclick={props.toggle}>Toggle {props.value_name}</button>
    </>
  );
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
      <MemoComp />
      <SwitchComp />
      <DynamicComp />
      <ShowComp1
        keyed="not keyed"
        test_value={condition}
        value_name="condition"
        toggle={toggle}
        show_value={condition() ? "true" : "false"}
      />
      <ShowComp1
        keyed="keyed!"
        test_value={() => keyedValue == "Tom"}
        value_name="keyedValue"
        toggle={changeName}
        show_value={keyedValue()}
      />
      <ErrorBoundary
        fallback={(err, reset = () => alert("Clicked")) => (
          <div class="spacing" onClick={reset}>
            Error: {err.toString()}
          </div>
        )}
      >
        {" "}
        <Broken />
      </ErrorBoundary>
    </div>
  );
}

export default App;
