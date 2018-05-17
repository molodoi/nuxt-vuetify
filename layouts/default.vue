<template>
  <div class="default-layout">
    <v-app> 
      <ToolBar/>
      <v-content>
        <nuxt/>
      </v-content>
    </v-app>
  </div>
</template>

<script>
import ToolBar from '~/components/front/topnavbar/Toolbar.vue';
export default {
    components: {
      ToolBar
    }
}
</script>

<style>

</style>
