<template>
    <div class="hello">
    <imageHeader></imageHeader>
    <main>
      <div class="row">
        <div class="col-md-12">
          <div class="body-container">
            <div>
              <h2 class="display-4">Mission Statement</h2>
              <p class="lead">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <p class="lead">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>

                <div class="accordion" role="tablist">
                 <div v-for="object,index in objects" :key="index">
                  <b-card no-body class="mb-1">
                    <b-card-header header-tag="header" class="p-1" role="tab">
                      <b-button block v-b-toggle="'accordion-' + index" variant="info"
                        >{{object.question}}</b-button
                      >
                    </b-card-header>
                    <b-collapse
                      :id="'accordion-' + index"
                      visible
                      accordion="my-accordion"
                      role="tabpanel"
                    >
                      <b-card-body>
                        <b-card-text>{{ object.text }}</b-card-text>
                      </b-card-body>
                    </b-collapse>
                  </b-card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  <footerNormal></footerNormal>
  </div>
</template>

<script>
import router from "../router";
import imageHeader from './imageHeader.vue'
import footerNormal from './footerNormal.vue'

export default {
  name: "Page2",
   data() {
    return {
      objects: [
        {
          question: 'How we make it?',
          text: `
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          `
        },
        {
          question: 'Is it healthy? ',
          text: `
          All nature...
        `
        },
        {
          question: 'Can I order online?',
          text: `
          Can order through ....
          `
        },

        ]
    }
    },
    components: {
        imageHeader,
        footerNormal
    }
}
</script>

<style scoped>
.body-container {
  margin: 1em;
  margin-right: 10em;
  margin-left: 10em;
  text-align: center;
}
.top-menu {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.router-link {
  padding: 1em;
}
.button {
  background-color: #4caf50; /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 0.5em;
  cursor: pointer;
}

@media only screen and (min-width: 0px) {
  .body-container {
    margin: 0em;
    margin-right: 0em;
    margin-left: 0em;
    text-align: center;
  }
}

@media only screen and (min-width: 768px) {
  .body-container {
    margin: 1em;
    margin-right: 15em;
    margin-left: 15em;
    text-align: center;
  }
}

@media only screen and (min-width: 2000px) {
  .body-container {
    margin: 1em;
    margin-right: 40em;
    margin-left: 40em;
    text-align: center;
  }
}

.jumbotron {
  background-image: url("../img/blossoms.jpg");
  background-size: cover;
  display: flex;
  flex-direction: column;
  text-align: center;
}

.header-container {
  margin: 1em;
}
.body-container {
  margin: 1em;
  margin-right: 10em;
  margin-left: 10em;
  text-align: center;
}
.top-menu {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.footer-container {
  padding: 5em;
  background-color: rgb(59, 42, 133);
}
</style>
