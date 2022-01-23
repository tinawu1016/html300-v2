
<template>
  <div class="home">
    <b-jumbotron header="Our Top 3 Drink="title" text-variant="warning">
      <h2 v-if="hidden">Click Top 3 to find out <mark>'Top 3'</mark> link on the navigation bar!</h2>  
      <h2 v-else>Click the button!</h2>
    </b-jumbotron>

    <b-button @click="hidden = !hidden" class="home-button" v-b-tooltip.hover.bottomright="'Bwahahahahaha!'" pill variant="warning">Beware</b-button>

  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
    hidden: true
    }
  }
}
</script>

<!-- link to stylesheet -->
<style src="@/assets/styles/appStyle.css" />
