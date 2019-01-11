var stealTools = require("steal-tools");

stealTools
  .build({}, { minify: false })
  .then(() => {
    console.log("DONE!");
  });