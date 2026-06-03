import { createServer } from "http";
import { podcastController } from "./controllers/podcastController";

const server = createServer((request, response) => {
  podcastController(request, response);
});

const PORT = 3333;

server.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
