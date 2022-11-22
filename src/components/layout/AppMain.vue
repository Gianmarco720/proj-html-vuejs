<script>
import AgencySection from '../sections/AgencySection.vue';
import ServicesSection from '../sections/ServicesSection.vue';
import WorkSection from '../sections/WorkSection.vue';
import PlansSection from '../sections/PlansSection.vue';

export default {
    name: "AppMain",
    components: { AgencySection, ServicesSection, WorkSection, PlansSection }
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

        <!-- Quarta sezione: Plans -->
        <PlansSection />
    </main>
</template>

<style lang="scss" scoped>

</style>