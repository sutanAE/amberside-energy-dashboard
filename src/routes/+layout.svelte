<script>
    import Navbar from "../components/Navbar.svelte";
</script>

<svelte:head> 
    <title>Server Dashboard</title>
    <link rel="icon" type="image/x-icon" href="/ael-logo.png">
    <style>
        body {
            margin: 0;
            font-family: "Poppins", 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
    </style>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
</svelte:head>


<main>
    <Navbar />
    <slot/>
</main>


<style lang="scss">
    main {
        width: 100vw;
    }
</style>