<script>
    export let id;
    export let label;
    export let type;
    export let value;
    export let placeholder = '';

    let touched = false;
</script>

<div class="form-control">
    <label for="{id}">{label}</label>
    <input 
    {type} 
    {id} 
    {placeholder} 
    {value} 
    on:input 
    on:blur={() => touched = true} 
    class:invalid={!value && touched}
    />
    {#if touched && !value}
        <p class="error-message"> ⬅ Please input your {id} 📝</p>
    {/if}
</div>

<style>
    .error-message {
        flex: 1 0 100%;
        color: rgb(255, 123, 123);
        display: block;
        margin-left: 1rem;
        font-weight: bold;
        letter-spacing: 1px;
    }
    .form-control input.invalid{ 
        background: rgb(133, 46, 46);
        color: white;
    }
    .form-control input.invalid::placeholder{
        color: white;
    }
    .form-control {
        width: 100%;
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
        align-items: center;
        height: 2rem;
        margin-bottom: 1rem;
    }
    .form-control label {
        flex: 0 0 3rem;
        color: white;
    }
    .form-control input {
        background: none;
        height: 100%;
        flex: 1 0 auto;
        /* padding: 0 1rem; */
        outline: none;
        border: none;
        border-bottom: solid 1px rgb(42, 42, 42);
        color: white;
        font-size: 1.2rem;
        position: relative;
        transition: all 350ms ease-in-out;
    }
    input:focus-within {
        background: rgb(42, 42, 42);
        padding: 0 1rem;
    }
    input::placeholder {
        color: rgb(68, 68, 68);
    }
    .form-control:nth-child(1){
        margin-top: 2rem;
    }
</style>