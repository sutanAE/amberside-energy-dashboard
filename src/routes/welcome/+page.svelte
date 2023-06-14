<!-- <script lang='ts'>
    import {menus} from '../../config'
    import Card from '../../components/Card.svelte';
</script>

<main>
    <h1>Welcome to Amberside Energy Dashboard</h1>
    
    <p>
        Please select one of the cards below to go to the app
    </p>

    <div class="card-grid">
        {#each menus as menu}
            <Card {menu} />
        {/each}
    </div>
</main>
    
    
<style lang="scss">    
    main {
        text-align: center;
        max-width: 1000px;
        margin: auto;
    }

    .card-grid {
        margin: 0 5%;
        display: grid;
        gap: 10px;
        grid-template-columns: repeat(2, minmax(0, 1fr));

        @media screen and (min-width: 1000px)  {
            grid-template-columns: repeat(4, minmax(0, 1fr));
        }
    }
</style> -->