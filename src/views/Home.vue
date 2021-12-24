<template>
  <div class="home">
    <!--<HelloWorld msg="Template par Heargo"/>-->
    <Colors/>
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
import Colors from '@/components/Colors.vue'
export default {
  name: 'Home',
  components: {
    //HelloWorld,
    Colors
  }
}
</script>
<style lang="scss">
.home{
  background-color:#ededed;
}
</style>
