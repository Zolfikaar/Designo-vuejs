<script>
export default {
  props: {
    map: {
      type: Object,
      required: true
    }
  }
}
</script>
<template>
  <div class="map-box">
    <img :src="map" alt="Map">
  </div>
</template>
<style scoped>
.map-box img{
  border-radius: var(--bor-rad);
  width: 350px;
  height: 326px;
}

@media screen and (min-width: 375px) and (max-width: 768px){
  .map-box{
    margin-bottom: -7px;
  }
  .map-box img{
    width: 100%;
    border-radius: unset;
  }
}
@media screen and (min-width: 769px) and (max-width: 1440px){
  .map-box img{
    width: 100%;
  }
}
</style>