// Utilities
import { defineStore } from 'pinia'

export const useStoriesStore = defineStore('stories', {
  state: () => ({
    stories: [] as Array<IStory>
  }),
})
