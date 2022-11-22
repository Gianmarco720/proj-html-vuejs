<script>
export default {
    name: 'Plans'
}
</script>

<template>
    <div class="my_container">
        <div class="my_container">
            <div class="row cols-3 gap-3">
                <!-- Piano Standard -->
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

                <!-- Piano Premium -->
                <div class="col">
                    <div class="plan_card">
                        <h3 class="fw-bold">Premium</h3>
                        <div class="plan_price">
                            <sup class="valuta">
                                <font-awesome-icon icon="fa-solid fa-dollar-sign" />
                            </sup>
                            <span>29</span>
                            <sup>99</sup>
                            <sub class="period"><em>monthly</em></sub>
                        </div>
                        <div class="content">
                            <ul>
                                <li class="pt-4">10 Projects</li>
                                <li>15 GB Storege</li>
                                <li>Unlimited Users</li>
                                <li><a class="btn btn-outline-dark rounded-pill text-uppercase text-dark" href="#"
                                        role="button">Start
                                        today</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <!-- Piano Professional -->
                <div class="col">
                    <div class="plan_card">
                        <h3 class="fw-bold">Professional</h3>
                        <div class="plan_price">
                            <sup class="valuta">
                                <font-awesome-icon icon="fa-solid fa-dollar-sign" />
                            </sup>
                            <span>39</span>
                            <sup>99</sup>
                            <sub class="period"><em>monthly</em></sub>
                        </div>
                        <div class="content">
                            <ul>
                                <li class="pt-4">15 Projects</li>
                                <li>30 GB Storege</li>
                                <li>Unlimited Users</li>
                                <li><a class="btn btn-warning rounded-pill text-uppercase text-white" href="#"
                                        role="button">Start
                                        today</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <!-- Piano Extreme -->
                <div class="col">
                    <div class="plan_card">
                        <h3 class="fw-bold">Extreme</h3>
                        <div class="plan_price">
                            <sup class="valuta">
                                <font-awesome-icon icon="fa-solid fa-dollar-sign" />
                            </sup>
                            <span>59</span>
                            <sup>99</sup>
                            <sub class="period"><em>monthly</em></sub>
                        </div>
                        <div class="content">
                            <ul>
                                <li class="pt-4">Unlimited Projects</li>
                                <li>Unlimited Storege</li>
                                <li>Unlimited Users</li>
                                <li><a class="btn btn-outline-dark rounded-pill text-uppercase text-dark" href="#"
                                        role="button">Start
                                        today</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../assets/scss/variables.scss' as *;
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@700&display=swap');

.col {
    text-align: center;
    background-color: white;

    .plan_card {
        text-align: center;

        h3 {
            padding-top: 2rem;
        }

        .plan_price {
            padding: 2rem 0;

            span {
                font-size: 60px;
                font-weight: 700;
                font-family: 'Source Sans Pro', sans-serif;
                color: #556EED;
            }
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

            a {
                font-weight: bold;
            }
        }
    }
}
</style>