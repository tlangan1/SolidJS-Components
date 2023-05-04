"use strict";

import { createSignal, Match, Switch } from "solid-js";

export function SwitchComponent() {
  var [randomString, setRandomString] = createSignal("");

  function updateInput() {
    setRandomString(document.getElementById("random_string").value);
  }

  return (
    <div class="switch_component drawBorderWithPaddingAndMargin">
      <div>
        <strong>Switch Component</strong>
      </div>
      <input
        type="text"
        name="random_string"
        id="random_string"
        value={randomString()}
        onInput={updateInput}
      />
      <p>
        <Switch fallback="Enter some text in the text box above and see what happens...">
          <Match when={randomString().length == 1}>
            You have entered a singe character.
          </Match>
          <Match when={randomString().length > 1 && randomString().length <= 5}>
            You have entered a string that contains 1 to 5 characters.
          </Match>
          <Match
            when={randomString().length > 5 && randomString().length <= 10}
          >
            You have entered a string that contains 6 to 10 characters.
          </Match>
          <Match when={randomString().length > 10}>
            You have entered a string that contains more than 10 characters.
          </Match>
        </Switch>
      </p>
    </div>
  );
}
