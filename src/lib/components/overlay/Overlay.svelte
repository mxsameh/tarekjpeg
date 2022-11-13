<script lang="ts">
  import gsap, { Bounce } from "gsap";
	import { onMount } from "svelte";
	import { text } from "svelte/internal";

  let overlay : HTMLDivElement;
  let title : HTMLHeadingElement;
  let titleMask : HTMLHeadingElement;

  onMount( () =>
  {
    const tl = gsap.timeline()

    // move the overlay to view
    tl.to(overlay,
    {
      y:0,
      duration: 1
    })

    // move text to veiw
    tl.to(title,
    {
      y:0,
      duration: 1,
      delay: .2
    })

    tl.to(titleMask,
    {
      width: '100%',
      duration : 1
    })
    
    // setTimeout(()=>{
    //   tl.reverse()
    // },3000)
  })


</script>

<div class="overlay" bind:this={overlay} >
  <div class="title-wraper">
    <h1 class="title" bind:this={title}> ahmed tarek</h1>
    <h1 class="title mask active" bind:this={titleMask}>ahmed tarek</h1>
  </div>
</div>


<style lang="scss">
  .overlay{
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #1a1a1a;
    transform: translate(0,-100%);
  }
  .title-wraper{
    overflow: hidden;
    position: relative;
  }
  .title{
    font-size: 9vw;
    color: bisque;
    font-family: 'Times New Roman', Times, serif;
    text-transform: capitalize;
    transform: translate(0,-100%);
  }
  .title.mask{
    width: 0;
    overflow: hidden;
    transform: translate(0,0);
    white-space: nowrap;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
  }

	.active {
		background: linear-gradient(
			135deg,
			#ff00d2,
			#fed90f,
			#00a2ff,
			#09f1b8,
			#ff00d2,
			#fed90f,
			#00a2ff,
			#09f1b8
		);
		background-size: 300% 300%;
		background-clip: text;
		-webkit-text-fill-color: transparent;
		animation: gradient 8s ease-in-out infinite;
	}
	@keyframes gradient {
		0% {
			background-position: 0% 50%;
		}
		50% {
			background-position: 100% 50%;
		}
		100% {
			background-position: 0% 50%;
		}
	}
  
</style>