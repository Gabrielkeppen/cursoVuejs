<template>
  <v-app>

    <navegationBar />
    
    <titleBox />

    <carouselPics />

    <pagFooter />

  </v-app>
</template>

<script>
import NavegationBar from './components/navegation-bar.vue'
import TitleBox from './components/title.vue'
import CarouselPics from './components/carousel.vue'
import PagFooter from './components/footer.vue'

export default {
  components: {
    'navegationBar': NavegationBar,
    'titleBox': TitleBox,
    'carouselPics': CarouselPics,
    'pagFooter': PagFooter,
  },
}
</script>
