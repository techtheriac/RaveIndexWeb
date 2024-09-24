<template>
  <div class="event__card">
    <div class="event__card__details">
      <span>
        {{ date }}
      </span>
      <h2>
        {{ title }}
      </h2>
    </div>
    <div class="event__card__media">
      <span>
        {{ meta }}
      </span>
      <div class="event__card__art">
        <FluidMedia
          :src="art"
          :intrinsic-width="1440"
          :intrinsic-height="1440"
          :scaleSize="30"
          media-type="image"
          :alt="title"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Url } from "~/types";

interface EventCardProps {
  date: string;
  title: string;
  art: string | Url;
  meta?: string;
}
const props = withDefaults(defineProps<EventCardProps>(), {
  date: "28th Oct 2024",
  title: "Sweat It Out Lagos",
  art: "/images/gt.jpg",
  meta: "SAVE",
});
</script>

<style scoped></style>
