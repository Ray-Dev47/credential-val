<template>
 <div id="app">
    <Form />
 </div>
  
  
</template>

<script>
import Form from './components/Form.vue'



export default {
  name: 'App',

  components: {
    Form     
  },
  data(){
    return{
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
   /* display: flex;
    align-items: center;
    justify-content: center; */
}
body{
   margin: 0;
   background-color: #eee;
}
</style>
