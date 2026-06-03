import { Podcast } from "../models/podcastModel";

const podcasts: Podcast[] = [
  {
    id: 1,
    title: "Tech Cast",
    host: "João",
    category: "Tecnologia"
  },
  {
    id: 2,
    title: "Cyber Talk",
    host: "Maria",
    category: "Cibersegurança"
  },
  {
    id: 3,
    title: "Dev em Foco",
    host: "Carlos",
    category: "Programação"
  }
];

export const getAllPodcasts = (): Podcast[] => {
  return podcasts;
};

export const getPodcastById = (id: number): Podcast | undefined => {
  return podcasts.find((podcast) => podcast.id === id);
};
