const url = require("url");
const querystring = require("querystring");
const path = require("path");
const fs = require("fs");
let jsonData = require("../data.json");
const request = require("request");

function searchHandler(req, res) {
  const urlReq = req.url; // search?name=hala
  const parsedUrl = url.parse(urlReq); //  returns an object of all propreties

  const queryStr = querystring.parse(parsedUrl.query); // {name :hala}

  getData(queryStr.name, queryStr.family, queryStr.id, res);

  //getrandomGif(res);
}

// making a function that returns the relavent data:

function getData(name, familyName, id, res) {
  let sortedArr = [];

  if (name != "" || familyName != "" || id != "") {
    sortedArr = jsonData.filter((obj) => {
      return (
        (name === "" || obj.name.toUpperCase() === name.toUpperCase()) &&
        (familyName === "" ||
          obj.familyname.toUpperCase() === familyName.toUpperCase()) &&
        (id === "" || obj.id === id)
      );
    });
  }

  getrandomGif(
    res,
    sortedArr[0].name,
    sortedArr[0].familyname,
    sortedArr[0].id
  );
}
function getrandomGif(response, name, fName, id) {
  request(
    `https://api.giphy.com/v1/gifs/random?api_key=${process.env.API_KEY}&tag=bear`,
    function (err, res, body) {
      const ddd = JSON.parse(body).data.images.downsized_large.url;
      console.log(ddd);
      response.writeHead(200, { "content-type": "text/html" });
      response.end(
        // `hello you search for ${name} ${queryStr.family} ${queryStr.id}

        `<img src= "${ddd}" > 
       `
      );
    }
  );
}

// https://api.giphy.com/v1/gifs/random?api_key=Jh8SHIFc6grAMRU5yGNo4RqjXroYdWIH&tag=bear

// getData(null, null, null);
// getData("hala", null, null);
// getData(null, "azzam", null);
module.exports = searchHandler;
