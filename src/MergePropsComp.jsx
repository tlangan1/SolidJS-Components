import { mergeProps } from "solid-js";

export function MergePropsComp(props) {
  var newProps1 = mergeProps(props, { prop1: "local prop1" });
  var newProps2 = mergeProps({ prop1: "local prop1" }, props);
  return (
    <div class="drawBorderWithPaddingAndMargin">
      <div class="center-content">
        <strong>A Merge Props Component: &nbsp</strong>
      </div>
      <p>
        This example illustrates how the mergeProps function merges the
        arguments that are passed to it. The properties supplied in the
        arguments are appended to the resultant object in the reverse order in
        which the arguments are supplied in the function call. If a property is
        encountered more than once the first one appended wins. This function
        takes any number of arguments.
      </p>
      <strong>
        As a general rule of thumb you would usually pass the props object as
        the last argument.
      </strong>
      <p>
        <span style="color:red">{newProps1.prop1}</span>: In this case
        mergeProps has the incoming props object as the first parameter. Hence,
        when the last_name is merged locally as a second argument the last_name
        property being passed in on the props object is being ignored.
      </p>
      <p>
        <span style="color:limegreen">{newProps2.prop1}</span>: In this case
        mergeProps has the incoming props object as the last parameter. Hence,
        when the last_name is merged locally it is being ignored.
      </p>
    </div>
  );
}
