<template>
  <div id="app">
    <button id="red" @click="selectedComponent='appRed'">Load Red Component</button>
    <button id="blue" @click="selectedComponent='appBlue'">Load Blue Component</button>
    <button id="blue" @click="selectedComponent='appGreen'">Load Green Component</button>
    <keep-alive>
    <component :is="selectedComponent">
      <h3>Component heading</h3>
      <p> This is component body</p>
    </component>
    </keep-alive>
  </div>
</template>

<script>
import Red from './components/Red.vue'
import Blue from './components/Blue.vue'
import Green from './components/Green.vue'

export default {
  name: 'app',
  components: {
    appRed: Red,
    appBlue: Blue,
    appGreen: Green
  },
  data(){
    return{
      selectedComponent : 'app-red'
    }
  }
}
</script>

<style>
  button{
    background: 1px solid ;
    border-radius: 5px;
    width: 120px;
    margin: 2px;
    color: white;
  }
  #red{
    background-color: red;
    background: red;
    
  }
  #blue{
    background-color: blue;
  }
  #red{
    background-color: green;
  }
</style>
