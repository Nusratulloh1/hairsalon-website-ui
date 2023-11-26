<template>
    <div>
        <div class="container-fluid page-header py-5 mb-5 wow fadeIn" data-wow-delay="0.1s">
            <div class="container text-center py-5">
                <h1 class="display-3 text-white text-uppercase mb-3 animated slideInDown">About</h1>
                <nav aria-label="breadcrumb animated slideInDown">
                    <ol class="breadcrumb justify-content-center text-uppercase mb-0">
                        <li class="breadcrumb-item"><router-link to="/" class="text-white">Home</router-link></li>
                        <li class="breadcrumb-item text-primary active" aria-current="page">About</li>
                    </ol>
                </nav>
            </div>
        </div>
        <About></About>
        <Team></Team>
    </div>
</template>

<script lang="ts" setup>
import About from '~/components/About.vue';
import Team from '~/components/Team.vue';
</script>

<style></style>