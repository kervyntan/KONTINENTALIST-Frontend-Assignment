// Utilities
import { defineStore } from 'pinia'

export const useStoriesStore = defineStore('stories', {
  state: () => ({
    stories: [] as Array<IStory>
  }),
  actions: {

  }
})

interface IStory {
  title: String,
  dek: String,
  hero_image_url: String
}
