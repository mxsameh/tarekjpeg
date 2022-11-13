<script lang="ts">
  import gsap from "gsap";
	import { onMount } from "svelte";
  
  onMount(()=>
  {
    const $texts = document.querySelectorAll('p')
    const $marquee = document.querySelector('.marquee') as HTMLDivElement
    const width = $texts[0].clientWidth
    const height = $texts[0].clientHeight
    const wrapperWidth = width * ($texts.length - 1)
    $marquee.style.width = wrapperWidth  + "px"
    $marquee.style.height = height + "px"


    // position p's
    gsap.set($texts,{
      x: (i) => i * width
    })

    const loop = (speed : number)=>{
      gsap.to($texts,{
        ease:'none',
        duration:5,
        x : `-=${width *$texts.length + 6}`,
        modifiers : {
          x : (pos) => {
            pos = parseFloat(pos)
            let x = gsap.utils.wrap(-width, wrapperWidth, pos)
            return x+"px"
            // return pos
          }
        },
        repeat:-1,
      })
    }

    const x = gsap.utils.wrap(-10, 50, -11)
    console.log( x );

    loop(2)

    window.addEventListener('click',()=>{
      loop(3)
    })

    // gsap.to($texts,
    // {
    //   x: -400,
    //   duration:2,
    //   modifiers:{
    //     x: (x) => {
    //       x = parseFloat(x)
    //       let pos = gsap.utils.wrap(-width, wrapperWidth - width, x)
    //       // console.log( pos );
    //       return x+'px'
    //     }
    //   },
    //   ease: 'none',
    //   repeat: Infinity
    // })


  })

</script>

<div class="container">
    <div class="marquee">
      <p>photographer 1</p>
      <p>photographer 2</p>
      <p>photographer 3</p>
      <p>photographer 4</p>
      <p>photographer 544</p>
  </div>
</div>

<style lang="scss">
  .container{
    width: 100vw;
    height: 100vh;
    background-color: #121212;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
  }
  .marquee{
    display: flex;
    border: 2px solid greenyellow ;
    width: 500px;
    // overflow: hidden;
    position: relative;
  }
  p{
    padding: 20px;
    color: white;
    font-size: 24px;
    position: absolute;

    // animation: move 3s linear infinite;
  }

  @keyframes move{
    from{
      transform: translate(0,0);
    }
    to{
      transform: translate(-200px,0);
    }
  }
  
</style>