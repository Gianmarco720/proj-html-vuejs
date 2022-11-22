<script>
import Plans from '../Plans.vue'
export default {
    name: 'PlansSection',
    components: {
        Plans
    }
}
</script>

<template>
    <section>
        <div class="section_desc text-center">
            <h2 class="pb-2 fw-bold">Our Plans</h2>
            <p class="pb-5">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam maiores velit ea
                totam?</p>
        </div>

        <!-- Piani di abbonamento: Plans -->
        <Plans />
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
}
</style>