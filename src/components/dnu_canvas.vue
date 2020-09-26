<template>
  <div class="hello">
    <div v-if="loading">Loading</div>
    <div v-else>
      <ul>
        <li v-for="(canvas, index) in canvases" :key="index">{{ canvas.title }} asdas</li>
      </ul>
      <div v-if="currentCanvas">
        <div>{{ currentCanvasKey }} {{ currentCanvas.title }}</div>
        <div v-if="currentItems">
          <ul>
            <li v-for="(item, index) in currentItems" :key="index">{{ item }}</li>
          </ul>
          <hr>
          <ul>
            <li v-for="(item, index) in problems" :key="index">{{ item }}</li>
          </ul>
          <hr>
          <ul>
            <li v-for="(item, index) in keyMetrics" :key="index">{{ item }}</li>
          </ul>
          <hr>
          <ul>
            <li v-for="(item, index) in uniqueValues" :key="index">{{ item }}</li>
          </ul>
          <hr>
          <ul>
            <li v-for="(item, index) in unfareAdvantages" :key="index">{{ item }}</li>
          </ul>
          <hr>
          <ul>
            <li v-for="(item, index) in channels" :key="index">{{ item }}</li>
          </ul>
          <hr>
          <ul>
            <li v-for="(item, index) in customerSegments" :key="index">{{ item }}</li>
          </ul>
          <hr>
          <ul>
            <li v-for="(item, index) in costStructures" :key="index">{{ item }}</li>
          </ul>
          <hr>
          <ul>
            <li v-for="(item, index) in revenueStreams" :key="index">{{ item }}</li>
          </ul>
          <hr>
          <ul>
            <li v-for="(item, index) in solutions" :key="index">{{ item }}</li>
          </ul>
        </div>
        <form @submit.prevent="addItem">
          <input type="text" v-model="newItem.title">
          <input type="body" v-model="newItem.body">
          <select v-model="newItem.type">
            <option v-for="t in types" :key="t.key" :value="t">{{ t.label }}</option>
          </select>
          <input type="submit">
        </form>
      </div>
      <div v-else>
        <form @submit.prevent="createNewCanvas">
          <input type="text" v-model.trim="newCanvas.title">
          <input type="submit">
        </form>
      </div>
    </div>
  </div>
</template>

<script>
//import Firebase from "firebase";
let config = {
  apiKey: "AIzaSyADsnDS7e6jdUN5AuZLaloDNuE41MpveJs",
  authDomain: "alert-function-148712.firebaseapp.com",
  databaseURL: "https://alert-function-148712.firebaseio.com",
  projectId: "alert-function-148712",
  storageBucket: "alert-function-148712.appspot.com",
  messagingSenderId: "475136573280"
};
/*
let app = Firebase.initializeApp(config);
let db = app.database();
let canvasesRef = db.ref("canvases");
let itemsRef = db.ref("items");
*/
export default {
  name: "Canvas",
  /*
  firebase: {
    canvases: canvasesRef
  },
  */
  data() {
    const now = Date.now();
    return {
      newCanvas: {
        title: "",
        createdAt: now,
        items: []
      },
      newItem: {
        canvas: "",
        title: "",
        body: "",
        type: null
      },
      selectedType: null,
      loading: false,
      currentCanvasKey: null,
      currentCanvas: null,
      currentItems: [],
      types: [
        { key: "problem", label: "문제" },
        { key: "solution", label: "솔루션" },
        { key: "key-metrics", label: "핵심 지표" },
        { key: "unique-value", label: "고유의 가치 제안" },
        { key: "unfare-advantage", label: "경쟁 우위" },
        { key: "channels", label: "채널" },
        { key: "customer-segment", label: "고객군" },
        { key: "cost-structure", label: "비용 구조" },
        { key: "revenue-streams", label: "수익원" }
      ]
    };
  },
  computed: {
    problems() {
      return this.currentItems.filter(i => i.type === "problem");
    },
    solutions() {
      return this.currentItems.filter(i => i.type === "solution");
    },
    keyMetrics() {
      return this.currentItems.filter(i => i.type === "key-metrics");
    },
    uniqueValues() {
      return this.currentItems.filter(i => i.type === "unique-value");
    },
    unfareAdvantages() {
      return this.currentItems.filter(i => i.type === "unfare-advantage");
    },
    channels() {
      return this.currentItems.filter(i => i.type === "channels");
    },
    customerSegments() {
      return this.currentItems.filter(i => i.type === "customer-segments");
    },
    costStructures() {
      return this.currentItems.filter(i => i.type === "cost-structures");
    },
    revenueStreams() {
      return this.currentItems.filter(i => i.type === "revenue-streams");
    }
  },
  async mounted() {
    try {
      const canvas = await this.getLatestCanvas();
      if (canvas) {
        this.currentCanvasKey = canvas.key;
        this.currentCanvas = canvas.data;
        this.currentItems = await this.getItemsByCanvasKey();
      }
      this.selectedType = this.types[0];
    } catch (error) {
      console.error(error);
    } finally {
      this.loading = false;
    }
  },
  methods: {
    async createNewCanvas() {
      if (this.newCanvas.title === "") return;
      this.newCanvas.items = [];
      this.newCanvas.createdAt = Date.now();
      canvasesRef.push(this.newCanvas).then(item => {
        canvasesRef.orderByKey().on("child_added", snap => {
          this.currentCanvas = snap.val();
          this.currentCanvasKey = item.key;
        });
        this.newCanvas.title = "";
      });
    },
    getLatestCanvas(cb) {
      return new Promise((resolve, reject) => {
        try {
          canvasesRef
            .orderByChild("createdAt")
            .limitToLast(1)
            .on("value", snapshot => {
              if (snapshot.val() !== null) {
                const key = Object.keys(snapshot.val())[0];
                resolve({
                  key,
                  data: snapshot.val()[key]
                });
              }
              resolve(null);
            });
        } catch (error) {
          reject(error);
        }
      });
    },
    async getItemsByCanvasKey() {
      console.log(this.currentCanvasKey);
      itemsRef.orderByChild("canvas").on("value", snap => {
        const data = [];
        snap.forEach(s => {
          data.push({
            title: s.child("title").val(),
            body: s.child("body").val(),
            type: s.child("type").val()
          });
        });
        this.currentItems = data;
      });
    },
    addItem() {
      this.newItem.canvas = this.currentCanvasKey;
      this.newItem.type = this.newItem.type.key;
      itemsRef.push(this.newItem).then(item => {
        itemsRef.orderByKey().on("value", snap => {
          const data = [];
          snap.forEach(s => {
            data.push({
              title: s.child("title").val(),
              body: s.child("body").val(),
              type: s.child("type").val()
            });
          });
          this.currentItems = data;
        });
        this.newItem.title = "";
        this.newItem.body = "";
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>