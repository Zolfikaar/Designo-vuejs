<script>
import IconBurger from '@/components/icons/IconBurger.vue';
import IconClose from '@/components/icons/IconClose.vue';
export default {
  components: {
    IconBurger,
    IconClose
  },
  data() {
    return {
      isBurger: true,
      show: false
    };
  },
  computed: {
    currentIcon() {
      return this.isBurger ? 'IconBurger' : 'IconClose';
    },
  },
  methods: {
    toggleIcon() {
      this.isBurger = !this.isBurger
      this.show = !this.show
    },
  },
  mounted() {
    if (window.innerWidth >= 375 && window.innerWidth <= 768) {
      this.show = true; // Set show to true by default on small screens
    }
  },
};
</script>

<template>

  <div class="nav-container">
    <nav class="navbar">
    
      <RouterLink class="logo" to="/"><img src="@/assets/shared/desktop/logo-dark.png" alt="Home Page"></RouterLink>

      <div class="phone-menu-toggler">
        <button class="navbar-toggler" @click="toggleIcon">
          <component :is="currentIcon"></component>
        </button>
      </div>

      <div class="navs" id="navs" v-if="!show">
        <ul>
          <li class="nav-item"><RouterLink class="nav-link" to="/our-company">Our Company</RouterLink></li>
          <li class="nav-item"><RouterLink class="nav-link" to="/locations">Locations</RouterLink></li>
          <li class="nav-item"><RouterLink class="nav-link" to="/contact">Contact</RouterLink></li>
        </ul>
      </div>
      
    </nav>
  </div>

</template>

<style scoped>
 .navbar{
  margin: 30px 0;
  display: flex;
  justify-content: space-between;
}
.phone-menu-toggler{
  display: none;
}
.navs ul{
  display: flex;
  justify-content: space-between;
}
.navbar .navs ul li a{
  color: var(--clr-dark-gray);
}
.navbar .navs ul li:hover a{
  text-decoration: underline;
}
.navbar .navs ul li:last-child{
  margin-right: unset;
  padding-right: unset;
}
@media screen and (min-width: 375px) and (max-width: 768px){
  .phone-menu-toggler{
    display: flex;
    justify-self: flex-end;
  }
  .phone-menu-toggler .navbar-toggler{
    border: none;
    background-color: unset;
  }
  .navs{
    z-index: 20;
    position: absolute;
    width: 100%;
    height: 100vh;
    left: 0;
    top: 40px;
    background-color: rgb(0 0 0 / 48%);
  }
  .navs ul {
    flex-direction: column;
    justify-content: center;
    padding-left: unset;
    background-color: var(--clr-black);
    height: 235px;
  }
  .navs ul li {
    margin: 20px;
    padding-left: unset;
  }
  .navbar .navs ul li a{
    color: #fff;
    font-size: 24px;
    line-height: 25px;
    letter-spacing: 2px;
  }
}
</style>
