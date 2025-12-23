import http from "http";

const server = http.createServer((req, res) => {
  const url = req.url;
  if (url === "/") {
    res.writeHead(200, { "content-type": "text/plain" });
    res.end("Home Page");
  } else if (url === "/profile") {
    res.writeHead(200, { "content-type": "text/plain" });
    res.end("Profile Page");
  } else {
    res.writeHead(404, { "content-type": "text/plain" });
    res.end("Page Not Found!");
  }
});

const port = 3171;
server.listen(port, () => {
  console.log(`Server is open at port: ${port}`);
});
