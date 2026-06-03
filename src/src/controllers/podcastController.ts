import { IncomingMessage, ServerResponse } from "http";
import { getAllPodcasts, getPodcastById } from "../services/podcastService";
import { sendJson } from "../utils/responseHandler";

export const podcastController = (
  request: IncomingMessage,
  response: ServerResponse
): void => {

  if (request.url === "/podcasts" && request.method === "GET") {
    sendJson(response, 200, getAllPodcasts());
    return;
  }

  if (
    request.url?.startsWith("/podcasts/") &&
    request.method === "GET"
  ) {
    const id = Number(request.url.split("/")[2]);

    const podcast = getPodcastById(id);

    if (!podcast) {
      sendJson(response, 404, {
        message: "Podcast não encontrado"
      });
      return;
    }

    sendJson(response, 200, podcast);
    return;
  }

  sendJson(response, 404, {
    message: "Rota não encontrada"
  });
};
