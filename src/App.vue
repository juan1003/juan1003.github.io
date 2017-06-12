<template>
  <div id="app">
    <header>
      <nav class="navbar navbar-default navbar-fixed-top">
        <div class="container">
          <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <router-link class="navbar-brand" to="/">Juan De Jesus</router-link>
          </div>

          <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul class="nav navbar-nav">
              <li><router-link to="/">Home</router-link></li>
              <li><router-link to="/projects">Projects</router-link></li>
              <li><router-link to="/contact">Contact</router-link></li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
    <main class="container">
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
body {
  margin: 0;
}

main {
  margin-top: 80px;
}
</style>
