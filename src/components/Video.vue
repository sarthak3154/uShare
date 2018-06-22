<template>
  <div id="player">
  </div>
</template>

<script>
const YouTubeIframeLoader = require('youtube-iframe')
export default {
  name: 'Video',
  data: function () {
    return {

    }
  },
  created: function () {
    const tag = document.createElement('script')
    tag.src = 'https://www.youtube.com/iframe_api'
    const firstScriptTag = document.getElementsByTagName('script')[0]
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag)
  }
}

let player
let youTube
YouTubeIframeLoader.load(function (YT) {
  youTube = YT
  player = new YT.Player('player', {
    height: '480',
    width: '720',
    videoId: '5wMJok9gXZc',
    playerVars: {
      autoplay: 1
    },
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  })
})

function onPlayerReady (event) {
  event.target.playVideo()
}

let done = false
function onPlayerStateChange (event) {
  if (event.data === youTube.PlayerState.PLAYING && !done) {
    setTimeout(stopVideo, 6000)
    done = true
  }
}

function stopVideo () {
  player.stopVideo()
}

</script>

<style scoped>
  #player{
    margin-top: 20px;
    margin-left: 20px;
    margin-right:40px;
  }
</style>
