<script>
import HeaderSection from '../sections/HeaderSection.vue';
import Navbar from '../Navbar.vue'
export default {
    name: 'AppHeader',
    components: {
        Navbar,
        HeaderSection
    }
}
</script>

<template>
    <header>
        <div class="my_container">
            <Navbar />
            <HeaderSection />
        </div>
    </header>
</template>

<style lang="scss" scoped>
@use '../../assets/scss/variables.scss' as *;

header {
    background-image: url('../../assets/img/1-hero-image.png');
    background-repeat: no-repeat;
    background-size: cover;
}
</style>