import axios from "axios";

const router = require("express").Router();

//Requiring the js page to the right root routes
router.use("/user", require("./user.js"));
router.use("/auth", require("./auth.js"));



const options = {
  method: 'POST',
  url: 'https://zillowdimashirokovv1.p.rapidapi.com/getDeepSearchResults.htm',
  headers: {
    'content-type': 'application/x-www-form-urlencoded',
    'x-rapidapi-key': '3120aeda24mshcbd73afb8073f50p141138jsnb860a762d82d',
    'x-rapidapi-host': 'ZillowdimashirokovV1.p.rapidapi.com'
  },
  data: {
    citystatezip: 'undefined',
    'zws-Id': '3120aeda24mshcbd73afb8073f50p141138jsnb860a762d82d',
    rentzestimate: 'true,false',
    address: 'undefined'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});

module.exports = router;