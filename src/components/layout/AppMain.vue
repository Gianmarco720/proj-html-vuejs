<script>
import AgencySection from '../sections/AgencySection.vue';
import ServicesSection from '../sections/ServicesSection.vue';
import WorkSection from '../sections/WorkSection.vue';

export default {
    name: "AppMain",
    components: { AgencySection, ServicesSection, WorkSection }
}
</script>

<template>
    <main>
        <!-- Prima sezione: Agency -->
        <AgencySection />

        <!-- Seconda sezione: Services -->
        <ServicesSection />

        <!-- Terza sezione: Work -->
        <WorkSection />
    </main>
</template>

<style lang="scss" scoped>

</style>