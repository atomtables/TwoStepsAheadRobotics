<script>
	import '../app.css';
	let { children } = $props();
</script>

<svelte:head>
    <!-- Google tag (gtag.js) -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-V0WTBQ2Z6B"></script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-V0WTBQ2Z6B');
    </script>
</svelte:head>

{@render children()}
