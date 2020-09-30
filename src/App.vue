<template>
  <div id="app">
    <tree-menu :label="tree.label" :nodes="tree.nodes" :depth="0"></tree-menu>

    <item-template
      class="item"
      :item="treeData"
      @make-folder="makeFolder"
      @add-item="addItem"
      @delete-item="deleteItem"
    ></item-template>

    <QuarterlyPlan>
      <template slot="heading">
        <h1>Quarterly Plan</h1>
      </template>
    </QuarterlyPlan>
    <LeanCanvas>
      <template slot="heading">
        <h1>Lean Canvas</h1>
      </template>
      <template slot="problem">
        <Card>
          <template slot="front">
            <ul v-if="problems">
              <li v-for="(item, index) in problems" :key="index">{{ item }}</li>
            </ul>
          </template>
          <template slot="back">
            <span>Sharing lots of photos and videos is time consuming</span>
          </template>
        </Card>
      </template>
    </LeanCanvas>

    <!--
     <GridExamples />
     <Masonry /> 
    -->
    <!--
    <DashboardGrid />
    -->
    <!--
      <Calendar
        v-model="single.value"
        :range="single.range"
        :lang="single.lang"
        :firstDayOfWeek="single.firstDayOfWeek"
        :input-class="single.inputClass"
        :position="single.position"
        :disabled-start-date="single.disabledStartDate"
        :text-format="single.textFormat"
        :date-format="single.dateFormat"
        :disabled-end-date="single.disabledEndDate"
      />
    -->
  </div>
</template>

<script>
import "@/assets/css/main.css";

// import GridExamples from "./components/GridExamples";
// import Masonry from "./components/Masonry";
// import DashboardGrid from "./components/DashboardGrid.vue";

import LeanCanvas from "./components/LeanCanvas.vue";
import QuarterlyPlan from "./components/QuarterlyPlan.vue";
import Card from "./components/Card.vue";
import TreeMenu from "./components/TreeMenu.vue";
import ItemTemplate from "./components/ItemTemplate.vue";
// import ScopeMap from "./components/ScopeMap.vue";

// import Canvas from "./components/Canvas";
// import Calendar from "vue-datepicker-ui";
let tree = {
  label: "root",
  nodes: [
    {
      label: "item1",
      nodes: [
        {
          label: "item1.1",
        },
        {
          label: "item1.2",
          nodes: [
            {
              label: "item1.2.1",
            },
          ],
        },
      ],
    },
    {
      label: "item2",
    },
  ],
};

let treeData = {
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
export default {
  name: "App",
  components: {
    LeanCanvas,
    QuarterlyPlan,
    Card,
    TreeMenu,
    ItemTemplate,
    // ScopeMap,
    //    GridExamples,
    //Masonry,
    //    DashboardGrid,
    //    Calendar,
    //    Canvas
  },
  data: function () {
    return {
      single: {
        title: "Single",
        inputClass: "exampleDatePicker",
        lang: "en",
        position: "bottom",
        range: false,
        value: new Date(),
        firstDayOfWeek: "monday",
      },
      problems: ["asda", "sdada"],
      tree,
      treeData,
    };
  },
  methods: {
    makeFolder: function (item) {
      console.log("make folder");
      // https://stackoverflow.com/questions/36671106/what-is-the-difference-between-vm-set-and-vue-set
      this.$set(item, "children", []);
      this.addItem(item);
      console.log(treeData);
    },
    addItem: function (item) {
      console.log("add item");
      item.children.push({
        name: "new stuff",
      });
      console.log(treeData);
    },
    deleteItem: function (item) {
      console.log("delete the item");
      this.$delete(treeData, item);
    },
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*  text-align: center;*/
  color: #2c3e50;
  margin-top: 60px;
}
.btn {
  @apply font-bold py-2 px-4 rounded;
}
.btn-blue {
  @apply bg-blue text-white;
}
.btn-blue:hover {
  @apply bg-blue-dark;
}
</style>
