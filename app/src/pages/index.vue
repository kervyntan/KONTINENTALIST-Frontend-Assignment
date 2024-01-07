<script lang="ts" setup>
import TaskCard from '../components/taskCard.vue';
import { useStoriesStore } from '@/store/useStoriesStore';
import { onMounted } from 'vue';

const storiesStore = useStoriesStore();

onMounted(async () => {
  await storiesStore.getStories();
})
</script>

<template>
  <VInfiniteScroll :height="600" mode="manual" :items="storiesStore.stories" :onLoad="storiesStore.getMoreStories">
    <TaskCard v-for="(item, index) in storiesStore.stories" :key="index" :data="item" :index="index + 1"/>
  </VInfiniteScroll>
</template>
