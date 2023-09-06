<template>
  <q-layout view="lHh Lpr fFf">
    <q-page-container class="row q-py-md">
      <div class="col-xs-12 col-sm-12 col-md-3"></div>
      <div class="col-xs-12 col-sm-12 col-md-6">
        <router-view @tourAction="$emit('tourAction', $event)" />
      </div>
      <div class="col-xs-12 col-sm-12 col-md-3"></div>
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'RasterLayout',
});
</script>
