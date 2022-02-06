<template>
    <div class="hello">
    <imageHeader></imageHeader>
        <main>
        <div class="row">
            <div class="col-md-12">
                <div class="body-container">
                    <div>
                        <h2 class="display-4">OUR STORY</h2>
                        <p class="lead">Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit, sed do eiusmod tempor incididunt
                            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                             nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                        <p class="lead">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                             voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proiden.
                        </p>

                    </div>
                    <div class="button-container">
                        <button class="button" href="index.html">1</button>
                        <button class="button" href="index.html">2</button>
                        <button class="button" href="index.html">3</button>
                        <button class="button" href="index.html">??</button>
                    </div>
                    <img :src="require('@/img/home.jpeg')" class="img-fluid"  alt="OUR STORY">
                    <p class="lead"> Mission: DLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <p class="lead">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    <h4> CONTACT US FOR MORE INFORMATION!</h4>
                    <form id="form">
                        <input type="search" id="query" name="q" placeholder="Search...">
                        <button>Search</button>
                    </form>
                </div>
            </div>
        </div>
        </main>

    <footerNormal></footerNormal>

    </div>
</template>

<script>
import imageHeader from './imageHeader.vue'
import footerNormal from './footerNormal.vue'
    export default {
        name: 'Page1',
    data () {
            return {
                msg: 'Welcome to Your Vue.js App'
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
    background-color: #4CAF50; /* Green */
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: .5em;
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








</style>
