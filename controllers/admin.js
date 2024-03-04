import { CONTENT_TYPE_JSON } from "../constants/const.js";
import { Admin } from "../models/admin.js";

export class AdminController {
  async getAll(req, res, next) {
    try {
      const admins = await Admin.find();

      res.writeHead(400, CONTENT_TYPE_JSON);
      res.end(
        JSON.stringify({
          isOk: true,
          message: "admins list",
          data: admins,
        })
      );
    } catch (error) {
      res.writeHead(400, CONTENT_TYPE_JSON);
      res.end(
        JSON.stringify({
          isOk: false,
          message: `error to get admins: ${error}`,
        })
      );
    }
  }

  async getOne(req, res, next) {
    try {
      const id = req.params.id;
      const admin = await Admin.findById(id);

      res.writeHead(200, CONTENT_TYPE_JSON);
      res.end(
        JSON.stringify({
          isOk: true,
          message: "single admin",
          data: admin,
        })
      );
    } catch (error) {
      res.writeHead(400, CONTENT_TYPE_JSON);
      res.end(
        JSON.stringify({
          isOk: false,
          message: `error to fetch admin`,
        })
      );
    }
  }

  async create(req, res, next) {
    try {
      console.log(req.body);

      // res.writeHead(200, CONTENT_TYPE_JSON);
      // res.end(
      //   JSON.stringify({
      //     isOk: true,
      //     message: "single admin",
      //     data: admin,
      //   })
      // );
    } catch (error) {
      res.writeHead(400, CONTENT_TYPE_JSON);
      res.end(
        JSON.stringify({
          isOk: false,
          message: `error to fetch admin`,
        })
      );
    }
  }
}
