import { MergePropsComp } from "./MergePropsComp";
import { SplitPropsComp } from "./SplitPropsComp";

export function ComponentGroup3() {
  return (
    <>
      <MergePropsComp prop1="supplied prop1" />
      <SplitPropsComp
        a="supplied prop1"
        b={["frog", "dog", "cat"]}
        c={{ prop1: "prop1", prop2: "prop2" }}
        d={2}
      />
    </>
  );
}
