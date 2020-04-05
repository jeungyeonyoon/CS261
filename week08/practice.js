

const baseUrl = "http://https://swapi.co/api/people";
const starWars = [];

fetch(baseUrl + "starWars").then(response => {
    return response.text();
}).then(date=> {
    console.log(JSON.parse(data));
});

