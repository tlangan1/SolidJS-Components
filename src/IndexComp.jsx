import { Index, createEffect, createSignal } from "solid-js";

export function IndexComp(props) {
  /* *** A solution using a render function WITH a switch statement *** */
    var renderComp = (item, index) => {
      switch (props.type) {
        case "li":
          return (
            <li>
              {" "}
              {index + 1}: {item()}{" "}
            </li>
          );
      }
    };

  
  /* *** A solution using a render function WITH a switch statement *** */
    return (
      <Index each={props.list} fallback={<div>...loading</div>}>
        {(item, index) => renderComp(item, index)}
      </Index>
    );
}
