<template>
  <div class="tree-menu">
    <div :style="indent" @click="toggleChildren">{{ label }}</div>
    <tree-menu
      v-if="showChildren"
      v-for="(node, index) in nodes"
      :key="index"
      :nodes="node.nodes"
      :label="node.label"
      :depth="depth + 1"
    >
    </tree-menu>
  </div>
</template>
<script>
export default {
  name: "tree-menu",
  data() {
    return { showChildren: false };
  },
  props: ["label", "nodes", "depth"],
  computed: {
    indent() {
      return { transform: `translate(${this.depth * 50}px)` };
    },
  },
  methods: {
    toggleChildren() {
      this.showChildren = !this.showChildren;
    },
  },
};
</script>