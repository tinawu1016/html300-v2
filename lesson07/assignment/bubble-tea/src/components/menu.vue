<template>
 <div>
   <b-container fluid="md" class="container">
     <b-row>
       <b-col>
        <b-button v-b-toggle.collapse-3 class="orange">Fresh Milk Tea</b-button>
       </b-col>
     </b-row>
        <b-col>
          <b-collapse visible id="collapse-3">
            <b-card class="h-activities">
              <ul>
                <!-- interpolate data from the activities array -->
                <li v-for="(data, index) in activities" :key='index'>{{ data.activity }}</li>
              </ul>
            </b-card>
          </b-collapse>
        </b-col>
   </b-container>


</div>

</template>

<script>
export default {
  name: 'Accordion',
  data() {
    return {
      /* create an array of objects */
      activities: [
      { "activity": "Oolong Milk Tea"},
      { "activity": "Pu're Milk Tea"},
      { "activity": "Black Milk Tea"},
      { "activity": "Macha Milk Te"},
      { "activity": "Green Milk Tea"}
      ],
    }
  }
}
</script>


<!-- link to stylesheet -->
<style src="@/assets/styles/appStyle.css" />
