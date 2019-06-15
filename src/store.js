import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    dataValues:[],
  },
  mutations: {
    INCREASE_INCREMENT_VALUES: function(state, response){
      state.dataValues.push(response)
    },
    DECREMENT_INCREMENT_VALUES: function(state, response){
     state.dataValues.splice(state.dataValues.length-1,1)
    },
CLEAR_ALL_INCREMENT_VALUES: function(state,response)
{ 
 state.dataValues=response
},
CLEAR_PARTICULAR_INCREMENT_VALUES: function(state,response)
{
   state.dataValues.splice(response,1)
},

  },
  actions: {

  }
})
