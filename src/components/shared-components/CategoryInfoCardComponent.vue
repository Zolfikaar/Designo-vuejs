<script>
export default{
  props: {
    cat_info: {
      type: Object,
      required: true
    }
  }
}
</script>
<template>
  <div class="category-info-box" :style="`background-image: url('${cat_info.categoryBgPattern}');`">
    <div class="info-wrapper">
      <h1>{{ cat_info.categoryTitle }}</h1>
      <p>{{ cat_info.categoryDescription }}</p>
    </div>
  </div>
</template>
<style scoped>
.category-info-box{
  height: 252px;
  background-color: var(--clr-primary);
  border-radius: var(--bor-rad);
  color: white;
  position: relative;
  text-align: center;
}
.info-wrapper{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
}
.category-info-box .info-wrapper p{
  margin-top: 30px;
  padding: 0 125px;
}

@media screen and (min-width: 375px) and (max-width: 768px){
  .category-info-box{
    height: 320px;
    border-radius: unset;
  }
  .info-wrapper{
    left: 47%;
  }
  .category-info-box .info-wrapper p{
    padding: 0;
  }
}
@media screen and (min-width: 769px) and (max-width: 1440px){
  .info-wrapper{
    left: 47%;
  }
  .category-info-box .info-wrapper p{
    padding: 0;
  }
}
</style>