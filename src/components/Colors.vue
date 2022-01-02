<template>
    <div class="ColorsContainer">
        <div class="color" v-for="(c, i) in $store.state.colors" :key="c">
            <input type="color" :id="'input-'+i" :name="i" v-model.lazy="$store.state.colors[i]">
            <label :id="'label-'+i" :style="{'background-color':$store.state.colors[i]}" :for="'input-'+i"></label>
            <img src="@/assets/svg/delete.svg" alt="delete" @click="removeColor(i)">
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
        },
        removeColor(index){
            this.$store.state.colors.splice(index,1);
        }   

    }
}
</script>
<style scoped lang="scss">
    .ColorsContainer{
        display:flex;
        flex-direction:row;
        justify-content:center;
        align-items:center;
        flex-wrap:wrap;
        z-index: 10;
        max-width: calc(100vw - 200px);
    }
    .color{
        width:80px;
        height:80px;
        border-radius:20px;
        margin:1rem;
        position: relative;
        input{
            visibility: hidden;
        }
        label{
            cursor: pointer;
            display: block;
            width:80px;
            height:80px;
            border-radius:20px;
            box-shadow:  6px 6px 12px #c9c9c9,
             -6px -6px 12px #ffffff;
            transform:translateY(-27px);
        }
        img{
            cursor: pointer;
            position:absolute;
            top:-2px;
            right:-5px;
            transform:scale(1.1);
            background-color:#c9c9c9;
            padding:0.2rem;
            border-radius:100%;
        }
    }
    
</style>