<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view />
</template>

<style>
html {
  background-image: radial-gradient(
    rgb(63, 63, 63),
    rgb(35, 35, 35),
    rgb(0, 0, 0)
  );
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #d6d7d8;
  height: 100vh;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #d6d7d8;
}

nav a.router-link-exact-active {
  color: #b94254;
}
</style>
