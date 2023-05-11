import { children } from "solid-js";

export function ChildrenComp(props) {
  function appendChildrenNodes() {
    var x = props.children;
    document.getElementById("children_wrapper2").appendChild(x);
  }

  function appendResolvedNodes(where) {
    if (where == "above")
      document.getElementById("children_wrapper2").appendChild(resolved());
    else document.getElementById("children_wrapper3").appendChild(resolved());
  }

  var resolved = children(() => props.children);

  return (
    <div class="drawBorderWithPaddingAndMargin">
      <div id="children_wrapper1">
        <p class="drawBorderWithPaddingAndMargin">
          This wrapper is for props.children
        </p>
        {props.children}
      </div>
      <p>You can append as many copies of props.children as you wish.</p>
      <button class="spacing" onclick={appendChildrenNodes}>
        Append props.children
      </button>
      <div id="children_wrapper2" class="drawBorderWithPaddingAndMargin">
        <p>
          This wrapper can have as many copies of props.children as you like but
          it can contain only one instance of "resolved". If this wrapper
          contains the "resolved" instance than it can not appear in the
          container BELOW.
        </p>
      </div>
      <button class="spacing" onclick={() => appendResolvedNodes("above")}>
        Append resolved Above
      </button>
      <button onclick={() => appendResolvedNodes("below")}>
        Append resolved Below
      </button>
      <div id="children_wrapper3" class="drawBorderWithPaddingAndMargin">
        {" "}
        <p>
          If this wrapper contains the "resolved" instance than it can not
          appear in the container ABOVE.
        </p>
      </div>
    </div>
  );
}
