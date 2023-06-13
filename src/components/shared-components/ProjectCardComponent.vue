<script>
export default {
  props: {
    project: {
      type: Object,
      required: true
    }
  }
}
</script>
<template>
  <div class="project-card">
    <img :src="project.projectImage" alt="">
    <div class="text-wrapper">
      <h3>{{ project.projectTitle }}</h3>
      <p>{{ project.projectDescription }}</p>
    </div>
  </div>
</template>

<style scoped>
.project-card{
  display: flex;
  flex-direction: column;
  width: 350px;
  height: 478px;
  text-align: center;
  margin: 20px 0;
  transition: all .3s ease-in-out;
}
.project-card img{
  border-top-right-radius: var(--bor-rad);
  border-top-left-radius: var(--bor-rad);
}
.text-wrapper{
  background: rgb(253,243,240);
  background: linear-gradient(90deg, rgba(253,243,240,1) 35%);
  border-bottom-right-radius: var(--bor-rad);
  border-bottom-left-radius: var(--bor-rad);
  min-height: 138px;
}
.project-card .text-wrapper h3{
  color: var(--clr-primary);
  text-transform: uppercase;
  margin: 20px 0;
}
.project-card .text-wrapper p{
  margin-bottom: 20px;
  padding: 0 20px;
}
.project-card:hover{
  cursor: pointer;
}
.project-card:hover .text-wrapper h3{
  color: white;
}
.project-card:hover .text-wrapper{
  background-color: var(--clr-primary);
  color: white;
}

@media screen and (min-width: 769px) and (max-width: 1440px){
  .project-card{
    flex-direction: row;
    width: 100%;
    height: 310px;
    margin: unset;
  }
  .project-card img{
    width: 50%;
    border-top-left-radius: var(--bor-rad);
    border-bottom-left-radius: var(--bor-rad);
  }
  .text-wrapper{
    min-height: unset;
    border-top-right-radius: var(--bor-rad);
    border-bottom-right-radius: var(--bor-rad);
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
}
</style>