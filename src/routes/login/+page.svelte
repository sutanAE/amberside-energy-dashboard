<!-- future feature -->

<!-- <script lang="ts">
    export let data
    export let form

    let usernameEl: HTMLInputElement;
    let passwordEl: HTMLInputElement;
    let username: string;
    let password: string;

    let errors: string[];
    

</script>

<form action="?/login" method="POST">

    <h3>Login</h3>

    <label for="username"> 
        <img src="/icons/person.svg" alt="user icon">
        <input type="text" name="username" placeholder="username" bind:value={username} bind:this={usernameEl}>
    </label>

    <label for="password"> 
        <img src="/icons/key.svg" alt="password icon">
        <input type="password" name="password" placeholder="password" bind:value={password} bind:this={passwordEl}>

    </label>

    

    {#if form?.errors }
        <span class="py-2 px-1 text-red-400">{form?.errors}</span>
    {/if}

    <button type="submit">
        Login
    </button>

</form>

<style lang="scss">
    form{        
        display: flex;
        flex-direction: column;
        margin: 20px auto;
        border: solid 1px black;
        border-radius: 4px;
        width: 400px;
        padding: 20px;
        
        h3{
            font-size: 30px;
            text-align: center;
            margin: 10px;
        }

        label {
            width: 100%;
            position: relative;
            margin: 5px auto;

            img {
                position: absolute;
                top: 5px;
                left: 10px;
                height: 20px;
            }
            input {                
                width: 360px;
                height: 25px;
                padding-left: 35px;
            }
        }

        button {
            margin-top: 10px;
            height: 30px;
        }
    }    
</style> -->