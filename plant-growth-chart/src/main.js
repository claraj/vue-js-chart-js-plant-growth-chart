import Vue from 'vue'
import App from './App.vue'
import PlantRecordService from '@/services/PlantRecordService'

Vue.prototype.$plant_record_api = PlantRecordService

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
