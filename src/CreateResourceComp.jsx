import { Switch, Match, createResource } from "solid-js";

async function getPhotos() {
  var res = fetch(`https://jsonplaceholder.typicode.com/photos?_limit=20`);
  var dataPromise = await res;

  var data = await dataPromise.json();
  return data;
}

export function CreateResourceComp() {
  const [photos, { mutate, refetch }] = createResource(getPhotos);

  function measurePage() {
    console.log(
      "The web page is",
      document.documentElement.scrollHeight,
      "pixels long."
    );
  }

  return (
    <div class="center-content">
      <Switch fallback={<div>Not Found</div>}>
        <Match
          when={photos.state === "pending" || photos.state === "unresolved"}
        >
          Loading...
        </Match>
        <Match when={photos.state === "ready"}>
          <For each={photos()} fallback={<p>Loading...</p>}>
            {(photo) => (
              <figure>
                <img src={photo.thumbnailUrl} alt={photo.title} />
                <figcaption>{photo.title}</figcaption>
              </figure>
            )}
          </For>
        </Match>
        <Match when={photos.state === "errored"}>
          {JSON.stringify(photos.error)}
        </Match>
      </Switch>
    </div>
  );
}
