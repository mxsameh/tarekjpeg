<script lang="ts">
	import lerp from '$lib/utils/lerp';
	import gsap from 'gsap';
	import { onMount } from 'svelte';

	const projects = [
		{
			name: 'Pepsi Black',
			link: '',
			img: 'https://images.squarespace-cdn.com/content/v1/5b27a34be17ba335ea8d1983/1592154457702-JLIJK8STYUPGC164IW7Z/TAREK123-2.JPG?format=500w'
		},
		{
			name: "Adidas 'Watch Us Move'",
			link: '',
			img: 'https://images.squarespace-cdn.com/content/v1/5b27a34be17ba335ea8d1983/1632759176142-UHS9PAQM4YBGGY0NPDS0/TAREK749.jpg?format=500w'
		},
		{
			name: `'Florida' // Marwan Moussa`,
			link: '',
			img: 'https://images.squarespace-cdn.com/content/v1/5b27a34be17ba335ea8d1983/1616626787994-WBUGEOMB8WVY4H6VGUDG/TAREK190.jpg?format=500w'
		},
		{
			name: `Ehab Amin for Red Bull`,
			link: '',
			img: 'https://images.squarespace-cdn.com/content/v1/5b27a34be17ba335ea8d1983/1632757963070-9UBHPUCT1I0VCX4S8XDG/TAREK973.jpg?format=500w'
		},
		{
			name: `'Free' // Marwan Pablo`,
			link: '',
			img: 'https://images.squarespace-cdn.com/content/v1/5b27a34be17ba335ea8d1983/1592150835731-ODUGJGSNV89XJS8VOYBV/TAREK73.JPG?format=500w'
		},
		{
			name: `'Dorak Gai' // Wegz`,
			link: '',
			img: 'https://images.squarespace-cdn.com/content/v1/5b27a34be17ba335ea8d1983/1591992882747-633S2OUL8ZS6U9MLDXW4/TAREK024.JPG?format=500w'
		},
		{
			name: 'Mousv In Ismalia',
			link: '',
			img: 'https://images.squarespace-cdn.com/content/v1/5b27a34be17ba335ea8d1983/1632760038698-33P4Y0GWLU72G4X1OW07/TAREK966.jpg?format=500w'
		},
		{
			name: 'PUBG x Wegz',
			link: '',
			img: 'https://images.squarespace-cdn.com/content/v1/5b27a34be17ba335ea8d1983/1632760271831-S7REQXX9F9RVZYWA5HDH/TAREK451.jpg?format=500w'
		},
		{
			name: 'One & Four Studio AW20',
			link: '',
			img: ''
		},
		{
			name: 'Rebel Cairo',
			link: '',
			img: ''
		},
		{
			name: 'Pier 88 x LUCID',
			link: '',
			img: ''
		},
		{
			name: 'Suzanne SS19',
			link: '',
			img: ''
		},
		{
			name: 'UNITY',
			link: '',
			img: ''
		}
	];

	let projectsList: HTMLUListElement;
	let projectsImages: HTMLDivElement;
	let projectsListHeight: number;

	onMount(() => {
		const $projects = projectsList.querySelectorAll('.project');
		const $projectsLinks = document.querySelectorAll('.project-link');
		const $projectsImages = document.querySelectorAll('.project-image');

		let projectHeight: number;
		let projectsHeight: number;
		let lastProjectY: number;

		const calculateElements = () => {
			projectHeight = $projects[0].clientHeight;
			projectsHeight = projectHeight * $projects.length;
			lastProjectY = projectsHeight - projectHeight;
		};
		calculateElements();

		let scrollY: number = 0;
		let y: number = 0;
		let scrollSpeed: number = 0;
		let oldScroll: number = 0;

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

			oldScroll = y;
			scrollSpeed = Math.round(scrollY - y);

			gsap.to($projectsLinks, {
				scale: () => {
					let speed = Math.abs(scrollSpeed * 0.0025);
					let scale = gsap.utils.clamp(1, 2, speed);
					return scale;
				},
				duration: 0.7
			});

			requestAnimationFrame(updatePosition);
		};
		updatePosition();

		// WHEEL EVENT LISTENER
		projectsList.addEventListener('wheel', (e) => {
			scrollY -= e.deltaY;
		});

		// RESIZE EVENT LISTENER
		window.addEventListener('resize', () => {
			calculateElements();
		});

		// MOUSE IN EVENT LISTENER
	});

	const getImage = (e : any) =>
	{
		const key = parseInt(e.target.dataset.projectKey);
		const img = projectsImages.children[key] as HTMLElement;
		return img
	}

	const viewProjectImage = (e: any) => {
		const img = getImage(e)

		gsap.from(img, {
			scale : .8,
			rotate : "random(10,20)",
		})
		img.style.opacity = '1';
	};


	const hideProjectImage = (e: any) => 
	{
		const img = getImage(e)
		img.style.opacity = '0';
	};

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


</script>

<main class="projects">
	<ul class="projects-list" bind:this={projectsList} bind:clientHeight={projectsListHeight}>
		{#each projects as project, i}
			<li class="project" style:transform={`translate(0, ${i * 100}px)`}>
				<a
					data-project-Name={project.name}
					data-project-Key={i}
					href={project.link}
					class="project-link"
					on:mouseenter={viewProjectImage}
					on:mouseleave={hideProjectImage}
					on:mousemove={moveImage}
				>
					{project.name}
					</a>
			</li>
		{/each}
	</ul>

	<div class="projects-images" bind:this={projectsImages}>
		{#each projects as project, i}
			<img data-projectImageIndex={i} src={project.img} class="project-img" alt="" />
		{/each}
	</div>
</main>

<style lang="scss">
	.projects-list {
		height: 100vh;
		width: 100vw;
		overflow: hidden;
		position: relative;
	}
	.project {
		position: absolute;
		width: 100%;
		padding: 1vw 0;
		top: 0;
		left: 0;
		z-index: 1;
		display: flex;
		justify-content: center;
	}
	.project-link {
		font-size: 6vw;
		display: block;
		text-align: center;
		user-select: none;
		position: relative;
		mix-blend-mode: multiply;
		&:before {
			visibility: visible;
			content: attr(data-project-name);
			position: absolute;
			top: 0;
			left: 0;
			width: 0;
			overflow: hidden;
			z-index: 2;
			transition: width 0.7s cubic-bezier(1, 0, 0, 1);
			white-space: nowrap;
			color: red;
		}
		&:hover {
			transform: scale(.8);
			visibility: hidden;
			transition: visibility 0s 0.7s linear;
		}
		&:hover::before {
			width: 100%;
		}
	}

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
