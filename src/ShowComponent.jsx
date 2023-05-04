import { Show } from "solid-js";

export function ShowComponent(props) {
  return (
    <div class="drawBorderWithPaddingAndMargin">
      <p>
        <strong>A Show Component that is {props.keyed}: &nbsp</strong>
        <Show
          when={props.predicate()}
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
    </div>
  );
}
