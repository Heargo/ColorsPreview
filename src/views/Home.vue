<template>
  <div class="home">
    <!--<HelloWorld msg="Template par Heargo"/>-->
    <Colors/>
    <div v-if="!used" class="buttonsContainer">
      <button class="use" @click="this.$store.state.colors.length >2 ? used=true : used=false">Use this palette</button>
    </div>
    
    <div class="TemplateContainer" v-if="used">
      <div class='row'>
        <TemplatePreview :key="randomizeCounter"/>
        <TemplatePreview :key="randomizeCounter"/>
      </div>

      <button class="randomize" @click="forceRefresh"><img src="@/assets/svg/dices.svg" alt="randomize"></button>

      <div class='row'>
        <TemplatePreview :key="randomizeCounter"/>
        <TemplatePreview :key="randomizeCounter"/>
      </div>

    </div>
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
import Colors from '@/components/Colors.vue'
import TemplatePreview from '@/components/TemplatePreview.vue'

export default {
  name: 'Home',
  data(){
    return{
      used:false,
      randomizeCounter:0
    }
  },
  components: {
    Colors,
    TemplatePreview
  },
  methods: {
    forceRefresh(){
      this.randomizeCounter++;
    }
  }
}
</script>
<style lang="scss">



.home{
  background-color:#ededed;
}
.TemplateContainer{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .row{
    display: flex;
    flex-direction: row;
  }
}

.buttonsContainer{
  display:flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.use{
    margin:1rem;
    width:auto;
    height:auto;
    padding: 0.5rem 1rem;
    font-size: 1.2rem;
    font-weight: bold;
    color:#737475;
    font-family: 'Neucha', cursive;
    font-family: 'Poppins', sans-serif;
}
.randomize{
  border:none;
  margin:1rem;
  width:60px;
  height:60px;
  border-radius:20px;
  box-shadow:  6px 6px 12px #c9c9c9,
      -6px -6px 12px #ffffff;
  img{
    transform:scale(.7) translateX(-8px);

  }
  &:hover{
      box-shadow: inset 6px 6px 12px #c9c9c9,
      inset -6px -6px 12px #ffffff;
      img{
          transform:scale(.6)  translateX(-9px);
      }
  }
  }
</style>
