<script>
	import Gallery from "$lib/components/home page/Gallery.svelte";
  import Sidebar from "$lib/components/home page/Sidebar.svelte";

  
</script>

<div class="page-wrapper">
  <!-- SideBar -->
  <Sidebar />

  <!-- Main -->
  <Gallery />
</div>

<style>
  .page-wrapper{
    padding: 0 30px;
    display: flex;
    gap: 40px;
  }
  
</style>