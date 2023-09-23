<script>
import HeroComponent from '@/components/home-components/HeroComponent.vue'
import CategoriesCardComponent from '@/components/shared-components/CategoriesCardComponent.vue';
import VisionComponent from '@/components/home-components/VisionComponent.vue';
import ContactBoxComponent from '@/components/shared-components/ContactBoxComponent.vue';
import patternLeaf from '@/components/icons/pattern-leaf.vue';

export default {
  components: {
    HeroComponent,
    CategoriesCardComponent,
    VisionComponent,
    ContactBoxComponent,
    patternLeaf
  }
}
</script>
<template>
  <patternLeaf class="pattern-leaf" />
  
  <section class="home-sec">
    <HeroComponent />
    
    <CategoriesCardComponent />
    
    <VisionComponent />
    
    <ContactBoxComponent />
  </section>
  
  <patternLeaf class="pattern-leaf2" />
  
</template>

<style scoped>
.pattern-leaf{
  position: absolute;
  top:400px;
  left: 0;
  z-index: -5;
}
.pattern-leaf2{
  position: absolute;
  bottom: 384px;
  z-index: -5;
  transform: rotate(180deg);
  right: 0;
}
@media screen and (min-width: 375px) and (max-width: 768px){
  .pattern-leaf,
  .pattern-leaf2{display: none;}
}

@media screen and (min-width: 769px) and (max-width: 1440px){
  .pattern-leaf,
  .pattern-leaf2{display: none;}
}
</style>