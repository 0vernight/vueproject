<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import MyIndex from './components/MyIndex.vue'
import HomeView from './components/HomeView.vue'

const callback = (n) => {
  console.log('callback in the app log screan! parms=' + n)
}
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />
    </div>
  </header>

  <main>
    <div class="wrapper">
      <MyIndex msg="app give the val msg for myindex" @someEvent="callback" />
      <!-- <TheWelcome /> -->
    </div>
  </main>
  <footer>
    <!-- <HomeView></HomeView> -->
  </footer>

  <!-- <aside>
    <div>aside</div>
  </aside> -->
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
