<script>
    // import { flip } from 'svelte/animate';
  import { fade } from "svelte/transition";
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
  export let id;
  export let task;
  export let date;
  export let tags;
  export let done; //locate this variable elsewhere

</script>

<!-- in:fly={{x: 400, duration: 1000}} out:fly={{x: 500, duration: 250}} -->

<li in:fade out:fade>
  <div class="top">
    <div class="button">
      <input
        type="checkbox"
        {id}
        class="toggle-input"
        on:click={dispatch("task-done-toggle", id)}
      />
      <label class="label {done ? 'status-done' : ''}" for={id} >✔</label>
    </div>
    <p class="task-info {done ? 'cross' : ''}">{task}</p>
    <i class="fas fa-trash" on:click={dispatch("delete-task", id)}></i>
  </div>
  <div class="bottom">
    <p class="date">{date}</p>
    {#each tags as tag}
      {#if tag !== ""}
        <p class="tag">{tag}</p>
      {/if}
    {/each}
  </div>
</li>

<style>
  i:hover {
    cursor: pointer;
    color:rgb(255, 59, 75);
    transition: color 250ms ease-in-out;
  }
  li {
    list-style-type: none;
    list-style: none;
    width: 100%;
    height: 4rem;
    /* background: black; */
    margin-bottom: 1rem;
    border-bottom: solid 1px rgb(61, 61, 61);
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
  }
  /* TOP Styling */
  .top {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: flex-start;
    flex: 1;
  }

  .button {
    width: 20px;
    height: 20px;
    flex-basis: 1rem;
    margin-right: 0.5rem;
  }

  .toggle-input {
    display: none;
  }

  label {
    display: grid;
    width: 20px;
    height: 20px;
    border: 2px solid rgb(255, 59, 75);
    cursor: pointer;
    background: rgb(53, 53, 53);
    border-radius: 50%;
    color: rgb(53, 53, 53);
    place-items: center;
    font-size: 0.8rem;
    line-height: 10px;
    transition: all 250ms ease-in-out;
  }

  .status-done {
    background: rgb(255, 59, 75);
    color: white;
  }

  p.task-info {
    flex: 1;
    color: white;
  }

  .date {
    color: rgb(104, 104, 104);
    font-size: 0.8rem;
    justify-self: start;
    align-self: center;
  }

  /* BOTTOM Styling */

  .bottom {
    display: grid;
    grid-template-columns: 1fr;
    grid-auto-columns: max-content;
    grid-auto-flow: column;
    padding-bottom: 0.2rem;
    column-gap: 0.3rem;
    justify-items: center;
    justify-content: end;
    margin-bottom: 0.2rem;
  }

  .tag {
    width: auto;
    height: auto;
    font-size: 0.8rem;
    padding: 0.2rem 0.5rem;
    background: rgb(20, 20, 20);
    border-radius: 10px;
    color: white;
  }

  .tag:not(:nth-last-child(1)) {
    margin-right: 0.3rem;
  }

  p.cross {
    text-decoration: line-through;
    color: rgb(107, 107, 107);
  }
</style>
