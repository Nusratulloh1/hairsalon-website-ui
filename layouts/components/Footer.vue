<template>
    <div>
        <!-- Footer Start -->
        <div class="container-fluid bg-secondary text-light footer mt-5 pt-5 wow fadeIn" data-wow-delay="0.1s">
            <div class="container py-5">
                <div class="row g-5">
                    <div class="col-lg-4 col-md-6">
                        <h4 class="text-uppercase mb-4">Связаться</h4>
                        <div class="d-flex align-items-center mb-2">
                            <div class="btn-square bg-dark flex-shrink-0 me-3">
                                <span class="fa fa-map-marker-alt text-primary"></span>
                            </div>
                            <span>Порхов г. Кузнецова ул. дом 3</span>
                        </div>
                        <a href="tel:+7 909 573 90 90" class="d-flex align-items-center mb-2 text-light">
                            <div class="btn-square bg-dark flex-shrink-0 me-3">
                                <span class="fa fa-phone-alt text-primary"></span>
                            </div>
                            <span>+7 909 573 90 90</span>
                        </a>
                        <a href="mailto:shodmon_studio@mail.ru" class="d-flex align-items-center text-light">
                            <div class="btn-square bg-dark flex-shrink-0 me-3">
                                <span class="fa fa-envelope-open text-primary"></span>
                            </div>
                            <span>shodmon_studio@mail.ru</span>
                        </a>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <h4 class="text-uppercase mb-4">Быстрые ссылки</h4>
                        <router-link to="/about" class="btn btn-link" href="">О нас</router-link>
                        <router-link to="/contact" class="btn btn-link" href="">Контакт</router-link>
                        <router-link to="/service" class="btn btn-link" href="">Наши услуги</router-link>
                        <router-link to="/360-view" class="btn btn-link" href="">Смотреть 360°</router-link>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <h4 class="text-uppercase mb-4">Новостная рассылка</h4>
                        <div class="position-relative mb-4">
                            <input class="form-control border-0 w-100 py-3 ps-4 pe-5" type="text"
                                placeholder="Электронная почта">
                            <button type="button"
                                class="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2">Регистрация</button>
                        </div>
                        <div class="d-flex pt-1 m-n1">
                            <a class="btn btn-lg-square btn-dark text-primary m-1" target="__blank"
                                href="https://vk.com/muhammadshodmon"><i class="fab fa-vk"></i></a>
                            <a class="btn btn-lg-square btn-dark text-primary m-1" target="__blank" href="https://wa.me/qr/LN5AIRBVFF7YO1"><i
                                    class="fab fa-whatsapp"></i></a>
                            <a class="btn btn-lg-square btn-dark text-primary m-1" target="__blank"
                                href="https://www.youtube.com/@SARTAROSH"><i class="fab fa-youtube"></i></a>
                            <a class="btn btn-lg-square btn-dark text-primary m-1" target="__blank"
                                href="https://www.instagram.com/muhammad_shodmon"><i class="fab fa-instagram"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="copyright">
                    <div class="row">
                        <div class="col-md-6 text-center text-md-start mb-3 mb-md-0">
                            &copy; <a class="border-bottom" href="#">shodmon-hairsalon.io</a>, Все права защищены.
                        </div>
                        <div class="col-md-6 text-center text-md-end">
                            <!--/*** This template is free as long as you keep the footer author’s credit link/attribution link/backlink. If you'd like to use the template without the footer author’s credit link/attribution link/backlink, you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". Thank you for your support. ***/-->
                            Разработанный <a class="border-bottom" target="__blank"
                                href="https://t.me/nusratullo_a">Nusratullo Akh</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Footer End -->


        <!-- Back to Top -->
        <a href="#" class="btn btn-primary btn-lg-square back-to-top"><i class="bi bi-arrow-up"></i></a>
    </div>
</template>