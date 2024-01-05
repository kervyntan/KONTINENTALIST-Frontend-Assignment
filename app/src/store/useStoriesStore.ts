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

      const res = await axios.get<IStories>('/');

      console.log(res)
    },
  },
});

interface IStories {
  current_page: Number,
  data: Array<Object>
  first_page_url: String,
  from: Number,
  last_page: Number,
  last_page_url: String,
  links: Array<Object>
  next_page_url: String,
  path: String,
  prev_page: Number,
  prev_page_url?: String,
  to: Number,
  total: Number
}

interface IStory {
  title: String;
  dek: String;
  hero_image_url: String;
}
