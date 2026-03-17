<script>

    let { data } = $props();


</script>

<svelte:head>
    <title>{data.product.name}</title>
    <meta name="description" content="Discover the epitome of luxury and craftsmanship with {data.product.name}. Explore our exquisite collection of vehicles that redefine elegance and performance. Experience the unparalleled blend of opulence and engineering excellence that only {data.product.name} can offer.">
    <meta property="og:title" content="{data.product.name}">
    <meta property="og:description" content="Discover the epitome of luxury and craftsmanship with {data.product.name}. Explore our exquisite collection of vehicles that redefine elegance and performance. Experience the unparalleled blend of opulence and engineering excellence that only {data.product.name}  can offer.">
    <meta property="og:image" content="{data.product.image_url}"> 
</svelte:head>


<h1>{data.product.name}</h1>