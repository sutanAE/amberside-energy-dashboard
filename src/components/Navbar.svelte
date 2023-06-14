<script>
    import User from "./User.svelte";
</script>

<nav>
    <a href="/">
        <img src="/ael-logo.png" alt="Amberside Energy">
    </a>
    <User />
</nav>


<style lang="scss">
    nav{
        width: 100vw;
        display: flex;
        justify-content: space-between;
        align-items: center;

        background-color: #16254c;
        color: white;
        
        img{
            height: 60px;
            margin: 10px;
        }
    }

</style>