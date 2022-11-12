<script lang="ts">
	import { onMount } from "svelte";
  import gsap from "gsap";


  export let projects : any
  let projectsImages : HTMLDivElement;

  // GET IMAGE NODE FROM THE PROJECT
	const getImage = (e : any) =>
	{
		const key = parseInt(e.target.dataset.projectKey);
		const img = projectsImages.children[key] as HTMLElement;
		return img
	}

  // VIEW PROJECT IMAGE
	const viewImage = (e: any) => {
		const img = getImage(e)

		gsap.from(img, {
			scale : .8,
			rotate : "random(10,20)",
		})
		img.style.opacity = '1';
	};


  // HIDE PROJECT IMAGE
	const hideImage = (e: any) => 
	{
		const img = getImage(e)
		img.style.opacity = '0';
	};

  // MOVE IMAGE
	const moveImage = (e : any) =>
	{
		let mousePosition =
		{
			// x : (e.x - ((window.innerWidth - e.target.clientWidth) / 2)) / e.target.clientWidth,
			x : (e.x - e.target.offsetLeft) / e.target.clientWidth,
			y : (e.y - ((e.target.scrollTop - e.target.clientHeight) / 2)) / e.target.clientHeight
		}
		const img = getImage(e);
		gsap.set(img, {
			x : mousePosition.x * 40,
			duration : .3,
			ease: 'slow'
		})

	}


  onMount( () =>
  {
    const $projectsLinks = document.querySelectorAll('.project-link')

    // Add event listeners for each link
    $projectsLinks.forEach(link =>
    {
      link.addEventListener('mouseenter',viewImage)
      link.addEventListener('mouseleave',hideImage)
      link.addEventListener('mousemove',moveImage)
    })

  })


  
</script>


<div class="projects-images" bind:this={projectsImages}>
  {#each projects as project, i}
    <img data-projectImageIndex={i} src={project.img} class="project-img" alt="" />
  {/each}
</div>


<style lang="scss">
	.project-img {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 20vw;
		aspect-ratio: 1/1.5;
		z-index: -1;
		object-fit: cover;
		opacity: 0;
	}
</style>