<template>
  <div id="app">
    <tree-menu :label="tree.label" :nodes="tree.nodes" :depth="0"></tree-menu>

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

export default {
  name: "App",
  components: {
    LeanCanvas,
    QuarterlyPlan,
    Card,
    TreeMenu,
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
    };
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
