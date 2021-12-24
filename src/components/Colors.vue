<template>
    <div class="ColorsContainer">
        <div class="color" v-for="(c, i) in $store.state.colors" :key="c">
            <input type="color" :id="'input-'+i" :name="i" value="$store.state.colors[i]">
            <label :id="'label-'+i" :style="{'background-color':c}" :for="'input-'+i"></label>
        </div>
        <button @click="addColor" ><img src="@/assets/svg/cross.svg" alt=""></button>
    </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
    name:"Colors",
    methods: {
        ...mapMutations([
            'addColor',
        ]),
        addColor(){
            console.log(this.$store)
            var STORE = this.$store;
            STORE.commit('addColor');
            
            //we do that because the vmodel glitch on a color selector.
            setTimeout(function(){ //delay is because sometimes document isn't updated yet when we do getElementById
                var num = (STORE.state.colors.length)-1
                var str1 ="input-"+num;
                var str2 ="label-"+num;
                var colorInput = document.getElementById(str1);
                var colorLabel = document.getElementById(str2);
                colorInput.addEventListener("change",  () => {
                    STORE.state.colors[num]=colorInput.value;
                    colorLabel.style.backgroundColor =colorInput.value;
                });
            }, 1);
            
        }       

    }
}
</script>
<style lang="scss">
    .ColorsContainer{
        display:flex;
        flex-direction:row;
        justify-content:center;
        align-items:center;
        flex-wrap:wrap;
    }
    .color{
        width:80px;
        height:80px;
        border-radius:20px;
        margin:1rem;
        input{
            visibility: hidden;
        }
        label{
            display: block;
            width:80px;
            height:80px;
            border-radius:20px;
            box-shadow:  -6px -6px 12px #c9c9c9,
             6px 6px 12px #ffffff;
            transform:translateY(-27px);
        }
    }
    button{
        border:none;
        margin:1rem;
        width:60px;
        height:60px;
        border-radius:20px;
        box-shadow:  9px 9px 20px #c9c9c9,
        -9px -9px 20px #ffffff;
        &:hover{
            box-shadow: inset -20px -20px 60px #c9c9c9,
            inset 20px 20px 60px #ffffff;
        }
    }
</style>