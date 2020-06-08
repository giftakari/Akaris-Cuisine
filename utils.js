"use strict";

const fs = require("fs");
const httpStatus = require("http-status-codes");
const contentType = require("./contentType");

module.exports = {
  getFile: (file, res) => {
    fs.readFile(`./${file}`, (error, data) => {
      if (error) {
        res.writeHead(httpStatus.INTERNAL_SERVER_ERROR, contentType.html);
        res.end("There was an error serving content!");
      }
      res.end(data);
    });
  },
};
