<template>
  <div>
    <slot name="heading"></slot>
    <section class="container">
      <div class="item-a">Problem
        <slot name="problem"></slot>
      </div>
      <div class="item-b">Solution</div>
      <div class="item-c">Key Metrics</div>
      <div class="item-d">Unique value</div>
      <div class="item-e">Unfair Advantage</div>
      <div class="item-f">Channels</div>
      <div class="item-g">Customer</div>
      <div class="item-h">Cost Structure</div>
      <div class="item-i">Break Even</div>
      <div class="item-j">Rev Streams</div>
    </section>
  </div>
</template>

<style>
/* Lean Canvas grid is 5 col x 3 rows */
.container {
  display: grid;
  grid-template-columns: 20% 20% 20% 20% 20%;
  grid-template-rows: 200% 200% 200%;
  grid-auto-flow: row;
  background-color: purple;
}
/* business problem 1 col x 2 rows */
.item-a {
  grid-column: 1; /* 1 oszlop szeles */
  grid-row: 1 / 3; /* 2 sav magas */
  background-color: green;
}
.item-b {
  grid-column: 2; /* 1 oszlop szeles */
  grid-row: 1; /* 2 sav magas */
  background-color: skyblue;
}
.item-c {
  grid-column: 2; /* 2 oszlop szeles */
  grid-row: 2; /* 2 sav magas */
  background-color: brown;
}
.item-d {
  grid-column: 3; /* 2 oszlop szeles */
  grid-row: 1/3; /* 2 sav magas */
  background-color: peachpuff;
}
.item-e {
  grid-column: 4;
  grid-row: 1;
  background-color: orange;
}
.item-f {
  grid-column: 4;
  grid-row: 2;
  background-color: pink;
}
.item-g {
  grid-column: 5;
  grid-row: 1/3;
  background-color: white;
}
.item-h {
  grid-column: 1/3;
  grid-row: 3;
  background-color: gray;
}
.item-j {
  grid-column: 4/6;
  grid-row: 3;
  background-color: gray;
}
</style>