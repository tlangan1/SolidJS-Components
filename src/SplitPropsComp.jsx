import { splitProps } from "solid-js";

export function SplitPropsComp(props) {
  var [props_a_and_b, props_c] = splitProps(props, ["a", "b"], ["c"]);

  console.log("props_a_and_b:", props_a_and_b);
  console.log("props_c", props_c);

  return (
    <div class="drawBorderWithPaddingAndMargin">
      <div class="center-content">
        <strong>A Split Props Component: &nbsp</strong>
      </div>
      <p>See the console for the values of props_a_and_b and props_c. </p>
      <p>
        Note that there are two 'Unrecognized value. Skipped inserting...'
        warnings but this seems to be an issue with SolidJS. See{" "}
        <a href="https://github.com/solidjs/solid/discussions/771">this</a>.{" "}
      </p>
    </div>
  );
}
