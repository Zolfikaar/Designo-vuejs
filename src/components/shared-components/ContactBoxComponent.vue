<template>
  <div class="call-to-action">
    <div>
      <h2>Let’s talk about your project</h2>
      <p>Ready to take it to the next level? Contact us today and find out how our expertise can help your business grow.</p>
    </div>
    <div>
      <router-link to="/contact"><button class="btn btn-dark">get In touch</button></router-link>
    </div>
  </div>
</template>

<style scoped>
.call-to-action{
  position: relative;
  transform: translateY(20%);
  border-radius: var(--bor-rad);
  margin: 0 auto;
  width: 1111px;
  height: 292px;
  background-color: var(--clr-primary);
  background-image: url('../../assets/shared/desktop/bg-pattern-call-to-action.svg');
  background-position-x: right;
  background-position-y: center;
  color: white;
  padding: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.call-to-action h2{
  width: 40%;
}
.call-to-action p{
  width: 63%;
  margin-top: 20px;
}

@media screen and (min-width: 375px) and (max-width: 768px){
  .call-to-action{
    transform: translateY(55%);
    text-align: center;
    padding: 60px 20px;
    width: 327px;
    height: 379px;
    flex-direction: column;
    background-position-x: center;
    background-position-y: center;
  }
  .call-to-action h2{
    width: 80%;
    margin: 0 auto;
  }
  .call-to-action p{
    width: 100%;
    margin-bottom: 40px;
  }
}

@media screen and (min-width: 769px) and (max-width: 1440px){
  .call-to-action{
    text-align: center;
    padding: 50px 20px;
    width: 690px;
    height: 350px;
    flex-direction: column;
    background-position-x: center;
    background-position-y: center;
  }
  .call-to-action h2{
    width: 60%;
    margin: 0 auto;
  }
  .call-to-action p{
    width: 70%;
    margin: 20px auto 20px auto;
  }
}
</style>