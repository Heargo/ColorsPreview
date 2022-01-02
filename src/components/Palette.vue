<template>
    <div class="paletteContainer">
        <img src="@/assets/svg/delete.svg" alt="delete" @click="removePalette(index)">
        <div class="palettePreviewContainer" >
                <div v-for="c in colors" :key='c' :style="{'background-color':c}"></div>
        </div>
    </div>
        
</template>
<script>
export default {
    name: 'Palette',
    props:[
        'colors',
        'index'
    ],
    methods: {
        removePalette(index){
            var all_palettes=JSON.parse(window.localStorage.getItem("palettes"));
            all_palettes.splice(index,1)
            window.localStorage.setItem("palettes",JSON.stringify(all_palettes))
        }
    }
}
</script>
<style lang="scss">
    .paletteContainer{
        position: relative;

        img{
            position: absolute;
            z-index: 15;
            background-color:#c9c9c9;
            border-radius: 100px;
            padding: 0.3rem;
            top: 10px;
            right: 10px;

            &:hover{
                transform:scale(1.2)
            }
        }
    }
    .palettePreviewContainer{
        
        width:300px;
        height:100px;
        display: flex;
        align-items:stretch;
        justify-content:center;
        border-radius: 20px;
        box-shadow: 6px 6px 12px #c9c9c9, -6px -6px 12px #ffffff;
        margin:1rem;
        transition: all 0.3s ease;
        cursor: pointer;

        &:hover{
            transform:scale(1.02)
        }
        div{
            min-width: 10px;
            width: 100%;
            height:100%;

            &:first-child{
                border-top-left-radius: 20px;
                border-bottom-left-radius: 20px;
            }
            &:last-child{
                border-top-right-radius: 20px;
                border-bottom-right-radius: 20px;
            }
        }
    }
</style>