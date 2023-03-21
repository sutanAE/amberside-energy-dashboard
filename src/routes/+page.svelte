<script lang='ts'>
    import Modal from "./modal.svelte";
    import { fly } from 'svelte/transition';

    import {menus} from '../config'


    let displayModal = true

    function closeModal(){
        displayModal = false
    }
</script>

{#if displayModal}
<Modal on:closeModal={closeModal}/>
{/if}

<h1>Welcome to Amberside Energy Dashboard</h1>
<p>click on the links below for apps on the server.</p>

<div>
    <ul>
        {#each menus as menu}
            <li><a href={menu.url} target="_blank" rel="noreferrer">  {menu.name}</a> ({menu.description})</li>
        {/each}
    </ul>
</div>
