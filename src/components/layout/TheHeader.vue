<template>
  <header>
    <nav class="navbar container">
      <router-link to="/" class="brand text-brand">TEAM Manager</router-link>
      <ul class="navbar-inner">
        <li>
          <router-link to="/todo">To Do</router-link>
        </li>
        <li>
          <router-link to="/">Example</router-link>
        </li>
        <li>
          <router-link to="/">Example</router-link>
        </li>
        <li>
          <router-link to="/">Example</router-link>
        </li>
      </ul>
      <section class="user-profile">
        <button>
          <h5>Julie Jones</h5>
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
