<script lang="ts">
	import { onMount } from 'svelte';
  import gsap from 'gsap'

	let cursor: HTMLDivElement;

	// HANDLE MOUSE MOVE
	const handleMove = (e: any) => {
		cursor.style.top = `${e.y}px`;
		cursor.style.left = `${e.x}px`;
	};

	onMount(() => {
    const $circles = document.querySelectorAll('.circle')
    const $extra = document.querySelectorAll('.extra')

    window.addEventListener('mousemove', (e)=>
    {
      gsap.to($circles,
      {
        top: e.y,
        left: e.x,
        stagger: .1,
        onStart:()=>{
          gsap.set($extra,{opacity:1})
        },
        onComplete:()=>{
          gsap.set($extra,{opacity:0})
        },
      })
    })

		// window.addEventListener('mousemove', handleMove);
	});
</script>

<div class="cursor" bind:this={cursor}>
  <div class="circle"></div>
  <div class="circle extra"></div>
  <div class="circle extra"></div>
</div>

<style lang="scss">
	.cursor {
		opacity: 0;
	}
  .circle{
    aspect-ratio: 1;
		transform: translate(-50%, -50%);
		border-radius: 100%;
    position: fixed;
		z-index: 1000;
    border: 2px solid;
    box-sizing: unset;

    &:nth-child(1){
      border-color: #ff00d2 ;
      width: 42px;
    }
    &:nth-child(2){
      border-color: #fed90f;
      width: 41px;
    }
    &:nth-child(3){
      border: 2px solid blue;
      border-color: #00a2ff;
      width: 40px;
    }
  }


</style>
