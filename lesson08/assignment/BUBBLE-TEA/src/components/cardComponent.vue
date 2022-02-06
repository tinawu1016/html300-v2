<template>
  <div class="cardComponent">
    <div class="card-instructor">
      <div class="c1" @click="toggleShowBorder">
        <div v-if=toggleBorder class="yellowBorder">
          <img class="personimg" :src="cardComponent.image" alt="Avatar" />
        </div>
         <div v-else>
          <img class="personimg" :src="cardComponent.image" alt="Avatar" />
        </div>
        <div>
          <p>{{ cardComponent.name }}</p>
        </div>
        <div>
          <p class="titlename">{{ cardComponent.titlename }}</p>
        </div>
      </div>
      <div class="c2">
        <div class="card-text-box">
          <p class="cardp"><b>Title:</b> {{ cardComponent.title }}</p>
          <p class="cardp"><b>Experience</b>: {{ cardComponent.Experience }}</p>
          <p class="cardp"><b>Bio:</b> {{ cardComponent.Bio }}</p>

          <div class="linkedin">
            <img src="../img/linkedin.svg" alt="Italian Trulli" />
            <p class="linkedin-text">bubble-tea.linkedinprofile.com</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {imageMixin} from '../mixins/imageMixin';
export default {
  name: "cardComponent",
  mixins: [imageMixin],
  props: ["cardComponent"],
  data() {
    return {

    };
  },

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.yellowBorder {
  border-style: solid;
  border-color: yellow;
}
.personimg {
  width: 100%;
  object-fit: cover;
  border-radius: 50%;
}
p {
  color: dimgray;
  text-align: center;
  font-size: 14px;
  padding: 0em;
  margin: 0em;
}

.titlename {
  color: lightgrey;
  text-align: center;
  font-size: 14px;
  padding: 0em;
  margin: 0em;
  font-style: italic;
}

.c1 {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: space-between;
  margin: 0.5em;
  width: 33%;
}

.c2 {
  display: flex;
  align-items: left;
  justify-content: center;
  background-color: darkgrey;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  margin: 1em;
  opacity: 0.9;
  width: 67%;
}

.linkedin {
  display: flex;
  width: 25%;
  flex-direction: row;
  vertical-align: baseline;
  padding-top: 1em;
}

.linkedin-text {
  font-size: 14px;
  padding: 0.2em;
  padding-top: 6px;
  padding-left: 4px;
  font-family: "Work Sans", sans-serif;
  color: black;
  font-weight: bolder;
  text-align: left;
  margin: 0em;
}

.card-text-box {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: whitesmoke;
  margin-left: 1em;
  margin-right: 1em;
  margin-top: 1em;
  margin-bottom: 1em;
  position: relative;
  opacity: 0.6;
}

.cardp {
  font-family: "Work Sans", sans-serif;
  font-size: 14px;
  color: black;
  text-align: left;
  margin: 0em;
  padding: 0.2em;
}
</style>
