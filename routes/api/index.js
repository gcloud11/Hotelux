import axios from "axios";

const router = require("express").Router();

//Requiring the js page to the right root routes
router.use("/user", require("./user.js"));
router.use("/auth", require("./auth.js"));


const urlMapsAPI = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyBWcTd7dMqmUwcc-XtsuhxM6OzMALZG6oc';
const options = {
  method: 'POST',
  url: 'https://zillowdimashirokovv1.p.rapidapi.com/getDeepSearchResults.htm',
  headers: {
    'content-type': 'application/x-www-form-urlencoded',
    'x-rapidapi-key': 'X1-ZWz16wcpgxsqa3_1fz14',
    'x-rapidapi-host': 'ZillowdimashirokovV1.p.rapidapi.com'
  },
  data: {
    citystatezip: 'undefined',
    'zws-Id': 'X1-ZWz16wcpgxsqa3_1fz14',
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
 