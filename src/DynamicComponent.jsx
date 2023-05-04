import { Dynamic } from "solid-js/web";

export function DynamicComponent(props) {
  function createStatementForDynamic(loopy) {
    return (
      <span>
        condition is <span>{props.flag.toString()}</span> and keyedValue is{" "}
        <span>{props.keyedValue}</span> {loopy.x}
      </span>
    );
  }

  return (
    <p class="drawBorderWithPaddingAndMargin">
      <strong>Created using the Dynamic component:&nbsp</strong>
      <Dynamic
        component={createStatementForDynamic}
        x="Langan"
        children={"Hello!"}
      ></Dynamic>
    </p>
  );
}
