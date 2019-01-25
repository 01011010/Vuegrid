<template>
  <div
    v-bind:style="{ 'grid-column': colSpan, 'grid-row': rowSpan }"
    class="item blog"
    v-bind:class="[named]"
    :position="position"
  >
    <div class="title">
      <h3>1: Team Members {{ position }}</h3>
    </div>
    <div class="desc">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce facilisis
        fringilla laoreet. Mauris mattis enim ut felis consectetur, vitae
        lacinia enim auctor. Aenean vitae fermentum odio. Lorem ipsum dolor sit
        amet, consectetur adipiscing elit. Sed dictum non orci ut dignissim.
        Fusce fermentum felis aliquam, mattis nibh ut, faucibus leo. Sed lectus
        libero, volutpat at eros quis, venenatis tempus neque. Nulla vel
        faucibus orci, nec convallis ligula. Quisque maximus gravida orci, in
        lacinia mauris pretium nec. Sed et enim bibendum, fermentum tellus eu,
        eleifend ex. Aliquam lectus magna, sollicitudin vitae placerat ac,
        semper ut risus. Nunc vestibulum lacus et nulla volutpat auctor.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["named", "position", "colSpan", "rowSpan"],
  data: function() {
    return {
      activeColor: "red",
      fontSize: 30
    };
  }
};
</script>

<style></style>
