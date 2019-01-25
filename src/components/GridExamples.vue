<template>
  <div>
    <div class="grid">
      <div class="a">a</div>
      <div class="b">b</div>
      <div class="c">c</div>
      <div class="d">d</div>
      <div class="e">e</div>
      <div class="f">f</div>
      <div class="g">g</div>
      <div class="h">h</div>
    </div>

    <div class="wrapper">
      <div class="box header">box header</div>
      <div class="box sidebar">box sidebar</div>
      <div class="box sidebar2">box siderbar2</div>
      <div class="box content">
        box content <br />
        More content than we had before so this column is now quite tall.
      </div>
      <div class="box footer">Footer</div>
    </div>

    <div class="wrapper2">
      <div class="box2">1</div>
      <div class="box2">2</div>
      <div class="box2">3</div>
      <div class="box2">4</div>
      <div class="box2">5</div>
      <div class="box2">6</div>
      <div class="box2">7</div>
      <div class="box2">8</div>
      <div class="box2">9</div>
      <div class="box2">10</div>
      <div class="box2">11</div>
      <div class="box2">12</div>
    </div>

    <div class="wrapper3">
      <div class="box3">1</div>
      <div class="box3 spec">2</div>
      <div class="box3">3</div>
      <div class="box3">4</div>
      <div class="box3">5</div>
      <div class="box3">6</div>
      <div class="box3">7</div>
      <div class="box3">8</div>
      <div class="box3">9</div>
      <div class="box3">10</div>
      <div class="box3">11</div>
      <div class="box3">12</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GridExamples",
  data() {
    return {
      msg: "These are css grid examples"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(3, [col] auto);
  grid-template-rows: repeat(5, [row] auto);
  grid-gap: 10px;
  /*create a gap between columns and rows is a shorthand for grid-column-gap and grid-row-gap*/
}

.wrapper {
  display: grid;
  grid-gap: 10px;
  grid-template-columns: auto;
  grid-template-areas:
    "header  header  header"
    "sidebar content sidebar2"
    "footer  footer  footer";
}
@media only screen and (max-width: 600px) {
  .wrapper {
    grid-template-columns: 20% auto;
    grid-template-areas:
      "header header"
      "sidebar content"
      "sidebar2 sidebar2"
      "footer footer";
    max-width: 600px;
  }
}

.box {
  background-color: #444;
  color: #fff;
  border-radius: 5px;
  padding: 20px;
  font-size: 150%;
}

.header {
  grid-area: header;
}

.footer {
  grid-area: footer;
}

.sidebar {
  grid-area: sidebar;
}

.sidebar2 {
  grid-area: sidebar2;
}

.content {
  grid-area: content;
}

.b {
  grid-column: 3;
  grid-row: 1 / span 4;
}
.h {
  grid-column: span 2 / 3;
  grid-row: 1 / 2;
}

.grid div {
  border: 1px solid rgb(0, 95, 107);
  border-radius: 3px;
  background-color: rgba(0, 95, 107, 0.8);
  padding: 0.2em;
  color: fff;
}

.wrapper2 {
  width: 600px;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(6, 100px);
  grid-template-rows: 100px 100px 100px;
  grid-auto-flow: column;
}

.box2 {
  background-color: #444;
  color: #fff;
  border-radius: 5px;
  padding: 20px;
  font-size: 150%;
}

.box2:nth-child(even) {
  background-color: #ccc;
  color: #000;
}

.wrapper3 {
  display: grid;
  grid-template-columns: repeat(6, auto);
  grid-gap: 10px;
}

.box3 {
  background-color: #444;
  color: #fff;
  border-radius: 5px;
  padding: 20px;
  font-size: 150%;
}

.box3:nth-child(even) {
  background-color: #ccc;
  color: #000;
}

.spec {
  grid-column: 3 / 6;
  grid-row: 2 / 3;
  outline: 2px solid red;
  z-index: 10;
}
</style>
