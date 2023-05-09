import { createSignal, createMemo } from "solid-js";

import { IndexComp } from "./IndexComp";
import { ForCompWithIndex } from "./ForCompWithIndex";

export function ComponentGroup2(props) {
  var [forList, setForList] = createSignal([
    ["for item A 1", "for item A 2", "for item A 3"],
    ["for item B 1", "for item B 2", "for item B 3"],
  ]);

  var [indexList, setIndexList] = createSignal([
    ["index item A 1", "index item A 2", "index item A 3"],
    ["index item B 1", "index item B 2", "index item B 3"],
  ]);
  var [forListIndex, setForListIndex] = createSignal(0);
  var [indexListIndex, setIndexListIndex] = createSignal(0);

  var currentForList = createMemo(() => forList()[forListIndex()]);
  var currentIndexList = createMemo(() => indexList()[indexListIndex()]);

  function reverseLists() {
    var reversedLists = [];
    forList().forEach((list) => reversedLists.push(list.toReversed()));
    setForList(reversedLists);
    reversedLists = [];
    indexList().forEach((list) => reversedLists.push(list.toReversed()));
    setIndexList(reversedLists);
  }

  function changeLists() {
    setForListIndex((forListIndex() + 1) % forList().length);
    setIndexListIndex((indexListIndex() + 1) % indexList().length);
  }

  function addItemToLists() {
    setForList([
      ["for item A 1", "for item A 1.5", "for item A 2", "for item A 3"],
      ["for item B 1", "for item B 1.5", "for item B 2", "for item B 3"],
    ]);
    setIndexList([
      [
        "index item A 1",
        "index item A 1.5",
        "index item A 2",
        "index item A 3",
      ],
      [
        "index item B 1",
        "index item B 1.5",
        "index item B 2",
        "index item B 3",
      ],
    ]);
  }

  return (
    <>
      <div class="drawBorderWithPaddingAndMargin">
        <p>
          When using these buttons view the select element in the Elements tab
          and watch what happens to understand what SolidJS is doing. It is very
          efficient!
        </p>
        <button class="spacing" onclick={() => reverseLists()}>
          Reverse List
        </button>
        <button class="spacing" onclick={() => changeLists()}>
          Change List
        </button>
        <button class="spacing" onclick={() => addItemToLists()}>
          Add Item
        </button>
      </div>
      <ul>
        <ForCompWithIndex list={currentForList()} />
      </ul>
      <ul>
        <IndexComp list={currentIndexList()} />
      </ul>
    </>
  );
}
