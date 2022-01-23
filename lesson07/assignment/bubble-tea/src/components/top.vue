<template>
  <div class="images">
    <b-carousel
    id="drink-carousel"
      v-model="slide"
      indicators
      :interval="3000"
    >

<!-- iterate through the movies array to display the images in the carousel -->
      <b-carousel-slide class="drink-slide" v-for="(drink, index) in drink" :key='index'
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
        drink: [
          {
          rating: "#1",
          drinkTitle: "Black Milk Tea",
          image: [
          require('@/assets/BLACK.png'),
          ],
        },
        {
          rating: "#2",
            drinkTitle: "GRAPEFRUIT GREEN TEA",
          image: [
            require('@/assets/GRAPE.png'),
          ],
        },
        {
          rating: "#3",
            drinkTitle: "PASSTION FRUIT TEA",
          image: [
            require('@/assets/PASSION.png'),
          ],
        },

      ],
    }
  }
}
</script>

<!-- link to stylesheet -->
<style src="@/assets/styles/appStyle.css" />
