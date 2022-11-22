<script>
import AgencySection from '../sections/AgencySection.vue';
import ServicesSection from '../sections/ServicesSection.vue';
import WorkSection from '../sections/WorkSection.vue';
import PlansSection from '../sections/PlansSection.vue';
import NewsSection from '../sections/NewsSection.vue';
import ClientsSection from '../sections/ClientsSection.vue';
import ContactsSection from '../sections/ContactsSection.vue';

export default {
    name: "AppMain",
    components: { AgencySection, ServicesSection, WorkSection, PlansSection, NewsSection, ClientsSection, ContactsSection }
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

        <!-- Quinta sezione: News -->
        <NewsSection />

        <!-- Sesta sezione: Clients -->
        <ClientsSection />

        <!-- Settima sezione: Contacts -->
        <ContactsSection />
    </main>
</template>

<style lang="scss" scoped>

</style>