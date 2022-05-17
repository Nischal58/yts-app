<template>

  
  <NavBar/>
<h1>hello</h1>
      <div class="movie-card" v-for="item in movieList" :key="item.id">

      <img :src="item.background_image_original">
      <h4>{{item.title}}</h4>

          </div>
          
 

</template> 
<script>


import axios from 'axios' 
import NavBar from './components/NavBar.vue'
export default {
  name: 'App',
  
  data(){
    return{
      movieList:[]
    }
  },

  async mounted(){
  let data =axios.get('https://yts.mx/api/v2/list_movies.json')
  .then((response=>(this.movieList=response.data.data.movies)))
    console.log(data)
        },
  components: {
    NavBar
  },

}
</script>

<style>


#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: #2c3e50;

}
.movie-card img{
  width:100%;
    height: 300px;
    width:200px;
    object-fit:cover;
    object-position:center;
  
   
  
}
.movie-card{
  width:200px;
  display:inline-block ;
  margin-left: 10px;
}
</style>
