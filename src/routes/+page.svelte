<script>
    import { resolve } from '$app/paths';

    let { data } = $props();

    let car2 = $derived(data.products.find(product => product.id === 5)?.image_url);

</script>

<svelte:head>
    <title>Rolls Royce</title>
    <meta name="description" content="Discover the epitome of luxury and craftsmanship with Rolls Royce. Explore our exquisite collection of vehicles that redefine elegance and performance. Experience the unparalleled blend of opulence and engineering excellence that only Rolls Royce can offer.">
    <meta property="og:title" content="Rolls Royce">
    <meta property="og:description" content="Discover the epitome of luxury and craftsmanship with Rolls Royce. Explore our exquisite collection of vehicles that redefine elegance and performance. Experience the unparalleled blend of opulence and engineering excellence that only Rolls Royce can offer.">
    <meta property="og:image" content="{car2}"> 
</svelte:head>

<header class="h-125 bg-center bg-cover flex items-center align-center justify-center" style="background-image: url({car2})">
    <h1 class="text-3xl text-white">Rolls Royce</h1>
</header>

<main class="container mx-auto px-6 py-12">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {#each data.products as product(product.id)}
            <div class="group bg-[#0f0f0f] border border-[#222] rounded-[1px] overflow-hidden transition-[transform,box-shadow,border-color] duration-350 ease-in-out shadow-[0_2px_12px_rgba(0,0,0,0.35)] hover:-translate-y-1 hover:shadow-[0_10px_32px_rgba(0,0,0,0.55),0_0_0_1px_#b8962e] hover:border-[#b8962e]">
                <div class="relative h-40 overflow-hidden">
                    {#if product.image_url}
                        <a href={resolve(`/products/${product.slug}`)} class="absolute inset-0">
                        <img src={product.image_url} alt={product.name} loading="lazy" class="w-full h-full object-cover transition-transform duration-600 ease-in-out brightness-[0.88] group-hover:scale-[1.04] group-hover:brightness-100">
                        </a>
                    {:else}
                        <div class="w-full h-full flex items-center justify-center bg-[#181818] text-[#444] text-[0.7rem] tracking-[0.14em] uppercase">
                            <span>No Image</span>
                        </div>
                    {/if}
                    <div class="absolute inset-0 bg-[linear-gradient(to_top,rgba(8,8,8,0.65)_0%,transparent_55%)] pointer-events-none"></div>
                </div>
                <div class="px-[1.1rem] pt-4 pb-[1.1rem]">
                    <div class="w-6 h-px bg-linear-to-r from-[#c9a84c] to-[#b8962e] mb-[0.65rem] transition-[width] duration-400 ease-in-out group-hover:w-10"></div>
                    <h2 class="text-[0.8rem] font-semibold text-[#e8e0cc] tracking-widest uppercase mb-[0.4rem] whitespace-nowrap overflow-hidden text-ellipsis">{product.name}</h2>
                    <p class="text-[0.72rem] text-[#666] leading-[1.6] mb-[0.9rem] line-clamp-2">{product.description || 'No description available'}</p>
                    <div class="flex items-center justify-between border-t border-t-[#1e1e1e] pt-3">
                        <div>
                            <span class="block text-[0.6rem] text-[#555] tracking-[0.12em] uppercase mb-[0.1rem]">Starting from</span>
                            <span class="text-base font-semibold text-[#c9a84c] tracking-[0.03em]">${product.price}</span>
                        </div>
                        <button class="bg-transparent border border-[#3a3020] text-[#9a7a30] py-[0.3rem] px-[0.85rem] text-[0.6rem] tracking-[0.18em] uppercase cursor-pointer transition-[border-color,color,background] duration-300 ease-in-out hover:border-[#b8962e] hover:text-[#c9a84c] hover:bg-[rgba(184,150,46,0.08)]">
                            Enquire
                        </button>
                    </div>
                </div>
            </div>
        {/each}
    </div>
</main>

<footer class="h-125 bg-gray-800 text-white flex items-center align-center justify-center">
    <p>Test-Page for SEO</p>
</footer>