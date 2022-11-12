<script lang="ts">
	import ProjectsImages from '$lib/components/projects page/ProjectsImages.svelte';
	import ProjectsList from '$lib/components/projects page/ProjectsList.svelte';
	import lerp from '$lib/utils/lerp';
	import gsap from 'gsap';
	import { onMount } from 'svelte';

	const projectsData = [
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

	/*-----------------------------------
	/*  VARIABLES
	/*----------------------------------*/
	let projects : NodeListOf <Element>;
	let projectsLinks : NodeListOf <Element>;

	let projectHeight: number;
	let projectsHeight: number;
	let lastProjectY: number;

	let scrollY: number = 0;
	let y: number = 0;


	// CALCULATE DIMENSIONS
	const calculateDimensions = () =>
	{
		projectHeight = projects[0].clientHeight;
		projectsHeight = projectHeight * projects.length;
		lastProjectY = projectsHeight - projectHeight;
	};
	 
	// 	SCROLL PROJECTS
	const scrollProjects = ( scroll : number ) =>
	{
		gsap.set(projects, {
			y: (i) => {
				let pos = i * projectHeight + scroll;
				let y = gsap.utils.wrap(-projectHeight, lastProjectY, pos);
				return y;
			}
		});
	};

	// CALCULATE PROJECT POSITIONS
	const positionProjects = () =>
	{
		// update scroll position
		y = lerp(y, scrollY, 0.1);
		scrollProjects(y);

		// calculate scroll speed
		let scrollSpeed = Math.round(scrollY - y);

		// animate scrolling
		gsap.to(projectsLinks, {
			scale: () => {
				let speed = Math.abs(scrollSpeed * 0.0025);
				let scale = gsap.utils.clamp(1, 2, speed);
				return scale;
			},
			duration: 0.7
		});

		requestAnimationFrame(positionProjects);
	};

	// HANDLE SCROLL EVENT
	const handleScroll = ( e : any) =>
	{
			scrollY -= e.deltaY;
	}


	onMount(() => {
		projects = document.querySelectorAll('.project');
		projectsLinks = document.querySelectorAll('.project-link');

		calculateDimensions();
		positionProjects();

		// WHEEL EVENT LISTENER
		window.addEventListener('wheel', handleScroll);

		// RESIZE EVENT LISTENER
		window.addEventListener('resize', calculateDimensions);

	});



</script>

<main class="projects">

	<ProjectsList projects={projectsData} />

	<ProjectsImages projects={projectsData}/>

</main>

<style lang="scss">

</style>
