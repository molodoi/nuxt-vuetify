<template>
    <div>          
      <Parallax/>
      <a @click="fetchSomething">Give ip</a>  
      {{ something }}
    </div>   
</template>

<script>
import Parallax from '~/components/front/parallax/Parallax.vue';

export default {
  data() {
    return { 
      something: ''            
    }
  },
  components: {
    Parallax
  },
  methods: {
    async fetchSomething() {
      const something = await this.$axios.$get('/societes')
      this.something = something
    }
  }
}
</script>

<style>

</style>
