import { createSignal, For, onMount } from "solid-js";

export function OnMountComp() {
  const [photos, setPhotos] = createSignal([]);

  onMount(measurePage);

  function measurePage() {
    console.log(
      "The web page is",
      document.documentElement.scrollHeight,
      "pixels long."
    );
  }
  return (
    <>
      <button onClick={measurePage}>Measure Page</button>
      <h1>Photo album</h1>

      <div class="center-content">
        <p>
          This is a bunch of text: Published: 1/9/2023 Length: 272 minutes
          Course website:
          [here](https://reactivity-with-solidjs.netlify.app/workshop/introduction)
          These
          [tutorials](https://www.solidjs.com/tutorial/introduction_basics) are
          a useful resource.
        </p>
      </div>
    </>
  );
}
