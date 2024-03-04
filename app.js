import http from "http";
import { AdminRoutes } from "./routes/admin.js";
import { Database } from "./db/db.js";

new Database();

const server = http.createServer(handleRequest);
function handleRequest(req, res, next) {
  const adminRoutes = new AdminRoutes();

  if (req.url.startsWith("/admin")) {
    adminRoutes.handleRequest(req, res, next);
  }

  //   if (req.method === "GET") {
  //     handleGetRequest(url, (req, res, next));
  //   }
}

const PORT = process.env.PORT || 3000;
server.listen(PORT, "localhost", () => {
  console.log(`SERVER IS RUNNING ON PORT ${PORT}`);
});
