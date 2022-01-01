<template>
    <div :style="cssProps" class="template">
		
		<h1>Theme 1</h1>

		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
		tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
		quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
		consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
		cillum dolore eu fugiat nulla pariatur.</p>

        <div class="rowBtn">
            <a href="">Link</a>

            <button>Button</button>
        </div>


        <div class="circlesContainer">
            <div class="progress--circle progress--75" :style="{'background-color':c}">
                <div class="progress__number">75%</div>
            </div>
            <div class="progress--circle progress--10" :style="{'background-color':c}">
                <div class="progress__number">10%</div>
            </div>
        </div>
        

    </div>
</template>
<script>
export default {
    name:"TemplatePreview",
    data(){
        return{
            colorsShuffled:this.shuffle(this.$store.state.colors)
        }
    },
    methods: {
        shuffle(originalArray) {
            var array=[...originalArray];
            let currentIndex = array.length,  randomIndex;
            while (currentIndex != 0) {
                randomIndex = Math.floor(Math.random() * currentIndex);
                currentIndex--;
                [array[currentIndex], array[randomIndex]] = [
                array[randomIndex], array[currentIndex]];
            }

            return array;
            }
    },
    computed: {
        cssProps() {
            this.colorsShuffled.forEach(e => {
                console.log(e);
            });
        return {
            '--color1': this.colorsShuffled[0],
            '--color2': this.colorsShuffled[1],
            '--color3': this.colorsShuffled[2],
            '--color4': this.colorsShuffled[3]
        }
        }
    }
}
</script>

<style scoped lang="scss">
    

    $backColor:var(--color1);
    $themeColor:var(--color2);
    $themeColor2:var(--color3);
    $highlight:var(--color4);

    $sizeCircleColor:3px;


    .template{
        background-color:$backColor;
        margin :.5rem;
        border-radius:20px;
        min-height: 350px;
        min-width: 500px;

        h1{
            font-family: 'Poppins', sans-serif;
            color:$themeColor2;
        }
        p{
            font-family: 'Montserrat', sans-serif;
            color:$themeColor;
        }
        .rowBtn{
            display: flex;
            justify-content:center;
            align-items:center;
        }
        a{
            color:$highlight;
            margin:0 0.5rem;
        }
        button{
            box-shadow:none;
            width:auto;
            height:auto;
            padding:0.5rem 1rem;
            margin:0 0.5rem;
            color:$themeColor;
            background-color:$themeColor2;
        }
    
    

        .circlesContainer{
            display:flex;
            flex-direction: row;
            justify-content:center;
            align-items:center;
        }


        .progress--circle {
            position: relative;
            display: inline-block;
            margin: 1rem;
            width: 60px;
            height: 60px;
            border-radius: 50%;

            &:before {
                content: '';
                position: absolute;
                top: $sizeCircleColor;
                left: $sizeCircleColor;
                width: calc(60px - 2*$sizeCircleColor);
                height: calc(60px - 2*$sizeCircleColor);
                border-radius: 50%;
                background-color: $backColor;
            }

            &:after {
                content: '';
                display: inline-block;
                width: 100%;
                height: 100%;
                border-radius: 50%; 
                background-color: var(--color2);
            }
        }

        .progress__number {
            position: absolute;
            top: 50%;
            width: 100%;
            line-height: 1;
            margin-top: -0.5rem;
            text-align: center;
            font-size: 1rem;
            color: $themeColor2;
        }



        $step: 1;
        $loops: round(100 / $step);
        $increment: calc(360 / $loops);
        $half: round($loops / 2);
        @for $i from 0 through $loops {
        .progress--circle.progress--#{$i * $step}:after {
            @if $i < $half {
            $nextDeg: 90deg + ($increment * $i);
            background-image: linear-gradient(90deg, $backColor 50%, transparent 50%, transparent), linear-gradient($nextDeg, $themeColor 50%, $backColor 50%, $backColor);
            }
            @else {
            $nextDeg: -90deg + ($increment * ($i - $half));
            background-image: linear-gradient($nextDeg, $themeColor 50%, transparent 50%, transparent), linear-gradient(270deg, $themeColor 50%, $backColor 50%, $backColor);
            }
        }

    }
    }
</style>