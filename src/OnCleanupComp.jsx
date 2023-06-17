import { createSignal, onCleanup, createEffect } from "solid-js";

export function OnCleanupComp() {
  var [count, setCount] = createSignal(0);
  var [cleanupCount, setCleanupCount] = createSignal(0);

  createEffect(interval);

  return (
    <div>
      <p>Interval count: {count()}</p>
      <p>Cleanup count: {cleanupCount()}</p>
    </div>
  );

  function interval() {
    // If you comment this out the cleanup does not occur
    // This is because count is changing and interval is
    // passed to createEffect above. when count changes, SolidJS
    // sees that ane re-executes interval() which creates a new
    // timer and causes the old one to be "deleted".
    // open the console to see the log entries that prove this.
    count();
    var t = setInterval(function () {
      setCount(count() + 1);
    }, 1000);
    console.log("creating", t);
    onCleanup(() => {
      console.log("deleting", t);
      clearInterval(t);
      setCleanupCount(cleanupCount() + 1);
    });
  }
}
