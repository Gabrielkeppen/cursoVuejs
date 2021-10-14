<template>
    <div id="show">
        <div>
            <span v-if="this.line.length != 0">{{ this.line }}</span>
        </div>
    </div>
</template>

<script>
import Barramento from '@/barramento'


export default ({
    data() {
        return {
            line: {},
        }
    },
    created() {
        Barramento.$on('passingLine', item => {
            this.line = item
        })
    }
})
</script>
