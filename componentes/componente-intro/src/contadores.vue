<template>
    <div class="contadores">
        <app-contador/>
    </div>
</template>

<script>

import Contador from './contador.vue'

export default {
    components: {
        'app-contador': {Contador}
    }
}
</script>

<style>

</style>