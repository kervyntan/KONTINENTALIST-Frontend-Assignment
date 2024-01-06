<template>
  <VInfiniteScroll :height="300" :items="storiesStore.stories" :onLoad="storiesStore.getStories">
    <template v-for="(item, index) in storiesStore.stories" :key="item">
      <div :class="['pa-2', index % 2 === 0 ? 'bg-grey-lighten-2' : '']">
        Item #{{ item }}
      </div>
    </template>
  </VInfiniteScroll>
</template>

<script lang="ts" setup>
import TaskCard from '../components/taskCard.vue';
import { useStoriesStore } from '@/store/useStoriesStore';
import { onMounted } from 'vue';

const storiesStore = useStoriesStore();

onMounted(async () => {
  await storiesStore.getStories();
  console.log(storiesStore.stories);
})
</script>
