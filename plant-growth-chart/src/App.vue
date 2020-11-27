<template>
  <div id="app">
   
    <label>Height</label> 
    <input type="number" v-model="newHeight">
    <br>
    <label>Date</label>
    <input type="date" v-model="newDate">
    <br>
    <button v-on:click="addRecord">Add record</button>

    <plant-chart v-bind:chartData="chartData"/> 
  </div>
</template>

<script>
import PlantChart from './components/PlantChart.vue'

export default {
  name: 'App',
  components: {
    PlantChart
  },
  data() {
    return {
      newHeight: 0,
      newDate: '',
      allRecords: [],
      // chartOptions: {
      //   scales: {
      //     xAxes: [{
      //       type: 'time',
      //       distribution: 'linear'
      //     }]
      //   }
      // }

    }
  },
  mounted() {
    this.getAllData()
  },
  methods: {
    addRecord() {
      // todo validation
      let record = {height: this.newHeight, date: new Date(this.newDate)}
      console.log(record)
      this.$plant_record_api.addPlantRecord(record).then( response => { 
        this.getAllData()
      })
    },
    getAllData() {
      this.$plant_record_api.getAllPlantRecords().then(records => {
        this.allRecords = records
      })
    }
  },
  computed: {
    chartData() {
      
      let labels = this.allRecords.map(rec => rec.date) // all the dates 
      let heights = this.allRecords.map(rec => rec.height ) // all the heights
      
      return {
        labels: labels,
         datasets: [ {
          label: 'Height for date',
          data: heights,
          borderColor: 'teal',   // your choice - HTML color names or RGB 
          fill: true,  // optional
          lineTension: 0.1  // 0 = straight lines between points, 1 = bezier curves
        }]
      }
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
