<script lang="ts">
	import { onMount } from 'svelte';

	let cursor: HTMLDivElement;

	// HANDLE MOUSE MOVE
	const handleMove = (e: any) => {
		cursor.style.top = `${e.y}px`;
		cursor.style.left = `${e.x}px`;
	};

	onMount(() => {
		window.addEventListener('mousemove', handleMove);
	});
</script>

<div class="cursor" bind:this={cursor}></div>

<style lang="scss">
	.cursor {
		width: 40px;
		height: 40px;
		position: fixed;
		transform: translate(-50%, -50%);
		border-radius: 100%;
		border: 2px solid violet;
		opacity: 0;
		transition: all 0.2s ease-out;
		z-index: 1000;
	}
</style>
