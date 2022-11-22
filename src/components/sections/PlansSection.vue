<script>
export default {
    name: 'PlansSection'
}
</script>

<template>
    <section>
        <div class="my_container">
            <div class="section_desc text-center">
                <h2 class="pb-2 fw-bold">Our Plans</h2>
                <p class="pb-5">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam maiores velit ea
                    totam?</p>
            </div>
            <div class="my_container">
                <div class="row cols-3 gap-3">
                    <div class="col">
                        <div class="plan_card">
                            <h3 class="fw-bold">Standard</h3>
                            <div class="plan_price">
                                <sup class="valuta">
                                    <font-awesome-icon icon="fa-solid fa-dollar-sign" />
                                </sup>
                                <span>19</span>
                                <sup>99</sup>
                                <sub class="period"><em>monthly</em></sub>
                            </div>
                            <div class="content">
                                <ul>
                                    <li class="pt-4">5 Projects</li>
                                    <li>5 GB Storege</li>
                                    <li>Unlimited Users</li>
                                    <li><a class="btn btn-outline-dark rounded-pill text-uppercase text-dark" href="#"
                                            role="button">Start
                                            today</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="plan_card">
                            <h3 class="fw-bold">Premium</h3>
                        </div>
                    </div>
                    <div class="col">
                        <div class="plan_card">
                            <h3 class="fw-bold">Professional</h3>
                        </div>
                    </div>
                    <div class="col">
                        <div class="plan_card">
                            <h3 class="fw-bold">Extreme</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../../assets/scss/variables.scss' as *;
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@700&display=swap');

section {
    padding-top: 5%;
    padding-bottom: 10%;
    background-image: url('../../assets/img/background1.jpg');
    background-repeat: no-repeat;
    background-size: cover;

    .section_desc {
        color: white;
        margin: 0 40%;
    }

    .col {
        text-align: center;
        background-color: white;

        .plan_card {
            text-align: center;

            .plan_price span {
                font-size: 60px;
                font-weight: 700;
                font-family: 'Source Sans Pro', sans-serif;
                color: #556EED;
            }

            sup {
                font-size: 20px;
                vertical-align: 20px;
                font-weight: 700;
                font-family: 'Source Sans Pro', sans-serif;
                color: #556EED;
            }

            .valuta {
                color: $seo-scorpion;
            }

            .period {
                margin-left: -5%;
            }

            ul {
                list-style: none;
                padding: 0px;
                margin: 0px;

                li {
                    font-size: 20px;
                    padding-bottom: 10%;
                    color: $seo-regent-grey;
                }
            }
        }
    }

}
</style>