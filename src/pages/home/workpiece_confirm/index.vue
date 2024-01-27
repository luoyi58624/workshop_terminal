<script setup lang="ts">
import ProcessTaskList from './ProcessTaskList.vue'
import InfoPanel from './InfoPanel.vue'
import ProcessButtons from './ProcessButtons.vue'
import ProcessTable from './ProcessTable.vue'
</script>

<template>
<div class="grow flex flex-col">
  <ProcessTaskList />
  <div class="h-0 mt-2 grow flex xs:flex-col lg:flex-row">
    <InfoPanel />
    <ProcessButtons />
    <ProcessTable />
  </div>
</div>
</template>

<style scoped lang="scss">

</style>
