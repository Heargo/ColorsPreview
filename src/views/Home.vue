<template>
  <div class="home">
    <!--<HelloWorld msg="Template par Heargo"/>-->
    <h1 v-if="!used">Palette Previews</h1>
    <Colors/>
    <button :class="{ showSaved: toggleSaved,more:true}" @click="toggleSaved=!toggleSaved" ><img src="@/assets/svg/dots.svg" alt="randomize"></button>
    <div class="buttonsContainer">
      <button v-if="!used" class="use" @click="this.$store.state.colors.length >2 ? used=true : used=false">Use this palette</button>
      <button v-if="used" class="customButton" @click="savePalette()">Save this palette</button>
    </div>
    
    <div class="TemplateContainer" v-if="used">
      <div class='row'>
        <TemplatePreview :key="refreshCounter"/>
        <TemplatePreview :key="refreshCounter"/>
      </div>

    <button class="randomize" @click="forceRefresh"><img src="@/assets/svg/dices.svg" alt="randomize"></button>

      <div class='row'>
        <TemplatePreview :key="refreshCounter"/>
        <TemplatePreview :key="refreshCounter"/>
      </div>
    </div>
    <div class='toggle' v-if="toggleSaved">
      <div class="previewSavedPalettes" :key="refreshCounter">
        <Palette v-for="(p,i) in getSavedPalettes()" :key="p" :colors='p' :index='i' @click="selectPalette(p)" />
      </div>
    </div>
    
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
import Colors from '@/components/Colors.vue'
import TemplatePreview from '@/components/TemplatePreview.vue'
import Palette from '@/components/Palette.vue'

import { mapActions } from 'vuex'

export default {
  name: 'Home',
  data(){
    return{
      used:false,
      refreshCounter:0,
      toggleSaved:false,
    }
  },
  components: {
    Colors,
    TemplatePreview,
    Palette
  },
  methods: {
    ...mapActions([
      'toastErrorAction'
    ]),
    forceRefresh(){
      this.refreshCounter++;
    },
    getSavedPalettes(){
      return JSON.parse(window.localStorage.getItem("palettes"));
    },
    selectPalette(p){
      this.$store.state.colors=p;
      this.toggleSaved=!this.toggleSaved;
    },
    savePalette(){
      //window.localStorage.clear()
      //get previous palettes
      var palettes_list=this.getSavedPalettes();
      var palette = this.$store.state.colors;

      //if valid palette 
      if (palette.length>2){
        //if first palette then init
        if (palettes_list===null){
          palettes_list=[this.$store.state.colors];
        }
        //push to existing palettes
        else{
          palettes_list.push(this.$store.state.colors);
        }

        window.localStorage.setItem("palettes",JSON.stringify(palettes_list))
        console.log(window.localStorage.getItem("palettes"))
        this.forceRefresh()
      }
      //not valid palette
      else{
        this.toastErrorAction("The palette must contain at least 3 colors.")
      }
      
    }
  }
}
</script>
<style scoped lang="scss">
.home{
  //height:100vh;
  background-color:#ededed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  h1{
    font-size:4rem;
    font-family: "Poppins", sans-serif;
    color:#737475;
  }
}
.TemplateContainer{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  //height: calc(100vh - 100px);
  .row{
    display: flex;
    flex-direction: row;
    height: 50%;
  }
}

.buttonsContainer{
  display:flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.use,.customButton{
    margin:1rem;
    width:auto;
    height:auto;
    padding: 0.5rem 1rem;
    font-size: 1.2rem;
    font-weight: bold;
    color:#737475;
    font-family: 'Poppins', sans-serif;
}
.more{
  position: absolute;
  top: 0;
  right: 0;
  width:40px;
  height:40px;
  border-radius:15px;
  z-index: 12;
  transition: all 0.2s ease;
  img{
    transform:translateX(-1px);
  }
  &:hover{
    img{
      transform:scale(.9)  translateX(-1px);
    }
  }
}
.showSaved{
  transform: rotate(180deg);
}
.randomize{
  position: absolute;
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
  .previewSavedPalettes{
    display: flex;
    flex-wrap: wrap;
    justify-content:center;
    align-items:center;
    margin-top: 50px;
  }
  .toggle{
    position: absolute;
    bottom: 0;
    right:0;
    max-width: 500px;
    width: 100%;
    height:100vh;
    z-index: 11;
    overflow:auto;
    background-color: #ededed;
  }
</style>
