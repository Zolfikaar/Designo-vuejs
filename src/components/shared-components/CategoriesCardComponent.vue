<template>
  <div class="categories-box">
    <RouterLink class="web-design" to="/web-design">
      <div class="overlay"></div>
      <h2>web design</h2>
      <p>View Projects <svg width="7" height="10" xmlns="http://www.w3.org/2000/svg"><path d="M1 1l4 4-4 4" stroke="#E7816B" stroke-width="2" fill="none" fill-rule="evenodd"/></svg></p>
    </RouterLink>
    <RouterLink class="app-design" to="/app-design">
      <div class="overlay"></div>
      <h2>app design</h2>
      <p>View Projects <svg width="7" height="10" xmlns="http://www.w3.org/2000/svg"><path d="M1 1l4 4-4 4" stroke="#E7816B" stroke-width="2" fill="none" fill-rule="evenodd"/></svg></p>
    </RouterLink>
    <RouterLink class="graphic-design" to="/graphic-design">
      <div class="overlay"></div>
      <h2>graphic design</h2>
      <p>View Projects <svg width="7" height="10" xmlns="http://www.w3.org/2000/svg"><path d="M1 1l4 4-4 4" stroke="#E7816B" stroke-width="2" fill="none" fill-rule="evenodd"/></svg></p>
    </RouterLink>
  </div>
</template>

<style>
/************************************************************/
/*************** Main Style / Home Page Style ***************/
/************************************************************/
.categories-box {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  margin: 150px 0;
}
.categories-box a{
  text-decoration: none;
}
.overlay{
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .6);
  position: absolute;
  z-index: 1;
  border-radius: var(--bor-rad);
}
.web-design { grid-area: 1 / 1 / 3 / 2; }
.app-design { grid-area: 1 / 2 / 2 / 3; }
.graphic-design { grid-area: 2 / 2 / 3 / 3; }
.web-design{
  background-image: url('../../assets/home/desktop/image-web-design-large.jpg');
  height: 640px;
}
.app-design{
  background-image: url('../../assets/home/desktop/image-app-design.jpg');
}
.graphic-design{
  background-image: url('../../assets/home/desktop/image-graphic-design.jpg');
}
.app-design,
.graphic-design{
  height: 308px;
}
.web-design,
.app-design,
.graphic-design{
  position: relative;
  border-radius: var(--bor-rad);
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.web-design:hover > .overlay,
.app-design:hover > .overlay,
.graphic-design:hover > .overlay{
  cursor: pointer;
  background-color: rgba(var(--clr-primary-rgb), .6);
}
.web-design h2,
.app-design h2,
.graphic-design h2,
.web-design p,
.app-design p,
.graphic-design p{
  text-transform: uppercase;
  z-index: 2;
  color: white;
}
.web-design p,
.app-design p,
.graphic-design p{
  font-size: 15px;
  letter-spacing: 5px;
}
/***********************************************************/
/******************** Other Pages Style ********************/
/***********************************************************/
.web-design-sec .categories-box-comp .web-design,
.app-design-sec .categories-box-comp .app-design,
.graphic-design-sec .categories-box-comp .graphic-design{
  display: none;
}
.web-design-sec .categories-box-comp.categories-box,
.graphic-design-sec .categories-box-comp.categories-box,
.app-design-sec .categories-box-comp.categories-box {
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
}
.app-design-sec .categories-box-comp .web-design,
.graphic-design-sec .categories-box-comp .web-design,
.web-design-sec .categories-box-comp .graphic-design { grid-area: 1 / 1 / 2 / 2; height: 308px;}
.web-design-sec .categories-box-comp .app-design,
.app-design-sec .categories-box-comp .graphic-design,
.graphic-design-sec .categories-box-comp .app-design { grid-area: 1 / 2 / 2 / 3; }

@media screen and (min-width: 375px) and (max-width: 768px){
  .categories-box {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, 1fr);
    margin: 50px 0 !important;
    margin-left: 10px !important;
    margin-right: 10px !important;
  }
  .web-design { 
    grid-area: 1 / 1 / 2 / 2;
  }
  .app-design { 
    grid-area: 2 / 1 / 3 / 2; 
  }
  .graphic-design { 
    grid-area: 3 / 1 / 4 / 2; 
  }
  .web-design,
  .app-design,
  .graphic-design{
    height: 250px;
  }
}

@media screen and (min-width: 769px) and (max-width: 1440px){
  .categories-box {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(2, 1fr);
    margin: 100px 0 !important;
  }
  .web-design { 
    grid-area: 1 / 1 / 2 / 2;
  }
  .app-design { 
    grid-area: 2 / 1 / 3 / 2; 
  }
  .graphic-design { 
    grid-area: 3 / 1 / 4 / 2; 
  }
  .web-design,
  .app-design,
  .graphic-design{
    height: 250px;
  } 
  .app-design-sec .categories-box-comp .web-design,
  .graphic-design-sec .categories-box-comp .web-design,
  .web-design-sec .categories-box-comp .graphic-design {  height: unset;}
}
</style>