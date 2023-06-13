<script>
import CategoriesCardComponent from '@/components/shared-components/CategoriesCardComponent.Vue';
import ContactBoxComponent from '@/components/shared-components/ContactBoxComponent.vue';
import CategoryInfoCardComponent from '@/components/shared-components/CategoryInfoCardComponent.vue';
import ProjectsComponent from '@/components/shared-components/ProjectsComponent.vue';
import patternLeaf from '@/components/icons/pattern-leaf.vue';

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
        categoryTitle: 'Web Design',
        categoryBgPattern: '../../assets/web-design/desktop/bg-pattern-intro-web.svg',
        categoryDescription: 'We build websites that serve as powerful marketing tools and bring memorable brand experiences.',
      },
      categoryProjects: {
        project1: {
          projectImage: '../../assets/web-design/desktop/image-express.jpg',
          projectTitle: 'Express',
          projectDescription: 'A multi-carrier shipping website for ecommerce businesses'
        },
        project2: {
          projectImage: '../../assets/web-design/desktop/image-transfer.jpg',
          projectTitle: 'Transfer',
          projectDescription: 'Site for low-cost money transfers and sending money within seconds'
        },
        project3: {
          projectImage: '../../assets/web-design/desktop/image-photon.jpg',
          projectTitle: 'Photon',
          projectDescription: 'A state-of-the-art music player with high-resolution audio and DSP effects'
        },
        project4: {
          projectImage: '../../assets/web-design/desktop/image-builder.jpg',
          projectTitle: 'Builder',
          projectDescription: 'Connects users with local contractors based on their location'
        },
        project5: {
          projectImage: '../../assets/web-design/desktop/image-blogr.jpg',
          projectTitle: 'Bloger',
          projectDescription: 'Blogr is a platform for creating an online blog or publication'
        },
        project6: {
          projectImage: '../../assets/web-design/desktop/image-camp.jpg',
          projectTitle: 'Camp',
          projectDescription: 'Get expert training in coding, data, design, and digital marketing'
        },
      }
    }
  }
}
</script>
<template>
  <patternLeaf class="pattern-leaf" />

  <section class="web-design-sec">

    <CategoryInfoCardComponent :cat_info="this.categoryInfo" />

    <ProjectsComponent :projects="this.categoryProjects" />

    <CategoriesCardComponent class="categories-box-comp"/>

    <ContactBoxComponent />
  </section>
</template>

<style >
.pattern-leaf{
  position: absolute;
  top:200px;
  left: 0;
  z-index: -5;
}
.category-info-box{
  background-position-x: right !important;
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
.projects-box .project-card:nth-child(6) { grid-area: 2 / 3 / 3 / 4; }

@media screen and (min-width: 375px) and (max-width: 768px){
  .pattern-leaf{display: none;}
  .categories-box {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(2, 1fr);
  }
  .categories-box-comp .app-design { 
    grid-area: 2 / 1 / 2 / 3 !important; 
  }
  .categories-box-comp .graphic-design { 
    grid-area: 1 / 1 / 2 / 3 !important;
    height: 250px !important;
  }
  .projects-box{
      grid-template-columns:  1fr;
      grid-template-rows: repeat(6, 1fr);
  }
  .projects-box .project-card:nth-child(1) { grid-area: 1 / 1 / 2 / 2; }
  .projects-box .project-card:nth-child(2) { grid-area: 2 / 1 / 3 / 2; }
  .projects-box .project-card:nth-child(3) { grid-area: 3 / 1 / 4 / 2; }
  .projects-box .project-card:nth-child(4) { grid-area: 4 / 1 / 5 / 2; }
  .projects-box .project-card:nth-child(5) { grid-area: 5 / 1 / 6 / 2; }
  .projects-box .project-card:nth-child(6) { grid-area: 6 / 1 / 7 / 2; }
}

@media screen and (min-width: 769px) and (max-width: 1440px){
  .pattern-leaf{display: none;}
  .categories-box {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(2, 1fr);
  }
  .categories-box-comp .app-design { 
    grid-area: 2 / 1 / 2 / 3 !important; 
  }
  .categories-box-comp .graphic-design { 
    grid-area: 1 / 1 / 2 / 3 !important;
    height: 250px !important;
  }
  .projects-box{
      grid-template-columns:  1fr;
      grid-template-rows: repeat(6, 1fr);
      margin-top: 100px;
  }
  .projects-box .project-card:nth-child(1) { grid-area: 1 / 1 / 2 / 2; }
  .projects-box .project-card:nth-child(2) { grid-area: 2 / 1 / 3 / 2; }
  .projects-box .project-card:nth-child(3) { grid-area: 3 / 1 / 4 / 2; }
  .projects-box .project-card:nth-child(4) { grid-area: 4 / 1 / 5 / 2; }
  .projects-box .project-card:nth-child(5) { grid-area: 5 / 1 / 6 / 2; }
  .projects-box .project-card:nth-child(6) { grid-area: 6 / 1 / 7 / 2; }
}
</style>