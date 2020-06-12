<template>
<div id="app">
  <header>
    Vue-Router Transition & Scroll Behavior Test
    <br/>
    Click on home first.
    <ul>
      <li>
        <router-link to="/">/home</router-link></li>
      <li>
        <router-link to="/foo">/foo</router-link>
      </li>
    </ul>
  </header>
  <transition name="fade-down" mode="out-in" appear>
    <router-view></router-view>
  </transition>
</div>
</template>

<script>
export default {
  data: function () {
    return {
      msg: 'Hello World'
    }
  } }

</script>

<style>
  body {
    font-size: 20px;
  }

  header {
    width: 100%;
    line-height: 4rem;
    background-color: #EEE;
    text-align: center;
  }

  header ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  header li {
    display: inline-block
  }

  .page {
    margin: 0 auto;
    width: 80%;
    background-color: #FFF;
  }

  .content > div {
    height: 200px;
  }

  .fade-down-enter-active {
      animation-name: fadeInDown;
      animation-duration: 0.5s;
  }

  .fade-down-leave-active {
      animation-name: fadeOutDown;
      animation-duration: 0.4s;
  }

  @keyframes fadeInDown {
    from { opacity: 0.05; transform: translate3d(0, -25px, 0); }
    to { opacity: 1; transform: none; }
  }

  @keyframes fadeOutDown {
    from {  opacity: 1; transform: none; }
    to { opacity: 0.05; transform: translate3d(0, -25px, 0); }
  }
</style>
