<script>
export default {
    name: 'Navbar'
}
</script>

<template>
    <nav class="p-4 d-flex justify-content-between">
        <div class="logo d-flex align-items-center">
            <img src="../assets/img/logo_seo_w_1x.png" alt="">
        </div>
        <div class="menu">
            <ul class="d-flex align-items-center">
                <li><a href="#">Home</a></li>
                <li><a href="#">Who We Are</a></li>
                <li><a href="#">What We Do</a></li>
                <li><a href="#">Where We Work</a></li>
                <li><a href="#" class="pe-2">Careers</a><a class="btn btn-outline-warning p-1 text-uppercase" href="#"
                        role="button">Apply</a></li>
                <li><a href="#">News</a></li>
                <li><a class="btn btn-warning rounded-pill text-uppercase fw-bold" href="#" role="button">Get in touch
                        now</a>
                </li>
            </ul>
        </div>
    </nav>
</template>

<style lang="scss" scoped>
@use '../assets/scss/variables.scss' as *;

ul {
    list-style: none;

    li {
        padding: 1rem;

        a {
            text-decoration: none;
            color: white;
        }

        .btn-warning {
            background-color: $seo-yellow-orange;
        }

        .btn-outline-warning {
            border: 1px solid $seo-yellow-orange;
            font-size: 12px;
            color: $seo-yellow-orange;
        }
    }

}
</style>