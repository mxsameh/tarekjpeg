<script lang="ts">

  export let projects : any
  
</script>


<ul class="projects-list">
  {#each projects as project, i}

    <li class="project">
      <a
        data-project-Name={project.name}
        data-project-Key={i}
        href={project.link}
        class="project-link"
        >
        {project.name}
      </a>
    </li>

  {/each}
</ul>

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
		-webkit-text-fill-color: transparent;
		-webkit-text-stroke: 2px black;

		&:hover {
			visibility: hidden;
			transition: visibility 0s 0.7s linear;
		}
	}

  .project-link:before {
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
    -webkit-text-fill-color: black;
  }

  .project-link:hover::before {
    width: 100%;
  }
  
</style>