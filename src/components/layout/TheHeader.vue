<template>
  <header>
    <nav class="navbar container">
      <router-link to="/" class="brand text-brand">TEAM Manager</router-link>
      <ul class="navbar-inner">
        <li>
          <router-link to="/todo" class="text-light">To Do</router-link>
        </li>
        <li>
          <router-link to="/example1" class="text-light">Example</router-link>
        </li>
        <li>
          <router-link to="/example2" class="text-light">Example</router-link>
        </li>
        <li>
          <router-link to="/example3" class="text-light">Example</router-link>
        </li>
      </ul>
      <section class="user-profile">
        <button>
          <h5 class="font-medium">Julie Jones</h5>
          <img src="/ArrowDown_Light.svg" alt="arrow-down" />
        </button>
        <img
          src="/UserProfile.svg"
          alt="user-profile"
          class="user-profile-img"
        />
      </section>
    </nav>
  </header>
</template>
