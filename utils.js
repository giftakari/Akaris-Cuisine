const fs = require("fs");
const httpStatus = require("http-status-codes");
const contentType = require("./contentType");

module.exports = {
  getFile: (file, res) => {
    fs.readFile(`./fs${file}`, (error, data) => {
      if (error) {
        res.writeHead(httpStatus.INTERNAL_SERVER_ERROR, contentType.html);
        res.end("there was an error");
      }
      res.end(data);
    });
  },
};
