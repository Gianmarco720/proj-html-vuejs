<script>
export default {
    name: 'ContactsSection'
}
</script>

<template>
    <section>
        <div class="section_desc text-center text-white">
            <h2 class="fw-bold">Start your Free Consultation</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus velit tempora odit pariatur?</p>
            <div class="my_button">
                <a class="btn btn-warning fw-bold text-uppercase rounded-pill text-white" href="#" role="button">Contact
                    us now</a>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../../assets/scss/variables.scss' as *;

section {
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('../../assets/img/CTA-seo-1.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    padding: 5% 0;

    .section_desc {
        margin: 5% 40%;

        .my_button {
            .btn_warning {
                background-color: $seo-yellow-orange;
            }
        }
    }
}
</style>