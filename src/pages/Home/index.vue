<template>
  <div>
      <TypeNav></TypeNav>
      <ListContainer></ListContainer>
      <Recommend></Recommend>
      <Rank></Rank>
      <Like></Like>
      <Floor v-for="flr in floors" :key="flr.id" :floor="flr"></Floor>
      <Brand></Brand>
  </div>
</template>

<script>
import ListContainer from './ListContainer'
import Recommend from './Recommend'
import Rank from './Rank'
import Like from './Like'
import Floor from './Floor'
import Brand from './Brand'
import { mapState } from 'vuex'
export default {
    name: 'Home',
    components: {
      ListContainer,
      Recommend,
      Rank,
      Like,
      Floor,
      Brand,
    },
    mounted() {
      this.$store.dispatch("getFloors")
      this.$store.dispatch('getUserInfo')
    },
    computed: {
      ...mapState({
        floors:state => state.home.floors
      })
    }
}
</script>

<style>

</style>