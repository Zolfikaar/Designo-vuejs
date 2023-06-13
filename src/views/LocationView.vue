<script>
import ContactBoxComponent from '@/components/shared-components/ContactBoxComponent.vue'
import mapComponent from '@/components/location-components/mapComponent.vue';
import infoComponent from '@/components/location-components/infoComponent.vue';
export default {
  data() {
    return {
        address1:{
          id: 1,
          country: 'Canada',
          city: 'Toronto',
          office_name: 'Designo Central Office',
          street: '3886 Wellington Street',
          province: 'Ontario',
          postalCode: 'M9C 3J5',
          phone: '+1 253-863-8967',
          email: 'contact@designo.co',
          map: {
            desktop: '../assets/locations/desktop/image-map-canada.png',
            tablet: '../assets/locations/tablet/image-map-canada.png'
          }
        },
        address2: {
          id: 2,
          country: 'Australia',
          city: 'New South',
          office_name: 'Designo AU Office',
          street: '19 Balonne Street',
          province: 'Wales',
          postalCode: '2443',
          phone: '(02) 6720 9092',
          email: 'contact@designo.au',
          map: {
            desktop: '../assets/locations/desktop/image-map-australia.png',
            tablet: '../assets/locations/tablet/image-map-australia.png'
          }
        },
        address3: {
          id: 3,
          country: 'United Kingdom',
          city: 'Rhyd-y-fro',
          office_name: 'Designo UK Office',
          street: '13 Colorado Way',
          province: 'SAB',
          postalCode: '9GA',
          phone: '078 3115 1400',
          email: 'contact@designo.uk',
          map: {
            desktop: '../assets/locations/desktop/image-map-united-kingdom.png',
            tablet: '../assets/locations/tablet/image-map-united-kingdom.png'
          }
        },
        screenSize: '',
    }
  },
  computed: {
    currentAddress1Map() {
      return this.screenSize === 'desktop' ? this.address1.map.desktop : this.address1.map.tablet;
    },
    currentAddress2Map() {
      return this.screenSize === 'desktop' ? this.address2.map.desktop : this.address2.map.tablet;
    },
    currentAddress3Map() {
      return this.screenSize === 'desktop' ? this.address3.map.desktop : this.address3.map.tablet;
    }
  },
  components: {
    ContactBoxComponent,
    mapComponent,
    infoComponent
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
  methods: {
    updateScreenSize() {
      this.screenSize = window.innerWidth >= 769 && window.innerWidth <= 1440 ? 'tablet' : 'desktop';
    }
  }
}
</script>
<template>
  <section class="locations">
    
    <div class="locations-wrapper">

          <div class="location-box">
            <div class="info-box">
              <infoComponent :address="address1" />
            </div>
            <div class="map-box">
              <mapComponent :map="currentAddress1Map" />
            </div>
          </div>

          <div class="location-box">
            <div class="map-box">
              <mapComponent :map="currentAddress2Map" />
            </div>
            <div class="info-box">
              <infoComponent :address="address2" />
            </div>
          </div>

          <div class="location-box">
            <div class="info-box">
              <infoComponent :address="address3" />
            </div>
            <div class="map-box">
              <mapComponent :map="currentAddress2Map" />
            </div>
          </div>
    </div>

    <ContactBoxComponent />
  </section>
</template>

<style scoped>
.locations {
  margin: 50px 0 0 0;
}
.location-box{
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.location-box:nth-child(2) {
  margin: 10px 0;
}
.info-box{
  width: 100%;
  margin-right: 20px;
}
.location-box:nth-child(2) .info-box{
  margin-right: unset;
  margin-left: 20px;
}

@media screen and (min-width: 375px) and (max-width: 768px){
  .location-box{
    flex-direction: column-reverse;
  }
  .location-box:nth-child(2){
    flex-direction: column;
    margin: 100px 0;
  }
  .location-box:nth-child(2) .info-box{
    margin-left: unset;
  }
  .info-box{
    margin-top: unset;
  }
}
@media screen and (min-width: 769px) and (max-width: 1440px){
  .location-box{
    flex-direction: column-reverse;
  }
  .location-box:nth-child(2){
    flex-direction: column;
    margin: 100px 0;
  }
  .location-box:nth-child(2) .info-box{
    margin-left: unset;
  }
  .info-box{
    margin-top: 20px;
  }
}
</style>