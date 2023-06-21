<template>
  <div class="app">
    <RouterView />
    <foot></foot>
  </div>
</template>
<script setup>
import { RouterView } from 'vue-router'
import foot from '@/components/footView.vue';

</script>
<style  lang="scss" >
body {
  padding: 0;
  margin: 0;
  overflow: hidden;
}

.app {
  width: 100%;
  height: 100%;
  font-size: 100px;

}

.content {
  width: 100%;
  max-width: 1920px;
  height: 100%;
  margin: 0 auto;
  font-size: 100px;
  position: relative;
}

@media screen and (max-width: 1800px) {

  .app,
  .content {
    font-size: 90px;
  }
}

@media screen and (max-width: 1700px) {

  .app,
  .content {
    font-size: 80px;
  }
}

@media screen and (max-width: 1300px) {

  .app,
  .content {
    font-size: 60px;
  }
}

@media screen and (max-width: 1200px) {

  .app,
  .content {
    font-size: 60px;
  }
}

@media screen and (max-width: 1100px) {

  .app,
  .content {
    font-size: 50px;
  }
}

@media screen and (max-width: 900px) {

  .app,
  .content {
    font-size: 30px;
  }
}

ul,
li {
  list-style: none;
}

*::-webkit-scrollbar-track {
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.5);
}

*::-webkit-scrollbar {
  height: 200px;
  border-radius: 10px;
  width: 5px;
}

*::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 5px #fcf6f6ad;
  opacity: 1;
  background: #fff;

}

*::-webkit-scrollbar-track {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 5px #ffff;
  border-radius: 0;
}

*::-webkit-scrollbar {
  display: none
}
</style>
