import { Index, createSignal } from "solid-js";

export function IndexComp(props) {
  var list = props.list;
  var [listWithoutKeys, setListWithoutKeys] = createSignal(list);

  return (
    <ul>
      <Index each={listWithoutKeys()} fallback={<div>...loading</div>}>
        {(item, index) => (
          <li>
            {index + 1}: {item()}
          </li>
        )}
      </Index>
    </ul>
  );
}
