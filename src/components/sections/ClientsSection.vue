<script>
export default {
    name: "ClientsSection"
}
</script>

<template>
    <section>
        <div class="section_desc text-center">
            <h2 class="pb-5"> What Our Clients Say</h2>
            <div class="client_card">
                <div class="client_img">
                    <img src="../../assets/img/testimonials-2.jpg" alt="" class="rounded-circle">
                </div>
                <div class="client_text py-3">
                    <p><em>"Ability proceeds from a fusion of skills, knowledge, understanding and imagination,
                            consolidated by experience."</em></p>
                    <div class="client_info py-3">
                        <span><strong>Luis Desalvo</strong>, CREO TECH</span>
                    </div>
                </div>
            </div>
            <div class="my_container">
                <div class="row cols-3 sponsors">
                    <div class="col"><img src="../../assets/img/clients_partner_5-200x202.png" alt=""></div>
                    <div class="col"><img src="../../assets/img/clients_partner_6-200x202.png" alt=""></div>
                    <div class="col"><img src="../../assets/img/clients_partner_1-200x202.png" alt=""></div>
                    <div class="col"><img src="../../assets/img/clients_partner_2-200x202.png" alt=""></div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../../assets/scss/variables.scss' as *;

section {
    padding-top: 5%;

    .client_text {
        margin: 0 35%;

        p {
            font-size: 20px;
        }
    }

    .my_container {
        padding-top: 5rem;

        .sponsors {
            border-top: 2px solid $seo-concrete;
            padding: 5% 0;
        }
    }
}
</style>