<script>
export default {
    name: 'HeaderSection'
}
</script>

<template>
    <section>
        <div class="my_container">
            <div class="row">
                <div class="col-4">
                    <h1 class="fw-bold text-white">SEM Campaigns Made Simple With Avada</h1>
                    <p class="text-white">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure saepe
                        veritatis nihil,
                        consectetur soluta quo?</p>
                    <a class="btn btn-warning rounded-pill text-uppercase fw-bold text-white" href="#" role="button">Buy
                        avada
                        now</a>
                    <a class="btn btn-primary rounded-pill text-uppercase fw-bold ms-3" href="#" role="button">Contact
                        us</a>
                </div>
                <div class="col-8"></div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../assets/scss/variables.scss' as *;

section {
    padding: 15% 0;

    .btn-warning {
        background-color: $seo-yellow-orange;
        padding: 0.75rem 1.5rem;
    }

    .btn-primary {
        background-color: #556EED;
        padding: 0.75rem 1.5rem;
    }
}
</style>