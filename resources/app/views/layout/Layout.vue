<template>
    <div class="container bg-slate-100 mx-auto h-screen">
        <nav class="bg-slate-200 p-2 h-16">
            <ul>
                <li class="text-xl px-2">
                    Laravel Translatable
                </li>
            </ul>
        </nav>
        <div class="py-5 px-4">
            <router-view />
        </div>
        <footer class="bg-slate-200 p-2 h-16 flex justify-center items-center">Created with love by DevSite</footer>
    </div>
</template>

<script>
export default {
    name: 'Layout'
}
</script>
