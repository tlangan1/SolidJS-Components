import { createMemo, createSignal, ErrorBoundary } from "solid-js";

import { SwitchComponent } from "./SwitchComponent";
import { ShowComponent } from "./ShowComponent";
import { DynamicComponent } from "./DynamicComponent";

export function ComponentGroup1() {
  var [flag, setFlag] = createSignal(false);
  var toggle = () => setFlag(!flag());
  var [keyedValue, setKeyedValue] = createSignal("Tom");

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

  return (
    <>
      <SwitchComponent name="random_string" />
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
    </>
  );
}
