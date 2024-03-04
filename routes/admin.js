import { AdminController } from "../controllers/admin.js";
import { paramParser } from "../utils/paramParser.js";

export class AdminRoutes {
  constructor() {
    this.adminController = new AdminController();
  }
  handleRequest(req, res, next) {
    const { url, method } = req;
    req.params = {};

    switch (method) {
      case "GET": {
        if (url == "/admin/all") {
          this.adminController.getAll(req, res, next);
        } else if (url.startsWith("/admin/")) {
          req.params["id"] = url.split("admin/")[1];
          this.adminController.getOne(req, res, next);
        }
      }
      case "POST": {
      }
      case "PATCH": {
      }
      case "DELETE": {
      }
      default: {
        // res.writeHead(404, { "Content-Type": "text/plain" });
        // res.end("Not Found");
      }
    }
  }
}
