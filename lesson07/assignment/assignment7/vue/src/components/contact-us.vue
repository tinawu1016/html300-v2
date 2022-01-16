<template>
  <div class="grid">
      <!-- 3 columns of equal width -->

      <b-container fluid class="grid-container1">
        <b-row>
          <b-col>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque fugiat minima voluptatibus quaerat quasi dolorum placeat libero ut quam nulla tenetur rem aut incidunt nobis ducimus error, quod corporis nam.</b-col>
          <b-col>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio, ratione.</b-col>
          <b-col>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, ratione. Quisquam cupiditate odit veniam ipsum, ullam culpa asperiores aliquid fugiat!</b-col>
        </b-row>

      </b-container>

      <!-- 2 columns, 1st expands 3 columns, 2nd expands 9 columns -->
      <b-container fluid class="grid-container2">
        <b-row>
          <b-col cols="3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime incidunt iure asperiores architecto quae rerum at laudantium praesentium. Soluta ex dicta molestias, obcaecati officia porro nihil velit iste, voluptatem aspernatur ad unde facilis corrupti accusantium, quisquam pariatur aliquid suscipit ratione quia. Tenetur, voluptatum quaerat vel doloremque odit accusamus tempora enim.</b-col>
          <b-col cols="9">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint voluptate possimus nesciunt sit quas ut itaque deserunt rem cumque consectetur.</b-col>
        </b-row>

      </b-container>

      <!-- 3 columns of equal width
            *columns will display on same row in large viewport
            *staggered in medium viewport
            *stacked in small viewport
            -->
      <b-container fluid class="grid-container3">
        <b-row>
          <b-col col-sm-4>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, in.</b-col>
          <b-col col-md-4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi ea cupiditate laborum eos sunt asperiores cumque vel eveniet cum sapiente, unde quos provident quam sit, dignissimos nostrum quis aliquam porro.</b-col>
          <b-col col-lg-4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod a fugiat alias aperiam porro eligendi repellendus vitae corporis asperiores voluptatibus?</b-col>
        </b-row>

      </b-container>
  </div>
</template>

<!-- link to stylesheet -->
<style src="@/assets/styles/appStyle.css" />

