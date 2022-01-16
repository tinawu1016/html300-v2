<template>
  <div class="images">
    <b-carousel
    id="movie-carousel"
      v-model="slide"
      indicators
      :interval="4000"
    >

<!-- iterate through the drink array to display the images in the carousel -->
      <b-carousel-slide class="movie-slide" v-for="(drink, index) in drink" :key='index'
          :img-src="drink.image"
          :caption="drink.drinkTitle"
          :text="drink.rating">

      </b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
export default {

  data() {
    return {
      /* array of objects */
        movies: [
          {
          rating: "#1",
          drinkTitle: "BLACK MILK TEA",
          image: [
          require('@/assets/black.jpeg'),
          ],
        },
        {
          rating: "#2",
          movieTitle: "PASSION FRUIT TEA",
          image: [
            require('@/assets/passion.jpeg'),
          ],
        },
        {
          rating: "#3",
          movieTitle: "GRAPEFRUIT GREEN TEA",
          image: [
            require('@/assets/grape.jpeg'),
          ],
        },

        },

      ],
    }
  }
}
</script>

<!-- link to stylesheet -->
<style src="@/assets/styles/appStyle.css" />
