<script lang="ts">
    import type { Menu } from "../config";
    export let menu: Menu
</script>

<a class="card" href="{menu.url}">
    <div>
        <img src="{menu.image}" alt="{menu.name}">
        <h3>{menu.name}</h3>
    </div>
    <p>{menu.description}</p>
</a>


<style lang="scss">
    .card {
        display: flex;
        flex-direction: column;
        align-items: center;
        min-height: 150px;
        border: solid 1px black;
        border-radius: 4px;
        background-color: #16254c;
        color: white;
        text-decoration: none;
        cursor: pointer;

        div {
            display: inline-flex;
            padding: 10px 6px 0px 6px;

            h3 {
                color: white;
                margin: 6px 12px
            }
        }

        p {
            margin: auto 6px ;
            color: lightgray;
        }

        transition: all 0.2s;
        &:hover{
            transform: scale(1.02);
            background-color: #144163;
        }
    }
</style>