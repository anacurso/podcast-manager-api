import { ServerResponse } from "http";

export const sendJson = (
  response: ServerResponse,
  statusCode: number,
  data: unknown
): void => {
  response.writeHead(statusCode, {
    "Content-Type": "application/json"
  });

  response.end(JSON.stringify(data));
};
