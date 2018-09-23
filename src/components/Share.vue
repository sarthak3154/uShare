<template>
  <div>
    <Header/>
    <Video/>
  </div>
</template>
<script>
import Header from './Header'
import Video from './VideoPlayer'
export default {
  name: 'Share',
  components: {
    'Video': Video,
    'Header': Header
  },
  data () {
    return {
      msg: 'uShare, let\'s get sharing'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
