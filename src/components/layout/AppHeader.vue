<script>
import Navbar from '../Navbar.vue'
export default {
    name: 'AppHeader',
    components: {
        Navbar
    }
}
</script>

<template>
    <header>
        <div class="my_container">
            <Navbar />
        </div>
    </header>
</template>

<style lang="scss" scoped>
header {
    background-image: url('../../assets/img/1-hero-image.png');
}
</style>