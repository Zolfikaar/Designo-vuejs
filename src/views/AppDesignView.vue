<script>
import CategoriesCardComponent from '@/components/shared-components/CategoriesCardComponent.Vue';
import ContactBoxComponent from '@/components/shared-components/ContactBoxComponent.vue';
import CategoryInfoCardComponent from '@/components/shared-components/CategoryInfoCardComponent.vue';
import ProjectsComponent from '@/components/shared-components/ProjectsComponent.vue';
import patternLeaf from '@/components/icons/pattern-leaf.vue';

import categoryBgPattern from '@/assets/app-design/desktop/bg-pattern-intro-app.svg'
import project1Image from '@/assets/app-design/desktop/image-airfilter.jpg'
import project2Image from '@/assets/app-design/desktop/image-eyecam.jpg'
import project3Image from '@/assets/app-design/desktop/image-faceit.jpg'
import project4Image from '@/assets/app-design/desktop/image-todo.jpg'
import project5Image from '@/assets/app-design/desktop/image-loopstudios.jpg'

export default {
  components: {
    CategoriesCardComponent,
    ContactBoxComponent,
    CategoryInfoCardComponent,
    ProjectsComponent,
    patternLeaf
  },
  data() {
    return {
      categoryInfo: {
        categoryTitle: 'App Design',
        categoryBgPattern,
        categoryDescription: 'Our mobile designs bring intuitive digital solutions to your customers right at their fingertips.',
      },
      categoryProjects: {
        project1: {
          projectImage: project1Image,
          projectTitle: 'Airfilter',
          projectDescription: 'Solving the problem of poor indoor air quality by filtering the air'
        },
        project2: {
          projectImage: project2Image,
          projectTitle: 'Eyecam',
          projectDescription: 'Product that lets you edit your favorite photos and videos at any time'
        },
        project3: {
          projectImage: project3Image,
          projectTitle: 'Faceit',
          projectDescription: 'Get to meet your favorite internet superstar with the faceit app'
        },
        project4: {
          projectImage: project4Image,
          projectTitle: 'Todo',
          projectDescription: 'A todo app that features cloud sync with light and dark mode'
        },
        project5: {
          projectImage: project5Image,
          projectTitle: 'Loopstudios',
          projectDescription: 'A VR experience app made for Loopstudios'
        }
      }
    }
  }
}
</script>
<template>
  <patternLeaf class="pattern-leaf" />

  <section class="app-design-sec">

    <CategoryInfoCardComponent :cat_info="this.categoryInfo" />

    <ProjectsComponent :projects="this.categoryProjects" />

    <CategoriesCardComponent class="categories-box-comp"/>

    <ContactBoxComponent />
  </section>
</template>
<style>
.pattern-leaf{
  position: absolute;
  top:200px;
  left: 0;
  z-index: -5;
}
.category-info-box{
  background-position-x: left !important;
  background-position-y: center !important;
}

.projects-box{
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  margin-top: 150px;
}
.projects-box .project-card:nth-child(1) { grid-area: 1 / 1 / 2 / 2; }
.projects-box .project-card:nth-child(2) { grid-area: 1 / 2 / 2 / 3; }
.projects-box .project-card:nth-child(3) { grid-area: 1 / 3 / 2 / 4; }
.projects-box .project-card:nth-child(4) { grid-area: 2 / 1 / 3 / 2; }
.projects-box .project-card:nth-child(5) { grid-area: 2 / 2 / 3 / 3; }

@media screen and (min-width: 375px) and (max-width: 768px){
  .pattern-leaf{display: none;}
  .categories-box {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(2, 1fr);
  }
  .categories-box-comp .web-design { 
    grid-area: 1 / 1 / 2 / 3 !important;
    height: 250px !important;
  }
  .categories-box-comp .graphic-design {
    grid-area: 2 / 1 / 2 / 3 !important;
    height: 250px !important;
  }
  .projects-box{
      grid-template-columns:  1fr;
      grid-template-rows: repeat(5, 1fr);
  }
  .projects-box .project-card:nth-child(1) { grid-area: 1 / 1 / 2 / 2; }
  .projects-box .project-card:nth-child(2) { grid-area: 2 / 1 / 3 / 2; }
  .projects-box .project-card:nth-child(3) { grid-area: 3 / 1 / 4 / 2; }
  .projects-box .project-card:nth-child(4) { grid-area: 4 / 1 / 5 / 2; }
  .projects-box .project-card:nth-child(5) { grid-area: 5 / 1 / 6 / 2; }
}

@media screen and (min-width: 769px) and (max-width: 1440px){
  .pattern-leaf{display: none;}
  .categories-box {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(2, 1fr);
  }
  .categories-box-comp .web-design { 
    grid-area: 1 / 1 / 2 / 3 !important;
    height: 250px !important;
  }
  .categories-box-comp .graphic-design {
    grid-area: 2 / 1 / 2 / 3 !important;
    height: 250px !important;
  }
  .projects-box{
      grid-template-columns:  1fr;
      grid-template-rows: repeat(5, 1fr);
      margin-top: 100px;
  }
  .projects-box .project-card:nth-child(1) { grid-area: 1 / 1 / 2 / 2; }
  .projects-box .project-card:nth-child(2) { grid-area: 2 / 1 / 3 / 2; }
  .projects-box .project-card:nth-child(3) { grid-area: 3 / 1 / 4 / 2; }
  .projects-box .project-card:nth-child(4) { grid-area: 4 / 1 / 5 / 2; }
  .projects-box .project-card:nth-child(5) { grid-area: 5 / 1 / 6 / 2; }
}
</style>