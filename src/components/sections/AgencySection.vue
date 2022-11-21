<script>
export default {
  name: 'AgencySection'
}
</script>

<template>
  <section class="pt-5">
    <div class="my_container text-center">
      <div class="section_desc">
        <h2 class="text-center fw-bold">Meet The New Agency SEO Template Form The Avada Team</h2>
        <p class="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum delectus sapiente
          commodi libero.</p>
      </div>
      <div class="my_container mt-5">
        <div class="row cols-4 gap-5">
          <div class="col">
            <h3>Establish Goals</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et aliquam asperiores velit unde voluptatum
              maiores deserunt doloribus cumque expedita suscipit!</p>
          </div>
          <div class="col">
            <h3>Work With a Team</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et aliquam asperiores velit unde voluptatum
              maiores deserunt doloribus cumque expedita suscipit!</p>
          </div>
          <div class="col">
            <h3>Get Results</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et aliquam asperiores velit unde voluptatum
              maiores deserunt doloribus cumque expedita suscipit!</p>
          </div>
        </div>
      </div>
      <div class="mt-5">
        <img src="../../assets/img/agency-seo-desk-front-1200x570.jpg" alt="">
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use '../../assets/scss/variables.scss' as *;

section {
  background-color: $seo-alabaster;

  .section_desc {
    margin: 0 35%
  }

  .col {
    background-color: white;
  }
}
</style>