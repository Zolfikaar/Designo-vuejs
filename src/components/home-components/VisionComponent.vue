<template>
  <div class="vision-box">
    <div class="passionate">
      <div>
        <div class="image-box">
          <img src="../../assets/home/desktop/illustration-passionate.svg" alt="illustration passionate">
        </div>
      </div>
      <div>
        <h3 class="title">Passionate</h3>
        <p class="desc">Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions.</p>
      </div>
      
    </div>
    <div class="resourceful">
      <div>
        <div class="image-box">
          <img src="../../assets/home/desktop/illustration-resourceful.svg" alt="illustration resourceful">
        </div>
      </div>
      <div>
        <h3 class="title">Resourceful</h3>
        <p class="desc">Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients’ needs.</p>
      </div>
    </div>
    <div class="friendly">
      <div>
        <div class="image-box">
          <img src="../../assets/home/desktop/illustration-friendly.svg" alt="illustration friendly">
        </div>
      </div>
      <div>
        <h3 class="title">Friendly</h3>
        <p class="desc">We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide.</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.vision-box{
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 150px 0 50px 0;
}
.resourceful{
  margin: 0 20px;
}
.passionate,
.resourceful,
.friendly{
  width: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}
.passionate .image-box,
.resourceful .image-box,
.friendly .image-box{
  background-image: url('assets/shared/desktop/bg-pattern-small-circle.svg');
  background-repeat: no-repeat;
}
.passionate .image-box{
  background-position: right;
}
.resourceful .image-box{
  background-position: bottom !important;
}
.friendly .image-box {background-position: top;}
.title{
  margin: 40px 0;
  text-transform: uppercase;
}
.desc{text-align: center;}

@media screen and (min-width: 375px) and (max-width: 768px){
  .vision-box{
    flex-direction: column;
  }
  .resourceful{
    margin: 100px 0;
  }
  .passionate,
  .resourceful,
  .friendly{
    width: 100%;
  }
  .title{
    margin: 50px 0 20px 0;
  }
  .title,
  .desc{
    margin-left:  20px;
    margin-right:  20px;
  }
}

@media screen and (min-width: 769px) and (max-width: 1440px){
  .vision-box{
    flex-direction: column;
  }
  .resourceful{
    margin: 50px 0;
  }
  .passionate,
  .resourceful,
  .friendly{
    flex-direction: row;
    width: 100%;
  }
  .title{
    margin: 20px 0;
  }
  .title,
  .desc{
    text-align: left;
    margin-left: 55px;
  }
}
</style>