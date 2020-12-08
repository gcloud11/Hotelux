import axios from "axios";

const options = {
  method: 'GET',
  url: 'https://hotels4.p.rapidapi.com/locations/search',
  params: {query: 'new york', locale: 'en_US'},
  headers: {
    'x-rapidapi-key': '79c829a3a0msh1799eb45de81554p1ec99cjsn8003015b6ca8',
    'x-rapidapi-host': 'hotels4.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});