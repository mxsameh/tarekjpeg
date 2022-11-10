<script lang="ts">
	import lerp from '$lib/utils/lerp';
	import gsap from 'gsap';
	import { onMount } from 'svelte';

	const projects = [
		{
			name: 'Pepsi Black',
			link: ''
		},
		{
			name: "Adidas 'Watch Us Move'",
			link: ''
		},
		{
			name: `'Florida' // Marwan Moussa`,
			link: ''
		},
		{
			name: `Ehab Amin for Red Bull`,
			link: ''
		},
		{
			name: `'Free' // Marwan Pablo`,
			link: ''
		},
		{
			name: `'Dorak Gai' // Wegz`,
			link: ''
		},
		{
			name: 'Mousv In Ismalia',
			link: ''
		},
		{
			name: 'PUBG x Wegz',
			link: ''
		},
		{
			name: 'One & Four Studio AW20',
			link: ''
		},
		{
			name: 'Rebel Cairo',
			link: ''
		},
		{
			name: 'Pier 88 x LUCID',
			link: ''
		},
		{
			name: 'Suzanne SS19',
			link: ''
		},
		{
			name: 'UNITY',
			link: ''
		}
	];

	let projectsList: HTMLUListElement;
	let projectsListHeight: number;

	onMount(() => {
		const $projects = projectsList.querySelectorAll('.project');

      let projectHeight : number
      let projectsHeight : number
      let lastProjectY : number

    const calculateElements = () =>
    {
      projectHeight = $projects[0].clientHeight;
      projectsHeight = projectHeight * $projects.length;
      lastProjectY = projectsHeight - projectHeight;
    }
    calculateElements()

		let scrollY: number = 0;
		let y: number = 0;
    let scrollSpeed : number = 0
    let oldScroll : number = 0

		// POSITION THE PROJECT Y POSITION // SCROLL PROJECTS
		const positionProject = (scroll: number) => {
			gsap.set($projects, {
				y: (i) => {
					let pos = i * projectHeight + scroll;
					let y = gsap.utils.wrap(-projectHeight, lastProjectY, pos);
					return y;
				}
			});
		};

		// UPDATE POSITION
		const updatePosition = () => {
			y = lerp(y, scrollY, 0.1);
			positionProject(y);

      oldScroll = y
      scrollSpeed = Math.round(scrollY - y)

      gsap.to($projects,
      {
        scale : () =>{
          let speed = Math.abs(scrollSpeed * .0025)
          let scale = gsap.utils.clamp (1, 2, speed)
          return scale
        },
        duration : 1
      })

			requestAnimationFrame(updatePosition);
		};
		updatePosition();

		// WHEEL EVENT LISTENER
		projectsList.addEventListener('wheel', (e) =>
    {
			scrollY -= e.deltaY;
		});

    // RESIZE EVENT LISTENER
    window.addEventListener('resize', () =>
    {
      calculateElements()
    })

	});
</script>

<main class="projects">
	<ul class="projects-list" bind:this={projectsList} bind:clientHeight={projectsListHeight}>
		{#each projects as project, i}
			<li class="project" style:transform={`translate(0, ${i*100}px)`}>
				<a href={project.link} class="project-link">{project.name}</a>
			</li>
		{/each}
	</ul>
</main>

<style lang="scss">
	.projects-list {
		height: 100vh;
		width: 100vw;
		overflow: hidden;
		position: relative;
	}
	.project {
		width: 100%;
		padding: 1vw 0;
		position: absolute;
		top: 0;
		left: 0;
		z-index: 1;
	}
	.project-link {
		font-size: 6vw;
		display: block;
		text-align: center;
		user-select: none;
	}
</style>
