<script>
export default {
    name: 'ServicesSection'
}
</script>

<template>
    <section>
        <div class="my_container">
            <div class="section_desc text-center">
                <h2 class="pb-2">See Our Top Notch Services</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam maiores velit ea totam?</p>
            </div>
            <div class="my_container mt-5">
                <div class="row cols-3 gap-5">
                    <div class="col">
                        <div class="icon">
                            <font-awesome-icon icon="fa-brands fa-google" />
                        </div>
                        <div class="text">
                            <h3>Google SEO</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore quam earum unde, animi
                                praesentium cumque perferendis odio odit, voluptas dicta ipsum asperiores, reprehenderit
                                debitis! Sequi.</p>
                            <a href="#">Read More ></a>
                        </div>
                    </div>
                    <div class="col">
                        <div class="icon">
                            <font-awesome-icon icon="fa-solid fa-gear" />
                        </div>
                        <div class="text">
                            <h3>Brand Strategy</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore quam earum unde, animi
                                praesentium cumque perferendis odio odit, voluptas dicta ipsum asperiores, reprehenderit
                                debitis! Sequi.</p>
                            <a href="#">Read More ></a>
                        </div>
                    </div>
                    <div class="col">
                        <div class="icon">
                            <font-awesome-icon icon="fa-solid fa-building" />
                        </div>
                        <div class="text">
                            <h3>Local SEO</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore quam earum unde, animi
                                praesentium cumque perferendis odio odit, voluptas dicta ipsum asperiores, reprehenderit
                                debitis! Sequi.</p>
                            <a href="#">Read More ></a>
                        </div>
                    </div>
                    <div class="col">
                        <div class="icon">
                            <font-awesome-icon icon="fa-solid fa-chart-column" />
                        </div>
                        <div class="text">
                            <h3>SEO Analysis</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore quam earum unde, animi
                                praesentium cumque perferendis odio odit, voluptas dicta ipsum asperiores, reprehenderit
                                debitis! Sequi.</p>
                            <a href="#">Read More ></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../../assets/scss/variables.scss' as *;

section {
    padding-top: 5%;
    padding-bottom: 10%;
    background-color: $seo-deep-cove;
    background-image: url('../../assets/img/pattern_background.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position-y: 60%;

    .my_container {
        .section_desc {
            margin: 0 40%;
            color: white;
        }

        .col {
            background-color: #071B50;

            .icon {
                text-align: center;
                color: $seo-yellow-orange;
                font-size: 35px;
                padding: 10%;
            }

            .text {
                text-align: center;
                line-height: 30px;
                color: white;
                padding: 0 0 15% 5%;

                h3 {
                    padding-bottom: 5%;
                }

                p {
                    padding: 5% 15%;
                }

                a {
                    text-decoration: none;
                    color: $seo-yellow-orange;

                    &:hover {
                        border-bottom: 1px solid $seo-yellow-orange;
                    }
                }
            }
        }
    }
}
</style>