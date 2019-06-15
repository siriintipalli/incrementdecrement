<template>
<div>
<button @click="incrementValue">Increment Value</button>
<button @click="decrementValue">Decrement Value</button>
<button @click="clearValue">Clear Value</button>
<div v-for="(value,index) in dataValues" :key="index">
{{value}} <span @click="deleteParticularValue(index)">X</span>
</div>
</div>
</template>
<script>
export default{
    data(){
        return{

        }
    },
    computed: {
    dataValues: function() {
        return this.$store.state.dataValues
    }
},
methods:{
    incrementValue:function(){
        this.$store.commit('INCREASE_INCREMENT_VALUES', this.dataValues.length+1)
    },
    decrementValue: function()
    {
  this.$store.commit('DECREMENT_INCREMENT_VALUES','')
    },
    clearValue: function()
    {
    this.$store.commit('CLEAR_ALL_INCREMENT_VALUES',[])
    },
    deleteParticularValue:function(index){
   this.$store.commit('CLEAR_PARTICULAR_INCREMENT_VALUES',index)
    },
}
}
</script>
<style>
</style>