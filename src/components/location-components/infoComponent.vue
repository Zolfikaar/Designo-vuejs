<script>
export default {
  props: {
    address: {
      type: Object,
      required: true
    }
  }
}
</script>
<template>
  <div class="info-wrapper">
    
    <h2>{{ address.country }}</h2>
    <div class="bg-wrapper">

      <div class="left-side">
        <p>{{ address.office_name }}</p>
        <p>{{ address.street }}</p>
        <p>{{ address.province }},{{ address.city }} {{ address.postalCode }}</p>
      </div>
      <div class="right-side">
        <p>Contact</p>
        <p>P : {{ address.phone }}</p>
        <p>M : {{ address.email }}</p>
      </div>

    </div>
    
  </div>
</template>
<style scoped>
.info-wrapper{
  height: 326px;
  background: rgb(253,243,240);
  background: linear-gradient(90deg, rgba(253,243,240,1) 35%);
  border-radius: var(--bor-rad);
  position: relative;
}
.bg-wrapper{
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 50px 70px;
  background-image: url('/assets/shared/desktop/bg-pattern-two-circles.svg');
  background-position-y: center;
  background-repeat: no-repeat;
}
.left-side{
  margin-right: 100px;
}
.info-wrapper h2{
  position: absolute;
  top: 50px;
  margin-left: 70px;
  color: var(--clr-primary);
}
.info-wrapper .right-side p,
.info-wrapper .left-side p{
  margin-bottom: unset;
}
.info-wrapper .right-side p:first-child,
.info-wrapper .left-side p:first-child{
  font-weight: bold;
}

@media screen and (min-width: 375px) and (max-width: 768px){
  .info-wrapper{
    border-radius: unset;
    text-align: center;
  }
  .bg-wrapper{
    flex-direction: column;
  }
  .info-wrapper h2{
    position: relative;
    text-align: center;
    margin-left: unset;
  }
  .info-wrapper .left-side{
    margin-right: unset;
    margin-top: 20px;
    margin-bottom: 20px;
  }
}
</style>