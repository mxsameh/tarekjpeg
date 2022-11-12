<script lang="ts">
	import { onMount } from 'svelte';
	import gsap from 'gsap';

	export let projects: any;
	let projectsImages: HTMLDivElement;

	// GET IMAGE NODE FROM THE PROJECT
	const getImage = (e: any) => {
		const key = parseInt(e.target.dataset.projectKey);
		const img = projectsImages.children[key] as HTMLElement;
		return img;
	};

	// VIEW PROJECT IMAGE
	const viewImage = (e: any) => {
		const img = getImage(e);

		gsap.to(img,
		{
			scale: 1,
			left : e.clientX,
			opacity: 1,
			duration: .5
		})

	};

	// HIDE PROJECT IMAGE
	const hideImage = (e: any) => {
		const img = getImage(e);
		gsap.to(img,
		{
			opacity:0,
			duration: .5,
		})
	};

	// MOVE IMAGE
	const moveImage = (e: any) => {
		let mousePosition = {
			x: (e.x - e.target.offsetLeft) / e.target.clientWidth,
			y: (e.y - (e.target.scrollTop - e.target.clientHeight) / 2) / e.target.clientHeight
		};
		const img = getImage(e);
		gsap.to(img, {
			left:e.x,
			rotate : `${(mousePosition.x - .5 )* 50}`,
			duration: 0.6,
		});
	};

	onMount(() => {
		const $projectsLinks = document.querySelectorAll('.project-link');

		// Add event listeners for each link
		$projectsLinks.forEach((link) => {
			link.addEventListener('mouseenter', viewImage);
			link.addEventListener('mouseleave', hideImage);
			link.addEventListener('mousemove', moveImage);
		});
	});
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
		// left: 50%;
		transform: translate(-50%, -50%);
		width: 20vw;
		aspect-ratio: 1/1.5;
		z-index: -1;
		object-fit: cover;
		opacity: 0;
		scale: .8;
	}
</style>
