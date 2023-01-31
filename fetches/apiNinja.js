require('dotenv').config();
const axios = require("axios");

const options = {
  method: 'GET',
  url: 'https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises',
  params: {muscle: 'biceps'},
  headers: {
    'X-RapidAPI-Key': process.env.API_NINJA,
    'X-RapidAPI-Host': 'exercises-by-api-ninjas.p.rapidapi.com'
  }
};


axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});