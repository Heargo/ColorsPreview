import { createStore } from 'vuex'

export default createStore({
  state: {
    colors:[]
  },
  mutations: {
    addColor(state){
      state.colors.push("#ededed")
    },
    getColors(state){
      return state.colors
    },
  },
  actions: {
    toastErrorAction(state,msg){
      console.log(msg)
    },
  },
  modules: {
  }
})
