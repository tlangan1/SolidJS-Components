import { OnCleanupComp } from "./OnCleanupComp";
import { OnMountComp } from "./OnMountComp";

export function LifeCycle() {
  return (
    <>
      <OnCleanupComp />
      <OnMountComp />
    </>
  );
}
