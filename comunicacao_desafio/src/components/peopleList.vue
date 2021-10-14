<template>
    <div id="list">
        <table class="list-table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>NOME</th>
                </tr>
            </thead>
            <tbody>
                <template v-for="(item, i) in list" :key="i" @click="selectLine(item)">
                    <tr>
                        <td>
                            {{ item.id }}
                        </td>
                        <td>
                            {{ item.name }}
                        </td>
                    </tr>
                </template>
            </tbody>
        </table>
    </div>
</template>

<script>
import Barramento from '@/barramento'

export default ({
    props: {
    },
    data() {
        return {
            list: [
                {id:1, name:"Gabriel", age:"20"},
                {id:2, name:"Pedro", age:"17"},
                {id:3, name:"Arthur", age:"14"},
                {id:4, name:"Patricia", age:"42"},
                {id:5, name:"Silvio", age:"46"},
            ]
        }
    },
    methods: {
        selectLine(item) {
            Barramento.$emit('passingLine', item)
        }
    }
})
</script>
