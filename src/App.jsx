import logo from "./logo.svg";
import styles from "./App.module.css";
import { createMemo, createSignal, ErrorBoundary } from "solid-js";

import { SwitchComponent } from "./SwitchComponent";
import { ShowComponent } from "./ShowComponent";
import { DynamicComponent } from "./DynamicComponent";

import "./tom.css";

function App() {
  var [flag, setFlag] = createSignal(false);
  var toggle = () => setFlag(!flag());
  var [keyedValue, setKeyedValue] = createSignal("Tom");

  var [hideHeader, setHideHeader] = createSignal(true);

  function changeName() {
    if (keyedValue() == "Tom") setKeyedValue("Jim");
    else setKeyedValue("Tom");
  }

  var calculatedStatement = createMemo(() => (
    <span>
      {" "}
      condition is <span>{flag().toString()}</span> and keyedValue is{" "}
      <span>{keyedValue()}</span>{" "}
    </span>
  ));

  var Broken = () => {
    throw new Error("Oh No!");
    return "Never getting here";
  };

  var MemoComp = () => (
    <p class="colorLabel drawBorderWithPaddingAndMargin">
      <strong>Created with use of memo in a Memo Component:</strong>{" "}
      {calculatedStatement}
    </p>
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
      <SwitchComponent />
      <MemoComp />
      <DynamicComponent flag={flag()} keyedValue={keyedValue()} />
      <ShowComponent
        keyed="not keyed"
        predicate={flag}
        value_name="condition"
        toggle={toggle}
        show_value={flag() ? "true" : "false"}
      />
      <ShowComponent
        keyed="keyed!"
        predicate={() => keyedValue == "Tom"}
        value_name="keyedValue"
        toggle={changeName}
        show_value={keyedValue()}
      />
      <ErrorBoundary
        fallback={(err, reset = () => alert("Clicked")) => (
          <div class="drawBorderWithPaddingAndMargin" onClick={reset}>
            <strong>An ErrorBoundary component:&nbsp</strong>
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
