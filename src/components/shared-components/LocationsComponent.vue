<script>
import illustrationCanada from '@/components/icons/illustration-canada.vue'
import illustrationAustralia from '@/components//icons/illustration-australia.vue';
import illustrationUnitedKingdom from '@/components/icons/illustration-united-kingdom.vue'
export default{
  components: {
    illustrationCanada,
    illustrationAustralia,
    illustrationUnitedKingdom
  },
}
</script>
<template>
  <div class="location-cards">
    <div class="card">
      <div class="image-box">
        <illustrationCanada />
      </div>
      <h3 class="title">Canada</h3>
      <router-link to="/locations"><button class="btn btn-light">See Location</button></router-link>
    </div>
    <div class="card">
      <div class="image-box">
        <illustrationAustralia />
      </div>
      <h3 class="title">Australia</h3>
      <router-link to="/locations"><button class="btn btn-light">See Location</button></router-link>
    </div>
    <div class="card">
      <div class="image-box">
        <illustrationUnitedKingdom />
      </div>
      <h3 class="title">United Kingdom</h3>
      <router-link to="/locations"><button class="btn btn-light">See Location</button></router-link>
    </div>
  </div>
</template>

<style>
.location-cards{
  display: flex;
  justify-content: space-between;
  margin: 150px 50px;
}
.card{
  text-align: center;
}
.card .image-box{
  border-radius: 50%;
  background-image: url('../../assets/shared/desktop/bg-pattern-small-circle.svg');
  background-repeat: no-repeat;
  background-position: center center;
}
.card .title{
  margin-bottom: 30px;
  margin-top: 30px;
  text-transform: uppercase;
}

@media screen and (min-width: 375px) and (max-width: 768px){
  .location-cards{
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .card{
    margin: 30px 0;
    justify-content: center;
    align-items: center;
  }
}
@media screen and (min-width: 769px) and (max-width: 1440px){
  .location-cards{
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .card{
    margin: 30px 0;
    justify-content: center;
    align-items: center;
  }
}
</style>