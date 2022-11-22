<script>
import AgencySection from '../sections/AgencySection.vue';
import ServicesSection from '../sections/ServicesSection.vue';

export default {
    name: "AppMain",
    components: { AgencySection, ServicesSection }
}
</script>

<template>
    <main>
        <!-- Prima sezione -->
        <AgencySection />

        <!-- Seconda sezione -->
        <ServicesSection />
    </main>
</template>

<style lang="scss" scoped>

</style>