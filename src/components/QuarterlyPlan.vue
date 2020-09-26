<template>
  <div>
    <slot name="heading"></slot>
    <section class="container">
      <div class="m1">Past
        <slot name="m1"></slot>
      </div>
      <div class="m2">Now
        <slot name="m2"></slot>
      </div>
      <div class="m3">Upcoming
        <slot name="m3"></slot>
      </div>
    </section>
  </div>
</template>
<script>
export default {};
</script>

<style scoped>
.container {
  display: grid;
  grid-template-columns: 33% 33% 33%;
  grid-template-rows: 200% 200% 200%;
  grid-auto-flow: row;
  background-color: purple;
}
</style>
