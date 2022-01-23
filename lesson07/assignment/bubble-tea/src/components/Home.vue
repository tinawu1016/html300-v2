
<template>
  <div class="home">
    <b-jumbotron header="Our Top 3 Popular Drink" class="title" text-variant="warning">
      <h2 v-if="hidden">Please click <mark>'Top 3'</mark> to find out!</h2>
      <h2 v-else>Click the button!</h2>
    </b-jumbotron>

    <b-button @click="hidden = !hidden" class="home-button" v-b-tooltip.hover.bottomright="'WARNING!'" pill variant="warning">© 2022 TEAK TOK | Seattle, WA</b-button>

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
