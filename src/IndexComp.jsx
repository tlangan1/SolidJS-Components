import { Index, createEffect, createSignal } from "solid-js";

export function IndexComp(props) {
  return (
    <ul>
      <Index each={props.list} fallback={<div>...loading</div>}>
        {(item, index) => (
          <li>
            {index + 1}: {item()}
          </li>
        )}
      </Index>
    </ul>
  );
}
