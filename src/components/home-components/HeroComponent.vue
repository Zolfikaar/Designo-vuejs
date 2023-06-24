<template>
  <div class="hero-box">
      <div class="left-side">
        <h1>Award-winning custom designs and digital branding solutions</h1>
        <p>With over 10 years in the industry, we are experienced in creating fully responsive websites, app design, and engaging brand experiences. Find out more about our services.</p>
        <button class="btn btn-dark">Learn More</button>
      </div>
      <div class="right-side">
        <img src="@/assets/home/desktop/image-hero-phone.png" alt="">
      </div>
    </div>
</template>

<style scoped>
.hero-box{
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  background-color: var(--clr-primary);
  height: 640px;
  padding: 0px 0px 0 0px;
  border-radius: var(--bor-rad);
  overflow: hidden;
  margin-bottom: 150px;
  background-image: url('@/assets/home/desktop/bg-pattern-hero-home.svg');
  background-repeat: no-repeat;
  background-position-x: right;
}
.hero-box .left-side{
  margin: 130px 0 0 100px;
}
.hero-box .left-side h1,
.hero-box .left-side p{
  color: var(--clr-white);
}
.hero-box .left-side h1{
  width: 70%;
}
.hero-box .left-side p{
  width: 65%;
  margin: 40px 0;
}
.hero-box .left-side button{
  text-transform: uppercase;
}
.hero-box .right-side{
  width: 40%;
  display: flex;
  justify-content: center;
} 
.hero-box .right-side img{
  position: relative;
  right: 40px;
  top: -40px;
  background-size: cover;
}

@media screen and (min-width: 375px) and (max-width: 768px){
  .container{
    width: 100%;
  }
  .hero-box{
    flex-direction: column;
    height: 843px;
    background-position-x: left;
    background-position-y: center;
    border-radius: unset;
  }
  .hero-box .left-side{
    margin: 80px 12px 0 12px;
    text-align: center;
  }
  .hero-box .left-side p{
    margin: 30px 0;
    padding: 0 15px;
  }
  .hero-box .left-side h1,
  .hero-box .left-side p{
    width: 100%;
  }
  .hero-box .right-side{
    width: 100%;
  }
  .hero-box .right-side img{
    position: relative;
    right: 0;
    top: -105px;
    background-size: cover;
  }
}

@media screen and (min-width: 769px) and (max-width: 1440px){
  .hero-box{
    flex-direction: column;
    height: 843px;
    background-position: 324% 52%
  }
  .hero-box .left-side{
    margin: 60px 110px 0 110px;
    text-align: center;
  }
  .hero-box .left-side p{
    margin: 30px 0px;
  }
  .hero-box .left-side h1,
  .hero-box .left-side p{
    width: 100%;
  }
  .hero-box .left-side p{
    padding: 0 15px;
  }
  .hero-box .right-side{
    width: 100%;
  }
  .hero-box .right-side img{
    position: relative;
    right: 0;
    top: -110px;
    background-size: cover;
  }
}
</style>