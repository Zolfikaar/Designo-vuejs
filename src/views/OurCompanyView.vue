<script>
import LocationsComponent from '@/components/shared-components/LocationsComponent.vue'
import ContactBoxComponent from '@/components/shared-components/ContactBoxComponent.vue';
import patternLeaf from '@/components/icons/pattern-leaf.vue';

export default {
  components: {
    LocationsComponent,
    ContactBoxComponent,
    patternLeaf
  },
  data() {
    return {
      aboutImg:{
        desktop: 'src/assets/about/desktop/image-about-hero.jpg',
        tablet: 'src/assets/about/tablet/image-about-hero.jpg',
        mobile: 'src/assets/about/mobile/image-about-hero.jpg'
      },
      worldClassImg:{
        desktop: 'src/assets/about/desktop/image-world-class-talent.jpg',
        tablet: 'src/assets/about/tablet/image-world-class-talent.jpg',
        mobile: 'src/assets/about/mobile/image-world-class-talent.jpg'
      },
      realDealImg:{
        desktop: 'src/assets/about/desktop/image-real-deal.jpg',
        tablet: 'src/assets/about/tablet/image-real-deal.jpg',
        mobile: 'src/assets/about/mobile/image-real-deal.jpg'
      },
      screenSize: '',
    }
  },
  methods: {
    updateScreenSize() {
      this.screenSize = window.innerWidth >= 375 && window.innerWidth <= 768 
      ? 'mobile'
      : window.innerWidth >= 769 && window.innerWidth <= 1440 
      ? 'tablet' : 'desktop';
    }
  },
  computed: {
    currentAboutImg() {
      return this.screenSize === 'mobile' ? this.aboutImg.mobile : this.screenSize === 'desktop' ? this.aboutImg.desktop : this.aboutImg.tablet;
    },
    currentWorldClassImg() {
      return this.screenSize === 'mobile' ? this.worldClassImg.mobile : this.screenSize === 'desktop' ? this.worldClassImg.desktop : this.worldClassImg.tablet;
    },
    currentRealDealImg() {
      return this.screenSize === 'mobile' ? this.realDealImg.mobile : this.screenSize === 'desktop' ? this.realDealImg.desktop : this.realDealImg.tablet;
    }
  },
  mounted() {
    // Check the screen size on component mount
    this.updateScreenSize();
    // Add an event listener to update the screen size when it changes
    window.addEventListener('resize', this.updateScreenSize);
  },
  beforeDestroy() {
    // Remove the event listener when the component is destroyed
    window.removeEventListener('resize', this.updateScreenSize);
  },
}
</script>
<template>
  <patternLeaf class="pattern-leaf" />

  <section class="about-sec">

    <div class="about-box">
      <div class="left-side">
        <h1>About Us</h1>
       <p>Founded in 2010, we are a creative agency that produces lasting results for our clients. We’ve partnered with many startups, corporations, and nonprofits alike to craft designs that make real impact. We’re always looking forward to creating brands, products, and digital experiences that connect with our clients’ audiences.</p>
      </div>
      
      <div class="right-side">
        <img :src="this.currentAboutImg" alt="People on Meeting table">
      </div>
    </div>

    <div class="world-class-box">
      <div class="left-side">
        <h1>World-class talent</h1>
        <p>
          <p>We are a crew of strategists, problem-solvers, and technologists. Every design is thoughtfully crafted from concept to launch, ensuring success in its given market. We are constantly updating our skills in a myriad of platforms.</p>
           <p>Our team is multi-disciplinary and we are not merely interested in form — content and meaning are just as important. We give great importance to craftsmanship, service, and prompt delivery. Clients have always been impressed with our high-quality outcomes that encapsulates their brand’s story and mission.</p>
        </p>
      </div>
      
      <div class="right-side">
        <img :src="this.currentWorldClassImg" alt="Woman looking at canvas">
      </div>
    </div>

    <LocationsComponent />

    <div class="real-deal-box">
      <div class="left-side">
        <h1>The Real Deal</h1>
        <p>
          <p>As strategic partners in our clients’ businesses, we are ready to take on any challenge as our own. Solving real problems require empathy and collaboration, and we strive to bring a fresh perspective to every opportunity. We make design and technology more accessible and give you tools to measure success.</p>
           <p>We are visual storytellers in appealing and captivating ways. By combining business and marketing strategies, we inspire audiences to take action and drive real results.</p> 
        </p>
      </div>
      
      <div class="right-side">
        <img :src="this.currentRealDealImg" alt="Woman hanging canvas on the wall">
      </div>
    </div>

    <ContactBoxComponent />
  </section>
</template>

