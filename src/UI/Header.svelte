<header>
    <div class="logo-container">
        <h1>
            <slot />
        </h1>
    </div>
</header>

<style>
    header {
        /* position: fixed; */
        width: 100%;
        height: 7.5rem;
        background: rgb(53, 53, 53);
        color: white;
        margin-bottom: 4rem;
    }

    h1 {
        color: rgb(238, 76, 27);
        text-align: center;
        line-height: 7.5rem;
    }
</style>