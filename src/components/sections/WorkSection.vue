<script>
export default {
    name: 'WorkSection'
}
</script>

<template>
    <section>
        <div class="my_container">
            <div class="section_desc text-center">
                <h2 class="fw-bold pb-2">Our Work</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore assumenda aperiam qui impedit velit
                    nulla?</p>
            </div>
            <div class="my_container">
                <div class="row cols-4 gap-1 py-4">
                    <div class="col"><img src="../../assets/img/case-study-gallery-3-1-1200x900.jpg" alt=""></div>
                    <div class="col"><img src="../../assets/img/case-study-gallery-2-1200x900.jpg" alt=""></div>
                    <div class="col"><img src="../../assets/img/case-study-gallery-1-1-1200x900.jpg" alt=""></div>
                </div>
                <div class="row cols-4 gap-1">
                    <div class="col"><img src="../../assets/img/case-study-gallery-4-1-1200x900.jpg" alt=""></div>
                    <div class="col"><img src="../../assets/img/case-study-gallery-5-1-1200x900.jpg" alt=""></div>
                    <div class="col"><img src="../../assets/img/case-study-gallery-6-1-1200x900.jpg" alt=""></div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../../assets/scss/variables.scss' as *;

section {
    padding: 5% 0;

    .section_desc {
        margin: 0 40%;
    }
}
</style>