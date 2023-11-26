<template>
  <div>

    <TopCarousel></TopCarousel>
    <About></About>
    <Service></Service>
    <Price></Price>
    <Team></Team>
    <WorkingHours></WorkingHours>
    <!-- Testimonial Start -->
    <div class="container-xxl py-5">
      <div class="container">
        <div class="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style="max-width: 600px;">
          <p class="d-inline-block bg-secondary text-primary py-1 px-4">Testimonial</p>
          <h1 class="text-uppercase">What Our Clients Say!</h1>
        </div>
        <div class="owl-carousel testimonial-carousel wow fadeInUp" data-wow-delay="0.1s">
          <div class="testimonial-item text-center"
            data-dot="<img class='img-fluid' src='@/assets/images/testimonial-1.jpg' alt=''>">
            <h4 class="text-uppercase">Client Name</h4>
            <p class="text-primary">Profession</p>
            <span class="fs-5">Clita clita tempor justo dolor ipsum amet kasd amet duo justo duo duo labore sed sed. Magna
              ut diam sit et amet stet eos sed clita erat magna elitr erat sit sit erat at rebum justo sea clita.</span>
          </div>
          <div class="testimonial-item text-center"
            data-dot="<img class='img-fluid' src='@/assets/images/testimonial-2.jpg' alt=''>">
            <h4 class="text-uppercase">Client Name</h4>
            <p class="text-primary">Profession</p>
            <span class="fs-5">Clita clita tempor justo dolor ipsum amet kasd amet duo justo duo duo labore sed sed. Magna
              ut diam sit et amet stet eos sed clita erat magna elitr erat sit sit erat at rebum justo sea clita.</span>
          </div>
          <div class="testimonial-item text-center"
            data-dot="<img class='img-fluid' src='@/assets/images/testimonial-3.jpg' alt=''>">
            <h4 class="text-uppercase">Client Name</h4>
            <p class="text-primary">Profession</p>
            <span class="fs-5">Clita clita tempor justo dolor ipsum amet kasd amet duo justo duo duo labore sed sed. Magna
              ut diam sit et amet stet eos sed clita erat magna elitr erat sit sit erat at rebum justo sea clita.</span>
          </div>
        </div>
      </div>
    </div>
    <!-- Testimonial End -->
  </div>
</template>

<script lang="ts" setup>
import About from '~/components/About.vue';
import TopCarousel from '~/components/TopCarousel.vue';
import Service from '~/components/Service.vue';
import Price from '~/components/Price.vue';
import Team from '~/components/Team.vue';
import WorkingHours from '~/components/WorkingHours.vue';
</script>
