import{L as l}from"./LocationsComponent-73a5ddd8.js";import{_ as c,C as d,p,r as s,o as m,c as u,a,b as e,F as g,d as h,e as b}from"./index-b2e78746.js";const _={components:{LocationsComponent:l,ContactBoxComponent:d,patternLeaf:p},data(){return{aboutImg:{desktop:"../../assets/about/desktop/image-about-hero.jpg",tablet:"../../assets/about/tablet/image-about-hero.jpg",mobile:"../../assets/about/mobile/image-about-hero.jpg"},worldClassImg:{desktop:"../../assets/about/desktop/image-world-class-talent.jpg",tablet:"../../assets/about/tablet/image-world-class-talent.jpg",mobile:"../../assets/about/mobile/image-world-class-talent.jpg"},realDealImg:{desktop:"../../assets/about/desktop/image-real-deal.jpg",tablet:"../../assets/about/tablet/image-real-deal.jpg",mobile:"../../assets/about/mobile/image-real-deal.jpg"},screenSize:""}},methods:{updateScreenSize(){this.screenSize=window.innerWidth>=375&&window.innerWidth<=768?"mobile":window.innerWidth>=769&&window.innerWidth<=1440?"tablet":"desktop"}},computed:{currentAboutImg(){return this.screenSize==="mobile"?this.aboutImg.mobile:this.screenSize==="desktop"?this.aboutImg.desktop:this.aboutImg.tablet},currentWorldClassImg(){return this.screenSize==="mobile"?this.worldClassImg.mobile:this.screenSize==="desktop"?this.worldClassImg.desktop:this.worldClassImg.tablet},currentRealDealImg(){return this.screenSize==="mobile"?this.realDealImg.mobile:this.screenSize==="desktop"?this.realDealImg.desktop:this.realDealImg.tablet}},mounted(){this.updateScreenSize(),window.addEventListener("resize",this.updateScreenSize)},beforeDestroy(){window.removeEventListener("resize",this.updateScreenSize)}},o=t=>(h("data-v-d896354b"),t=t(),b(),t),w={class:"about-sec"},v={class:"about-box"},f=o(()=>e("div",{class:"left-side"},[e("h1",null,"About Us"),e("p",null,"Founded in 2010, we are a creative agency that produces lasting results for our clients. We’ve partnered with many startups, corporations, and nonprofits alike to craft designs that make real impact. We’re always looking forward to creating brands, products, and digital experiences that connect with our clients’ audiences.")],-1)),y={class:"right-side"},k=["src"],I={class:"world-class-box"},C=o(()=>e("div",{class:"left-side"},[e("h1",null,"World-class talent"),e("p",null,[e("p",null,"We are a crew of strategists, problem-solvers, and technologists. Every design is thoughtfully crafted from concept to launch, ensuring success in its given market. We are constantly updating our skills in a myriad of platforms."),e("p",null,"Our team is multi-disciplinary and we are not merely interested in form — content and meaning are just as important. We give great importance to craftsmanship, service, and prompt delivery. Clients have always been impressed with our high-quality outcomes that encapsulates their brand’s story and mission.")])],-1)),S={class:"right-side"},W=["src"],z={class:"real-deal-box"},x=o(()=>e("div",{class:"left-side"},[e("h1",null,"The Real Deal"),e("p",null,[e("p",null,"As strategic partners in our clients’ businesses, we are ready to take on any challenge as our own. Solving real problems require empathy and collaboration, and we strive to bring a fresh perspective to every opportunity. We make design and technology more accessible and give you tools to measure success."),e("p",null,"We are visual storytellers in appealing and captivating ways. By combining business and marketing strategies, we inspire audiences to take action and drive real results.")])],-1)),j={class:"right-side"},L=["src"];function D(t,B,A,E,V,$){const n=s("patternLeaf"),i=s("LocationsComponent"),r=s("ContactBoxComponent");return m(),u(g,null,[a(n,{class:"pattern-leaf"}),e("section",w,[e("div",v,[f,e("div",y,[e("img",{src:this.currentAboutImg,alt:"People on Meeting table"},null,8,k)])]),e("div",I,[C,e("div",S,[e("img",{src:this.currentWorldClassImg,alt:"Woman looking at canvas"},null,8,W)])]),a(i),e("div",z,[x,e("div",j,[e("img",{src:this.currentRealDealImg,alt:"Woman hanging canvas on the wall"},null,8,L)])]),a(r)])],64)}const R=c(_,[["render",D],["__scopeId","data-v-d896354b"]]);export{R as default};
