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

      const response = await axios.get<IStories>("/");

      response.data.data.forEach((story) => {
        const { title, dek, hero_image_url } = story
        this.stories.push(story);
      })
    },
  },
});

interface IStories {
  /*
    data and links store Array<IStory> as
    we're only concerned with these fields for now
    And using for Intellisense
  */
  current_page: Number;
  data: Array<IStory>;
  first_page_url: String;
  from: Number;
  last_page: Number;
  last_page_url: String;
  links: Array<IStory>;
  next_page_url: String;
  path: String;
  prev_page: Number;
  prev_page_url?: String;
  to: Number;
  total: Number;
}

interface IStory {
  title: String;
  dek: String;
  hero_image_url: String;
}
