<script>
export default {
    name: 'News'
}
</script>

<template>
    <div class="my_container pt-5">
        <div class="row cols-4">
            <div class="col">
                <div class="news_card">
                    <div class="card_img">
                        <img src="../assets/img/related-service-2-700x441.jpg" alt="">
                    </div>
                    <div class="card_text text-center">
                        <h4>Why You Need A SEO Agency Now</h4>
                        <span>November 1st, 2017</span>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis quibusdam dolorem
                            delectus velit culpa quo quis? Atque earum voluptatum molestiae!</p>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="news_card">
                    <div class="card_img">
                        <img src="../assets/img/related-service-4-700x441.jpg" alt="">
                    </div>
                    <div class="card_text text-center">
                        <h4>SEO Tips For Your Startup</h4>
                        <span>November 1st, 2017</span>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis quibusdam dolorem
                            delectus velit culpa quo quis? Atque earum voluptatum molestiae!</p>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="news_card">
                    <div class="card_img">
                        <img src="../assets/img/blog-post-6-700x441.jpg" alt="">
                    </div>
                    <div class="card_text text-center">
                        <h4>Image Optimization For Your Site</h4>
                        <span>November 1st, 2017</span>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis quibusdam dolorem
                            delectus velit culpa quo quis? Atque earum voluptatum molestiae!</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="my_button text-center">
            <a class="btn btn-warning text-uppercase fw-bold rounded-pill text-white" href="#" role="button">Go to
                news</a>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../assets/scss/variables.scss' as *;

.my_container {
    .col {
        .news_card {
            .card_text {

                h4 {
                    color: $seo-yellow-orange;
                    font-weight: bold;
                    padding-top: 1rem;
                    margin: 0;
                }

                span {
                    font-size: 12px;
                }

                p {
                    margin-top: 1rem;
                }
            }
        }
    }

    .my_button {
        padding: 5% 0;

        .btn-warning {
            background-color: $seo-yellow-orange;
        }
    }
}
</style>