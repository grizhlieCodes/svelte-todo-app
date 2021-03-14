<main>
    <slot />
</main>

<style>
  main {
    width: 100%;
    height: 100%;
    display: grid;
    grid-auto-flow: column;
    grid-template-columns: repeat(2, minmax(400px, 500px));
    /* grid-template-rows: repeat(2, minmax(16rem, max-content)); */
    /* grid-auto-rows: minmax(6rem, max-content); */
    /* grid-template-rows: 2.5rem 1fr; */
    justify-content: center;
    transition: all 250ms ease-in-out;
  }
</style>
