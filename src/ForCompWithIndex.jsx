import { For } from "solid-js";

function createOption(item, index) {
  return <option value={index()}>{item}</option>;
}

export function ForCompWithIndex(props) {
  return <For each={props.list}>{createOption}</For>;
}
