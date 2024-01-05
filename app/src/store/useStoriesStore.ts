// Utilities
import { defineStore } from "pinia";
import { useAxios } from "../plugins/axiosConfig";

export const useStoriesStore = defineStore("stories", {
  state: () => ({
    stories: [] as Array<IStory>,
  }),
  actions: {
    async getStories() {
      const axios = useAxios();

      const res = await axios.get('/');

      console.log(res)
    },
  },
});

interface IStory {
  title: String;
  dek: String;
  hero_image_url: String;
}
