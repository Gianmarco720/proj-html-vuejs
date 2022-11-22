<script>
import FooterNavbar from '../FooterNavbar.vue'
export default {
    name: 'AppFooter',
    components: {
        FooterNavbar
    }
}
</script>

<template>
    <footer>
        <div class="my_container text-center py-5">
            <div class="footer_logo">
                <img src="../../assets/img/logo_seo_2x.png" alt="">
            </div>
            <FooterNavbar />
            <div class="d-flex justify-content-center credits">
                <ul class="d-flex">
                    <li>&copy; Copyright 2012 -2020</li>
                    <li>Avada Theme by <a href="#">ThemeFusion</a></li>
                    <li>All Rights Reserved</li>
                    <li class="border-0">Powered by <a href="#">WordPress</a></li>
                </ul>
            </div>
            <div class="social">
                <a href="#">
                    <font-awesome-icon icon="fa-brands fa-facebook-f" />
                </a>
                <a href="#">
                    <font-awesome-icon icon="fa-brands fa-instagram" />
                </a>
                <a href="#">
                    <font-awesome-icon icon="fa-brands fa-twitter" />
                </a>
                <a href="#">
                    <font-awesome-icon icon="fa-brands fa-youtube" />
                </a>
            </div>
        </div>
    </footer>
</template>

<style lang="scss" scoped>
@use '../../assets/scss/variables.scss' as *;

footer {
    background-color: $seo-alabaster;

    .footer_logo {
        img {
            width: 10%;
        }
    }

    .credits {
        ul {
            list-style-type: none;

            li {
                color: grey;
                border-right: 2px solid lightgrey;
                padding: 0 0.5rem;
            }

            a {
                text-decoration: none;
                color: black;
                font-weight: bold;
            }
        }
    }

    .social {
        font-size: 40px;
        padding: 2rem 0;

        a {
            color: grey;
            padding: 0 1.5rem;
        }
    }
}
</style>