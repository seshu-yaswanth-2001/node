import http from "http";

const server = http.createServer((req, res) => {
  console.log("req", req);

  res.writeHead(200, { "content-type": "text/plain" });
  res.end("This is loading from backend.");
});

const port = 3171;
server.listen(port, () => {
  console.log("Server is open at port: ", port);
});
