// Utilities
import { defineStore } from "pinia";
import { useAxios } from "../plugins/axiosConfig";

const axios = useAxios();

export const useStoriesStore = defineStore("stories", {
  state: () => ({
    stories: [] as Array<IStory>,
    pageNumber: 1 as number,
  }),
  actions: {
    async getStories() {
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
    async getMoreStories({ done }) {
      const response = await axios.get<IStories>(`/?page=${this.pageNumber}`);

      response.data.data.forEach((story) => {
        const { title, dek, hero_image } = story;
        const dataToAdd = {
          title,
          dek,
          hero_image_url: hero_image.url,
        };
        this.stories.push(dataToAdd);
      });

      this.pageNumber = this.pageNumber + 1;
      done('ok')
    },
  },
});

interface IStories {
  current_page: number;
  data: Array<IStoryData>;
  first_page_url: string;
  from: number;
  last_page: number;
  last_page_url: string;
  links: Array<IStoryData>;
  next_page_url: string;
  path: string;
  prev_page: number;
  prev_page_url?: string;
  to: number;
  total: number;
}

interface IStoryData {
  title: string;
  dek: string;
  hero_image: {
    url: string;
  };
}

export interface IStory {
  title: string;
  dek: string;
  hero_image_url: string;
}
