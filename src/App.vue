<template>
  <div id="app">
    <!-- <GridExamples /> -->
    <!-- <Masonry /> -->
    <DashboardGrid />

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
import GridExamples from "./components/GridExamples";
import Masonry from "./components/Masonry";
import DashboardGrid from "./components/DashboardGrid.vue";
import Calendar from "vue-datepicker-ui";

export default {
  name: "App",
  components: {
    GridExamples,
    Masonry,
    DashboardGrid,
    Calendar
  },
  data: function() {
    return {
      single: {
        title: "Single",
        inputClass: "exampleDatePicker",
        lang: "en",
        position: "bottom",
        range: false,
        value: new Date(),
        firstDayOfWeek: "monday"
      }
    };
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  //margin-top: 60px;
}
</style>
