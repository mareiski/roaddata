<template>
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useMeta } from 'quasar';

const metaData = {
  // sets document title
  title: 'Worldwide Travel Insights',

  // optional; sets final title as "Index Page - My Website", useful for multiple level meta
  titleTemplate: (title: string) =>
    `${title} | Roadtrip Data Insights | Roaddata`,

  // meta tags
  meta: {
    description: {
      name: 'description',
      content:
        'When are your customers travelling, where are they going, and how long are they staying - travel and roadtrip data insights on a dashboard.',
    },
    keywords: {
      name: 'keywords',
      content:
        'roadtrip insights, travel insights, roadtrip data, trip data, travel trends, travel dashboard',
    },
    equiv: {
      'http-equiv': 'Content-Type',
      content: 'text/html; charset=UTF-8',
    },
  },
};

export default defineComponent({
  name: 'App',
  setup() {
    useMeta(metaData);
  },
});
</script>
