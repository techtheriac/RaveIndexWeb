<template>
  <div>
    <h2>
      {{ title }}
    </h2>
    <span>
      {{ date }}
    </span>
    <span v-if="meta">
      {{ meta }}
    </span>
    <img :src="art" :alt="title" />
  </div>
</template>

<script setup lang="ts">
import type { Url } from "~/types";

const props = defineProps<{
  date: string;
  title: string;
  art: string | Url;
  meta?: string;
}>();
</script>

<style scoped></style>
