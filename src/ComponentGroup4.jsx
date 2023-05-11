import { createSignal } from "solid-js";
import { ChildrenComp } from "./ChildrenComp";

export function ComponentGroup4() {
  var [count, setCount] = createSignal(0);
  return (
    <>
      <button class="spacing" onClick={() => setCount(count() + 1)}>
        Increment
      </button>
      <ChildrenComp>
        <div class="bright-background">
          <p>
            This is the content between the opening and closing tags of
            ChildrenComp in the parent component. It will be passed to
            ChildrenComp in props.children {count()}
          </p>
        </div>
      </ChildrenComp>
    </>
  );
}
