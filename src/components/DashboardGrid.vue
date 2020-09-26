<template>
  <div class="grid">
    <!-- span 2 / 3 -->
    <Tile position="b1:b2" name="parentBox" rowspan="7 / 7" colspan="7 / 1">
      <Card>
        <template slot="front">
          <span>Hey loser</span>
        </template>
        <template slot="back">
          <span>Thought u could get rid of me loser?</span>
        </template>
      </Card>
    </Tile>

    <!--
    <Tile position="b1:b2" name="parentBox" colspan="1 / span 2" rowspan="1 / span 3">
      <span>Timeline</span>
    </Tile>
    -->
    <!--
    <Tile position="b2:b6" name="parentBox" rowspan="2 / 7" colspan="2 / 2">Calendar</Tile>
    -->
    <!--
      <Tile name="parentBox" colSpan="2" rowSpan="2">
        <span>Calendar</span>
      </Tile>
      <Tile name="parentBox" colSpan="1" rowSpan="3 / span 3"> Test </Tile>
    -->
  </div>
</template>

<script>
import Tile from "../components/Tile.vue";
import Team from "../components/Team.vue";
import Card from "../components/Card.vue";

export default {
  name: "DashboardGrid",
  components: {
    Tile,
    Team,
    Card
  },
  data: function() {
    return {};
  }
};
</script>

<style>
.grid {
  display: grid;
  grid-auto-rows: 1fr;
  grid-auto-columns: 1fr;
  background-color: green;
}
/*
.grid {
  border: 1px solid black;
   grid-auto-rows: 40px;
  display: grid;
  grid-gap: 10px;
  background-color: gray;
  */
/*minmax(min, max) Is a functional notation that defines a size range greater than or equal to min and less than or equal to max. If max is smaller than min, then max is ignored and the function is treated as min. As a maximum, a <flex> value sets the track’s flex factor. It is invalid as a minimum*/
/*With CSS Grid Layout, we get a new flexible unit: the Fr unit. Fr is a fractional unit and 1fr is for 1 part of the available space.*/
/*same as the item width to avoid overlap*/
/*grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));*/
/*}*/

/* Unnecessary fluff */
.item {
  width: 250px;
}
.item:nth-child(1n) {
  background-color: pink;
}
</style>
