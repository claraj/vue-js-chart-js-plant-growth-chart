<!-- no template -->

<script>

import { Line, mixins } from 'vue-chartjs'
let { reactiveProp } = mixins

export default {
  extends: Line,
  name: 'PlantChart',
  mixins: [ reactiveProp ],
  data() {
    return { 
      chartOptions: {
        scales: {
          xAxes: [
            {
              type: 'time',
              distribution: 'linear'  // space out in time 
            }
          ]
        }
      }
  }},
  mounted() {
    this.renderChart(this.chartData, this.chartOptions)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
