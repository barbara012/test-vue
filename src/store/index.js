import Vue from 'vue'
import Vuex from 'vuex'
import Cars from '@/data/cars'
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    parkData: Cars,
    cPage: 0,
    cityId: 'all'
  },
  mutations: {
    updatePage (state, currentPage) {
      state.cPage = currentPage
    },
    updateParkDataByCity (state, cityId) {

    }
  },
  getters: {
    allParks: state => {
      return state.parkData
    },
    availableParks: state => {
      return state.parkData.filter(park => !park.mark)
    },
    usingParks: state => {
      return state.parkData.filter(park => park.mark)
    },
    maintenanceParks: state => {
      return state.parkData.filter(park => park.mark)
    },
    disabledParks: state => {
      return state.parkData.filter(park => !park.mark)
    }
  }
})
export default store
