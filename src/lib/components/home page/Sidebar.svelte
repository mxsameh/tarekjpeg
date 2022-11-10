<script>
  const shoots = [
    {
      title : 'viral photos',
      link : ''
    },
    {
      title : 'exhibitions',
      link : ''
    },
    {
      title : 'album covers',
      link : ''

    },
    {
      title : 'commissioned projects',
      link : ''

    },
    {
      title : 'personal projects',
      link : ''

    },
    {
      title : 'live music',
      link : ''

    },
    {
      title : 'portraits',
      link : ''

    }
  ]

</script>

<!-- flex container -->
<div class="sidebar"> 
  <!-- header with logo and subtitle -->
  <header class="header">
    <a href="/" class="logo-link">
      <h1 class="logo">ahmed<br>tarek</h1>
    </a>
    <p class="subtitle">photographer</p>
  </header>

  <!-- nav with shoots and projects -->
  <nav class="shoots-list">
    {#each shoots as shoot}
    <a href={shoot.link} class="shoot">{shoot.title}</a>
    {/each}
  </nav>

  <!-- footer with links to work and info -->
  <footer class="footer">
    <!-- list of work done -->
    <div class="work">
      <a href="/jpeg-city" class="work-item">JPEG CITY</a>
      <a href="/Talks" class="work-item">Talks</a>
      <a href="/contact" class="work-item">About & Contact</a>
    </div>
    <!-- socail links -->
    <div class="social">
    </div>
  </footer>
</div>

<style lang="scss">
.sidebar{
  width: fit-content;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 24px 0;
  position: sticky;
  top: 0;
  left: 0;
  flex-shrink: 0;
  flex-grow: 0;
}  
.logo{
  text-transform: uppercase;
  font-size: 36px;
  letter-spacing: 4px;
  line-height: 1;
}
.subtitle{
  font-size: 16px;
  text-transform: capitalize;
  color: gray;
  margin-top: 12px;
}

.shoots-list{
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.shoot{
  text-transform: capitalize;
  font-size: 20px;
  font-weight: 500;
  cursor: pointer;
  &:hover{
    text-decoration: line-through;
    scale: 1.05;
  }
}

.work{
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.work-item{
  font-size: 16px;
  cursor: pointer;
  &:hover{
    color: gray;
  }
}
</style>