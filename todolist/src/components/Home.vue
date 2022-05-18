<template>
    <div class="movie-card" v-for="item in movieList" :key="item.id">

      <img :src="item.background_image_original">
      <h4>{{item.title}}</h4>

          </div>
          
 
</template>
<script>


export default {
    name:'HomeList'
  
}
</script>
