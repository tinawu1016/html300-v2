<template>
  <div id="image-header">
      <header class="row">
        <div class="col-md-12">
            <div class="jumbotron jumbotron-fluid">
                <div class="top-menu">
                    <ul class="nav">
                        <li class="nav-item">
                            <router-link to="/page1" class='router-link'> Home </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/page2" class='router-link'> About Us </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/page4" class='router-link'> Faculties </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/page3" class='router-link'> Menu </router-link>
                        </li>
                    </ul>
                </div>
                <div class="header-container">
                    <h1 class="display-1">BUBBLE TEA</h1>
                    <p class="lead">Enjoy life with drinks!</p>
                </div>
            </div>
        </div>
       </header>
  </div>
</template>

<script>
export default {
  name: 'imageHeader'
}
</script>

<style>
.jumbotron {
    background-image: url("../img/header.jpeg");
    background-size: cover;
    display: flex;
    flex-direction: column;
    text-align: center;
}

.header-container {
    margin: 1em;
}

.router-link {
  padding: 1em;
}
.top-menu {
    display: flex;
    flex-direction: row;
    justify-content: center;
}
</style>
