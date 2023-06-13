<script>
import ProjectCardComponent from '@/components/shared-components/ProjectCardComponent.vue';

export default {
  components: {
    ProjectCardComponent,
  },
  props: {
    projects: {
      type: Object,
      required: true
    }
  }
}
</script>

<template>
  <div class="projects-box">

    <ProjectCardComponent class="project-card" v-for="(project, index) in projects" :key="index" :project="project"/>

  </div>
</template>

<style scoped>
@media screen and (min-width: 375px) and (max-width: 768px){
  .projects-box {
    margin-top: 50px !important;
  }
  .projects-box .project-card{
    margin: 0 auto;
  }
}
</style>