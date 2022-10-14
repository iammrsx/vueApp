<template>
<div class="main">
 <Header />
 <router-view />
 <Footer/>
 </div>
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
export default {
  name : 'App',
  components : { Header ,Footer}
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>