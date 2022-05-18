<template>
    <router-view>
  <div class="container">
    <router-link to="/">YTS MOVIES</router-link>
    <router-link to="/about">FEATURED MOVIES</router-link>

  </div>
  </router-view>



</template> 
<script>




export default{
    name:"NavBar"
}


</script>

<style >
.container{
  display: flex;
  justify-content: space-around;
  margin-bottom: 50px;
  width: 50%;
  background-color: green;
  
}
li{
  list-style-type: none;
  color: white;
  
 

}
</style>
