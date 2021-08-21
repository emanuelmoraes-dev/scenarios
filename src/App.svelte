<script lang="ts">
import Card from './components/card/Card.svelte'
</script>

<main>
    <Card style="height: 15rem; width: 15rem" headerText="Card" collapsable={true} />
</main>

<style lang="less">
    :global(body) {
        padding: 0;
        margin: 0;
    }

    :global(.hidden) {
        display: none !important;
    }

    main {
        height: 100vh;
        width: 100vw;
    }
</style>
