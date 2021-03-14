<script>
    export let type;
    export let content;
    export let specialClass = '';
    export let disabled = false;
</script>

<button class={specialClass} type={type} on:click {disabled}>{content}</button>

<style>
    button {
        width: 7.5rem;
        background:rgb(47, 47, 47);
        outline: none;
        border: none;
        color: white;
        font-weight: 500;
        font-size: 1.2rem;
        transition: all 250ms ease-in-out;
        padding: 0.5rem 0;
    }
    button:hover {
        border-radius: 1px;
        background: rgb(207, 55, 0);
        cursor: pointer;
        color: white;
    }
    .special {
        position: fixed;
        left: 50%;
        transform: translate(-50%, 0);
        top: 10rem;
        margin: auto !important;
        width: 3rem;
        height: 3rem;
        border-radius: 50%;
        font-size: 2.5rem;
        line-height: 2.2rem;
    }
    .special:hover {
        border-radius: 50%;
    }
</style>