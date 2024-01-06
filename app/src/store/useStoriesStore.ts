// Utilities
import { defineStore } from "pinia";
import { useAxios } from "../plugins/axiosConfig";

export const useStoriesStore = defineStore("stories", {
  state: () => ({
    stories: [] as Array<IStory>,
    pageNumber: 1 as Number,
  }),
  actions: {
    async getStories() {
      const axios = useAxios();

      const response = await axios.get<IStories>("/");

      response.data.data.forEach((story) => {
        const { title, dek, hero_image } = story;
        const dataToAdd = {
          title,
          dek,
          hero_image_url: hero_image.url,
        };
        this.stories.push(dataToAdd);
      });
    },
    async getMoreStories() {},
  },
});

interface IStories {
  current_page: Number;
  data: Array<IStoryData>;
  first_page_url: String;
  from: Number;
  last_page: Number;
  last_page_url: String;
  links: Array<IStoryData>;
  next_page_url: String;
  path: String;
  prev_page: Number;
  prev_page_url?: String;
  to: Number;
  total: Number;
}

interface IStoryData {
  title: String;
  dek: String;
  hero_image: {
    url: String;
  };
}

interface IStory {
  title: String;
  dek: String;
  hero_image_url: String;
}