<style scoped>
.pattern-leaf{
  position: absolute;
  top:400px;
  left: 0;
  z-index: -5;
}
.world-class-box,
.about-box,
.real-deal-box{
  margin: 50px 0;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  background-position-y: bottom;
  background-repeat: no-repeat;
  border-radius: var(--bor-rad);
}
.about-box .left-side,
.world-class-box .left-side,
.real-deal-box .left-side{
  width: 40%;
  margin: 0 100px;
  color: white;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
}
.about-sec{
  margin: 50px 0 0 0;
}
.about-box{
  height: 480px;
  background-color: var(--clr-primary);
  background-image: url('../assets/about/desktop/bg-pattern-hero-about-desktop.svg');
}
.about-box .left-side p,
.world-class-box .left-side p,
.real-deal-box .left-side p{
  margin-right: 10px;
  margin-top: 40px;
}
.about-box .right-side img{
  height: 100%;
  border-top-right-radius: var(--bor-rad);
  border-bottom-right-radius: var(--bor-rad);
}
.world-class-box,
.real-deal-box{
  margin: 150px 0;
  height: 640px;
  flex-direction: row-reverse;
  background: rgb(253,243,240);
  background: linear-gradient(90deg, rgba(253,243,240,1) 35%);
  background-image: url('../assets/shared/desktop/bg-pattern-two-circles.svg');
  background-position-y: bottom;
  background-position-x: center;
  background-repeat: no-repeat;
}
.world-class-box .left-side p,
.real-deal-box .left-side p{
  color: var(--clr-dark-gray);
}
.world-class-box .left-side h1,
.real-deal-box .left-side h1{
  color: var(--clr-primary);
}
.world-class-box .right-side img{
  border-top-left-radius: var(--bor-rad);
  border-bottom-left-radius: var(--bor-rad);
}
.real-deal-box{
  flex-direction: row;
  background-position-x: left;
}
.real-deal-box .right-side img{
  border-top-right-radius: var(--bor-rad);
  border-bottom-right-radius: var(--bor-rad);
}

@media screen and (min-width: 375px) and (max-width: 768px){
  .pattern-leaf{display: none;}
  .container{
    width: 100% !important;
  }
  .about-sec{
    margin: 170px 0 0 0;
  }
  .about-box{
    background-image: url('../assets/about/mobile/bg-pattern-hero-about-mobile.svg');
    background-position-y: top;
    background-position-x: right;
  }
  .world-class-box,
  .about-box,
  .real-deal-box{
    flex-direction: column-reverse;
    border-radius: unset;
    margin-bottom: 0;
  }
  .world-class-box,
  .real-deal-box{
    margin-top: 122px;
  }
  .location-cards{
    margin: 50px !important;
  }
  .about-box .left-side,
  .world-class-box .left-side,
  .real-deal-box .left-side{
    text-align: center;
    width: 100%;
    margin: 0 0;
    position: unset;
    transform: unset;
    padding: 0 20px 50px 20px;
  }
  .about-box .left-side h1,
  .world-class-box .left-side h1,
  .real-deal-box .left-side h1{
    padding-top: 30px;
    padding-bottom: 20px;
  }
  .about-box .left-side p,
  .world-class-box .left-side p,
  .real-deal-box .left-side p{
    margin: unset;
  }
  .real-deal-box .right-side img,
  .about-box .right-side img,
  .world-class-box .right-side img{
    width: 100%;
    border-radius: unset;
  }
}
@media screen and (min-width: 769px) and (max-width: 1440px){
  .pattern-leaf{display: none;}
  .about-sec{
    margin: 150px 0 0 0;
  }
  .about-box{
    background-position: -800% 160%;
  }
  .world-class-box,
  .about-box,
  .real-deal-box{
    flex-direction: column-reverse;
  }
  .world-class-box,
  .real-deal-box{
    margin-top: 250px;
  }
  .about-box .left-side,
  .world-class-box .left-side,
  .real-deal-box .left-side{
    text-align: center;
    width: 100%;
    margin: 0 0;
    position: unset;
    transform: unset;
  }
  .about-box .left-side h1,
  .world-class-box .left-side h1,
  .real-deal-box .left-side h1{
    margin-top: 50px;
  }
  .about-box .left-side p,
  .world-class-box .left-side p,
  .real-deal-box .left-side p{
    margin: 30px 47px 50px 47px;
  }
  .real-deal-box .right-side img,
  .about-box .right-side img,
  .world-class-box .right-side img{
    width: 100%;
    border-top-right-radius: var(--bor-rad);
    border-top-left-radius: var(--bor-rad);
    border-bottom-right-radius: unset;
    border-bottom-left-radius: unset;
  }
}
</style>
