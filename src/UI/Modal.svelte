<script>
  import {fly, fade} from 'svelte/transition'

    import { createEventDispatcher } from "svelte";
    const dispatch = createEventDispatcher();
    
    import Button from "./Button.svelte";
    export let title;

    function closeModal(){
        dispatch('cancel')
    }
  </script>
<div class="modal-backdrop" on:click={closeModal} in:fade out:fade/>
<div class="modal" in:fly={{x: 400}} out:fly={{x: -400}}>
  <h1>
    {title}
  </h1>
  <div class="content">
    <slot />
  </div>
  <footer>
    <slot name="footer">
      <Button on:click={closeModal}>Close</Button>
    </slot>
  </footer>
</div>

<style>
    .modal-backdrop {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100vh;
      background: rgba(0, 0, 0, 0.75);
      z-index: 10;
    }
    .modal {
      position: fixed;
      top: 10vh;
      left: 10%;
      width: 80%;
      min-height: 40vh;
      max-height: 80vh;
      background: rgb(27, 27, 27);
      border-radius: 5px;
      z-index: 100;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
      overflow: hidden;
      padding: 0 1rem;
    }
    h1 {
      padding: 1rem;
      margin: 0;
      border-bottom: 1px solid #ccc;
      font-family: "Roboto Slab", sans-serif;
      color: rgba(255, 68, 0, 0.829);
    }
    footer {
      padding: 1rem;
    }
    @media (min-width: 768px) {
      .modal {
        width: 40rem;
        left: calc(50% - 20rem);
      }
    }
  </style>
  