<template>
    <div>
        <!-- Contact Start -->
        <div class="container-xxl py-5">
            <div class="container">
                <div class="row g-0">
                    <div class="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                        <div class="bg-secondary p-5">
                            <p class="d-inline-block bg-dark text-primary py-1 px-4">Связаться с нами</p>
                            <h1 class="text-uppercase mb-4">У вас есть какие-либо вопросы? Пожалуйста, свяжитесь с нами!
                            </h1>
                            <form>
                                <div class="row g-3">
                                    <div class="col-md-6">
                                        <div class="form-floating">
                                            <input type="text" class="form-control bg-transparent" id="name"
                                                placeholder="Ваше имя">
                                            <label for="name">Ваше имя</label>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-floating">
                                            <input type="email" class="form-control bg-transparent" id="email"
                                                placeholder="Ваш email">
                                            <label for="email">Ваш email</label>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <div class="form-floating">
                                            <input type="text" class="form-control bg-transparent" id="subject"
                                                placeholder="Предмет">
                                            <label for="subject">Предмет</label>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <div class="form-floating">
                                            <textarea class="form-control bg-transparent" placeholder="Оставьте сообщение здесь"
                                                id="message" style="height: 100px"></textarea>
                                            <label for="message">Сообщение</label>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <button class="btn btn-primary w-100 py-3" type="submit">Отправить сообщение</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div class="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                        <div class="h-100" style="min-height: 400px;">
                            <iframe class="google-map w-100 h-100" src="https://api-maps.yandex.ru/frame/v1/-/CDeHvE7K?"
                                frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"
                                style="filter: grayscale(100%) invert(92%) contrast(83%); border: 0;"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Contact End -->
    </div>
</template>

<script>
export default {

}
</script>

<style></style>