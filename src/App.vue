<template>
  <div class="min-h-screen">
    <header class="navbar">
      <a href="/">Andrew Thompson</a>
    </header>
    <main>
      <div class="hero">
        <div class="mockup-window border bg-base-300">
          <div class="flex justify-center px-4 py-6">
            <h2> Andrew Thompson: Software Engineer</h2>
          </div>
        </div>
      </div>
    </main>
    <footer class=" footer fixed bottom-0 w-full m-5 ">
      <p class=" footer-title">
        this is the footer
      </p>
    </footer>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
