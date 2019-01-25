<template>
  <div class="grid">
    <!-- span 2 / 3 -->
    <Tile position="a2:a6" name="parentBox" rowSpan="2 / 7" colSpan="1 / 1">
      <Team />
    </Tile>

    <Tile
      position="a1:b2"
      name="parentBox"
      colSpan="1 / span 2"
      rowSpan="1 / span 3"
    >
      <span>Timeline</span>
    </Tile>
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

export default {
  name: "DashboardGrid",
  components: {
    Tile,
    Team
  },
  data: function() {
    return {};
  }
};
</script>

<style>
.grid {
  //grid-auto-rows: 40px;
  display: grid;
  grid-gap: 10px;
  /*minmax(min, max) Is a functional notation that defines a size range greater than or equal to min and less than or equal to max. If max is smaller than min, then max is ignored and the function is treated as min. As a maximum, a <flex> value sets the track’s flex factor. It is invalid as a minimum*/
  /*With CSS Grid Layout, we get a new flexible unit: the Fr unit. Fr is a fractional unit and 1fr is for 1 part of the available space.*/
  /*same as the item width to avoid overlap*/
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
}

/* Unnecessary fluff */
.item {
  //width: 250px;
}
.item:nth-child(1n) {
  background-color: #ccc;
}
.photothumb {
  width: 100%;
}
.desc img {
  width: 50%;
  float: left;
}
</style>
