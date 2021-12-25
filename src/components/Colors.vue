<template>
    <div class="ColorsContainer">
        <div class="color" v-for="(c, i) in $store.state.colors" :key="c">
            <input type="color" :id="'input-'+i" :name="i" v-model.lazy="$store.state.colors[i]">
            <label :id="'label-'+i" :style="{'background-color':$store.state.colors[i]}" :for="'input-'+i"></label>
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
        z-index: 10;
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
            box-shadow:  6px 6px 12px #c9c9c9,
             -6px -6px 12px #ffffff;
            transform:translateY(-27px);
        }
    }
    button{
        border:none;
        margin:1rem;
        width:60px;
        height:60px;
        border-radius:20px;
        box-shadow:  6px 6px 12px #c9c9c9,
             -6px -6px 12px #ffffff;
        &:hover{
            box-shadow: inset 6px 6px 12px #c9c9c9,
            inset -6px -6px 12px #ffffff;
            img{
                transform:scale(.9)
            }
        }
    }
    
</style>