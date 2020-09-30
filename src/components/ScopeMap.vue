<template>
  <div>
    <!--
    <h1>1asdad</h1>
    <li>
      <div :class="{ bold: isFolder }" @click="toggle" @dblclick="makeFolder">
        {{ item.name }}
        <span v-if="isFolder">[{{ isOpen ? "-" : "+" }}]</span>
      </div>
      <ul v-show="isOpen" v-if="isFolder">
        <tree-item
          class="item"
          v-for="(child, index) in item.children"
          :key="index"
          :item="child"
          @make-folder="$emit('make-folder', $event)"
          @add-item="$emit('add-item', $event)"
        ></tree-item>
        <li class="add" @click="$emit('add-item', item)">+</li>
      </ul>
    </li>
    -->
    <!-- the demo root element -->
    <ul id="demo">
      <item-template
        class="item"
        :item="treeData"
        @make-folder="makeFolder"
        @add-item="addItem"
      ></item-template>
    </ul>
  </div>
</template>

<script>
import ItemTemplate from "./ItemTemplate.vue";
// demo data
var treeData = {
  name: "My Tree",
  children: [
    { name: "hello" },
    { name: "wat" },
    {
      name: "child folder",
      children: [
        {
          name: "child folder",
          children: [{ name: "hello" }, { name: "wat" }],
        },
        { name: "hello" },
        { name: "wat" },
        {
          name: "child folder",
          children: [{ name: "hello" }, { name: "wat" }],
        },
      ],
    },
  ],
};

// define the tree-item component
/*
var treeItem = {
  template: "item-template",
  props: {
    item: Object,
  },
  data: function () {
    return {
      isOpen: false,
    };
  },
  computed: {
    isFolder: function () {
      return this.item.children && this.item.children.length;
    },
  },
  methods: {
    toggle: function () {
      if (this.isFolder) {
        this.isOpen = !this.isOpen;
      }
    },
    makeFolder: function () {
      if (!this.isFolder) {
        this.$emit("make-folder", this.item);
        this.isOpen = true;
      }
    },
  },
};
*/

export default {
  data: function () {
    return {
      treeData: treeData,
    };
  },
  components: {
    ItemTemplate,
  },
  methods: {
    makeFolder: function (item) {
      console.log("make folder");
      this.set(item, "children", []);
      this.addItem(item);
    },
    addItem: function (item) {
      console.log("add item");
      item.children.push({
        name: "new stuff",
      });
    },
  },
};
</script>
<style scoped>
body {
  font-family: Menlo, Consolas, monospace;
  color: #444;
}
.item {
  cursor: pointer;
}
.bold {
  font-weight: bold;
}
ul {
  padding-left: 1em;
  line-height: 1.5em;
  list-style-type: dot;
}
</style>