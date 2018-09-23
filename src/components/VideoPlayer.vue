<template>
  <div class="video-player">
    <youtube :video-id="videoId" ref="youtube" @playing="playing"></youtube>
    <button @click="playVideo">Play</button>
    <button @click="seekVideo">Seek</button>
    <h3>{{this.activeVideo.title}}</h3>
  </div>
</template>

<script>
const activeVideo = {
  id: 1,
  title: 'Creators Video',
  youtubeURL: 'https://www.youtube.com/embed/5wMJok9gXZc',
  likes: 0,
  views: 0
}
export default {
  name: 'VideoPlayer',
  data () {
    return {
      activeVideo,
      videoId: '5wMJok9gXZc',
      playerVars: {
        autoplay: 1
      }
    }
  },
  computed: {
    player () {
      return this.$refs.youtube.player
    }
  },
  methods: {
    ready () {
      this.player.playVideo()
    },
    async playVideo () {
      await this.player.playVideo()
    },
    seekVideo () {
      Promise.resolve(this.player.getCurrentTime()).then(seconds => {
        let time = seconds + 10
        this.player.seekTo(time, true)
      })
    },
    playing () {
      console.log('The video is playing')
    }
  }
}
</script>

<style scoped>
  .video-player {
    margin-top: 20px;
    margin-left: 20px;
    margin-right: 40px;
  }
</style>
