const homeHandler = require("../handlers/home");
const resourcesHandler = require("../handlers/resources");
const searchHandler = require("../handlers/search");

function router(req, res) {
  console.log("hhhhhhhhhh");

  const urlReq = req.url;
  //   console.log(req);
  if (urlReq === "/") {
    // home page
    console.log("home");
    homeHandler(req, res);
  } else if (urlReq.includes("/search")) {
    console.log("search");
    //search?name=hala
    console.log(urlReq);
    searchHandler(req, res);
  } else if (urlReq === "/index.js") {
    console.log("resource");
    resourcesHandler(req, res);
  }
  console.log("heeeeer");
  console.log(urlReq);
}

module.exports = router;
