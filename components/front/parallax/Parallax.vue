<template>
    <section class="parallax">
      <v-parallax :src="require('@/assets/img/group-of-young-people.png')" height="550">
        <SearchForm />
      </v-parallax>
    </section>
</template>

<script>
import SearchForm from '~/components/front/form/SearchForm.vue';
export default {
    components: {
      SearchForm
    }
}
</script>


<style scoped>
</style>