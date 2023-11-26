<template>
    <div>
        <!-- Spinner Start -->
        <!-- <div id="spinner"
            class="show bg-dark position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
            <div class="spinner-grow text-primary" style="width: 3rem; height: 3rem;" role="status">
                <span class="sr-only">Loading...</span>
            </div>
        </div> -->
        <!-- Spinner End -->
        <!-- Navbar Start -->
        <nav class="navbar navbar-expand-lg bg-secondary navbar-dark sticky-top py-lg-0 px-lg-5 wow fadeIn"
            data-wow-delay="0.1s">
            <router-link to="/" class="navbar-brand ms-4 ms-lg-0">
                <h1 class="mb-0 text-primary text-uppercase d-flex align-items-center" style="font-size: 28px">
                    <i class="fa fa-cut me-3"></i>
                    <div>
                        Shodmon
                        <p style="font-size: 10px; margin:0">
                            Beauty Salon
                        </p>
                    </div>
                </h1>
            </router-link>
            <button type="button" class="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarCollapse">
                <div class="navbar-nav ms-auto p-4 p-lg-0">
                    <router-link to="/" class="nav-item nav-link">Главный</router-link>
                    <router-link to="/about" class="nav-item nav-link">О нас</router-link>
                    <router-link to="/service" class="nav-item nav-link">Наши услуги</router-link>
                    <router-link to="/360-view" class="nav-item nav-link">Смотреть 360°</router-link>
                    <!-- <div class="nav-item dropdown">
                    <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                    <div class="dropdown-menu m-0">
                        <a href="price.html" class="dropdown-item">Pricing Plan</a>
                        <a href="team.html" class="dropdown-item">Our Barber</a>
                        <a href="open.html" class="dropdown-item">Working Hours</a>
                        <a href="testimonial.html" class="dropdown-item">Testimonial</a>
                        <a href="404.html" class="dropdown-item">404 Page</a>
                    </div>
                </div> -->
                    <router-link to="/contact" class="nav-item nav-link">Контакт</router-link>
                </div>
                <a href="" class="btn btn-primary rounded-0 py-2 px-lg-4 d-none d-lg-block">Бронирование<i
                        class="fa fa-arrow-right ms-3"></i></a>
            </div>
        </nav>
        <!-- Navbar End -->
    </div>
</template>
<style lang="scss" scoped>
.router-link-active {
    color: #EB1616 !important;
}
</style>