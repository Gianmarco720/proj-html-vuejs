<script>
import News from '../News.vue'
export default {
    name: "NewsSection",
    components: {
        News
    }
}
</script>

<template>
    <section>
        <div class="my_container">
            <div class="section_desc text-center">
                <h2 class="fw-bold">Our News</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi modi laudantium debitis provident.</p>
            </div>
            <News />
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../../assets/scss/variables.scss' as *;

section {
    padding-top: 5%;
    background-color: $seo-alabaster;

    .section_desc {
        margin: 0 40%;
    }
}
</style>