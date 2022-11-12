<script lang="ts">
	import albums from '$lib/stores/albumCovers';
	import gsap from 'gsap';
	import { onMount } from 'svelte';

	let i = 0;

	onMount(() => {
		let scroll = true;
		const $titleWraper = document.querySelector('.title-wraper');
		const $titleAlbum = document.querySelector('.title-album') as HTMLHeadingElement;
		const $titleArtist = document.querySelector('.title-artist') as HTMLHeadingElement;
		const $coverMask = document.querySelector('.cover-mask') as HTMLDivElement;
		const $coverImage = document.querySelector('.cover-img') as HTMLImageElement;

		// Get Scroll Direction
		const getScrollDirection = (e: any): number => {
			const direction = e.deltaY > 0 ? -1 : 1;
			return direction;
		};

		// Handle Scroll
		const handleScroll = (e: any) => {
			if (!scroll) return;
			// get direction of scroll=
			const direction = getScrollDirection(e);

			// move the wrapper out of view
			const tl = gsap.timeline();
			tl.to($titleWraper, {
				y: `${100 * direction}%`,
				duration: 1,
				onComplete: () => {
					// change album
					i++;
					let album = gsap.utils.wrap($albums, i);
					$titleAlbum.innerText = album.name;
					$titleArtist.innerText = album.artist;
					$coverImage.src = album.img;
				}
			});

			// set the wrapper to below
			tl.set($titleWraper, {
				y: `${100 * direction}%`,
				onStart: () => {
					console.log('oh');
				}
			});

			// move back to view
			tl.to($titleWraper, {
				y: 0,
				duration: 1
			});

			const tl2 = gsap.timeline();

			tl2.set($coverMask, {
				y: `${direction * -100}%`
			});

			// hide image by moving the wrapper
			tl2.to($coverMask, {
				y: 0,
				duration: 1,
				esae: 'linear'
			});
			// set cover mask based on direction
			// view new Image
			tl2.to($coverMask, {
				y: `${direction * -100}%`,
				duration: 1
			});

			scroll = false;

			// wait few seconds then enable scrolling again
			setTimeout(() => {
				scroll = true;
			}, 2000);
		};

		// Event Listner
		window.addEventListener('wheel', handleScroll);
	});
</script>

<div class="container">
	<main class="main">
		<!-- TITLE -->
		<div class="title-container">
			<div class="title-wraper">
				<h1 class="title-album title">{$albums[0].name}</h1>
				<h1 class="title-x title">//</h1>
				<h1 class="title-artist title">{$albums[0].artist}</h1>
			</div>
		</div>

		<!-- COVER -->
		<div class="cover-container">
			<div class="cover-wraper">
				<div class="cover-mask" />
				<img class="cover-img" src={$albums[0].img} alt="pablo" />
			</div>
		</div>
	</main>
</div>

<style lang="scss">
	.container {
		width: 100%;
		height: 100vh;
	}
	.main {
		height: 100vh;
		display: flex;
		gap: 100px;
		padding: 40px;
		overflow: hidden;
		align-items: center;
	}
	.title-container {
		overflow: hidden;
		display: flex;
		align-items: center;
		flex-basis: 100%;
		justify-content: center;
	}
	.title-wraper {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 16px;
	}
	.title {
		font-size: clamp(60px, 5vw, 200px);
		text-transform: capitalize;
		line-height: 1;
		font-family: 'Ubuntu';
	}

	.cover-container {
		display: flex;
		align-items: center;
		flex-basis: 100%;
	}

	.cover-wraper {
		position: relative;
		overflow: hidden;
	}

	.cover-mask {
		background-color: white;
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		left: 0;
		transform: translate(0, 100%);
		z-index: 3;
	}
</style>
