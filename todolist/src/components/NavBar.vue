<template>
  <div class="container">
    <li>YTS MOVIES</li>
    <li>Featured</li>
    <li>Movies</li>
    <li>Trending</li>

  </div>

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
}
li{
  list-style-type: none;

}
</style>
