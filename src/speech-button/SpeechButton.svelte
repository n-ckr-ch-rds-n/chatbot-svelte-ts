<script>
    function handleClick() {
        console.log("clicked");
    }
</script>

<button on:click={handleClick}>Talk</button>

<style>
    button {
        color: aqua;
        font-size: x-large;
    }
</style>
