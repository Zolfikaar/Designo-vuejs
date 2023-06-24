<script>
import CategoriesCardComponent from '@/components/shared-components/CategoriesCardComponent.Vue';
import ContactBoxComponent from '@/components/shared-components/ContactBoxComponent.vue';
import CategoryInfoCardComponent from '@/components/shared-components/CategoryInfoCardComponent.vue';
import ProjectsComponent from '@/components/shared-components/ProjectsComponent.vue';
import patternLeaf from '@/components/icons/pattern-leaf.vue';

import categoryBgPattern from '@/assets/graphic-design/desktop/bg-pattern-intro-graphic.svg'
import project1Image from '@/assets/graphic-design/desktop/image-change.jpg'
import project2Image from '@/assets/graphic-design/desktop/image-boxed-water.jpg'
import project3Image from '@/assets/graphic-design/desktop/image-science.jpg'

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
        categoryTitle: 'Graphic Design',
        categoryBgPattern,
        categoryDescription: 'We deliver eye-catching branding materials that are tailored to meet your business objectives.',
      },
      categoryProjects: {
        project1: {
          projectImage: project1Image,
          projectTitle: 'Tim Brown',
          projectDescription: 'A book cover designed for Tim Brown’s new release, ‘Change’'
        },
        project2: {
          projectImage: project2Image,
          projectTitle: 'Boxed water',
          projectDescription: 'A simple packaging concept made for Boxed Water'
        },
        project3: {
          projectImage: project3Image,
          projectTitle: 'Science!',
          projectDescription: 'A poster made in collaboration with the Federal Art Project'
        }
      }
    }
  }
}
</script>
<template>
  <patternLeaf class="pattern-leaf" />

  <section class="graphic-design-sec">

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
  grid-template-rows: repeat(1, 1fr) !important;
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  margin-top: 150px;
}
.projects-box .project-card:nth-child(1) { grid-area: 1 / 1 / 2 / 2; }
.projects-box .project-card:nth-child(2) { grid-area: 1 / 2 / 2 / 3; }
.projects-box .project-card:nth-child(3) { grid-area: 1 / 3 / 2 / 4; }

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
  .categories-box-comp .app-design { 
    grid-area: 2 / 1 / 2 / 3 !important; 
    height: 250px !important;
  }
  .projects-box{
      grid-template-columns:  1fr;
      grid-template-rows: repeat(1, 1fr);
  }
  .projects-box .project-card:nth-child(1) { grid-area: 1 / 1 / 2 / 2; }
  .projects-box .project-card:nth-child(2) { grid-area: 2 / 1 / 3 / 2; }
  .projects-box .project-card:nth-child(3) { grid-area: 3 / 1 / 4 / 2; }
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
  .categories-box-comp .app-design { 
    grid-area: 2 / 1 / 2 / 3 !important; 
    height: 250px !important;
  }
  .projects-box{
      grid-template-columns:  1fr;
      grid-template-rows: repeat(1, 1fr);
      margin-top: 100px;
  }
  .projects-box .project-card:nth-child(1) { grid-area: 1 / 1 / 2 / 2; }
  .projects-box .project-card:nth-child(2) { grid-area: 2 / 1 / 3 / 2; }
  .projects-box .project-card:nth-child(3) { grid-area: 3 / 1 / 4 / 2; }
}
</style>