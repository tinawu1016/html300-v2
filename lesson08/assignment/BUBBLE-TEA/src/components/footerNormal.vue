<template>
  <div id="footerNormal">
     <footer>
          <div class="row">
              <div class="col-md-12">
                  <div class="footer-container">
                      <div class="top-menu">
                          <ul class="nav">
                              <li class="nav-item">
                                  <router-link to="/page2" class='router-link'> Home </router-link>
                              </li>
                              <li class="nav-item">
                                  <router-link to="/page2" class='router-link'> About Us </router-link>
                              </li>
                              <li class="nav-item">
                                  <router-link to="/page2" class='router-link'> Faculties </router-link>
                              </li>
                              <li class="nav-item">
                                  <router-link to="/page2" class='router-link'> Menu </router-link>
                              </li>
                          </ul>
                      </div>

                  </div>
              </div>
          </div>
      </footer>
  </div>
</template>

<script>
export default {
  name: 'footerNormal'
}
</script>

<style>
.footer-container {
    padding: 5em;
    background-color: rgb(59, 42, 133);
}
.router-link {
  padding: 1em;
}

</style>
