<template>
  <NuxtLayout>
    <div>
      <NuxtPage />
    </div>
  </NuxtLayout>
</template>
  
<script lang="ts" setup>

useHead({
  title: "Salon",
  link: [
    {
      href: "https://fonts.googleapis.com",
      rel: "preconnect"
    },
    {
      href: "https://fonts.gstatic.com",
      rel: "preconnect",
      crossorigin: "anonymous"
    },
    {
      href: "https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&family=Oswald:wght@600&display=swap",
      rel: "stylesheet"
    },
    {
      href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css",
      rel: "stylesheet"
    },
    {
      href: "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css",
      rel: "stylesheet"
    },
    {
      href: "/lib/animate/animate.min.css",
      rel: "stylesheet"
    },
    {
      href: "/lib/owlcarousel/assets/owl.carousel.min.css",
      rel: "stylesheet"
    },
    {
      href: "/styles/css/bootstrap.min.css",
      rel: "stylesheet"
    },
    {
      href: "/styles/css/style.css",
      rel: "stylesheet"
    }
  ],
  script: [
    {
      src: "https://code.jquery.com/jquery-3.4.1.min.js"
    },
    {
      src: "https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"
    },
    {
      src: "/lib/wow/wow.min.js"
    },
    {
      src: "/lib/easing/easing.min.js"
    },
    {
      src: "/lib/waypoints/waypoints.min.js"
    },
    {
      src: "/lib/owlcarousel/owl.carousel.min.js"
    },
    {
      src: "/lib/main.js"
    },
  ]
})

</script>