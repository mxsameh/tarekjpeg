<script lang="ts">
	import albumCovers from "$lib/stores/albumCovers";
  import gsap from "gsap";
	import { onMount } from "svelte";


  onMount( () =>
  {
    let scroll = true
    const $titleWraper = document.querySelector('.title-wraper')
    const $titleAlbum = document.querySelector('.title-album') as HTMLHeadingElement
    const $titleArtist = document.querySelector('.title-artist') as HTMLHeadingElement

    // Get Scroll Direction
    const getScrollDirection = (e : any) : number =>
    {
      const direction = e.deltaY > 0 ? -1 : 1
      return direction
    }

    // Handle Scroll
    const  handleScroll = (e : any) =>
    {
      
      if(!scroll) return
      // get direction of scroll=
      const direction = getScrollDirection(e)

      // move the wrapper out of view
      const tl = gsap.timeline()
      tl.to($titleWraper,
      {
        y : `${100 * direction}%`,
        duration: .3,
        ease: 'linear',
        onComplete : ()=>{
          // change content
          $titleAlbum.innerText = 'alomek'
          $titleArtist.innerText = 'marwan moussa'
        }
      })

      // set the wrapper to below
      tl.set($titleWraper,
      {
        y : `${-100 * direction}%`,
        onStart: ()=>{console.log( 'oh' );}
      })


      // move back to view
      tl.to($titleWraper,
      {
        y : 0,
        duration: .2
      })

      scroll = false

      // wait few seconds then enable scrolling again
      setTimeout(()=>{
        scroll = true
        console.log( 'enabled' );
      },2000)

    }

    // Event Listner
    window.addEventListener('wheel',handleScroll)
  })

</script>

<main class="container">

  <div class="title-container">
    <div class="title-wraper">
      <h1 class="title-album title">free</h1>
      <h1 class="title-x title">//</h1>
      <h1 class="title-artist title">marwan pablo</h1>
    </div>
  </div>

</main>


<style lang="scss">
  .container{
    width:100%;
    height: 100vh;
    display: grid;
    place-items: center;
  }
  .title-container{
    overflow: hidden;
  }
  .title-wraper{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
  }
  .title{
    font-size: clamp(60px,5vw,200px);
    text-transform: capitalize;
    line-height: 1;
    font-family: 'Ubuntu';
  }

  
</style>