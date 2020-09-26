<template>
  <div
    v-bind:style="{ 'grid-column': colSpan, 'grid-row': rowSpan }"
    class="item"
    v-bind:class="[named]"
    :position="tilePosition"
  >
    <slot></slot>
    {{ this.positionToGridAreaNotation(this.position) }}
  </div>
</template>

<script>
export default {
  //props: ["named", "position", "colSpan", "rowSpan"],
  props: {
    position: {
      type: String
    },
    //character: "",
    named: "",
    colSpan: "",
    rowSpan: ""
  },
  data: function() {
    return {};
  },
  computed: {
    tilePosition() {
      return `grid-area: ${this.positionToGridAreaNotation(this.position)}`;
    }
  },
  methods: {
    positionToGridAreaNotation(position) {
      const [from, to = null] = position.toLowerCase().split(":");
      if (from.length < 2 || (to && to.length < 2)) {
        console.log("nothing to return");
        return;
      }
      const areaFrom = `${from.substring(1)} / ${this.indexInAlphabet(
        from[0]
      )}`;
      const area = to
        ? `${areaFrom} / ${Number(to.substring(1)) +
            1} / ${this.indexInAlphabet(to[0]) + 1}`
        : areaFrom;
      console.log("this is the area:" + area);
      return area;
    },
    indexInAlphabet(character) {
      const index = character.toLowerCase().charCodeAt(0) - 96;
      return index < 1 ? 1 : index;
    }
  }
};
</script>

<style></style>
