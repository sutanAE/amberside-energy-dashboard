<script lang='ts'>
    import { createEventDispatcher } from "svelte";
    import { fly, fade } from 'svelte/transition';
    const dispatch = createEventDispatcher();
    export let displayModal = 'flex';


    $: cssmodal = `
        display: ${displayModal};
    `

    function closeModal() {
		dispatch('closeModal');
	}
</script>

<div id='modal' style={cssmodal} out:fade>
    <div>
        <img src="/ael-logo.png" alt="" width="200px">
    </div>
    <div class = 'content'>
        Amberside Energy Ltd. Server Dashboard
    </div>
    <div>
        <button on:click={closeModal} on:keydown={closeModal} class='closeButton'>To Dashboard</button>
    </div>
</div>


<style>
    .content {

    }

    .closeButton {
        background-color: orange;
        color: white;
        border: none;
        border-radius: 15px;
        margin: 15px;
        padding: 20px;
        cursor: pointer;
    }

    #modal {
        justify-content: center;
        align-items: center;
        align-content: center;
        flex-direction: column;
        position: fixed; 
        z-index: 1; 
        left: 0;
        top: 0;
        width: 100%; 
        height: 100%; 
        overflow: auto; 
        background-color: rgb(255,255,255);
        transition: display 2s;
        /* background-color: rgba(0,0,0,0.4);  */

    }
</style>