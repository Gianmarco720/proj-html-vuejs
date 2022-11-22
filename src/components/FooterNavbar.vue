<script>
export default {
    name: 'FooterNavbar'
}
</script>

<template>
    <nav class="d-flex justify-content-center">
        <ul class="d-flex justify-content-between">
            <li><a href="#">Home</a></li>
            <li><a href="#">Who We Are</a></li>
            <li><a href="#">What We Do</a></li>
            <li><a href="#">What We Work</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">News</a></li>
            <li><a href="#">Get In Touch Now</a></li>
        </ul>
    </nav>
</template>

<style lang="scss" scoped>
@use '../assets/scss/variables.scss' as *;

nav {
    ul {
        margin: 0;
        padding: 5% 0;
        width: 50%;
        list-style-type: none;

        a {
            text-decoration: none;
            color: black;

            &:hover {
                color: $seo-yellow-orange;
            }
        }
    }
}
</style>