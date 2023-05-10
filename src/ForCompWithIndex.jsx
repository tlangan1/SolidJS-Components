import { For } from "solid-js";

// export function ForCompWithIndex(props) {
//   return <For each={props.list}>{createOption}</For>;
// }

export function ForCompWithIndex(props) {
  /* *** A solution using a render function WITH a switch statement *** */
  var renderComp = (item, index) => {
    switch (props.type) {
      case "option":
        return createOption(item, index);
      case "li":
        return createLi(item, index);
    }
  };

  function createOption(item, index) {
    return <option value={index()}>{item}</option>;
  }

  function createLi(item, index) {
    return (
      <li>
        {index() + 1}: {item}
      </li>
    );
  }

  return <For each={props.list}>{renderComp}</For>;
}
