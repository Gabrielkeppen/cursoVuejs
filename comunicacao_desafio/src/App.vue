<template>
  <div id="app">
    <div class="md-layout">
      <div class="md-layout-item md-size-50">
        <PeopleList />
      </div>
      <div class="md-layout-item md-size-50">
        <PeopleShow />
      </div>
    </div>
  </div>
</template>

<script>
import PeopleList from '../src/components/peopleList.vue'
import PeopleShow from '../src/components/peopleShow.vue'

export default {
  components: {
    PeopleList,
    PeopleShow,
  },
  data() {
    return {

    }
  }
}
</script>

<style lang="scss">

.md-layout-item {
  border: 2px;
}

</style>
