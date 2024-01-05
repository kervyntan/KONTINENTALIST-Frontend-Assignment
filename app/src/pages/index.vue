<template>

</template>

<script lang="ts" setup>
import { useStoriesStore } from '@/store/useStoriesStore';
import { onMounted } from 'vue';

const storiesStore = useStoriesStore();

onMounted( async () => {
  await storiesStore.getStories();
  console.log(storiesStore.stories);
})
</script>
